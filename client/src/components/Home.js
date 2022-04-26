import Button from './Button';
import "./Home.scss";

export default function Home() {
  return (
    <div>
      <div className="open_text">
        <h1>ŌLELO  قوليلو</h1>
        <h1>An app that<br /> makes life<br />Eassier</h1>
      </div >
      <div className="text_bttn">
        <Button href="/text">Write to Me</Button>
        <p>Write and I'll be your voice</p>
      </div>
      <div className="speech_bttn">
        <Button>Talk to Me</Button>
        <p>Talk and I'll do the Writing</p>
        <h5>SignUp and your command is my</h5>
        <h3>Duty</h3>
      </div>
    </div>

  );
}
