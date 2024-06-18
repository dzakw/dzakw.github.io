document.addEventListener('DOMContentLoaded', function() {
    const faqContainers = document.querySelectorAll('.faq-container');

    faqContainers.forEach(faq => {
        faq.addEventListener('click', function() {
            // Close any currently open FAQ
            const openFaq = document.querySelector('.faq-container.active');
            if (openFaq && openFaq !== faq) {
                openFaq.classList.remove('active');
                openFaq.querySelector('p').style.display = 'none';
                openFaq.querySelector('.faq-list img').src = '../../media/order/icon/plus.png';
            }

            // Toggle the clicked FAQ
            faq.classList.toggle('active');
            const p = faq.querySelector('p');
            const img = faq.querySelector('.faq-list img');
            if (faq.classList.contains('active')) {
                p.style.display = 'block';
                img.src = '../../media/order/icon/x.png';
            } else {
                p.style.display = 'none';
                img.src = '../../media/order/icon/plus.png';
            }
        });
    });
});