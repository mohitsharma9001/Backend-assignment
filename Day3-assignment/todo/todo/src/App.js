
import './App.css';
import { Todoinput } from './todolist/Todoinput';
import { Todolist } from './todolist/Todolist';

function App() {
  return (
    <div className="App">
      <Todoinput/>
     <Todolist/>
    </div>
  );
}

export default App;
