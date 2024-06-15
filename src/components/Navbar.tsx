import React from "react";
import "./Navbar.css";

function Navbar () {
    return (
<div className="navbar">
<span>Home ist jetzt Buena</span>
<div className="navbar-btns">
<button>Einloggen</button>
<p>So funktioniert's</p>
<p>Über Buena</p>
<p>Jobs</p>
<img src="./buena_logo.png" alt="buena logo" />
</div>
</div>
)}

export default Navbar;