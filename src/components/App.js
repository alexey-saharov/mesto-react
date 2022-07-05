import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import {api} from '../utils/Api.js';
import {CurrentUserContext} from "../contexts/CurrentUserContext";


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  React.useEffect(() => {
    api.getUser()
      .then((getUserRes) => {
        setCurrentUser(getUserRes)
      })
      .catch(err => console.log(err));
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

  const handleUpdateUser = ({ name, about }) => {
    api.setUserInfo({ name, about })
      .then((getUserRes) => {
        setCurrentUser(getUserRes);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

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
    </CurrentUserContext.Provider>
  );
}

export default App;
