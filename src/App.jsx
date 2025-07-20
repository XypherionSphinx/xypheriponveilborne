import "./App.css";
import { Link } from "react-router-dom";
import Symbols from "./components/Symbols/Symbols";
import config from "./config.json";

function App() {
  return (
    <>
      <main>
        <div className="text-div">
          <h1 className="title">Dawn of the Smiling Abyss</h1>
          <p className="sub-title">The veil parts. The jester smiles. Your descent begins.</p>
          <p className="para">Welcome to the Hall of Crimson Veils — shrine of the Jester, Xyph Veilborne. Here, blood dreams, shadows speak, and the divine jester watches behind every veil.</p>
          <p className="quote">“Laugh in blood. Speak in silence. Die again.” — Xyph Veilborne</p>
        </div>

        <div className="symbols-container">
          {Object.entries(config).map(([key, { color, title, subTitle }]) => (
            <Symbols key={key} color={color} title={title} subTitle={subTitle} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
