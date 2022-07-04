import React, {useState} from 'react';
import {api} from '../utils/Api.js';
import Card from '../components/Card';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  React.useEffect(() => {
    Promise.resolve(api.getInitialCards())
      .then((getInitialCardsRes) => {
        setCards([...getInitialCardsRes]);
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile root__section profile_margin">
        <div className="profile__card">
          <div className="profile__avatar">
            <img alt="фото профиля" className="profile__photo" src={currentUser.avatar} />
            <button
              aria-label="обновить аватар"
              className="profile__edit-avatar"
              onClick={onEditAvatar}
            >
            </button>
          </div>
          <div className="profile__text">
            <div className="profile__name">
              <h1 className="profile__name-text">{currentUser.name}</h1>
              <button
                aria-label="редактировать"
                className="profile__edit-button"
                onClick={onEditProfile}
              >
              </button>
            </div>
            <p className="profile__job-text">{currentUser.about}</p>
          </div>
        </div>
        <button
          aria-label="добавить"
          className="profile__add-button"
          onClick={onAddPlace}
        >
        </button>
      </section>

      <section className="cards root__section cards_margin">
        <ul className="cards__items">
            {cards.map((card, i) => (
              <li key={i} className="cards__item">
                <Card card={card} onCardClick={onCardClick} onCardLike={handleCardLike}/>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
