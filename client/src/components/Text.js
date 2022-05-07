import { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import Button from "./Button";
import "./Text.scss";

export default function Text() {
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();
  // const { translate } =

  console.log("value => " + value);
  console.log("setValue => " + setValue);
  console.log("spesch => " + speak);
  // console.log("useSpeechSynthesis => " + useSpeechSynthesis);

  return (
    <div className="speech">
      <div className="title">
        <h2>Text To Speech Converter</h2>
      </div>
      <div className="text-box">
        {/* -----TITLE---------- */}
        <textarea
          rows="1"
          value={value}
          onChange={(e) => setValue(value)}
          placeholder="Title"
        ></textarea>
        {/* -----TEXTAREA---------- */}
        <textarea
          rows="10"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Write Here....."
        ></textarea>
      </div>
      <div className="bttn">
        {/* -----TITLE---------- */}
        <Button id="read" onClick={() => speak({ text: value })}>
          Read
        </Button>
        {/* -----Translate Text---------- */}
        <Button id="translate" onClick={() => speak({ text: value })}>
          Translate
        </Button>
        {/* -----Browse TEXT/File---------- */}
        <Button id="upload" onClick={() => speak({ text: value })}>
          Browse
        </Button>
        {/* -----Text/File download---------- */}
        <Button id="download" onClick={() => speak({ text: value })}>
          Download
        </Button>
      </div>
      <div className="translation-box">
        {/* -----Translation TextArea---------- */}
        <textarea />
      </div>

    </div>
  );
}
