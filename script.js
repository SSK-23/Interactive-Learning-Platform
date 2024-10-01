const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
});

const textSizeToggle = document.getElementById('text-size-toggle');
textSizeToggle.addEventListener('change', () => {
    document.body.classList.toggle('larger-text', textSizeToggle.checked);
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const filterSelect = document.getElementById('category');
const courseCards = document.querySelectorAll('.course-card');

filterSelect.addEventListener('change', () => {
    const selectedValue = filterSelect.value;
    courseCards.forEach(card => {
        if (selectedValue === 'all' || card.classList.contains(selectedValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
