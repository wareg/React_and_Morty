import React from 'react';
import avatar from "../images/avatar.jpeg";

function SmallCard(props) {
  return (
    <div class="small-card">
      <h2>Név: Rick Sanchez</h2>
      <p>Hely: Earth</p>
      <p>Faj: üres</p>
      <img src={avatar} alt="avatar"></img>
  </div>

  )
}

export default SmallCard;

