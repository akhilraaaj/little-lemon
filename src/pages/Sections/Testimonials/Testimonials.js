import React from "react";
import "./Testimonials.css";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";

const testimonials = [
  {
    id: 1,
    author: "Ram",
    description:
      "We had a good experience in the restaurant. It was excellent in terms of quality,  taste as well as service from the staffs.",
    image:
      "https://media.istockphoto.com/id/157506964/photo/hispanic-or-middle-eastern-young-man.jpg?s=612x612&w=0&k=20&c=-cOKfheWQZnhNL8ukpdjUX9TR4TQUKcSiJ2FTttHvu0=",
    rating: 5,
  },
  {
    id: 2,
    author: "Rob",
    description:
      "The chicken biryani served is my absolute favourite one, especially the pickle served along with it is beyond description.",
    image:
      "https://media.istockphoto.com/id/504854859/photo/passport-photo.jpg?s=612x612&w=0&k=20&c=NFKN7d-VaOS3BwdKcX8l50ehKrH8KkyZZkAU3YX6S_w=",
    rating: 5,
  },
  {
    id: 3,
    author: "Ali",
    description:
      "Little Lemon is an excellent dining experience that I would highly recommend. The food was absolutely delicious and flavorful.",
    image:
      "https://media.istockphoto.com/id/175446123/photo/serious-young-afrocaribbean-man.jpg?s=612x612&w=0&k=20&c=3xRsBF8TBhu7fiZKfzgZZjRhyqzlEQwijZd2E2BjMTo=",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-background">
      <div className="testimonials">
        <div className="testimonials-container">
          <h1 className="testimonial-title">Testimonials</h1>
        </div>

        <div className="testimonials-list">
          {testimonials.map((testimonial) => (
            <TestimonialCard
            
              key={testimonial.id}
              author={testimonial.author}
              description={testimonial.description}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
