import React from "react";
import { Link } from "react-router-dom";
import "../CSS/sportsGridStyle.css";
import "../index.css";
import SportsHeader from "./AnimatedHeading";
import { GlareCard } from "./glare-card";

const sportsData = [
  { name: "Basketball", imgSrc: "src/assets/images/Basketball.png" },
  { name: "Football", imgSrc: "src/assets/images/foot1.png" },
  { name: "Cricket", imgSrc: "src/assets/images/cricket.png" },
  { name: "Tennis", imgSrc: "src/assets/images/tennis.png" },
  { name: "Yoga", imgSrc: "src/assets/images/Yoga.png" },
  { name: "Chess", imgSrc: "src/assets/images/chess.png" },
  { name: "Athletics", imgSrc: "src/assets/images/running.png" },
  { name: "Hockey", imgSrc: "src/assets/images/hockey.png" },
  { name: "Badminton", imgSrc: "src/assets/images/bad.png" },
  { name: "Volleyball", imgSrc: "src/assets/images/volley.png" },
  { name: "Table Tennis", imgSrc: "src/assets/images/tt1.png" },
];

const Sports = () => {
  return (
    <section
      id="services"
      className="w-full overflow-hidden services section-bg mt-5"
    >
      <div className="container" data-aos="fade-up">
        <div className="w-[100vw]">
          <SportsHeader heading="Sports" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="ml-16">
            <Link to="/desired-route">
              <GlareCard className="flex flex-col items-center justify-center">
                <img
                  className="h-3/5 inset-0 object-cover pt-5"
                  src="src/assets/images/Basketball.png"
                />
                <div className="flex-grow"></div>
                <p className="font-bold text-white text-4xl pb-32">
                  Basketball
                </p>
              </GlareCard>
            </Link>
          </div>
          <div className="ml-20">
            <Link to="/desired-route">
              <GlareCard className="flex flex-col items-center justify-center">
                <img
                  className="h-3/4 w-3/4 inset-0 object-cover pt-5"
                  src="src/assets/images/foot1.png"
                />
                <div className="flex-grow"></div>
                <p className="font-bold text-white text-4xl pb-4">Football</p>
              </GlareCard>
            </Link>
          </div>
          <div className="ml-20">
            <Link to="/desired-route">
              <GlareCard className="flex flex-col items-center justify-center">
                <img
                  className="h-3/4 inset-0 object-cover pt-5"
                  src="src/assets/images/cricket.png"
                />
                <div className="flex-grow"></div>
                <div className="flex-grow"></div>
                <p className="font-bold text-white text-4xl pb-4">Cricket</p>
              </GlareCard>
            </Link>
          </div>
          <div className="ml-16">
            <Link to="/desired-route">
              <GlareCard className="flex flex-col items-center justify-center">
                <img
                  className="h-3/5 inset-0 object-cover pt-5"
                  src="src/assets/images/tennis.png"
                />
                <div className="flex-grow"></div>
                <p className="font-bold text-white text-4xl pb-32">Tennis</p>
              </GlareCard>
            </Link>
          </div>
          <div className="ml-20">
            <Link to="/desired-route">
              <GlareCard className="flex flex-col items-center justify-center">
                <img
                  className="h-3/5 inset-0 object-cover pt-5"
                  src="src/assets/images/Yoga.png"
                />
                <div className="flex-grow"></div>
                <p className="font-bold text-white text-4xl pb-20">Yoga</p>
              </GlareCard>
            </Link>
          </div>
          <div className="ml-20">
            <Link to="/desired-route">
              <GlareCard className="flex flex-col items-center justify-center">
                <img
                  className="h-1/2 inset-0 object-cover pt-5"
                  src="src/assets/images/chess.png"
                />
                <div className="flex-grow"></div>
                <p className="font-bold text-white text-4xl pb-32">Chess</p>
              </GlareCard>
            </Link>
          </div>
          <div className="ml-16">
            <Link to="/desired-route">
              <GlareCard className="flex flex-col items-center justify-center">
                <img
                  className="h-3/4 inset-0 object-cover pt-5"
                  src="src/assets/images/running.png"
                />
                <div className="flex-grow"></div>
                <p className="font-bold text-white text-4xl pb-4">Athletics</p>
              </GlareCard>
            </Link>
          </div>
          <div className="ml-20">
            <Link to="/desired-route">
              <GlareCard className="flex flex-col items-center justify-center">
                <img
                  className="h-3/5 inset-0 object-cover pt-5"
                  src="src/assets/images/hockey.png"
                />
                <div className="flex-grow"></div>
                <p className="font-bold text-white text-4xl pb-32">Hockey</p>
              </GlareCard>
            </Link>
          </div>
          <div className="ml-20">
            <Link to="/desired-route">
              <GlareCard className="flex flex-col items-center justify-center">
                <img
                  className="h-3/5 inset-0 object-cover pt-5"
                  src="src/assets/images/bad.png"
                />
                <div className="flex-grow"></div>
                <p className="font-bold text-white text-4xl pb-32">Badminton</p>
              </GlareCard>
            </Link>
          </div>
          <div className="ml-16">
            <Link to="/desired-route">
              <GlareCard className="flex flex-col items-center justify-center">
                <img
                  className="h-3/5 inset-0 object-cover pt-4"
                  src="src/assets/images/volley.png"
                />
                <div className="flex-grow"></div>
                <p className="font-bold text-white text-4xl pb-32">
                  VolleyBall
                </p>
              </GlareCard>
            </Link>
          </div>
          <div className="ml-20">
            <Link to="/desired-route">
              <GlareCard className="flex flex-col items-center justify-center">
                <img
                  className="h-3/5 inset-0 object-cover pt-3"
                  src="src/assets/images/tt1.png"
                />
                <div className="flex-grow"></div>
                <p className="font-bold text-white text-4xl pb-32">
                  Table Tennis
                </p>
              </GlareCard>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sports;
