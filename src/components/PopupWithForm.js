import React from 'react';

function PopupWithForm() {
  return (
    <>
      <section className="popup popup_type_profile">
          <form action="src/components/App#" className="popup__form">
            <button type="button" aria-label="закрыть" className="popup__button-close"></button>
            <h2 className="popup__title">Редактировать</h2>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="popup__input popup__input_fullname"
              minLength="2"
              maxLength="40"
              required
              placeholder="Имя"
            />
            <span id="fullname-error" className="popup__error"></span>
            <input
              type="text"
              id="job"
              name="job"
              className="popup__input popup__input_job"
              minLength="2"
              maxLength="200"
              required
              placeholder="О себе"
            />
            <span id="job-error" className="popup__error popup__error_margin"></span>
            <button type="submit" aria-label="сохранить" className="popup__button-submit">Сохранить</button>
          </form>
        </section>

      <section className="popup popup_type_card-add">
        <form action="src/components/App#" className="popup__form">
          <button type="button" aria-label="закрыть" className="popup__button-close"></button>
          <h2 className="popup__title">Новое место</h2>
          <input
            type="text"
            id="placename"
            name="name"
            className="popup__input popup__input_placename"
            minLength="2"
            maxLength="30"
            required
            placeholder="Название"
          />
          <span id="placename-error" className="popup__error"></span>
          <input
            type="url"
            id="link"
            name="link"
            className="popup__input popup__input_placelink"
            required
            placeholder="Ссылка на картинку"
          />
          <span id="link-error" className="popup__error popup__error_margin"></span>
          <button type="submit" aria-label="создать" className="popup__button-submit">Создать</button>
        </form>
      </section>

      <section className="popup popup_type_confirmation">
        <form action="src/components/App#" className="popup__form popup__form_confirmation">
          <button type="button" aria-label="закрыть" className="popup__button-close"></button>
          <h2 className="popup__title popup__title_confirmation">Вы уверены?</h2>
          <button type="submit" aria-label="Да" className="popup__button-submit">Да</button>
        </form>
      </section>

      <section className="popup popup_type_avatar">
        <form action="src/components/App#" className="popup__form popup__form_avatar">
          <button type="button" aria-label="закрыть" className="popup__button-close"></button>
          <h2 className="popup__title popup__title_avatar">Обновить аватар</h2>
          <input
            type="url"
            id="link_avatar"
            name="link_avatar"
            className="popup__input popup__input_avatarlink"
            required
            placeholder="Ссылка на картинку"
          />
          <span id="link_avatar-error" className="popup__error popup__error_margin"></span>
          <button type="submit" aria-label="сохранить" className="popup__button-submit">Сохранить</button>
        </form>
      </section>
    </>
  );
}

export default PopupWithForm;
