import React from 'react';
import '../CSS/Team.css'; // Ensure you have the CSS for styling
import { Photos } from './Photos';
import TeamMember from './TeamMember';
import SportsHeader from './AnimatedHeading';

const secratray = [
    {
        name: "Ravindra Raj",
        title: "Sports Secretary",
        imgSrc: "https://urja-2023.netlify.app/static/media/ravindraRajImg.b1579a0b4171c12408cb.jpeg",
    },
    {
        name: "Anubhav",
        title: "Joint Sports Secretary",
        imgSrc: "https://urja-2023.netlify.app/static/media/anubhavImg.b0f872b310dadbbe0a26.jpg",
    }]
const teamMembers = [
    {
        name: "Kuldeep Kumar",
        title: "General Secretary",
        imgSrc: "https://urja-2023.netlify.app/static/media/kuldeep.f6a0389920c01fee99de.jpeg",
    },
    {
        name: "Nitin Kumar",
        title: "Joint Secretary",
        imgSrc: "https://urja-2023.netlify.app/static/media/nitin.8bde50598ffd0d248453.jpg",
    },
    {
        name: "Sudhanshu Bharti",
        title: "Executive Head",
        imgSrc: "https://urja-2023.netlify.app/static/media/sudhanshu.bc6107f072e8b5267aa9.jpg",
    },
    {
        name: "Navya Shankar",
        title: "Executive Head",
        imgSrc: "https://urja-2023.netlify.app/static/media/navya.0a522dc06280e730daac.jpeg",
    },
    {
        name: "Prashant Raj",
        title: "Event Head",
        imgSrc: "https://urja-2023.netlify.app/static/media/prashant.4fb68eb017ace87c4922.jpg",
    },
    {
        name: "Shravya",
        title: "Event Head",
        imgSrc: "https://urja-2023.netlify.app/static/media/shravya.a155d877bc7b83486bc1.jpeg",
    },
    {
        name: "Satish",
        title: "Logistic Head",
        imgSrc: "https://urja-2023.netlify.app/static/media/satish.535b22f6d1b677365c00.jpeg",
    },
    {
        name: "Nikita Sundi",
        title: "Logistic Head",
        imgSrc: "https://urja-2023.netlify.app/static/media/nikita.90906f889f71ecc0c289.jpeg",
    },
    {
        name: "Biswajit Murmu",
        title: "Medical Head",
        imgSrc: "https://urja-2023.netlify.app/static/media/biswajit.54df083a0460bb70ec0d.jpeg",
    },
    {
        name: "Kumar Abhinav",
        title: "Medical Head",
        imgSrc: "https://urja-2023.netlify.app/static/media/abhinav.d006bebeff0967d57ffb.jpeg",
    },
    {
        name: "Amol Sourav",
        title: "Medical Head",
        imgSrc: "https://urja-2023.netlify.app/static/media/Amol_sourav.464fb248a378d6772ecc.jpeg",
    },
];

const OurTeam = () => {
    return (
        <section className="team-section mt-14">
            <div className='bg-black p-10'>
                <div className="container mx-auto text-center">
                    {/* <h2 className="text-4xl font-bold text-white">Our Team</h2> */}
                    <div className='flex gap-8 justify-center'>
                    <SportsHeader heading={"Our"}></SportsHeader>
                    <SportsHeader heading={"Team"}/>
                    </div>
                    {/* <p className="text-lg text-white mt-4">Meet the people who make it all happen</p> */}
                    <div className=' flex flex-wrap justify-around mt-10 gap-y-14'>
                        {secratray.map((member, index) => (
                            <div key={index} className="team-card shadow-lg rounded-lg">
                                <TeamMember{...member}/>
                                {/* <div className="team-content p-4">
                                    <h3 className="text-2xl font-bold">{member.name}</h3>
                                    <p className="text-lg text-gray-600">{member.title}</p>
                                </div> */}
                            </div>
                        ))}
                    </div>
                    <div className="team-grid mt-10 gap-x-44 gap-y-14">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-card shadow-lg rounded-lg">
                                <TeamMember {...member}/>
                                {/* <div className="team-content p-4">
                                    <h3 className="text-2xl font-bold">{member.name}</h3>
                                    <p className="text-lg text-gray-600">{member.title}</p>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;

