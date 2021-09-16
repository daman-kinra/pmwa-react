import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { userProvider } from "./user/User";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Error from "./pages/error/Error";
import Landing from "./pages/landing/Landing";
import Project from "./pages/project/Project";
import Register from "./pages/register/Register";
import Tasks from "./pages/task/Tasks";
function App() {
  const { token, user } = useContext(userProvider);
  if (!user && token) {
    return <h1>Loading....</h1>;
  }
  if (token) {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
            <Landing />
          </Route>
          <Route exact path="/app">
            <Home />
          </Route>
          <Route exact path="/project/:id">
            <Project />
          </Route>
          <Route exact path="/task/:id">
            <Tasks />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact>
            <Error token={token} />
          </Route>
        </Switch>
      </>
    );
  } else {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <h1>Login</h1>
            <Landing />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact>
            <Error token={token} />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
