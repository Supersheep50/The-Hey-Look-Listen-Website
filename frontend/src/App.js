import styles from "./App.module.css";
import NavBar from "./components/Navbar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";




function App() {
 

  return (
   
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/signin" render={() => < SignInForm />}/>
          <Route exact path="/signup" render={() => < SignUpForm />}/>
          <Route exact path="/yarns" render={() => <h1>Gaming Yarns</h1>} />
          <Route exact path="/blog" render={() => <h1>Blog</h1>} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
   
  );
}

export default App;