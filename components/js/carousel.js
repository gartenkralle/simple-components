 export class Carousel extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.currentIndex = 0;

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
       
        this.startX = 0;
        this.currentX = 0;
        this.isDragging = false;
        
        this.shadowRoot.appendChild(this.css);

        this.render();
        this.setupEventListeners();
      }

      render() {
          this.container = document.createElement("div");
          this.container.className = "slider-container";

          this.imageWrapper = document.createElement("div");
          this.imageWrapper.className = "image-wrapper";

          this.container.appendChild(this.imageWrapper);

          const controls = document.createElement("div");
          controls.className = "controls";

          this.prevBtn = document.createElement("button");
          this.prevBtn.className = "btn prev-btn";
          this.prevBtn.title = "Previous";

          this.nextBtn = document.createElement("button");
          this.nextBtn.className = "btn next-btn";
          this.nextBtn.title = "Next";

          controls.appendChild(this.prevBtn);
          controls.appendChild(this.nextBtn);
          this.container.appendChild(controls);

          this.indicators = document.createElement("div");
          this.indicators.className = "indicators";

          this.container.appendChild(this.indicators);
          this.shadowRoot.appendChild(this.container);
      }

      add(url){
        const img = document.createElement("img");
        img.src = url;
        img.classList.add("slider-image");

        if(!this.imageWrapper.hasChildNodes()){
          img.classList.add("active");
        }

        const count = this.indicators.children.length;
        const indicator = document.createElement("button");
        indicator.className = "indicator" + (count === 0 ? " active" : "");
        indicator.dataset.index = count;

        indicator.addEventListener('click', (e) => {
          const index = parseInt(e.target.dataset.index);
          this.goToSlide(index);
        });

        this.indicators.appendChild(indicator);
        this.imageWrapper.appendChild(img);
      }

      setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        //fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());

        this.imageWrapper.addEventListener('mousedown', (e) => this.handleDragStart(e));
        this.imageWrapper.addEventListener('touchstart', (e) => this.handleDragStart(e), { passive: true });
        
        document.addEventListener('mousemove', (e) => this.handleDragMove(e));
        document.addEventListener('touchmove', (e) => this.handleDragMove(e), { passive: true });
        
        document.addEventListener('mouseup', (e) => this.handleDragEnd(e));
        document.addEventListener('touchend', (e) => this.handleDragEnd(e));

        document.addEventListener('keydown', (e) => {
          if (!this.container.classList.contains('fullscreen')) return;
          
          if (e.key === 'ArrowLeft') this.prev();
          if (e.key === 'ArrowRight') this.next();
          if (e.key === 'Escape') this.exitFullscreen();
        });
      }

      goToSlide(index) {
        this.currentIndex = index;

        this.imageWrapper.childNodes.forEach((img, i) => {
          img.classList.toggle('active', i === index);
        });

        this.indicators.childNodes.forEach((ind, i) => {
          ind.classList.toggle('active', i === index);
        });
      }

      next() {
        if (this.currentIndex < this.imageWrapper.children.length - 1) {
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
        if (!this.container.classList.contains('fullscreen')) {
          this.container.classList.add('fullscreen');
        } 
        else {
          this.exitFullscreen();
        }
      }

      exitFullscreen() {
        this.container.classList.remove('fullscreen');
      }

      handleDragStart(e) {
        this.isDragging = true;
        this.startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        this.currentX = this.startX;
        
        this.imageWrapper.classList.add('dragging');
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
        this.imageWrapper.classList.remove('dragging');
        
        const diff = this.currentX - this.startX;
        const threshold = 50;
        
        const activeImage = this.shadowRoot.querySelector('.slider-image.active');

        if (activeImage) {
          activeImage.style.transform = '';
        }
        
        if (Math.abs(diff) > threshold) {
          if (diff > 0) {
            this.prev();
          }
          else {
            this.next();
          }
        }
      }
    }

    customElements.define('sc-carousel', Carousel);