import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {api} from '../utils/Api.js';

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  React.useEffect(() => {
    Promise.resolve(api.getUser())
      .then((getUserRes) => {
        setCurrentUser(getUserRes._id);
    })
  }, []);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="root">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        title="Редактировать"
        button_title="Сохранить"
        isOpen={isEditProfilePopupOpen}
        name="profile"
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        button_title="Создать"
        isOpen={isAddPlacePopupOpen}
        name="card-add"
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        button_title="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        name="avatar"
        onClose={closeAllPopups}
      >
        <input
          type="url"
          id="link_avatar"
          name="link_avatar"
          className="popup__input popup__input_avatarlink"
          required
          placeholder="Ссылка на картинку"
        />
        <span id="link_avatar-error" className="popup__error popup__error_margin"></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
