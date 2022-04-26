import "./Navbar.scss"

export default function Navbar() {

  return (
    <div className="nav">

      <div className="logo-image">
        <a href="/" className="logo-image">
          <img src="Logo.png" className="img_log" alt="ŌLELO" />
        </a>
      </div>

      <ul className="nav1">
        <a href="/">Home</a>
        <a href="/Text">Text</a>
        <a href="/Speech">Speech</a>
      </ul>
      <ul className="nav2">
        <a href="/Login">Login</a>
        <a href="/Signup">Signup</a>
        <li className="dropdown">
          <button className="dropbtn link"><span>Username</span></button>
          <div className="dropdown-content">
            <center>
              <a href="Account">Account</a>
              <a href="/About">About</a>
            </center>
          </div>
        </li >
      </ul >
    </div >
  );
}