import React from "react";
import "./Card.css";
// import pic from './asset/pic.jpg';
const Card = () => {
  return (
    <div class="card">
      <div class="card-content">
        <h1>HUSTLE</h1>
        <h2>"It is good to stay in a peaceful poverty than to stay in a painful wealth"</h2>
        <p style={{color:"gray"}}>
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velitNeque porro quisquam est qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit..."{" "}
        </p>
        <button class="btn">LEARN MORE</button>
      </div>
      <div>
        <img class="image" src="https://images.pexels.com/photos/716398/pexels-photo-716398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="my pic"/>
      </div>
    </div>
  );
};

export default Card;