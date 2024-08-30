import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsonData from '../sports.json'; 
import GlowingButton from './GlowingButton';
import AnimatedHeading from './AnimatedHeading';
import sportsCoordinator from './SportsCoordinator';

const CustomSport = () => {
  const { key } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const fetchedData = jsonData[key] || jsonData;
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [key]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="site-section bg-orange-900">
        <div className="container mt-8">

          <div className="mt-5 pt-24 flex justify-center items-center h-full">
            <AnimatedHeading heading={data.title ? data.title : ""} />
          </div>
          <div className="row mb-5">
            <div
              className="col-lg-12 flex flex-col justify-center p-4 text-white"
            >
              <h5 className="text-red-600 mb-5 font-bold">
              
                {" "}
                "{data.quote?data.quote:""}"
              </h5>
              <p>
                {data.description ? data.description : ""}
              </p>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="widget-next-match">
                <div
                 
                >
                  <h4 className="text-2xl font-bold mb-2">
                       Rules
                  </h4>
                </div>
                <div className="widget-body mb-3">
                  <div className="widget-vs">
                  <div className="flex flex-col text-white">
                      <ul className="list-none">
                        {data.rules
                          ? data.rules.map((rules) => (
                              <li key={rules}>{` ${rules}`}</li>
                            ))
                          : "Will be Updated Soon"}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="services section-bg mt-5">
          <div className="container " data-aos="fade-up">
            <div
             className="mb-4"
            >
              <h4
               className="text-2xl font-bold mb-2"
              >
                Sports Coordinator
              </h4>
            </div>

            <div className="row mt-3 justify-evenly">
              <sportsCoordinator
                name={
                  data.coordinator_Name1 ? data.coordinator_Name1 : ""
                }
                position={data.position1 ? data.position1 : ""}
                image={
                  data.coordinator1_image ? data.coordinator1_image : ""
                }
              />
              <sportsCoordinator
                name={
                  data.coordinator_Name2 ? data.coordinator_Name2 : ""
                }
                position={data.position2 ? data.position2 : ""}
                image={
                  data.coordinator2_image ? data.coordinator2_image : ""
                }
              />
            </div>

            <div
             className="mb-4"
            >
              <h4
               className="text-2xl font-bold mb-2"
              >
                Schedule of Matches
              </h4>
            </div>
            <div>
              <GlowingButton text={"Go to Matches page"} toLink={"/matches/"+key}/>
              <div className="mt-12">
                <h4 className="text-white font-bold mt-12 p-4 bg-red-600 inline-flex">
                  BOYS
                </h4>
              </div>
              <div  className="flex flex-col justify-center pt-4">
                <img
                  src={
                    data.boysMatchSchedule
                      ? data.boysMatchSchedule
                      : "https://i.ibb.co/s3xr1zz/Screenshot-2023-09-07-034542.png"
                  }
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <div>
              <div>
                <h4
                 className="text-2xl font-bold mb-2">
                
                  GIRLS
                </h4>
              </div>
              <div
                 className="flex flex-col justify-center pt-4" 
              >
                <img
                  src={
                    data.girlsMatchSchedule
                      ? data.girlsMatchSchedule
                      : "https://i.ibb.co/s3xr1zz/Screenshot-2023-09-07-034542.png"
                  }
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomSport;