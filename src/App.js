import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import TextToSpeech from "./pages/Text-to-Speech";
import SpeechToText from './pages/Speech-to-Text';
import NavbarComponent from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/text-to-speech" element={<TextToSpeech />} />
        <Route path="/speech-to-text" element={<SpeechToText />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
