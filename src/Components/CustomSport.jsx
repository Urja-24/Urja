import React from "react";
import SportsHeader from "./AnimatedHeading";
import { Link, useParams } from "react-router-dom";
import data from "../assets/sports.json";
import SportsPointTable from "./CustomSportsTable";
import { useEffect, useState } from "react";

const ApiList = {
  "Volleyball": "https://script.googleusercontent.com/a/macros/nitjsr.ac.in/echo?user_content_key=5f4XU_fhZrab-014L3ktPnj_QTrtfXHtlwAcdOXU8bfpwYSdzEv9WJNd_lv9r55NiZIWt1tvIkBBR-J_ggg-XXyOrMeiXSWkOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBwKtDEchUn_-0muFwt44re68n4RAo2RJx0hRRMaDJ304ELZrQuBEXfC5MNvDrYSUjkepCRQSBgBI-YXqwObl8oALk1J64SlUzsqk-xj79x4v_XyUhD02b34q5PptIa6mTc_ScPTHfLrg&lib=MbFnQ52PhHg_rVPRUndImKFkwFfR2TN0r",
  "Lawn Tennis": "https://script.googleusercontent.com/a/macros/nitjsr.ac.in/echo?user_content_key=yOBif5TacXdnnmLePGpGfHPZMF4jV5p9DGE3uJfK1H2HCzbAvUZYsePNgcmZAGogT8yfP59TsgXlrDNKCWfMKYlimbcRFYUTOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBwKtDEchUn_-0muFwt44re68n4RAo2RJyiesk_7tlDzUtZ5D3kDo3wNdn2tGSrcBnVJzfmYqIr5DxQA6gtOvI6TOnmnDpi0vvt6fOYl3_2dKhIjWQezW0BvZPL_zXFFKnc_ScPTHfLrg&lib=MbFnQ52PhHg_rVPRUndImKFkwFfR2TN0r",
  "Badminton": "https://script.googleusercontent.com/a/macros/nitjsr.ac.in/echo?user_content_key=pIKkSFkjHlrBkjPSAJk4XzzPZErCLNalUw5p0y-0ayHT0RQjBaKp5OkU7Kb3znLM9zlxr7K3R__lrDNKCWfMKSflh6TzACuDOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBwKtDEchUn_-0muFwt44re68n4RAo2RJxfrOCmyJRl42gK3_P8cafEperNGNy2ySrLT9QKDYuoDCfeDcZDYuDSCjCYOliO3u2Nr2nQkMJeFO4Fc6_OqzKq0nnQPoELy_vc_ScPTHfLrg&lib=MbFnQ52PhHg_rVPRUndImKFkwFfR2TN0r",
  "Basketball": "https://script.googleusercontent.com/a/macros/nitjsr.ac.in/echo?user_content_key=-TiJNS2VtMKXrdOGrc9v3l5sgaXFPpQNAgG9b5K1fe3Wz9G5PEsr5eyqR2E32D3-IgMwMFHdfX7h2TOo-mqCcOk50whW2CfROJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBwKtDEchUn_-0muFwt44re68n4RAo2RJyudaHpIzn0LOfG8ah-IIf3M0aH4b1PltyPB0JI1acK0IE0s9WoL-uYUxEQ3S0mFNnm-BRqLBjDS3qK_pRS4TEnrRtJxFxl5lbc_ScPTHfLrg&lib=MbFnQ52PhHg_rVPRUndImKFkwFfR2TN0r",
  "Hockey": "https://script.googleusercontent.com/a/macros/nitjsr.ac.in/echo?user_content_key=37u0QQCXEyoJ7-aGNttYVHHY-DKQ4gKXO0LcY4n4OuKSeW6vP4vqsTyUyAGTEISFnFYBdtxhWb4bIAEWcqEVZpem6gXN7ERdOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBwKtDEchUn_-0muFwt44re68n4RAo2RJy2f40XGLzRCeDK3XZzDOIpzqWRAb-p9aeTeSBA8cMiA1z-KjaFBfIQ4HSLU4SvKLycwiziA3Gu220JgfJGwICnHYEj5-aPbazc_ScPTHfLrg&lib=MbFnQ52PhHg_rVPRUndImKFkwFfR2TN0r"
}

function CustomSport() {

  const { key } = useParams();


  const sportName = data[key].title;

  const [scores, setScores] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(sportName)
    const fetchScore = async () => {

      const csvUrl = ApiList[sportName];

      setLoading(true);

      try {

        const response = await fetch(csvUrl, {

          method: "GET",

        });

        const data = await response.json();

        const transformedData = Object.keys(data).reduce((acc, key) => {
          acc[key] = data[key].map((item) => {
            return {
              team: item.Team,
              points: item.Points
            };
          });
          return acc;
        }, {});

        setScores(transformedData);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    fetchScore();

  }, [key]);


  return (

    <div className="mt-40">

      <div>

        <SportsHeader heading={data[key].title} />

      </div>


      <div className="text-white px-2 md:max-w-[75vw] mx-auto">

        <div>

          <p className="mb-2 mx-6">

            " {data[key].quote} "<br />

            {data[key].description}

          </p>

        </div>

        {loading ? (

          <div className="flex justify-center">

            <div role="status">

              <svg

                aria-hidden="true"

                class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"

                viewBox="0 0 100 101"

                fill="none"

                xmlns="http://www.w3.org/2000/svg"

              >

                <path

                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100. 591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"

                  fill="currentColor"

                />

                <path

                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"

                  fill="currentFill"

                />

              </svg>

              <span class="sr-only">Loading...</span>

            </div>

          </div>

        ) : (

          Object.keys(scores).map((category, index) => (

            <SportsPointTable

              key={index}

              Title={`${category.charAt(0).toUpperCase() + category.slice(1)} Point table`}

              sportName={sportName}

              tableData={scores[category]}

            />

          ))

        )}

        <div className="flex flex-col mt-8">
          <h2 className="text-[#F5DEB3] mb-4 underline underline-offset-4 text-xl">
            Previous Year's Results
          </h2>
          {data[key].PreviousYearResults.map((results) => (
            <>
              <h2 className="text-[#F5DEB3] ml-4 my-2">
                {data[key].title} ({results.title})
              </h2>
              <table className="min-w-full table-auto border-collapse border border-gray-500">
                <thead
                  style={{
                    backgroundImage:
                      "url('https://i.postimg.cc/Vk7WZy9J/wooden-bg.jpg')",
                    backgroundColor: "#333",
                  }}
                >
                  <tr className="text-white">
                    <th className="border border-gray-200 px-4 py-2">
                      Position
                    </th>
                    <th className="border border-gray-200 px-4 py-2">Team</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {results.winners.map((row, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? "bg-[#444]" : "bg-[#555]"
                        }`}
                    >
                      <td className="border border-gray-200 px-4 py-2 text-center">
                        {row.position}
                      </td>
                      <td className="border border-gray-200 px-4 py-2 text-center">
                        {row.team}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ))}
        </div>
        <div className="container mx-auto p-4">
          <h2 className="text-[#F5DEB3] mb-4 underline underline-offset-4 text-xl">
            Sports Coordinator
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {data[key].coordinator.map((ele, index) => (
              <div key={index} className="avatar">
                <img
                  src={ele.image}
                  alt={`Sports Coordinator ${index + 1}`}
                  loading="lazy"
                  className="h-32 w-32 md:h-40 md:w-40 object-cover mx-auto rounded-full"
                />

                <div className="text-center mt-2">
                  <h3 className="text-lg font-bold">{ele.name}</h3>

                  <p className="text-sm">{ele.position}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-[75vw] flex justify-center mt-4">
            <Link className="mx-4" to={`/register/${key}`}>
            </Link>
          </div>

        </div>


        <div className="flex flex-col md:flex-row justify-center gap-5">
          <div className="bg-[#F5DEB3] rounded shadow-md py-3 px-12 text-black hover:scale-110 transition-transform ease-linear duration-300">
            <button
              className="flex gap-x-2 underline underline-offset-4"
              onClick={() => {
                window.open(data[key].pdfurl, '_blank');
              }}
            >
              <h3 className="text-lg text-center font-bold">Rulebook</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>
          </div>
          <div className="bg-[#F5DEB3] rounded shadow-md py-3 px-12 text-black hover:scale-110 transition-transform ease-linear duration-300">
            <button
              className="flex gap-x-2 underline underline-offset-4"
              onClick={() => {
                window.open(data[key].fixture, '_blank');
              }}
            >
              <h3 className="text-lg text-center font-bold">Fixture</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomSport;
