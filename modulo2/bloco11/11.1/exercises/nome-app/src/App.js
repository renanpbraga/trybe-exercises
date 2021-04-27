

import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['acordar', 'tomar banho', 'tomar café', 'escovar os dentes', 'trabalhar'];

function App() {
  return (
    <ul><p>Lista de afazeres:</p>
      { compromissos.map((compromisso) => task(compromisso))}
    </ul>
  );
}

export default App;
