import './components/Header/Header.css';
import { Header } from './components/Header/Header';
import './App.css';

class Menu {
  text = '';

  constructor(text) {
    this.text = text;
  }
}

let arr = [
  new Menu('Item 1'),
  new Menu('Item 2'),
  new Menu('Item 3'),
  new Menu('Item 4'),
  new Menu('Item 5')
];

function App() {
  return (
    <div className="App">
      <Header items={arr} />
    </div>
  );
}

export default App;
