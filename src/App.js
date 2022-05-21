import Costs from "./components/Costs/Costs";

const App = () => {
  const costs = [
    {
      date: new Date(2021, 11, 2),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      date: new Date(2021, 2, 22),
      description: "MacBook",
      amount: 1999.99,
    },
    {
      date: new Date(2021, 1, 2),
      description: "Джинсы",
      amount: 49.99,
    },
  ];
  return (
    <div>
      <h1>My great React App</h1>
      <Costs costs={costs} />
    </div>
  );
};

export default App;
