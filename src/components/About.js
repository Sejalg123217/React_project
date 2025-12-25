import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h1 className="my-3">About Us</h1>

      <div className="accordion" id="accordionPanelsStayOpenExample">

        {/* ITEM 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#item1"
            >
              Accordion Item #1
            </button>
          </h2>
          <div id="item1" className="accordion-collapse collapse show">
            <div className="accordion-body">
              This is first accordion item.
            </div>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#item2"
            >
              Accordion Item #2
            </button>
          </h2>
          <div id="item2" className="accordion-collapse collapse">
            <div className="accordion-body">
              This is second accordion item.
            </div>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#item3"
            >
              Accordion Item #3
            </button>
          </h2>
          <div id="item3" className="accordion-collapse collapse">
            <div className="accordion-body">
              This is third accordion item.
            </div>
          </div>
        </div>

      </div>

      <button onClick={toggleStyle} className="btn btn-primary my-3">
        {btnText}
      </button>
    </div>
  );
}
