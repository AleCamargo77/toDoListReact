import React from "react";

const handleClick = () => {
  console.log("Clicou");
};

const AnotherComponent = () => {
  return (
    <div>
      <p>Segundo Componente</p>
      <button onClick={handleClick}>Evento de Click</button>
    </div>
  );
};

export default AnotherComponent;
