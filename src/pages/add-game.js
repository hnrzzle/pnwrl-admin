import getGame from "../library/ballchasing/getGame";

const AddGame = () => {
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="ballchasing">Ball Chasing Link:</label>
        <input type="text" id="ballchasing" name="ballchasing" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddGame;
