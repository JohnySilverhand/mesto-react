import React, { useEffect, useState } from "react";
import api from "../utils/api";
import Card from "../components/Card.js";


function Main({onEditProfile, onAddCard, onEditAvatar, onCardClick}) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getProfileInfo()
    .then((userInfo) => {
      setUserAvatar(
        userInfo.avatar
      )
      setUserName(
        userInfo.name
      )
      setUserDescription(
        userInfo.about
      )
    })
    .catch((err) => {
      console.log(err);
    })

    api.getCards()
    .then((card) => {
      setCards(
        card.map((item) => ({
          id: item._id,
          link: item.link,
          name: item.name,
          likes: item.likes
        }))
      )
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

	return (
		<main className="content">
      <section className="profile">
        <div className="profile__flex-row">
          <img className="profile__image" alt="картинка профиля" src={userAvatar} onClick={() => {onEditAvatar(true)}} />
            <button className="profile__image-button" type="button" onClick={() => {onEditAvatar(true)}}></button>
            <div className="profile__info">
              <h1 className="profile__header">{userName}</h1>
              <p className="profile__text">{userDescription}</p>
              <button className="profile__edit" type="button" onClick={() => {onEditProfile(true)}}></button>
            </div>
        </div>
        <button className="profile__add-button" type="button" onClick={() => {onAddCard(true)}}></button>
      </section>

      <section className="elements-card">
        <ul className="elements">
          {cards.map((card) => (
            <Card 
              key = {card.id}
              link = {card.link}
              name = {card.name}
              likes = {card.likes}
              onCardClick = {onCardClick}
            />
          ))}
        </ul>
      </section>

    </main>
	);
}

export default Main;