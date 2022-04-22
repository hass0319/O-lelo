import axios from "axios";
import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import NavbarComponent from "../../components/Navbar";
const baseURl = "http://localhost:3005";

function TextToSpeech() {
  const [validated, setValidated] = useState(false);
  const [text, setText] = useState("demo");
  const [lang, setLang] = useState("en");
  const [play, setPlay] = useState(false);

  function download(url) {
    axios({
      url: url,
      method: "GET",
      responseType: "blob",
    }).then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "music.mp3");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      axios
        .post(baseURl + "/text-to-speech", {
          lang,
          text,
        })
        .then(resp => {
          return resp.data;
        })
        .then(resp => {
          if (resp.success) {
            if (play) {
              download(baseURl + resp.fileName, "_blank");
              // window.open(baseURl + resp.fileName,'_blank');
            } else {
              const audioTune = new Audio(baseURl + resp.fileName);
              audioTune.play();
            }
          }
        });
      setValidated(true);
    }
  };

  return (
    <div>
      <Container>
        <div className="row">
          <div className="col-12 d-flex justify-content-center my-5">
            <h1>Online Text to Speech Converter</h1>
          </div>
        </div>
        <div className="row form-text-to-speech">
          <div className="col-12">
            <Form validated={validated} onSubmit={handleSubmit}>
              <Row className="my-3">
                <Col md={12}>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="text"
                    className="w-100"
                  >
                    <Form.Label>Text</Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      type="text"
                      placeholder="Hello"
                      defaultValue=""
                      rows="8"
                      onChange={e => {
                        setText(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="my-3">
                <Col md={12}>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="langs"
                    className="w-100"
                  >
                    <Form.Label>Select Language of Voice:</Form.Label>
                    <Form.Select
                      required
                      type="select"
                      onChange={value => {
                        setLang(value.target.value);
                      }}
                    >
                      <option value="af">Afrikaans</option>
                      <option value="sq">Albanian</option>
                      <option value="ar">Arabic</option>
                      <option value="hy">Armenian</option>
                      <option value="ca">Catalan</option>
                      <option value="zh">Chinese</option>
                      <option value="zh-cn">Chinese (Mandarin/China)</option>
                      <option value="zh-tw">Chinese (Mandarin/Taiwan)</option>
                      <option value="zh-yue">Chinese (Cantonese)</option>
                      <option value="hr">Croatian</option>
                      <option value="cs">Czech</option>
                      <option value="da">Danish</option>
                      <option value="nl">Dutch</option>
                      <option value="en" selected>English </option>
                      <option value="en-au">English (Australia)</option>
                      <option value="en-uk">English (United Kingdom)</option>
                      <option value="en-us">English (United States)</option>
                      <option value="eo">Esperanto</option>
                      <option value="fi">Finnish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="el">Greek</option>
                      <option value="ht">Haitian Creole</option>
                      <option value="hi">Hindi</option>
                      <option value="hu">Hungarian</option>
                      <option value="is">Icelandic</option>
                      <option value="id">Indonesian</option>
                      <option value="it">Italian</option>
                      <option value="ja">Japanese</option>
                      <option value="ko">Korean</option>
                      <option value="la">Latin</option>
                      <option value="lv">Latvian</option>
                      <option value="mk">Macedonian</option>
                      <option value="no">Norwegian</option>
                      <option value="pl">Polish</option>
                      <option value="pt">Portuguese</option>
                      <option value="pt-br">Portuguese (Brazil)</option>
                      <option value="ro">Romanian</option>
                      <option value="ru">Russian</option>
                      <option value="sr">Serbian</option>
                      <option value="sk">Slovak</option>
                      <option value="es">Spanish</option>
                      <option value="es-es">Spanish (Spain)</option>
                      <option value="es-us">Spanish (United States)</option>
                      <option value="sw">Swahili</option>
                      <option value="sv">Swedish</option>
                      <option value="ta">Tamil</option>
                      <option value="th">Thai</option>
                      <option value="tr">Turkish</option>
                      <option value="vi">Vietnamese</option>
                      <option value="cy">Welsh</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="my-3 d-flex">
                <Col md={6}>
                  <Button
                    className="btn btn-danger w-100"
                    type="submit"
                    onClick={() => {
                      setPlay(false);
                    }}
                  >
                    Play Audio
                  </Button>
                </Col>
                <Col md={6}>
                  <Button
                    className="btn btn-danger mx-2 w-100"
                    type="submit"
                    onClick={() => {
                      setPlay(true);
                    }}
                  >
                    Download Audio File
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TextToSpeech;