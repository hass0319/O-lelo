import axios from "axios";
import React, {useEffect, useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import NavbarComponent from "../../components/Navbar";
import useSpeechToText from "react-hook-speech-to-text";

function SpeechToText() {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    setResults,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });
  const [resultStr, setResultStr] = useState("");

  useEffect(() => {
    let str = "";
    console.log(interimResult);
    results.map(item => {
      str += item.transcript + " ";
    });
    setResultStr(str);
  }, [results]);

  function download(text) {
    const url = window.URL.createObjectURL(
      new Blob([text], {
        type: "text/plain;charset=utf-8",
      })
    );
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "speech_to_text.txt");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div>
      <Container>
        <div className="row">
          <div className="col-12 d-flex justify-content-center my-5">
            <h1>Speech to Text</h1>
          </div>
        </div>
        <div className="row form-text-to-speech">
          <div className="col-12">
            <Row className="my-3 d-flex">
              <Col md={6}>
                <Button
                  className="btn btn-danger w-75 mr-5"
                  type="submit"
                  onClick={isRecording ? stopSpeechToText : startSpeechToText}
                >
                  {isRecording ? "Stop Recording" : "Start Record Text"}
                </Button>&nbsp;&nbsp;&nbsp;
                <Button
                  className="btn btn-primary ml-5"
                  type="button"
                  onClick={() => {
                    setResultStr("");
                    setResults([])
                  }}
                  disabled={interimResult}
                >
                  Clear
                </Button>
              </Col>
            </Row>
            <Row className="my-3">
              <Col md={12}>
                <Form.Group as={Col} md="4" controlId="text" className="w-100">
                  <Form.Label>Text</Form.Label>
                  <textarea
                    required
                    as="textarea"
                    type="text"
                    className="form-control"
                    placeholder="Hello"
                    value={
                      interimResult ? resultStr + interimResult : resultStr
                    }
                    rows="8"
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="my-3">
              <Col md={2}>
                  <Button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => {
                      download(resultStr, "speech_to_text.txt", "text/plain");
                    }}
                  >
                    Save Recorded Text
                  </Button>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SpeechToText;
