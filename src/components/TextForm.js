import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpClick = () => {
        let upperText = text.toUpperCase();
        setText(upperText)
    }

    const handleLoClick = () => {
        let lowerText = text.toLowerCase()
        setText(lowerText)
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className='p-4'>
                <h1 className='text-center'>{props.heading}</h1>
                <p>Enter text hear</p>
                <div className="form-floating mb-4">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" value={text} onChange={handleOnChange} style={{ height: "100px" }} rows="8"></textarea>
                </div>
                <button className='btn btn-primary me-4' onClick={handleUpClick}>To Uppercase</button>
                <button className='btn btn-primary me-4 ' onClick={handleLoClick}>To Uppercase</button>
            </div>
            <div className="container">
                <h1>Text summery</h1>
                <p>{text.split(" ").length} words, {text.length} Character</p>
                <p>{0.008 * text.split(" ").length} Minuts to read</p>
            </div>
            <div className="container">
                <h1>Privew</h1>
                <p>{text}</p>
            </div>
        </>
    )
}
