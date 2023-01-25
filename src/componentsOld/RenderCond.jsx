import React from "react";

const RenderCond = ({ x }) => {
  return (
    <>
      {x > 5 && <p>X é maior que 5</p>}
      {x > 5 ? <p>X é um número alto</p> : <p>numero baixo</p>}
    </>
  );
};

export default RenderCond;
