import { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>Hi there</p>
      <input type="text" onChange={handleInput} data-cy="inputText" />
      <p data-cy="text">{text}</p>
    </div>
  );
};

export default Home;
