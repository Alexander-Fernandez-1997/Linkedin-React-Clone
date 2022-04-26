import "./App.css";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
