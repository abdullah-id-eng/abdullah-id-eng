const btn = document.getElementById('hamburgerBtn');
const nav = document.getElementById('navLinks');
const overlay = document.getElementById('mobileOverlay');

function toggleMenu(open) {
    if (btn && nav && overlay) {
        btn.classList.toggle('open', open);
        nav.classList.toggle('open', open);
        overlay.classList.toggle('show', open);
        btn.setAttribute('aria-expanded', open);
        document.body.style.overflow = open ? 'hidden' : '';
    }
}

if (btn && overlay && nav) {
    btn.addEventListener('click', () => toggleMenu(!nav.classList.contains('open')));
    overlay.addEventListener('click', () => toggleMenu(false));

    // Close menu on link click
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });
}

// Floating WhatsApp Widget
document.addEventListener("DOMContentLoaded", () => {
    const waContainer = document.createElement('div');
    waContainer.style.position = 'fixed';
    waContainer.style.bottom = '15px'; // Exactly in the corner
    waContainer.style.right = '15px'; // Exactly in the corner
    waContainer.style.zIndex = '9999';
    waContainer.style.display = 'flex';
    waContainer.style.flexDirection = 'column';
    waContainer.style.alignItems = 'flex-start'; // In RTL, flex-start aligns to the right!

    const waMsg = document.createElement('div');
    waMsg.innerText = 'اهلا وسهلا بك كيف يمكنني مساعدتك';
    // Match the site's identity: Blue glass/gradient
    waMsg.style.background = 'var(--primary-color, #2196F3)';
    waMsg.style.color = '#ffffff';
    waMsg.style.padding = '10px 20px';
    waMsg.style.borderRadius = '20px 20px 4px 20px'; 
    waMsg.style.fontSize = '0.95rem';
    waMsg.style.fontWeight = '600';
    waMsg.style.marginBottom = '12px';
    waMsg.style.boxShadow = '0 4px 15px rgba(33, 150, 243, 0.4)';
    waMsg.style.opacity = '0';
    waMsg.style.transform = 'translateY(10px) scale(0.9)';
    waMsg.style.transformOrigin = 'bottom right';
    waMsg.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    waMsg.style.pointerEvents = 'none';
    waMsg.style.textAlign = 'center';
    waMsg.style.whiteSpace = 'nowrap';

    const waBtn = document.createElement('a');
    waBtn.href = 'https://wa.me/966540413878';
    waBtn.target = '_blank';
    waBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
    waBtn.style.width = '60px';
    waBtn.style.height = '60px';
    // Match the site's identity: Blue gradient button
    waBtn.style.background = 'linear-gradient(135deg, var(--primary-color, #2196F3), var(--secondary-color, #1976D2))';
    waBtn.style.color = '#ffffff';
    waBtn.style.borderRadius = '50%';
    waBtn.style.display = 'flex';
    waBtn.style.justifyContent = 'center';
    waBtn.style.alignItems = 'center';
    waBtn.style.fontSize = '2.2rem';
    waBtn.style.boxShadow = '0 6px 20px rgba(33, 150, 243, 0.5)';
    waBtn.style.textDecoration = 'none';
    waBtn.style.transition = 'all 0.3s ease';

    waBtn.addEventListener('mouseenter', () => {
        waBtn.style.transform = 'scale(1.1) translateY(-5px)';
        waBtn.style.boxShadow = '0 10px 25px rgba(33, 150, 243, 0.6)';
    });
    
    waBtn.addEventListener('mouseleave', () => {
        waBtn.style.transform = 'scale(1) translateY(0)';
        waBtn.style.boxShadow = '0 6px 20px rgba(33, 150, 243, 0.5)';
    });

    waContainer.appendChild(waMsg);
    waContainer.appendChild(waBtn);
    document.body.appendChild(waContainer);

    // Function to show and hide the message
    function triggerMessage() {
        waMsg.style.opacity = '1';
        waMsg.style.transform = 'translateY(0) scale(1)';
        
        setTimeout(() => {
            waMsg.style.opacity = '0';
            waMsg.style.transform = 'translateY(10px) scale(0.9)';
        }, 2000); // Stay visible for exactly 2 seconds
    }

    // Initial popup
    setTimeout(triggerMessage, 1000);
    
    // Loop the popup continuously (every 6 seconds: 2s shown + 4s hidden)
    setInterval(triggerMessage, 6000);
});
