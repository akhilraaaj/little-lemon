import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div>
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">India</h2>
        <p className="about-description">
        Nestled amidst bustling streets, Little Lemon is a vibrant sanctuary where the rich tapestry of Indian cuisine comes alive. Our diverse menu invites you on an odyssey through the aromatic spices and intricate flavors of India, offering an authentic culinary experience. From traditional classics to contemporary creations, each dish is a celebration of heritage, meticulously prepared to captivate your senses. Join us for a gastronomic journey that transports you to the heart of India.
        </p>
      </div>

      <img
        className="about-image-bruchetta"
        src="https://img.freepik.com/free-photo/bruschetta-cooked-meat-copy-space_23-2148516969.jpg?size=626&ext=jpg&ga=GA1.1.926967443.1695571512&semt=sph"
        alt="Restarurant food"
        height={200}
        width={200}
      />
      <img
        className="about-image-restaurant"
        src="https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?size=626&ext=jpg&ga=GA1.1.926967443.1695571512&semt=sph"
        alt=""
        height={200}
        width={200}
      />
    </div>
  );
};

export default About;
