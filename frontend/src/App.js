import './App.css';
import MainPage from './components/MainPage';
import SinglePage from './components/SinglePage';
import Product from './components/Product';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/products/:id">
        <SinglePage />
      </Route>
      <Route path="/">
        <MainPage />
      </Route>
      </Switch>
    </div>
  );
};

export default App;
