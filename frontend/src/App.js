import styles from "./App.module.css";
import NavBar from "./components/Navbar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/signin" render={() => <h1>Sign in</h1>} />
          <Route exact path="/signup" render={() => <h1>Sign up</h1>} />
          <Route exact path="/yarns" render={() => <h1>Gaming Yarns</h1>} />
          <Route exact path="/blog" render={() => <h1>Blog</h1>} />


          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;