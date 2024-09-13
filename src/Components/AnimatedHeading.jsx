import React from 'react';
import '../CSS/sports.css';

const SportsHeader = ({ heading,fontSize}) => {
  const letters = heading.split('');
  return (
    <>

      <div className="mb-5">
        <div className="flex justify-center">

          <div className="waviy" style={{ fontSize: fontSize?fontSize:"50px"}}>
            {letters.map((letter, index) => (
              <span key={index} style={{ '--i': index + 1 , color :"white"}}>
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SportsHeader;