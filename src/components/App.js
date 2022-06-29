import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";


function App() {
  const [editProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [editAvatarProfilePopupOpen, setEditAvatarProfilePopupOpen] = React.useState(false);
  const [addCardPopupOpen, setAddCardPopupOpen] = React.useState(false);
  const [card, setCard] = React.useState({});

  function closePopups() {
    setEditAvatarProfilePopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddCardPopupOpen(false);
    setCard({});
  }

  return (
  <div className="page">
  <Header />
  
  <Main 
    onEditProfile = {setEditProfilePopupOpen}
    onEditAvatar = {setEditAvatarProfilePopupOpen}
    onAddCard = {setAddCardPopupOpen}
    onCardClick = {setCard}
  />

  <Footer />

  <PopupWithForm 
    name = "edit"
    title = "Редактировать профиль"
    isOpen = {editProfilePopupOpen}
    close = {closePopups}
    text = "Сохранить">
      <input
        id="name-input" 
        type="text" 
        className= "popup__input popup__input_type_name" 
        minLength="2" 
        maxLength="30" 
        placeholder="Имя" 
        name="name" required />
      <span className="name-input-error popup__input-error" id="name-input-error"></span>
      <input 
        id="about-input"
        type="text"
        className="popup__input popup__input_type_about"
        placeholder="Расскажите о себе"
        minLength="2"
        maxLength="200"
        name="about" required />
      <span className="about-input-error popup__input-error" id="about-input-error"></span>
  </PopupWithForm>

  <PopupWithForm
    name = "avatar"
    title = "Обновить аватар"
    isOpen = {editAvatarProfilePopupOpen}
    close = {closePopups}
    text = "Сохранить">
      <input
        type="url"
        id="avatar-input"
        placeholder="Ссылка на аватар"
        name="avatar"
        className="popup__input popup__input_type-avatar" required/>
      <span className="title-input-error popup__input-error" id="title-input-error"></span>
  </PopupWithForm>

  <PopupWithForm
    name="add"
    title="Новое место"
    isOpen={addCardPopupOpen}
    close={closePopups}
    text="Создать">
      <input 
        id="title-input" 
        type="text" 
        className="popup__input  popup__input_type_header"  
        minLength="2"
        maxLength="30"
        placeholder="Название"
        name="name" required />
      <span className="title-input-error popup__input-error" id="title-input-error"></span>
      <input 
        id="link-input"
        className="popup__input  popup__input_type_src"
        type="url"
        placeholder="Ссылка на картинку"
        name="link" required />
      <span className="link-input-error popup__input-error" id="link-input-error"></span>
  </PopupWithForm>

  <ImagePopup card = {card} close = {closePopups} />  

  </div>
  );
}

export default App;
