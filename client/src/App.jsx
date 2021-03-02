import './App.css';
import HeaderContainer from "./Components/Header/HeaderContainer";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import AuthContainer from "./Components/Auth/AuthContainer";
import SheduleContainer from "./Components/Shedule/SheduleContainer";
import {useEffect} from "react";
import BoardContainer from "./Components/Board/BoardContainer";
import AlertMessageContainer from "./Components/AlertMessage/AlertMessageContainer";


function App(props) {
    const userLogIn = props.userLogIn

    useEffect(() => {
        userLogIn({
            "userId": localStorage.getItem('userId'),
            "token": localStorage.getItem('token')
        })
    }, [userLogIn])

  return (
      <Router>
          <HeaderContainer />
          <Switch>
              <Route exact path='/'>
                  <SheduleContainer />
                  <BoardContainer />
                  <AlertMessageContainer />
              </Route>
              <Route exact path='/auth'>
                  <AuthContainer />
              </Route>
          </Switch>
      </Router>
  )
}

export default App;
