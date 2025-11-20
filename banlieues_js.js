// Toggle mobile menu
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('active');
}

// Toggle language dropdown
function toggleLanguageMenu() {
    const dropdown = document.getElementById('languageDropdown');
    dropdown.classList.toggle('active');
}

// Select language
function selectLanguage(lang, event) {
    event.stopPropagation();
    
    const currentLanguageSpan = document.getElementById('currentLanguage');
    const languageOptions = document.querySelectorAll('.language-option');
    
    // Update selected state
    languageOptions.forEach(option => {
        option.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    
    // Update displayed language
    if (lang === 'fr') {
        currentLanguageSpan.textContent = 'FRANÇAIS';
    } else if (lang === 'en') {
        currentLanguageSpan.textContent = 'ENGLISH';
    }
    
    // Close dropdown
    document.getElementById('languageDropdown').classList.remove('active');
    
    // Here you would typically load the appropriate language content
    // For now, we'll just console log the selection
    console.log('Language selected:', lang);
}

// Close language dropdown when clicking outside
document.addEventListener('click', function(event) {
    const languageMenu = document.querySelector('.language');
    const dropdown = document.getElementById('languageDropdown');
    
    if (!languageMenu.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});