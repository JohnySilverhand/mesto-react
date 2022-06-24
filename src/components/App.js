import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";


function App() {
  return (
<div className="page">
  <Header />
  
  <Main />
  
  <Footer />

    <div className="popup popup_edit">
      <div className="popup__container">
        <h3 className="popup__header">Редактировать профиль</h3>
        <button className="popup__close-button popup__close-button_edit" type="button"></button>
        <form className="popup__form" id="edit" name="edit" novalidate>
            <input 
              id="name-input" 
              type="text" 
              className="popup__input popup__input_type_name" 
              minlength="2" 
              maxlength="30" 
              placeholder="Имя" 
              name="name" required/>
            <span class="name-input-error popup__input-error" id="name-input-error"></span>
            <input 
              id="about-input"
              type="text"
              className="popup__input popup__input_type_about"
              placeholder="Расскажите о себе"
              minlength="2"
              maxlength="200"
              name="about" required/>
            <span className="about-input-error popup__input-error" id="about-input-error"></span>
            <button className="popup__form-submit popup__form-submit_profile" type="submit">Сохранить</button>
        </form>
      </div>
    </div>

    <div className="popup popup_add">
      <div className="popup__container">
        <h3 className="popup__header">Новое место</h3>
        <button className="popup__close-button popup__close-button_add" type="button"></button>
        <form className="popup__form" id="add" name="add" novalidate>
            <input 
              id="title-input" 
              type="text" 
              className="popup__input  popup__input_type_header"  
              minlength="2"
              maxlength="30"
              placeholder="Название"
              name="name" required/>
            <span className="title-input-error popup__input-error" id="title-input-error"></span>
            <input 
              id="link-input"
              className="popup__input  popup__input_type_src"
              type="url"
              placeholder="Ссылка на картинку"
              name="link" required/>
            <span className="link-input-error popup__input-error" id="link-input-error"></span>
            <button className="popup__form-submit popup__form-submit_add" type="submit">Создать</button>
        </form>
      </div>
    </div>

    <div className="popup popup_open-image">
      <div className="popup__image-container">
        <img className="popup__image" alt="f"/>
        <p className="popup__image-text"></p>
        <button className="popup__close-button popup__close-button_image" type="button"></button>
      </div>
    </div>

    <div className="popup popup-avatar">
      <div className="popup__container popup-avatar__container">
        <h3 className="popup__header">Обновить аватар</h3>
        <button className="popup__close-button popup__close-button-avatar" type="button"></button>
        <form className="popup__form" id="avatar" name="popup-avatar" novalidate>
          <input
            type="url"
            id="avatar-input"
            placeholder="Ссылка на аватар"
            name="avatar"
            className="popup__input popup__input_type-avatar" required/>
          <span className="avatar-input-error popup__input-error"></span>
          <button className="popup__form-submit popup__form-submit-avatar">Сохранить</button>
        </form>
      </div>  
    </div>

    <div className="popup popup-delete">
      <div className="popup__container popup-delete__container">
        <h3 className="popup__header">Вы уверены?</h3>
        <button className="popup__close-button popup__close-button-avatar" type="button"></button>
        <form className="popup__form popup__form-delete" id="delete" name="delete" novalidate>
          <button className="popup__form-submit popup__form-submit-delete">Да</button>
        </form>
      </div>
    </div>

  </div>
  );
}

export default App;
