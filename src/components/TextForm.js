import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpClick = () => {
        let upperText = text.toUpperCase();
        setText(upperText)
        props.showAlert("Converted to upper case", "success")
    }

    const handleLoClick = () => {
        let lowerText = text.toLowerCase()
        setText(lowerText)
        props.showAlert("Converted to Lower case", "success")
    }

    const handleOnClear = () => {
        setText("")
        props.showAlert("Text box is clear", "success")
    }

    const handleOnCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copy to click board", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        console.log(newText);
        setText(newText.join(" "))
        props.showAlert("Removed all extra space", "success")
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className='p-4' style={{color: props.mode === "light" ? "#2C3333": "#FEFBF6"}} >
                <h1 className='text-center'>{props.heading}</h1>
                <p>Enter text hear</p>
                <div className="form-floating mb-4">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" value={text} onChange={handleOnChange} style={{ height: "100px" }} rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className='btn btn-primary me-3 mb-3 ' onClick={handleUpClick}>To Uppercase</button>
                <button disabled={text.length === 0} className='btn btn-primary me-3 mb-3 ' onClick={handleLoClick}>To Lowercase</button>
                <button disabled={text.length === 0} className='btn btn-primary me-3 mb-3 ' onClick={handleOnClear}>Clear</button>
                <button disabled={text.length === 0} className='btn btn-primary me-3 mb-3 ' onClick={handleOnCopy}>Copy</button>
                <button disabled={text.length === 0} className='btn btn-primary me-3 mb-3 ' onClick={handleExtraSpaces}>Clear Extra Spaces</button>
            </div>
            <div className="container" style={{color: props.mode === "light" ? "#2C3333": "#FEFBF6"}} >
                <h1>Text summery</h1>
                <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words, {text.length} Character</p>
                <p>{0.008 * text.split(" ").length} Minuts to read</p>
            </div>
            <div className="container" style={{color: props.mode === "light" ? "#2C3333": "#FEFBF6"}} >
                <h1>Privew</h1>
                <p>{text.length > 0 ? text : "Enter something in textbox...."}</p>
            </div>
        </>
    )
}
