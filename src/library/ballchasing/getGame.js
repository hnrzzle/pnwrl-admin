import { BALLCHASING_API_URL } from "./index";
import mockData from "./mockData/game1";

const getGame = async (id) => {
  console.log(id);
  console.log("returning mock response");
  return await mockData;
};

// const getGame = async (id) => {
//   console.log(BALLCHASING_API_URL);
//   const res = await fetch(`${BALLCHASING_API_URL}/replays/${id}`, {
//     method: "GET",
//     headers: {
//       Authorization: process.env.BALLCHASING_API_URL,
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Origin: "",
//     },
//   })
//     .then((res) => {
//       console.log(res.data);
//       return res.data;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   return res;
// };

export default getGame;
