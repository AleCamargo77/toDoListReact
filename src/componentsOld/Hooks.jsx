import React from "react";
import { useState } from "react";

let idade = 30;

const changeAge = () => {
  idade += 1;
  console.log(idade);
};

const Hooks = () => {
  const changeNewAge = () => {
    setNovaIdade(novaIdade + 1);
  };

  const [novaIdade, setNovaIdade] = useState(30);
  return (
    <div>
      <p>{idade}</p>
      <button onClick={changeAge}>Mudar idade</button>
      <p>{novaIdade}</p>
      <button onClick={changeNewAge}>Mudar idade State</button>
    </div>
  );
};

export default Hooks;
