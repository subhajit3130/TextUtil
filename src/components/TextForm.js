import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    // Declare a new state variable, which we'll call "text"
    const [text, setText] = useState("");

    const convertToUpperCase = () => {
        console.log("Convert to Upper Case has been called...");
        if ((text == null) || (text.length === 0) || (text === "Enter your text here...")) {
            alert("Please enter some data first");
        }
        else {
            let newText = text.toUpperCase();
            console.log("old text : " + text + " / new text : " + newText);
            setText(newText);
            props.showAlert("Converted to UPPERCASE", "success");
        }
    }

    const convertToLowerCase = () => {
        console.log("Convert to Lower Case has been called...");
        if ((text == null) || (text.length === 0) || (text === "Enter your text here...")) {
            alert("Please enter some data first");
        }
        else {
            let newText = text.toLowerCase();
            console.log("old text : " + text + " / new text : " + newText);
            setText(newText);
            props.showAlert("Converted to lowercase", "success");
        }
    }

    const capitalizeEachWord = () => {
        console.log("Capitalize each word has been called...");
        if ((text == null) || (text.length === 0) || (text === "Enter your text here...")) {
            alert("Please enter some data first");
        }
        else {
            let newText = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
            console.log("old text : " + text + " / new text : " + newText);
            setText(newText);
            props.showAlert("Capitazed each word", "success");
        }
    }

    const removeExtraSpaces = () => {
        console.log("Capitalize each word has been called...");
        if ((text == null) || (text.length === 0) || (text === "Enter your text here...")) {
            alert("Please enter some data first");
        }
        else {
            let newText = text.replace(/\s+/g, ' ').trim();
            console.log("old text : " + text + " / new text : " + newText);
            setText(newText);
            props.showAlert("Extra space removed", "success");
        }
    }

    const wordCount = (word) => {
        let newText = word.replace(/\s+/g, ' ').trim();
        if (newText === "") {
            return 0;
        }
        else {
            return newText.trim().split(" ").length;
        }
    }

    const formatJson = () => {
        console.log("JSON Formatter has been called...");
        if ((text == null) || (text.length === 0) || (text === "Enter your text here...")) {
            alert("Please enter some data first");
        }
        else {
            try {
                var x = JSON.parse(text);
                let newText = JSON.stringify(x, null, 1)
                    .replace(/\n( *)/g, function (match, p1) {
                        console.log("p1 length : " + p1.length);
                        return '\n' + '\t'.repeat(p1.length);
                    });
                console.log("old text : " + text + " / new text : " + newText);
                setText(newText);
                props.showAlert("JSON formatted", "success");
            } catch (error) {
                props.showAlert(error.message, "danger");
            }

        }
    }


    const copyAll = () => {
        console.log("Copy All function has been called...");
        let textInputBox = document.getElementById("textInputBox");
        textInputBox.select();

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(textInputBox.value);
            props.showAlert("Text copied to clipboard", "success");
        }
        else {
            let textArea = document.createElement("textarea");
            textArea.value = textInputBox.value;
            // make the textarea out of viewport
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            return new Promise((res, rej) => {
                // here the magic happens
                document.execCommand('copy') ? res() : rej();
                textArea.remove();
                props.showAlert("Text copied to clipboard", "success");
            });
        }
    }

    const textAreaOnChange = (event) => {
        console.log("inside textAreaOnChange function...");
        setText(event.target.value);
    }

    const clearAll = () => {
        console.log("inside clearAll function");
        setText("");
    }

    return (
        <div className={`text-${props.mode === "light" ? "dark" : "light"} mt-3`}>
            <div className="mb-3">
                <h3 className="pt-2">{props.heading}</h3>
                <hr />
                <textarea className="form-control" id="textInputBox" rows="7"
                    style={{
                        backgroundColor: `${props.mode === "light" ? "white" : "grey"}`,
                        color: `${props.mode === "light" ? "black" : "white"}`
                    }}
                    value={text} placeholder="Enter your text here..." onChange={textAreaOnChange} />
            </div>
            <button className="btn btn-sm btn-primary ms-1 my-1" onClick={convertToUpperCase}>Convert to UPPERCASE</button>
            <button className="btn btn-sm btn-primary ms-1 my-1" onClick={convertToLowerCase}>Convert to lowercase</button>
            <button className="btn btn-sm btn-primary ms-1 my-1" onClick={capitalizeEachWord}>Capitalize each word</button>
            <button className="btn btn-sm btn-primary ms-1 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-sm btn-primary ms-1 my-1" onClick={formatJson}>JSON Formatter</button>
            <button className="btn btn-sm btn-primary ms-1 my-1" onClick={copyAll}>Copy All</button>
            <button className="btn btn-sm btn-primary ms-1 my-1" onClick={clearAll}>Clear All</button>
            <div className="mt-3">
                <h5>Your Text Summary :</h5>
                <p>{wordCount(text)} words and {text.length} characters</p>
                <h5>Text Preview :</h5>
                <p>{((text.length === 0) || (text === "Enter your text here...")) ? "Nothing to preview" : text}</p>
            </div>
        </div>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: "Enter your heading Here"
}
