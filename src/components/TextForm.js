import { paste } from "@testing-library/user-event/dist/paste";
import React, { useState } from "react"


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper case was Clicked "+text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("Converted to UpperCase","success");
    }
    const handleLoClick = () => {
        // console.log("Lower case was Clicked "+text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("Converted to LowerCase","success");
    }
    const handleLoUp = () => {
        // console.log("Lower case was Clicked "+text);
        let newText = "";
         text.split(' ').forEach((Element)=>{
            let cap=Element[0].toUpperCase()+Element.slice(1)+" ";
            newText+=cap;
        });
        setText(newText)
        props.showalert("Converted to First letter of Eachword to Capital","success");
    }
    const handleClearClick = () => {
        // console.log("Lower case was Clicked "+text);
        let newText = "";
        setText(newText)
        props.showalert("Text clear","success");
    }
    const handleCopyClick = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showalert("Text copy to clipboard","success");
    }
    const handlePasteClick = () => {
        let newText = navigator.clipboard.readText();
        setText(newText);
        props.showalert("Copy text on clipboard is Paste","success");
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert("Extra space remove","success");
    }
    const handlespeak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text=text;
        window.speechSynthesis.speak(newText);
        props.showalert("Speak by window","success");
    }
    const handlereplace = () => {
        let newText = prompt("Enter the word to be replaced:")
        let toberep=new RegExp(newText,'g');
        let torep=prompt("Enter the text that want to replace with:");
        let nw=text.replace(toberep,torep);
        setText(nw);
        props.showalert("All text replace","success");
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    // text="new text" //wrong way to change the text
    //setText={"new text"} //correct way to change the text

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#010118' , color : props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="10"></textarea>
                    </div>
                    <button className="btn btn-primary mx-1 my=0.5" onClick={handleUpClick}>Convert to uppercase</button>
                    <button className="btn btn-primary mx-1 my=0.5" onClick={handleLoClick}>Convert to lowercase</button>
                    <button className="btn btn-primary mx-1 my=0.5" onClick={handleLoUp}>First Letter Capital</button>
                    <button className="btn btn-primary mx-1 my=0.5" onClick={handleClearClick}>Clear</button>
                    <button className="btn btn-primary mx-1 my=0.5" onClick={handleCopyClick}>Copy</button>
                    <button className="btn btn-primary mx-1 my=0.5" onClick={handlePasteClick}>Paste</button>
                    <button className="btn btn-primary mx-1 my=0.5" onClick={handleExtraSpace}>Remove Extra Spaces</button>
                    <button className="btn btn-primary mx-1 my=0.5" onClick={handlereplace}>Replace</button>
                    <button className="btn btn-primary mx-1 my=0.5" onClick={handlespeak}>Speak</button>
                </div>
                <div className="container my-2">
                    <h2>Your text summary</h2>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{text.split(" ").length * 0.08} Minutes read</p>
                    <h2>Preview</h2>
                    <p>{text.length===0?"Enter something in text box above to preview it here":text}</p>
                </div>
            </div>
        </>
    )
}