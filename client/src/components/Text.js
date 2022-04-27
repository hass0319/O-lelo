import { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import Button from "./Button";
import "./Text.scss";

export default function Text() {
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();

  console.log("value => " + value);
  console.log("setValue => " + setValue);
  console.log("spesch => " + speak);
  // console.log("useSpeechSynthesis => " + useSpeechSynthesis);

  return (
    <div className="speech">
      <div className="group">
        <h2>Text To Speech Converter</h2>
      </div>
      <div className="group">
        <textarea
          rows="10"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
      <div className="group">
        <Button onClick={() => speak({ text: value })}>
          Read
        </Button>
      </div>
    </div>
  );
}
