import './style.scss';

let curX: number = 0;
let curY: number = 0;
let tgX: number = 0;
let tgY: number = 0;

document.addEventListener('DOMContentLoaded', () => {
  const interBubble: HTMLDivElement = document.querySelector<HTMLDivElement>('.interactive')!;

  function move(): void {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(() => {
      move();
    });
  }

  window.addEventListener('mousemove', (event: MouseEvent) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
});
