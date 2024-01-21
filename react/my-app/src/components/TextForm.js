import React, { useState } from "react";
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText] = useState("Name.");
    const[optext,setOPTExt]=useState("TEXT PLEASE");
  const handleClick = () => {
    alert("BUTTON CLICKED!!");
    setText("THANKS");
    let newtext=optext.toUpperCase();
    setOPTExt(newtext);
  };
  const handleChange=(event)=>{
    setText(event.target.value);
    console.log("changed nam")
    }
  const handleafterClick=(event)=>{
        console.log("clicked");
        setOPTExt(event.target.value);
  }
  return (
    <>
    <div className={`bg-${props.togglemode}`}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          {props.title}
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder={text}
          value={text}
            onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.heading}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={optext}
          onChange={handleafterClick}
        ></textarea>
      </div>
      <div>
        <button className="btn btn-primary" type="button" onClick={handleClick}>
          Click here only.
        </button>
      </div>
    </div>
    <div>
      recapsulation
    </div>
    <div>
      your text is {text.split(" ").length}
    </div>
    </>
  );
}

TextForm.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  title: "DEMO TITLE",
  heading: "DEMO HEADING.",
};
