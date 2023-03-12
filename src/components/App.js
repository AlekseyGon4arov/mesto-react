import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState();

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState();

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState();

  const [selectedCard, setSelectedCard] = React.useState();

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false)
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="root">
      <Header />

      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        />
      <Footer />

      <PopupWithForm
        title="Редактировать профиль"
        name='edit'
        isOpened={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        >
          <label className="popup__label">
            <input id="name-input" className="popup__input popup__input_data_name" type="text" name="editname" required minLength="2" maxLength="40" />
            <span className="popup__input-error name-input-error" />
          </label>
          <label className="popup__label">
            <input id="job-input" className="popup__input popup__input_data_job" type="text" name="editjob" required minLength="2" maxLength="200" />
            <span className="popup__input-error job-input-error" />
          </label>
      </PopupWithForm>
          
      <PopupWithForm
        title="Обновить аватар"
        name='update'
        isOpened={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        >
          <label className="popup__label">
            <input id="avatar-input" className="popup__input popup__input_data_avatar" type="url" name="updateavatar" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error avatar-input-error" />
          </label>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name='card'
        isOpened={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        >
          <label className="popup__label">
            <input id="mesto-input" className="popup__input popup__input_data_name" type="text" name="editname" placeholder="Название" required minLength="2" maxLength="30" />
            <span className="popup__input-error mesto-input-error" />
          </label>
          <label className="popup__label">
            <input id="url-input" className="popup__input popup__input_data_image" type="url" name="editimage" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error url-input-error" />
          </label>
      </PopupWithForm>

      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
      />
      
    </div>
  );
}

export default App;
