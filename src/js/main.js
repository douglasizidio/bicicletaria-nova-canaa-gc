// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if(targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Simple validation
        if(name && email) {
            // In a real application, you would send this data to a server
            alert(`Obrigado, ${name}! Sua mensagem foi enviada. Entraremos em contato em breve.`);
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
}

// Phone data - separated WhatsApp and Phone numbers
const phoneData = {
    whatsapp: [
        {
            number: "(38) 99993-6825",
            label: "Atendimento Geral",
            url: "https://wa.me/5538999936825"
        },
        {
            number: "(38) 3676-3743",
            label: "Atendimento Geral",
            url: "https://wa.me/553836763743"
        },
        {
            number: "(38) 98826-9686",
            label: "Proprietário",
            url: "https://wa.me/5538988269686"
        }
    ],
    phone: [
        {
            number: "(38) 99993-6825",
            label: "Atendimento Geral",
            url: "tel:5538999936825"
        },
        {
            number: "(38) 3676-3743",
            label: "Atendimento Geral",
            url: "tel:553836763743"
        },
        {
            number: "(38) 98826-9686",
            label: "Proprietário",
            url: "tel:5538988269686"
        }
    ]
};

// Phone Selection Modal Functions
let currentMode = '';

function openPhoneModal(mode) {
    currentMode = mode;
    const modal = document.getElementById('phoneModal');
    const title = document.getElementById('modalTitle');
    const description = document.getElementById('modalDescription');
    const optionsContainer = document.getElementById('phoneOptions');

    // Clear previous options
    optionsContainer.innerHTML = '';

    if (mode === 'whatsapp') {
        title.textContent = 'Escolha um WhatsApp';
        description.textContent = 'Selecione o número de WhatsApp que deseja utilizar:';

        phoneData.whatsapp.forEach(phone => {
            const option = document.createElement('div');
            option.className = 'phone-option';
            option.innerHTML = `
                <i class="fab fa-whatsapp"></i>
                <div>
                    <div class="phone-number">${phone.number}</div>
                    <div class="phone-label">${phone.label} (WhatsApp)</div>
                </div>
            `;
            option.onclick = () => selectPhone(phone.url);
            optionsContainer.appendChild(option);
        });
    } else {
        title.textContent = 'Escolha um Telefone';
        description.textContent = 'Selecione o número para ligação:';

        phoneData.phone.forEach(phone => {
            const option = document.createElement('div');
            option.className = 'phone-option';
            option.innerHTML = `
                <i class="fas fa-phone"></i>
                <div>
                    <div class="phone-number">${phone.number}</div>
                    <div class="phone-label">${phone.label} (Ligação)</div>
                </div>
            `;
            option.onclick = () => selectPhone(phone.url);
            optionsContainer.appendChild(option);
        });
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = 'auto';
}

function selectPhone(url) {
    window.open(url, '_blank');
    closeModal('phoneModal');
}

// Close modal when clicking outside
document.getElementById('phoneModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal('phoneModal');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal('phoneModal');
    }
});