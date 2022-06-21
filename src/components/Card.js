import React from 'react';

function Card({ card, i, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li key={i} className="cards__item">
      <img src={card.link} alt="" className="cards__img" onClick={handleClick}/>
      <div className="cards__description">
        <h3 className="cards__title">{card.name}</h3>
        <div className="cards__likes">
          <button aria-label="добавить в избранное" className="cards__heart"></button>
          <p className="cards__count-likes">{card.likes.length}</p>
        </div>
      </div>
      <button aria-label="удалить" className="cards__trash"></button>
    </li>
  );
}

export default Card;
