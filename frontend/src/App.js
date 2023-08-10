import styles from "./App.module.css";
import NavBar from "./components/Navbar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import PodcastPostsPage from "./pages/podcast-posts/PodcastPostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import NotFound from "./components/NotFound";
import PodcastPostCreateForm from "./pages/podcast-posts/PodcastPostCreateForm";
import PodcastPostPage from "./pages/podcast-posts/PodcastPostPage";
import PodcastPostEditForm from "./pages/podcast-posts/PodcastPostEditForm";




function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

 

  return (
   
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <PodcastPostsPage />} />
          <Route exact path="/signin" render={() => < SignInForm />}/>
          <Route exact path="/signup" render={() => < SignUpForm />}/>
          <Route exact path="/yarns" render={() => <h1>Gaming Yarns</h1>} />
          <Route
            exact
            path="/blog"
            render={() => (
              <PostsPage message="No results found. Adjust the search keyword." />
            )}
          />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          
          <Route exact path="/podcastposts/create" render={() => <PodcastPostCreateForm />} />
          <Route exact path="/podcastposts/:id" render={() => <PodcastPostPage />} /> 
          <Route exact path="/podcastposts/:id/edit" render={() => <PodcastPostEditForm />} />   
          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>
   
  );
}

export default App;