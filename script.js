document.querySelectorAll('.project-card').forEach((card, i) => {
  card.style.animation = `floatIn 1s ${(i+1)*0.15}s both`;
});

const style = document.createElement('style');
style.innerHTML = `
@keyframes floatIn {
  0% { opacity: 0; transform: translateY(40px) scale(0.97);}
  100% { opacity: 1; transform: translateY(0) scale(1);}
}
`;
document.head.appendChild(style);