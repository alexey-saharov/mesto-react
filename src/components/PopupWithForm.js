import React from 'react';

function PopupWithForm({ title, children, button_title, isOpen, onClose, name }) {

  const classNamePopup = (isOpen)
    ? `popup popup_type_${name} popup_is-opened`
    : `popup popup_type_${name}`;

  const classNameForm = ((name === 'avatar') || (name === 'confirmation'))
    ? `popup__form popup__form_${name}`
    : 'popup__form';

  return (
    <section className={classNamePopup}>
      <form action="src/components/App#" className={classNameForm}>
        <button type="button" aria-label="закрыть" className="popup__button-close" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button type="submit" aria-label={button_title} className="popup__button-submit">{button_title}</button>
      </form>
    </section>
  );
}

export default PopupWithForm;
