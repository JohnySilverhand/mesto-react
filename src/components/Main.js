import React from "react";


function Main() {
	return (
		<main className="content">
    <section className="profile">
      <div className="profile__flex-row">
        <img className="profile__image" alt="картинка профиля"/>
          <button className="profile__image-button" type="button"></button>
          <div className="profile__info">
            <h1 className="profile__header">Жак-Ив Кусто </h1>
            <p className="profile__text">Исследователь океана</p>
            <button className="profile__edit" type="button"></button>
        </div>
        </div>
        <button className="profile__add-button" type="button"></button>
    </section>

      <section className="elements-card">
        <ul className="elements">
        </ul>
      </section>

    </main>
	);
}

export default Main;