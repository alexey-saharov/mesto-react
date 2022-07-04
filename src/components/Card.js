import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike }) {

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
  );
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (`cards__like ${isLiked && 'cards__like_active'}`);



  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  return (
    <>
      <img src={card.link} alt="" className="cards__img" onClick={handleClick}/>
      <div className="cards__description">
        <h3 className="cards__title">{card.name}</h3>
        <div className="cards__likes">
          <button aria-label="добавить в избранное" className={cardLikeButtonClassName} onClick={handleLikeClick}>
          </button>
          <p className="cards__count-likes">{card.likes.length}</p>
        </div>
      </div>
      <button aria-label="удалить" className="cards__delete-button"></button>
    </>
  );
}

export default Card;
