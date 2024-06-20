const submitButton = document.querySelector('.submit');
        const popup = document.querySelector('.popup');
        const popupOverlay = document.querySelector('.popup-overlay');
        const closePopupButton = document.querySelector('.close-popup');
        let popupTimeout;

        function showPopup() {
            popupOverlay.style.display = 'flex';
            popup.style.display = 'flex';
            setTimeout(() => {
                popupOverlay.classList.add('show');
                popup.classList.add('show');
            }, 10); // Delay to allow transition

            popupTimeout = setTimeout(hidePopup, 3000); // Auto-hide after 5 seconds
        }

        function hidePopup() {
            popup.classList.remove('show');
            popup.classList.add('hide');
            popupOverlay.classList.remove('show');
            popupOverlay.classList.add('hide');

            setTimeout(() => {
                popup.style.display = 'none';
                popupOverlay.style.display = 'none';
                popup.classList.remove('hide');
                popupOverlay.classList.remove('hide');
            }, 1000); // Match this time with the CSS transition duration
        }

        submitButton.addEventListener('click', showPopup);

        closePopupButton.addEventListener('click', () => {
            clearTimeout(popupTimeout);
            hidePopup();
        });

        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) {
                clearTimeout(popupTimeout);
                hidePopup();
            }
        });