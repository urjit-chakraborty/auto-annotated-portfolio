export class CursorTrail {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private points: { x: number; y: number; age: number }[] = [];
  private mouse = { x: 0, y: 0 };
  private lastMouse = { x: 0, y: 0 };
  private heroSection: HTMLElement;
  private isOverHero = false;
  private scrollY = 0;

  constructor() {
    this.canvas = document.getElementById('trail-canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.heroSection = document.getElementById('hero')!;
    this.init();
  }

  private init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY;
      this.resize();
    });
    this.animate();
  }

  private resize() {
    const rect = this.heroSection.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
    this.canvas.style.transform = `translateY(${this.scrollY}px)`;
  }

  private handleMouseMove(e: MouseEvent) {
    const heroRect = this.heroSection.getBoundingClientRect();
    this.isOverHero = (
      e.clientY >= heroRect.top &&
      e.clientY <= heroRect.bottom &&
      e.clientX >= heroRect.left &&
      e.clientX <= heroRect.right
    );

    if (this.isOverHero) {
      // Calculate position relative to the hero section's current position
      this.mouse.x = e.clientX - heroRect.left;
      this.mouse.y = e.clientY - heroRect.top;
    }
  }

  private animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Only add new points if mouse is over hero section
    if (this.isOverHero && (Math.abs(this.mouse.x - this.lastMouse.x) > 1 || Math.abs(this.mouse.y - this.lastMouse.y) > 1)) {
      this.points.push({
        x: this.mouse.x,
        y: this.mouse.y,
        age: 0
      });
      this.lastMouse = { ...this.mouse };
    }

    // Update and draw points
    this.ctx.beginPath();
    this.ctx.lineWidth = 4;
    this.points = this.points.filter((point, i) => {
      point.age++;
      if (point.age > 50) return false;

      if (i === 0) {
        this.ctx.moveTo(point.x, point.y);
      } else {
        this.ctx.lineTo(point.x, point.y);
      }

      return true;
    });

    const gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, 0);
    gradient.addColorStop(0, `rgba(0, 0, 0, 0.1)`);
    gradient.addColorStop(1, `rgba(0, 0, 0, 0.4)`);
    this.ctx.strokeStyle = gradient;
    this.ctx.stroke();

    requestAnimationFrame(() => this.animate());
  }
}