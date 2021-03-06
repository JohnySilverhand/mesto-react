import React from "react";
import api from "../utils/api";
import Card from "../components/Card.js";
import {CurrentUserContext} from "../contexts/CurrentUserContext";


function Main({onEditProfile, onAddCard, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete}) {

  const currentUser = React.useContext(CurrentUserContext);
    
	return (
    <main className="content">
      <section className="profile">
        <div className="profile__flex-row">
          <div className="profile__image-container" onClick={() => {onEditAvatar(true)}}>
            <img className="profile__image" alt="картинка профиля" src={currentUser.avatar} />
            <button className="profile__image-button" type="button"></button>
          </div>
        <div className="profile__info">
          <h1 className="profile__header">{currentUser.name}</h1>
          <p className="profile__text">{currentUser.about}</p>
          <button className="profile__edit" type="button" onClick={() => {onEditProfile(true)}}></button>
        </div>
        </div>
        <button className="profile__add-button" type="button" onClick={() => {onAddCard(true)}}></button>
      </section>

      <section className="elements-card">
        <ul className="elements">
          {cards.map((card) => (
            <Card 
            key = {card._id}
            _id = {card._id}
            owner = {card.owner}
            link = {card.link}
            name = {card.name}
            likes = {card.likes}
            onCardClick = {onCardClick}
            onCardLike = {onCardLike}
            onCardDelete = {onCardDelete}
            />
          ))}
        </ul>
      </section>

    </main>
	);
}

export default Main;