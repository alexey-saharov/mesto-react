import React, {useState} from 'react';
import {api} from '../utils/Api.js';
import Card from '../components/Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

  const [userName, setUserName] = useState('');
  const [userDescription , setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getUser(),
      api.getInitialCards()
    ])
      .then(([ getUserRes, getInitialCardsRes]) => {
        setUserName(getUserRes.name);
        setUserDescription(getUserRes.about);
        setUserAvatar(getUserRes.avatar);

        setCards([...getInitialCardsRes]);
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile root__section profile_margin">
        <div className="profile__card">
          <div className="profile__avatar">
            <img alt="фото профиля" className="profile__photo" src={userAvatar} />
            <button aria-label="обновить аватар" className="profile__edit-avatar" onClick={onEditAvatar}>
            </button>
          </div>
          <div className="profile__text">
            <div className="profile__name">
              <h1 className="profile__name-text">{userName}</h1>
              <button aria-label="редактировать" className="profile__edit-button" onClick={onEditProfile}>
              </button>
            </div>
            <p className="profile__job-text">{userDescription}</p>
          </div>
        </div>
        <button aria-label="добавить" className="profile__add-button" onClick={onAddPlace}></button>
      </section>

      <section className="cards root__section cards_margin">
        <ul className="cards__items">
            {cards.map((card, i) => (
              <li key={i} className="cards__item">
                <Card card={card} onCardClick={onCardClick}/>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
