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
  { name: "Volleyball", imgSrc: volleyImg, id: 0 },
  { name: "Table Tennis", imgSrc: ttImg, id: 1 },
  { name: "Hockey", imgSrc: hockeyImg, id: 2 },
  { name: "Badminton", imgSrc: badImg, id: 3 },
  { name: "Cricket", imgSrc: cricImg, id: 4 },
  { name: "Lawn Tennis", imgSrc: tennisImg, id: 5 },
  { name: "Basketball", imgSrc: baskImg, id: 6 },
  { name: "Chess", imgSrc: chessImg, id: 7 },
  { name: "Football", imgSrc: footImg, id: 8 },
  { name: "Yoga", imgSrc: yogaImg, id: 9 },
  { name: "Athletics", imgSrc: athleticsImg, id: 10 },
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
        <div className="mx-14 grid grid-cols-1 md:grid-cols-4 gap-5 md:mx-32">
          {sportsData.map((sport, index) => (
            <div key={index} className="flex items-center justify-center">
              <Link to={`sports/${sport.id}`}>
                <GlareCard className="flex flex-col items-end justify-end py-8 px-6">
                  <div>
                    <img
                      className="inset-0 object-cover"
                      src={sport.imgSrc}
                      alt={sport.name}
                    />
                    <div className="font-bold text-center text-2xl text-neutral-200 mt-4 bg-transparent">
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
