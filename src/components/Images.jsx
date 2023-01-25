import React from "react";

import almofada from "../assets/almofada.jpg";

const Images = () => {
  return (
    <div>
      <img src="/almofada.jpg" alt="Almofada" />
      <img src={almofada} alt="Almofada" />
    </div>
  );
};

export default Images;
