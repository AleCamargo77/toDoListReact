import React from "react";

const List = () => {
  const items = [
    {
      id: 1,
      name: "Matheus",
    },
    {
      id: 2,
      name: "Ale",
    },
    {
      id: 3,
      name: "Van",
    },
  ];
  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>
          {item.id} - {item.name}
        </p>
      ))}
    </div>
  );
};

export default List;
