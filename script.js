const container = document.getElementById('spiral');
const links = container.children;
const numImages = links.length;
const radius = 150; // Smaller radius to keep images in view
const zStep = 80;   // Forward Z spacing
const angleStep = 45; // 360 / 8 images

for (let i = 0; i < numImages; i++) {
  const angle = i * angleStep * Math.PI / 180; // radians
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  const z = i * zStep;

  // Center the spiral in the container
  links[i].style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${i * angleStep}deg)`;
}
