import axios from "axios";
import React, {useEffect, useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import NavbarComponent from "../../components/Navbar";
import useSpeechToText from 'react-hook-speech-to-text';

function SpeechToText() {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });
  const [resultStr, setResultStr] = useState('');

  useEffect(()=>{
    let str = ''
    console.log(interimResult)
    results.map((item)=>{
      str += item.transcript + ' '
    })
    setResultStr(str)
  },[results])

  return (
    <div>
      <Container>
        <div className="row">
          <div className="col-12 d-flex justify-content-center my-5">
            <h1>Online Speech to Text Converter</h1>
          </div>
        </div>
        <div className="row form-text-to-speech">
          <div className="col-12">
            <Row className="my-3 d-flex">
              <Col md={6}>
                <Button
                  className="btn btn-danger w-100"
                  type="submit"
                  onClick={isRecording ? stopSpeechToText : startSpeechToText}
                >
                  {isRecording? 'Stop Recording':'Start Record Text' }
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
                    value={interimResult? resultStr + interimResult: resultStr }
                    rows="8"
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SpeechToText;
