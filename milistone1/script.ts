const toggleButton= document.getElementById('toggle-skiils') as HTMLButtonElement;
const skill = document.getElementById('skiils') as HTMLDivElement;

toggleButton.addEventListener('click', () => {
  skill.style.display = 
    skill.style.display === 'none' ? 'block' : 'none';
});