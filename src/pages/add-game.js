import { useState } from "react";
import getGame from "../library/ballchasing/getGame";

const AddGame = () => {
  const [seriesLength, setSeriesLength] = useState("3");

  const onGameLengthChange = (event) => {
    setSeriesLength(event.target.value);
    console.log("series length", seriesLength);
    console.log("were changing yo");
    console.log(event);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      ballchasing: event.target.ballchasing.value,
    };
    console.log(data.ballchasing);

    displayData(data.ballchasing);
  };

  const displayData = async (gameId) => {
    const gameData = await getGame(gameId);
    console.log("displaying data", gameData);
  };

  return (
    <div>
      <h2>Enter Ballchasing Replay Links</h2>
      <form>
        <h3>How many games did this series run?</h3>
        <div>
          <input
            onChange={onGameLengthChange}
            type="radio"
            id="3"
            name="gameLength"
            value="3"
            checked={seriesLength === "3"}
          />
          <label htmlFor="3">3</label>
          <input
            onChange={onGameLengthChange}
            type="radio"
            id="4"
            name="gameLength"
            value="4"
            checked={seriesLength === "4"}
          />
          <label htmlFor="4">4</label>
          <input
            onChange={onGameLengthChange}
            type="radio"
            id="5"
            name="gameLength"
            value="5"
            checked={seriesLength === "5"}
          />
          <label htmlFor="5">5</label>
          <input
            onChange={onGameLengthChange}
            type="radio"
            id="6"
            name="gameLength"
            value="6"
            checked={seriesLength === "6"}
          />
          <label htmlFor="6">6</label>
          <input
            onChange={onGameLengthChange}
            type="radio"
            id="7"
            name="gameLength"
            value="7"
            checked={seriesLength === "7"}
          />
          <label htmlFor="7">7</label>
        </div>
      </form>
      <form onSubmit={handleSubmit}>
        {Array.from({ length: +seriesLength }).map((_item, index) => (
          <>
            <label htmlFor={`ballChasingGame${index + 1}`}>
              Game {index + 1}:
            </label>
            <input
              type="text"
              id={`ballChasingGame${index + 1}`}
              name={`ballChasingGame${index + 1}`}
            />
          </>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddGame;
