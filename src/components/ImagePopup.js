import React from "react";

function ImagePopup ({}) {
  return (
		<div className="popup popup_open-image">
      <div className="popup__image-container">
        <img className="popup__image" alt="f"/>
        <p className="popup__image-text"></p>
        <button className="popup__close-button popup__close-button_image" type="button"></button>
      </div>
    </div>
	); 
}