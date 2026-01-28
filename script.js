document.addEventListener('DOMContentLoaded', () => {
    // Typewriter effect for Hero
    const text = "Breaking systems to secure them.";
    let i = 0;
    const speed = 100;

    function typeWriter() {
        if (i < text.length) {
            document.querySelector(".typewriter").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    typeWriter();
});
