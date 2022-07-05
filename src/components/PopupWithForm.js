import React from 'react';

function PopupWithForm({ title, children, button_title, isOpen, onClose, name, onSubmit }) {

  const classNamePopup = `popup popup_type_${name} ${isOpen && 'popup_is-opened'}`;
  const classNameForm = `popup__form ${(name === 'avatar') && `popup__form_${name}`}`;

  return (
    <section className={classNamePopup}>
      <form action="src/components/App#" className={classNameForm} onSubmit={onSubmit}>
        <button type="button" aria-label="закрыть" className="popup__button-close" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button type="submit" aria-label={button_title} className="popup__button-submit">{button_title}</button>
      </form>
    </section>
  );
}

export default PopupWithForm;
