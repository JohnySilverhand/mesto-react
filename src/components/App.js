import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import {CardContext} from "../contexts/CardContext.js";


function App() {
  const [editProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [editAvatarProfilePopupOpen, setEditAvatarProfilePopupOpen] = React.useState(false);
  const [addCardPopupOpen, setAddCardPopupOpen] = React.useState(false);
  const [card, setCard] = React.useState({});
  const [selctedCard, setSelectedCard] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState('');

  React.useEffect(() => {
    api.getProfileInfo()
    .then((userInfo) => {
      setCurrentUser(userInfo)
    })
    .catch((err) => {
      console.log(err);
    })

    api.getCards()
    .then((data) => {
      setSelectedCard(
        data.map((card) => ({
          _id: card.id,
          link: card.link,
          name: card.name,
          likes: card.likes,
          owner: card.owner
        })
        )
      )
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  function closePopups() {
    setEditAvatarProfilePopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddCardPopupOpen(false);
    setCard({});
  }

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <CardContext.Provider value={selctedCard}>
      <div className="page">
        <Header />
      
        <Main 
          onEditProfile = {setEditProfilePopupOpen}
          onEditAvatar = {setEditAvatarProfilePopupOpen}
          onAddCard = {setAddCardPopupOpen}
          onCardClick = {setCard}
          cards = {selctedCard}
        />

        <Footer />

        <PopupWithForm 
          name = "edit"
          title = "Редактировать профиль"
          isOpen = {editProfilePopupOpen}
          onClose = {closePopups}
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
          onClose = {closePopups}
          text = "Сохранить">
          <input
            type="url"
            id="avatar-input"
            placeholder="Ссылка на аватар"
            name="avatar"
            className="popup__input popup__input_type_avatar" required/>
          <div className="popup_avatar__span"></div>
        </PopupWithForm>

        <PopupWithForm
          name="add"
          title="Новое место"
          isOpen={addCardPopupOpen}
          onClose={closePopups}
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
    </CardContext.Provider>
  </CurrentUserContext.Provider>  
  );
}

export default App;
