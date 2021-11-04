import ListComponent from './listComponent';
import './App.css';

function App() {

  
  return (
    <div className="App">
      <ListComponent storage={JSON.parse(localStorage.getItem('bookmark'))} />
    </div>
  );
}

export default App;
