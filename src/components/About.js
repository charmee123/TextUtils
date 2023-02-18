import React, { useState } from "react";

export default function About() {
  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "1px solid white",
  });

  const [btntext, setbtntext] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setbtntext("Enable Light Mode");
    } else {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtntext("Enable Dark Mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              TextUtils: Your one-stop solution for quick and easy text manipulation.
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>
                Are you tired of spending hours manually manipulating text? Do
                you need a quick and easy solution to streamline your workflow?
              </strong>{" "}
              Look no further than TextUtils! Our intuitive online platform
              offers a range of powerful tools to help you edit text quickly and
              efficiently.But that's not all - TextUtils also allows you to
              convert text to uppercase or lowercase. Need to capitalize a
              title? Want to ensure your email is all lowercase for a more
              casual tone? With TextUtils, it's as simple as a click of a
              button.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Say goodbye to tedious text editing - TextUtils has you covered!
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              And because we know that time is money, we've designed our
              platform to be lightning-fast. You won't be left waiting for your
              text to load or struggling to navigate a complicated interface.
              Instead, you'll enjoy a smooth, streamlined experience that makes
              text manipulation a breeze.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Copy, clear, and convert with ease - TextUtils makes text manipulation a breeze.
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              So whether you're a student, a professional, or just someone who
              needs to edit text on a regular basis, TextUtils is the tool for
              you. Try it today and discover just how much time and effort you
              can save!Need to edit text in a hurry? TextUtils has got your back.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button onClick={toggleStyle} className="btn btn-primary my-3 mx-1">
          {" "}
          {btntext}
        </button>
      </div>
    </div>
  );
}
