// Components
import Expenses from './components/Expenses/Expenses'

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Alquiler",
      amount: 60000,
      date: new Date(),
    },
    {
      id: "e2",
      title: "Tarjeta Visa",
      amount: 29500,
      date: new Date(),
    },
    {
      id: "e3",
      title: "Tarjeta MasterCard",
      amount: 24000,
      date: new Date(),
    },
    {
      id: "e4",
      title: "Expensas",
      amount: 13000,
      date: new Date(),
    },
  ];
  
  return (
    <div className="App">
      <h1> Gastos de Lobito </h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
