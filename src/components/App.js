import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});


  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <>
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
          title="Вы уверены?"
          button_title="Да"
          isOpen={false}
          name="confirmation"
          onClose={closeAllPopups}
        >
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
    </>
  );
}

export default App;
