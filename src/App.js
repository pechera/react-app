import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 2, 22),
    description: "MacBook",
    amount: 1999.99,
  },
  {
    id: "c1",
    date: new Date(2022, 2, 22),
    description: "iPhone",
    amount: 1999.99,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (costData) => {
    setCosts((prevCosts) => {
      return [costData, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
