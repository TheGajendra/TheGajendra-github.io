 // Mobile Menu
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Close menu when clicking links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Email Functionality
        function openEmail() {
            const email = 'gs9668906@gmail.com';
            const subject = 'Regarding Portfolio - Opportunity';
            const body = 'Hello Gajendra,\n\nI came across your portfolio and would like to connect with you regarding...';
            
            window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }

        // Setup email links
        document.getElementById('emailContact').addEventListener('click', openEmail);
        document.getElementById('footerEmail').addEventListener('click', function(e) {
            e.preventDefault();
            openEmail();
        });

        // Projects Data
        const projects = [
            {
                id: 1,
                title: "AI Chatbot with Ollama",
                description: "A locally hosted AI Chatbot powered by Ollama that performs intelligent text-based conversations without external APIs.",
                type: "AI Project",
                category: "ai",
                github: "https://github.com/TheGajendra/ChatBot",
                demo: "#",
                tags: ["Ollama", "Python", "Chatbot", "AI"]
            },
            {
                id: 2,
                title: "GymSphere Management System",
                description: "Advanced web platform using Firebase for gym admins to manage members, fees, notifications, and billing with real-time features.",
                type: "Full-Stack",
                category: "web",
                github: "https://github.com/TheGajendra/GYM-Management-Website",
                demo: "#",
                tags: ["Firebase", "JavaScript", "Real-time"]
            },
            {
                id: 3,
                title: "School ERP System",
                description: "Complete ERP solution for schools with attendance, fee management, and student records management.",
                type: "Full-Stack",
                category: "web",
                github: "https://github.com/TheGajendra/School-ERP-System.git",
                demo: "#",
                tags: ["PHP", "MySQL", "Admin Panel"]
            },
            {
                id: 4,
                title: "Bus Ticket Booking System",
                description: "Online portal for booking and managing bus tickets with seat selection and payment modules.",
                type: "Full-Stack",
                category: "web",
                github: "https://github.com/TheGajendra/Bus-Ticket-Booking-System.git",
                demo: "#",
                tags: ["PHP", "MySQL", "Booking System"]
            },
            {
                id: 5,
                title: "Android Applications",
                description: "Multiple Android apps built with Kotlin during certification training, showcasing mobile development skills.",
                type: "Mobile",
                category: "android",
                github: "#",
                demo: "#",
                tags: ["Kotlin", "Android", "Mobile"]
            },
            {
                id: 6,
                title: "Art Gallery",
                description: "A simple art gallery using HTML, CSS and JavaScript. ",
                type: "Full-Stack",
                category: "web",
                github: "https://github.com/TheGajendra/ArtGallery.git",
                demo: "#",
                tags: ["PHP", "MySQL", "Booking System"]
            },
            {
                id: 7,
                title: "E-commerce Websites",
                description: "Multiple e-commerce websites with product filtering, cart functionality, and responsive design.",
                type: "Frontend",
                category: "Full-Stack",
                github: "https://github.com/TheGajendra/Earbuds-Website",
                demo: "#",
                tags: ["HTML/CSS", "JavaScript", "E-commerce"]
            },
            {
                id: 7,
                title: "Stone Heritage Art Gallery Website",
                description: "A heritage-style art showcase website designed for a company dealing in stone and marble art. Includes animated image galleries, product descriptions, and multi-page navigation with elegant CSS styling.",
                type: "Frontend",
                category: "Full-Stack",
                github: "timelesscuts.in",
                demo: "timelesscuts.in",
                tags: ["HTML/CSS", "JavaScript", "E-commerce"]
            }
        ];

        // Render Projects
        const projectsGrid = document.getElementById('projectsGrid');
        const filterButtons = document.querySelectorAll('.filter-btn');

        function renderProjects(filter = 'all') {
            projectsGrid.innerHTML = '';
            
            const filteredProjects = filter === 'all' 
                ? projects 
                : projects.filter(project => project.category === filter);
            
            filteredProjects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card fade-in';
                projectCard.innerHTML = `
                    <div class="project-header">
                        <span class="project-type">${project.type}</span>
                        <div class="project-links">
                            ${project.github ? `<a href="${project.github}" class="project-link" target="_blank"><i class="fab fa-github"></i></a>` : ''}
                            ${project.demo !== '#' ? `<a href="${project.demo}" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i></a>` : ''}
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                `;
                projectsGrid.appendChild(projectCard);
            });
        }

        // Filter Projects
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                renderProjects(button.dataset.filter);
            });
        });

        // Initial render
        renderProjects();

        // Form Submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name') || 'User';
            
            // Show success message
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate sending
            setTimeout(() => {
                // Open email client
                const email = 'gs9668906@gmail.com';
                const subject = formData.get('subject') || 'Message from Portfolio';
                const body = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\nMessage:\n${formData.get('message')}`;
                
                window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                
                // Reset form
                setTimeout(() => {
                    this.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    
                    // Show confirmation
                    alert(`Thank you ${name}! Your message has been prepared in your email client. Please send it to contact me.`);
                }, 1000);
            }, 1500);
        });

        // Navigation Active State
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href').substring(1) === current) {
                    item.classList.add('active');
                }
            });
        });

        // Add profile picture functionality
        document.querySelector('.profile-placeholder').addEventListener('click', function() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = function(e) {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = function(event) {
                    const img = document.createElement('img');
                    img.src = event.target.result;
                    img.className = 'profile-img';
                    img.alt = 'Gajendra Singh';
                    
                    const placeholder = document.querySelector('.profile-placeholder');
                    placeholder.parentNode.replaceChild(img, placeholder);
                };
                reader.readAsDataURL(file);
            };
            input.click();
        });

        // Fade-in animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section > *').forEach(el => {
            if (!el.classList.contains('fade-in')) {
                observer.observe(el);
            }
        });