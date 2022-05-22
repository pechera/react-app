import "./Diagram.css";
import DiagramBar from "./DiagramBar";

const Diagram = (props) => {
  const dataSetsValues = props.dataSets.map((dataSet) => dataSet.value);

  let maxMonthCost = Math.max(...dataSetsValues);

  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          label={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCost}
        />
      ))}
    </div>
  );
};

export default Diagram;
