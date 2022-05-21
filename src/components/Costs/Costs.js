import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostFilter from "./CostsFilter";
import React, { useState } from "react";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const changeYearHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter(
    (cost) => cost.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className="costs">
        <CostFilter year={selectedYear} onChangeYear={changeYearHandler} />
        {filteredCosts.map((cost) => (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Costs;
