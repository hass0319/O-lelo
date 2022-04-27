import React from "react";
import {Button, Container,} from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarComponent from "../../components/Navbar";
const baseURl = "http://localhost:3005";

function Homepage() {
  return (
    <div>
      <Container>
        <div class="jumbotron p-3 mt-1">
          <h1>Hello,</h1>
          <p>
          
          </p>
          <p>
          <Link className="btn btn-danger mx-2" to="/text-to-speech" >Text to Speech</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="btn btn-danger mx-2" to="/speech-to-text" >Speech to Text</Link>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Homepage;
