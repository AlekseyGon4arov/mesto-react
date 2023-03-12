function Card({card, onCardClick}) {

  return (
    <article className="card">
      <div className="card__item">
        <button className="card__delete-icon" type="button" aria-label="удаление карточки"></button>
        <img className="card__image" src={card.link} alt={card.name} onClick={() => {
          onCardClick(card)}}
        />
      </div>
      <div className="card__group">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button className="card__like_button" type="button" aria-label="лайк"></button>
          <span className="card__like_count">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;