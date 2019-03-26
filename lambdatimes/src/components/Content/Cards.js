import React, { Component } from 'react';
import Card from './Card';
import PropType from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/
      props.cards.map((newCard, i) => {
        return (
        <Card card = {newCard} key = {i}/>
        )
      })  
      }
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  card: PropType.object
}

export default Cards;