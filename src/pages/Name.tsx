import React from "react";

function Name () {
    return (
<div className="Name">
<form className="form">
          <label>Name</label>
          <input
            className="form-control mb-4"
            type="text"
            name="name"
            placeholder="Your Name"
          />
          </form>

<button>Go back</button>
<button>Continue</button>
</div>
)}

export default Name;