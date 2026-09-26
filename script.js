const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

document.getElementById('join-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('form-message');
  message.textContent = `Merci ${name} ! Ta candidature est bien envoyée à la Yxz Team.`;
  event.target.reset();
});
