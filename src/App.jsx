import Profile from "./components/Profile";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles.css";

function App() {
  return (
    <div className="cv-container">
      <h1>Il mio CV</h1>
      <Profile />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
