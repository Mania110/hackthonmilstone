var toggle = document.getElementById('toggle-skiils');
var skills = document.getElementById('skiils');
toggle.addEventListener('click', function () {
    skills.style.display =
        skills.style.display === 'none' ? 'block' : 'none';
});
