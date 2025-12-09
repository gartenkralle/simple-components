 export class Carousel extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.currentIndex = 0;
        this.images = [];
      }

      connectedCallback() {
        this.css = document.createElement("style");
        this.css.textContent = `

        :host {
          display: block;
          position: relative;
        }

        .slider-container {
          position: relative;
          width: 100%;
          background: #000;
          border-radius: 8px;
          overflow: hidden;
        }

        .slider-container.fullscreen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 9999;
          border-radius: 0;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          cursor: grab;
          user-select: none;
        }

        .image-wrapper.dragging {
          cursor: grabbing;
        }

        .fullscreen .image-wrapper {
          aspect-ratio: unset;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slider-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: none;
          transition: transform 0.1s ease-out;
          pointer-events: none;
        }

        .fullscreen .slider-image {
          object-fit: contain;
        }

        .slider-image.active {
          display: block;
        }

        .controls {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          padding: 0 10px;
          pointer-events: none;
        }

        .btn {
          pointer-events: auto;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          font-size: 20px;
        }

        .btn:hover {
          background: rgba(255, 255, 255, 1);
        }

        .indicators {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }

        .indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: background 0.2s;
          border: none;
          padding: 0;
        }

        .indicator.active {
          background: rgba(255, 255, 255, 1);
        }

        .indicator:hover {
          background: rgba(255, 255, 255, 0.8);
        }`;

        this.images = Array.from(this.querySelectorAll('img')).map(img => ({
          src: img.src,
          alt: img.alt || ''
        }));
        
        this.startX = 0;
        this.currentX = 0;
        this.isDragging = false;
        
        this.shadowRoot.appendChild(this.css);

        this.render();
        this.setupEventListeners();
      }

      render() {
          const container = document.createElement("div");
          container.className = "slider-container";

          const imageWrapper = document.createElement("div");
          imageWrapper.className = "image-wrapper";

          this.images.forEach((img, i) => {
            const imgEl = document.createElement("img");
            imgEl.src = img.src;
            imgEl.alt = img.alt || "";
            imgEl.className = "slider-image" + (i === 0 ? " active" : "");
            imageWrapper.appendChild(imgEl);
          });

          container.appendChild(imageWrapper);

          const controls = document.createElement("div");
          controls.className = "controls";

          const prevBtn = document.createElement("button");
          prevBtn.className = "btn prev-btn";
          prevBtn.title = "Previous";

          const nextBtn = document.createElement("button");
          nextBtn.className = "btn next-btn";
          nextBtn.title = "Next";

          controls.appendChild(prevBtn);
          controls.appendChild(nextBtn);
          container.appendChild(controls);

          const indicators = document.createElement("div");
          indicators.className = "indicators";

          this.images.forEach((_, i) => {
            const ind = document.createElement("button");
            ind.className = "indicator" + (i === 0 ? " active" : "");
            ind.dataset.index = i;
            indicators.appendChild(ind);
          });

          container.appendChild(indicators);
          this.shadowRoot.appendChild(container);
      }

      add(url){
        const img = document.createElement("img");
        img.src = url;

        this.imageWrapper.appendChild(img);
      }

      setupEventListeners() {
        const container = this.shadowRoot.querySelector('.slider-container');
        const imageWrapper = this.shadowRoot.querySelector('.image-wrapper');
        const prevBtn = this.shadowRoot.querySelector('.prev-btn');
        const nextBtn = this.shadowRoot.querySelector('.next-btn');
        const indicators = this.shadowRoot.querySelectorAll('.indicator');

        prevBtn.addEventListener('click', () => this.prev());
        nextBtn.addEventListener('click', () => this.next());
        //fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());

        indicators.forEach(indicator => {
          indicator.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            this.goToSlide(index);
          });
        });

        imageWrapper.addEventListener('mousedown', (e) => this.handleDragStart(e));
        imageWrapper.addEventListener('touchstart', (e) => this.handleDragStart(e), { passive: true });
        
        document.addEventListener('mousemove', (e) => this.handleDragMove(e));
        document.addEventListener('touchmove', (e) => this.handleDragMove(e), { passive: true });
        
        document.addEventListener('mouseup', (e) => this.handleDragEnd(e));
        document.addEventListener('touchend', (e) => this.handleDragEnd(e));

        document.addEventListener('keydown', (e) => {
          if (!container.classList.contains('fullscreen')) return;
          
          if (e.key === 'ArrowLeft') this.prev();
          if (e.key === 'ArrowRight') this.next();
          if (e.key === 'Escape') this.exitFullscreen();
        });
      }

      goToSlide(index) {
        this.currentIndex = index;
        const images = this.shadowRoot.querySelectorAll('.slider-image');
        const indicators = this.shadowRoot.querySelectorAll('.indicator');

        images.forEach((img, i) => {
          img.classList.toggle('active', i === index);
        });

        indicators.forEach((ind, i) => {
          ind.classList.toggle('active', i === index);
        });
      }

      next() {
        if (this.currentIndex < this.images.length - 1) {
          this.currentIndex++;
          this.goToSlide(this.currentIndex);
        }
      }

      prev() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          this.goToSlide(this.currentIndex);
        }
      }

      toggleFullscreen() {
        const container = this.shadowRoot.querySelector('.slider-container');
        
        if (!container.classList.contains('fullscreen')) {
          container.classList.add('fullscreen');
        } else {
          this.exitFullscreen();
        }
      }

      exitFullscreen() {
        const container = this.shadowRoot.querySelector('.slider-container');
        container.classList.remove('fullscreen');
      }

      handleDragStart(e) {
        this.isDragging = true;
        this.startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        this.currentX = this.startX;
        
        const imageWrapper = this.shadowRoot.querySelector('.image-wrapper');
        imageWrapper.classList.add('dragging');
      }

      handleDragMove(e) {
        if (!this.isDragging) return;
        
        this.currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
        const diff = this.currentX - this.startX;
        
        const activeImage = this.shadowRoot.querySelector('.slider-image.active');
        if (activeImage) {
          activeImage.style.transform = `translateX(${diff}px)`;
        }
      }

      handleDragEnd(e) {
        if (!this.isDragging) return;
        
        this.isDragging = false;
        const imageWrapper = this.shadowRoot.querySelector('.image-wrapper');
        imageWrapper.classList.remove('dragging');
        
        const diff = this.currentX - this.startX;
        const threshold = 50;
        
        const activeImage = this.shadowRoot.querySelector('.slider-image.active');
        if (activeImage) {
          activeImage.style.transform = '';
        }
        
        if (Math.abs(diff) > threshold) {
          if (diff > 0) {
            this.prev();
          } else {
            this.next();
          }
        }
      }
    }

    customElements.define('sc-carousel', Carousel);