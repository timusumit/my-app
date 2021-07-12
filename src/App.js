import {Route} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import MainNavigation from './components/layout/MainNavigation';

function App() {

  return (
    <div>
     <MainNavigation/>
      <Switch>
      <Route path='/' exact={true}>
        <AllMeetupsPage></AllMeetupsPage>
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupPage></NewMeetupPage>
      </Route>
      <Route path='/favourites'>
        <FavouritesPage></FavouritesPage>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
