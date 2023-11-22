import React from "react";
import "./Hero.css";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const Hero = () => {
  const navigate = useNavigate();
  const onClickReserve = () => {
    navigate(pages.get("reservations").path);
  }

  return (
    <div className="hero-background">
      <div className="hero">
        <div>
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">India</h2>
          <p>
          Nestled amidst bustling streets, Little Lemon is a vibrant sanctuary where the rich tapestry of Indian cuisine comes alive. Our diverse menu invites you on an odyssey through the aromatic spices and intricate flavors of India, offering an authentic culinary experience. From traditional classics to contemporary creations, each dish is a celebration of heritage, meticulously prepared to captivate your senses. Join us for a gastronomic journey that transports you to the heart of India.
          </p>
          <Button title={"Reserve a table"} onClick={onClickReserve} />
        </div>

        <img
          className="image"
          src="https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg?size=626&ext=jpg&ga=GA1.1.926967443.1695571512&semt=sph"
          alt="Restarurant food"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default Hero;
