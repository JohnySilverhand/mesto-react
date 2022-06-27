import React from "react";


function Main({onEditProfile, onAddCard, onEditAvatar}) {
	return (
		<main className="content">
    <section className="profile">
      <div className="profile__flex-row">
        <img className="profile__image" alt="картинка профиля"/>
          <button className="profile__image-button" type="button" onClick={() => {onEditAvatar(true)}}></button>
          <div className="profile__info">
            <h1 className="profile__header">Жак-Ив Кусто </h1>
            <p className="profile__text">Исследователь океана</p>
            <button className="profile__edit" type="button" onClick={() => {onEditProfile(true)}}></button>
        </div>
        </div>
        <button className="profile__add-button" type="button" onClick={() => {onAddCard(true)}}></button>
    </section>

      <section className="elements-card">
        <ul className="elements">
        </ul>
      </section>

    </main>
	);
}

export default Main;