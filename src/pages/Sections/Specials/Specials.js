import React from "react";
import "./Specials.css";
import Button from "../../../components/Button/Button";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const specials = [
  {
    id: 1,
    title: "Biriyani",
    description:
      "Biryani is a popular South Asian dish that is enjoyed by millions of people around the world. It is a flavorful rice dish that is typically made with a variety of spices, meat, and vegetables. ",
    image:
      "https://madhurasrecipe.com/wp-content/uploads/2023/03/Veg-Biryani-Featured.jpg",
    price: "Rs. 200",
  },
  {
    id: 2,
    title: "Palak Paneer",
    description:
      "This deliciously creamy and vibrantly green dish is made with paneer in a mildly spiced fresh spinach sauce. This is a delightful and easy to make vegetarian main you just have to try!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI_pSsX4uv6C0Ju9q2bhkpP19jYvZ4Wxj9iw&usqp=CAU",
    price: "Rs 150",
  },
  {
    id: 3,
    title: "Pani Puri",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. It is also known as Gol gappa in some places.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfThBzIoniyhhAIDBzlq59vK3pJmES3aPXzQ&usqp=CAU",
    price: "Rs. 50",
  },
];

const Specials = () => {
  const navigate = useNavigate();

  const onClickMenu = () => {
    navigate(pages.get("orders").path);
  };
  return (
    <div className="specials">
      <div className="header-container">
        <h1 className="specials-title">Specials</h1>
        <Button title={"Online Menu"} onClick={onClickMenu} />
      </div>

      <div className="header-list">
        {specials.map((special) => (
          <FoodCard
            key={special.id}
            title={special.title}
            description={special.description}
            image={special.image}
            price={special.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Specials;
