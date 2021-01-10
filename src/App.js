import './App.css';
import UsersComponent from './components/UsersComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Authors from './components/Authors';

function App() {
  return (
    // <div className="App">
    //   <UsersComponent/>
    // </div>
    <>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={UsersComponent}/>
      <Route exact path='/authorList' component={Authors}/>
      <Redirect to='/'/>
    </Switch>
    </>
  );
}

export default App;
