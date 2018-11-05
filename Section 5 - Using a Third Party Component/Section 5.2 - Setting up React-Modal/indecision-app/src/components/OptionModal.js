import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
   <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleClearSelectedOption}
      contentLabel="Selected Option"      //This will not show up in the broser, but is a mandatory property which is used for people with accessibility enabled e.g. the blind or visually impaired.
   >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.handleClearSelectedOption}>Okay</button>
   </Modal>
);

export default OptionModal;


//--------------------------------
// Challenge:
//--------------------------------
// Create a new event handler in IndecisionApp.js that clears the selectedOption state.
// Pass that into the OptionModal component
// Call this function on the button click in the OptionModal.js file to clear the state back to undefined.


//--------------------------------
// Answer:
//--------------------------------
// Answer added above.