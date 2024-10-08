import React, { useEffect } from "react";

// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// **** In data.json image Url needs to be updated for the sports coordinator one sample will be done **** //

const CustomMatches = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { key } = useParams();

  return (
    <>
      <div className="site-section " style={{ backgroundColor: "#222831" }}>
        <div className="container" style={{ marginTop: "2em" }}>

          <div className="mt-5 pt-5">
            {/* <AnimatedHeading heading={jsonData.title ? jsonData.title : ""} /> */}
          </div>
          {/* <div className="row mb-5">
            <div
              className="col-lg-12 d-flex flex-column justify-content-center"
              style={{
                padding: "16px 20px",
                color: "#fff",
              }}
            >
              <h5
                style={{
                  color: "#ee1e46",
                  marginBottom: "20px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                "{jsonData.quote?jsonData.quote:""}"
              </h5>
              <p>
                {jsonData.description ? jsonData.description : ""}
              </p>
            </div>
          </div> */}

          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="widget-next-match">
                <div
                 
                >
                  <h4
                  
                  >
                    Rules
                  </h4>
                </div>
                {/* <div className="widget-body mb-3">
                  <div className="widget-vs">
                    <div
                      className="d-flex align-items-left justify-content-around justify-content-between w-100"
                      style={{ color: "white", flexDirection: "column" }}
                    >
                      <ul style={{ listStyleType: "none" }}>
                        {jsonData.rules
                          ? jsonData.rules.map((rules) => (
                              <li key={rules}>{` ${rules}`}</li>
                            ))
                          : "Will be Updated Soon"}
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <section className="services section-bg mt-5">
          <div className="container " data-aos="fade-up">
            <div
             
            >
              <h4
              
              >
                Sports Coordinator
              </h4>
            </div>

            {/* <div className="row mt-3 justify-content-evenly">
              <SportsCoordinator
                name={
                  jsonData.coordinator_Name1 ? jsonData.coordinator_Name1 : ""
                }
                position={jsonData.position1 ? jsonData.position1 : ""}
                image={
                  jsonData.coordinator1_image ? jsonData.coordinator1_image : ""
                }
              />
              <SportsCoordinator
                name={
                  jsonData.coordinator_Name2 ? jsonData.coordinator_Name2 : ""
                }
                position={jsonData.position2 ? jsonData.position2 : ""}
                image={
                  jsonData.coordinator2_image ? jsonData.coordinator2_image : ""
                }
              />
            </div> */}

            <div
             
            >
              <h4
               
              >
                Schedule of Matches
              </h4>
            </div>
            {/* <div>
              <GlowingButton text={"Go to Matches page"} toLink={"/matches/"+key}/>
              <div>
                <h4
                  style={{
                    margin: "0px",

                    fontWeight: "700",
                    color: "#fff",
                    marginTop: "50px",
                    padding: "16px 20px",
                    backgroundColor: "#ee1e46",
                    display: "inline-flex",
                  }}
                >
                  BOYS
                </h4>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  paddingTop: "4%",
                }}
              >
                <img
                  src={
                    jsonData.boysMatchSchedule
                      ? jsonData.boysMatchSchedule
                      : "https://i.ibb.co/s3xr1zz/Screenshot-2023-09-07-034542.png"
                  }
                  alt=""
                  srcset=""
                />
              </div>
            </div> */}
            <div>
              <div>
                <h4
                 
                >
                  GIRLS
                </h4>
              </div>
              {/* <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  paddingTop: "4%",
                }}
              >
                <img
                  src={
                    jsonData.girlsMatchSchedule
                      ? jsonData.girlsMatchSchedule
                      : "https://i.ibb.co/s3xr1zz/Screenshot-2023-09-07-034542.png"
                  }
                  alt=""
                  srcset=""
                />
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomMatches;