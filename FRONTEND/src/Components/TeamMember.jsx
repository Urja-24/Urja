import React from 'react';

const TeamMember = ({...member}) => {
  return (
    <div className="col-xl-4 col-md-6 d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
      <div className="team-member">
        <div className="member-img">
          <img 
            src={member.imgSrc}
            className="img-fluid" 
            alt={member.name} 
            style={{
              position: 'relative', 
              height: '20rem', 
              margin: 'auto', 
              width: '16rem', 
              overflow: 'hidden', 
              objectFit: 'cover', 
              borderRadius: '1rem'
            }}
          />
        </div>
        <div 
          className="member-info" 
          style={{
            padding: '30px 15px', 
            textAlign: 'center', 
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 15px', 
            margin: '-50px 20px 0px', 
            position: 'relative', 
            borderRadius: '8px', 
            transition: 'transform 0.3s, box-shadow 0.3s', 
            color: 'white', 
            fontWeight: 'bold'
          }}
        >
          <h4 className='bg-transparent'>{member.name}</h4>
          <span className='bg-transparent'>{member.title}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
