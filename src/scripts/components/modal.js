function openModal(modal) {
    modal.classList.add('popup_is-animated');
    document.addEventListener('keydown', handleEscClose);
    setTimeout(() => {
        modal.classList.add('popup_is-opened');
    }, 0);
}

function closeModal(modal) {
    modal.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEscClose);
    modal.addEventListener('transitionend', function handleTransitionEnd() {
        modal.classList.remove('popup_is-animated');
        modal.removeEventListener('transitionend', handleTransitionEnd);
    });
}

function handleEscClose(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        if (openedPopup) {
            closeModal(openedPopup);
        }
    }
}

function closeModalOnOverlayClick(modal) {
    modal.addEventListener('mousedown', (evt) => {
        if (evt.target === modal) {
            closeModal(modal);
        }
    });
}

function addCloseButtonHandler(modal) {
    const closeButton = modal.querySelector('.popup__close');
    closeButton.addEventListener('click', () => closeModal(modal));
}

export {openModal, closeModal, closeModalOnOverlayClick, addCloseButtonHandler}