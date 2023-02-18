import React,{useState} from "react";

export default function TextForm(props) {
  const handleUpClick=()=>{
    //console.log("Upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)   //using state function
    props.showAlert("Converted to Upper case!","success");
  }
  const handleLoClick=()=>{
    //console.log("lower case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)   //using state function
    props.showAlert("Converted to lower case!","success");
  }
  const handleCopy=()=>{
    //console.log("lower case was clicked" + text);
    // let text=document.getElementById("myBox");
    // text.select();   //using state function
    // navigator.clipboard.writeText(text.value);
    // props.showAlert("Text has been copied!","success");
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!","success")
  }
  const handleClearClick=()=>{
    let newText = '';
    setText(newText)   //using state function
    props.showAlert("Text has been cleared!","success");
  }
  const handleOnChange=(event)=>{
    console.log("on change")
    setText(event.target.value)
  }
  const[text,setText] = useState(''); //making a state named text
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}} >
      <h1 >{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='light'?'white':'#13466e',color:props.mode==='dark'?'white':'#042743'}}
            
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}> Convert to uper case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}> Convert to lower case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}> Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and {text.length} characters</p>   
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p> 
      <h2>Preview</h2>
      <p>{text.length>0 ? text:"Enter something in the something about to preview it here"}</p>
    </div>
    </>
  );
}
//if we did'nt make onchange function then we can't write it so it is compulsory so that user can type something in textarea.
