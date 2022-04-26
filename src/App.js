import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/App.css";
import { login, logout, selectUser } from "./features/userSlice";
import { Feed } from "./Feed";
import { auth } from "./firebase";
import { Header } from "./Header";
import { Login } from "./Login";
import { Sidebar } from "./Sidebar";
import { Widgets } from "./Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in
        dispatch(
          login({
            email: authUser.email,
            name: authUser.displayName,
            profilePic: authUser.photoURL,
            uid: authUser.uid,
          })
        );
      } else {
        // User is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
