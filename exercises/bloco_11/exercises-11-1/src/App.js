import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
};

const commitments = ['Tomar remédio', 'Alimentar filhotes', 'Tomar banho', 'Estagiar', 'Café da manhã', 'Lavar a louça', 'Trybe'];

function App() {
  return (
    <div className="App">
      {commitments.map((commitment) => Task(commitment))}
    </div>
  );
}

export default App;
