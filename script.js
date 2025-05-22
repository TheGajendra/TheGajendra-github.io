   // Scroll Animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');

                    // Animate skill bars
                    if (entry.target.classList.contains('skill-bar')) {
                        const level = entry.target.querySelector('.level span');
                        level.style.width = level.getAttribute('data-level');
                    }
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

       const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-menu');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });