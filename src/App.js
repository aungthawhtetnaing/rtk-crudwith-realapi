
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import NavTest from "./Components/Navbar";
import UserEdit from './Components/UserEdit';
import UserDetails from './Components/UserDetails';
import Edittodo from './todo/Edittodo';
import CreateTodo from './todo/CreateTodo';
import NotFound from './NotFound';
function App() {

  return (
    <Router>
      <div className="App">
        <NavTest />
          <div className='content'>
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/create">
                  <Create/>
                </Route>
                <Route path="/user/:id">
                  <UserDetails/>
                </Route>
                <Route path="/useredit/:id">
                  <UserEdit/>
                </Route>
                <Route path="/addtodo/:id">
                  <CreateTodo/>
                </Route>
                <Route path="/edittodo/:id">
                  <Edittodo/>
                </Route>
                <Route path="*">
                  <NotFound/>
                </Route>
              </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
