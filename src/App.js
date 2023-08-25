import logo from './logo.svg';
import './App.css';
import Heading from './Component/Heading';
import Logo from './Component/Logo';
import Parent from './Component/Parent';
import Input from './Component/Input';
import MealsProvider from './Component/MealsProvider';
import MealsList from './Component/MealsList';
import MealsCounter from './Component/MealsCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Logo/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Input />
      <Parent />
      <Heading/>

      <MealsProvider>
        <MealsList />
        <MealsCounter />
      </MealsProvider>

    </div>
  );

}

export default App;
