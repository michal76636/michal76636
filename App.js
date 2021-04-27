import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signUp';
import PictureOfTheDay from './components/pictureOfTheDay';
import DisplayImage from './components/DisplayImage';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import History from './components/history';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Login />
            </Route>

            <Route path='/signUp'>
              <SignUp />
            </Route>

            <Route path='/pictureOfTheDay'>
              <PictureOfTheDay />
            </Route>
          
            <Route path='/DisplayImage'>
              <DisplayImage />
            </Route>

            <Route path='/history'>
               <History />
            </Route>

          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
