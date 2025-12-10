export class Carousel extends HTMLElement {
  constructor() {
    super();

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
        overflow: hidden;
        user-select: none;
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

      .nav-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        height: 20px;
        cursor: pointer;
        z-index: 20;
        opacity: 0.85;
        transition: opacity 0.18s ease, transform 0.12s ease;
        user-select: none;
        filter: invert(79%) sepia(60%) saturate(136%) hue-rotate(202deg) brightness(137%) contrast(68%);
        -webkit-user-drag: none;
      }

      .nav-btn:hover {
        opacity: 1;
        transform: translateY(-50%) scale(1.04);
      }

      .nav-btn:active {
        transform: translateY(-50%) scale(0.98);
      }

      .nav-btn.prev {
        left: 12px;
      }

      .nav-btn.next {
        right: 12px;
      }

      .slider-container.fullscreen .nav-btn {
        width: 56px;
        height: 56px;
      }`;

    this.currentIndex = 0;
    this.startX = 0;
    this.currentX = 0;
    this.isDragging = false;

    this.appendChild(this.css);

    this.container = document.createElement("div");
    this.container.className = "slider-container";

    this.imageWrapper = document.createElement("div");
    this.imageWrapper.className = "image-wrapper";

    this.container.appendChild(this.imageWrapper);

    this.prevBtn = document.createElement("img");
    this.prevBtn.src = "https://cdn.jsdelivr.net/gh/gartenkralle/simple-components/components/img/prev.svg";
    this.prevBtn.className = "nav-btn prev";

    this.nextBtn = document.createElement("img");
    this.nextBtn.src = "https://cdn.jsdelivr.net/gh/gartenkralle/simple-components/components/img/next.svg";
    this.nextBtn.className = "nav-btn next";

    this.container.appendChild(this.prevBtn);
    this.container.appendChild(this.nextBtn);

    this.appendChild(this.container);

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

  add(url) {
    const img = document.createElement("img");
    img.src = url;
    img.classList.add("slider-image");

    if (!this.imageWrapper.hasChildNodes()) {
      img.classList.add("active");
    }

    this.imageWrapper.appendChild(img);
  }

  goToSlide(index) {
    this.currentIndex = index;

    this.imageWrapper.childNodes.forEach((img, i) => {
      img.classList.toggle('active', i === index);
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

    const activeImage = this.querySelector('.slider-image.active');

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

    const activeImage = this.querySelector('.slider-image.active');

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
