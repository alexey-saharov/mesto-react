import React from 'react';
import {PopupWithForm} from './PopupWithForm';

import {
  PARAMS,
  buttonUserAvatar,
  buttonUserProfile,
  buttonAddCard,

  // popupUserAvatarForm,
  // popupUserProfileForm,
  // popupAddCardForm,
} from '../utils/constants.js';



function Main() {

  const handleEditAvatarClick = () => {
    const popupUserAvatarForm = document.querySelector(PARAMS.popupUpdateAvatarSelector);
    popupUserAvatarForm.classList.add(PARAMS.popupOpenedClass);
  }

  const handleEditProfileClick = () => {
    const popupUserProfileForm = document.querySelector(PARAMS.popupUserSelector);
    popupUserProfileForm.classList.add(PARAMS.popupOpenedClass);
  }

  const handleAddPlaceClick = () => {
    const popupAddCardForm = document.querySelector(PARAMS.popupAddCardSelector);
    popupAddCardForm.classList.add(PARAMS.popupOpenedClass);
  }

  return (
    <main className="content">
      <section className="profile root__section profile_margin">
        <div className="profile__card">
          <div className="profile__avatar">
            <img alt="фото профиля" className="profile__photo" />
            <button aria-label="обновить аватар" className="profile__edit-avatar" onClick={handleEditAvatarClick}>
            </button>
          </div>
          <div className="profile__text">
            <div className="profile__name">
              <h1 className="profile__name-text">Жак-Ив Кусто</h1>
              <button aria-label="редактировать" className="profile__edit-button" onClick={handleEditProfileClick}>
              </button>
            </div>
            <p className="profile__job-text">Исследователь океана</p>
          </div>
        </div>
        <button aria-label="добавить" className="profile__add-button" onClick={handleAddPlaceClick}></button>
      </section>

      <section className="cards root__section cards_margin">
        <ul className="cards__items">
          <template id="card__template">
            <li className="cards__item">
              <img src="src/components/App#" alt="" className="cards__img" />
              <div className="cards__description">
                <h3 className="cards__title"></h3>
                <div className="cards__likes">
                  <button aria-label="добавить в избранное" className="cards__heart"></button>
                  <p className="cards__count-likes"></p>
                </div>
              </div>
              <button aria-label="удалить" className="cards__trash"></button>
            </li>
          </template>
        </ul>
      </section>
    </main>
  );
}

export default Main;
