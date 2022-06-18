import React from 'react';

function ImagePopup() {
  return (
    <section className="popup popup_type_image">
      <figure className="popup__card">
        <button type="button" aria-label="закрыть" className="popup__button-close"></button>
        <img src="src/components/App#" alt="" className="popup__image" />
        <figcaption className="popup__image-title"></figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;
