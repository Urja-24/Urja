import React from "react";
import { Link } from "react-router-dom";
import "../CSS/sportsGridStyle.css";
import "../index.css";
import SportsHeader from "./AnimatedHeading";
import { GlareCard } from "./glare-card";
import baskImg from "../assets/images/Basketball.png";
import footImg from "../assets/images/foot1.png";
import cricImg from "../assets/images/cricket.png";
import tennisImg from "../assets/images/tennis.png";
import yogaImg from "../assets/images/Yoga.png";
import chessImg from "../assets/images/chess.png";
import athleticsImg from "../assets/images/running.png";
import hockeyImg from "../assets/images/hockey.png";
import badImg from "../assets/images/bad.png"; 
import volleyImg from "../assets/images/volley.png";
import ttImg from "../assets/images/tt1.png";

const sportsData = [
  { name: "Basketball", imgSrc: baskImg },
  { name: "Football", imgSrc: footImg },
  { name: "Cricket", imgSrc: cricImg },
  { name: "Tennis", imgSrc: tennisImg },
  { name: "Yoga", imgSrc: yogaImg },
  { name: "Chess", imgSrc: chessImg },
  { name: "Athletics", imgSrc: athleticsImg },
  { name: "Hockey", imgSrc: hockeyImg },
  { name: "Badminton", imgSrc: badImg },
  { name: "Volleyball", imgSrc: volleyImg },
  { name: "Table Tennis", imgSrc: ttImg },
];


const Sports = () => {
  return (
    <section id="services" className="services section-bg mt-5">
      <div data-aos="fade-up">
        <div className="title-section text-center">
          <h2>
            <SportsHeader heading="Sports" />
          </h2>
        </div>
        frontend\src\assets\images\chess.png
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto">
          {sportsData.map((sport, index) => (
            <div key={index} className="flex items-center justify-center ">
              <Link to={`sports/${index}`}>
                <GlareCard className="flex flex-col items-end justify-end py-8 px-6">
                  <div>
                    <img
                      className=" inset-0 object-cover pt-5 "
                      src={sport.imgSrc}
                      alt={sport.name}
                    />
                    <div className="font-bold text-center  text-4xl text-neutral-200 mt-4 bg-transparent">
                      {sport.name}
                    </div>
                  </div>
                </GlareCard>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Sports;