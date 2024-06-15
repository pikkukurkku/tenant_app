import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home () {
    return (
<div className="Home">
    <Navbar />

<p>Register with Buena and start booking apartments</p>
<Link to="/name">
<button>Register here</button>
</Link>
</div>
)}

export default Home;