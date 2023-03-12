import React, { useEffect } from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [userName, setUserName] = React.useState('');

  const [userDescription, setUserDescription] = React.useState('');
  
  const [userAvatar, setUserAvatar] = React.useState('');

  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api.getProfileData()
    .then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    })
    .catch((err) => {
      console.log(err);
    });
    api.getInitialCards() 
    .then((res) => {
      setCards(res);
    })
    .catch((err) => {
      console.log(err);
    });
  },[]);

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__item">
          <div className="profile__avatar" onClick={onEditAvatar}>
            <img className="profile__avatar-image" src={userAvatar} alt="Аватарка" />
          </div>
          <div className="profile__info">
            <div className="profile__title">{userName}</div>
            <button className="profile__edit-button" type="button" aria-label="редактирование профиля" onClick={onEditProfile}></button>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>

      <section className="cards">
        {cards.map((card) => {
            return <Card card={card} key={card._id} onCardClick={onCardClick}/>
        })} 
      </section>
    </main>
  );
}

export default Main;