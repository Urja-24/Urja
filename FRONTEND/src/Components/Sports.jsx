import React from "react";
import { Link } from "react-router-dom";
import "../CSS/sportsGridStyle.css";
import "../index.css";
import SportsHeader from "./AnimatedHeading";
import { GlareCard } from "./glare-card";

const sportsData = [
  { name: "basketball", imgSrc: "src/assets/images/Basketball.png" },
  { name: "football", imgSrc: "src/assets/images/foot1.png" },
  { name: "cricket", imgSrc: "src/assets/images/cricket.png" },
  { name: "tennis", imgSrc: "src/assets/images/tennis.png" },
  { name: "yoga", imgSrc: "src/assets/images/Yoga.png" },
  { name: "chess", imgSrc: "src/assets/images/chess.png" },
  { name: "athletics", imgSrc: "src/assets/images/running.png" },
  { name: "hockey", imgSrc: "src/assets/images/hockey.png" },
  { name: "badminton", imgSrc: "src/assets/images/bad.png" },
  { name: "volleyball", imgSrc: "src/assets/images/volley.png" },
  { name: "tabletennis", imgSrc: "src/assets/images/tt1.png" },
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto">
          {sportsData.map((sport, index) => (
            <div key={sport.name} className="flex items-center justify-center ">
              <Link to={`sports/${sport.name}`}>
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
