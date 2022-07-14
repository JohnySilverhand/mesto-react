import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
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
          _id: card._id,
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

  function handleCardLike(card) {
    const isLiked = card.likes.some(item => item._id === currentUser._id );
  
    if (!isLiked) {
      api.likeCard(card)
        .then((newCard) => {
          setSelectedCard((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch ((err) => {
          console.log (err);
        })
    } else {
        api.dislikeCard (card)
          .then ((newCard) => {
            setSelectedCard((state) => state.map((c) => c._id === card._id ? newCard : c));
          })
        .catch ((err) => {
          console.log (err);
      })
  } 
} 

  function handleCardDelete(card) {
    api.deleteCard(card)
      .then(() => {
        const deletedCard = selctedCard.filter(i => i._id != (card._id));
        setSelectedCard(deletedCard);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleUpdateUser(data) {
    api.addUserInfo(data)
      .then((userData) => {
        setCurrentUser(userData)
        closePopups(setEditProfilePopupOpen);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleUpdateAvatar(data) {
    api.addUserAvatar(data)
      .then((userData) => {
        setCurrentUser(userData)
        closePopups(setEditAvatarProfilePopupOpen)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleAddPlaceSubmit(data) {
    api.addCards(data)
      .then((card) => {
        setSelectedCard([card, ...selctedCard])
        closePopups(setAddCardPopupOpen)
      })
      .catch((err) => {
        console.log(err);
      })
  }

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
          onCardLike = {handleCardLike}
          onCardDelete = {handleCardDelete}
          cards = {selctedCard}
        />

        <Footer />

        <EditProfilePopup
          isOpen={editProfilePopupOpen}
          onClose={closePopups}
          onUpdateUser={handleUpdateUser}
        ></EditProfilePopup>

        <EditAvatarPopup
        isOpen={editAvatarProfilePopupOpen}
        onClose={closePopups}
        onUpdateAvatar={handleUpdateAvatar}
        ></EditAvatarPopup>

        <AddPlacePopup
        isOpen={addCardPopupOpen}
        onClose={closePopups}
        onAddPlace={handleAddPlaceSubmit}
        ></AddPlacePopup>

        <ImagePopup card = {card} close = {closePopups} />  

      </div>
    </CardContext.Provider>
  </CurrentUserContext.Provider>  
  );
}

export default App;
