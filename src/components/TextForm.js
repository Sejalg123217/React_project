import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
    
    const handleLoClick = () => {
    console.log("Lowercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

     const handleClearClick = () => {
    console.log("Clear text was clicked " + text);
    let newText = "";
    setText(newText);
  };
       const handleDownload = () => {
  const element = document.createElement("a");
  const file = new Blob([text], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = "myFile.txt";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
   const handleCopy = () =>{
   console.log("I am copy");
   var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);

   }
    const handleExtraSpaces = () =>{
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(" "));
    }

  const handleOnChange = (event) => {
   console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
         <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownload}>
  Download Text
</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>

      <div className="container">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((e) => e.length !== 0).length} words and{" "}
          {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((e) => e.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in thebox above to preview it here"}</p>
      </div>

      
    </>
  );
}
