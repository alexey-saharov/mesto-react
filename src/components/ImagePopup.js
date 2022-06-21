import React from 'react';

function ImagePopup({ card, onClose }) {

  const classNamePopup = (JSON.stringify(card) !== '{}')
    ? `popup popup_type_image popup_is-opened`
    : `popup popup_type_image`;

  return (
    <section className={classNamePopup}>
      <figure className="popup__card">
        <button type="button" aria-label="закрыть" className="popup__button-close" onClick={onClose}></button>
        <img src={card.link} alt={card.name} className="popup__image" />
        <figcaption className="popup__image-title">{card.name}</figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;
