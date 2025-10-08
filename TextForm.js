import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("Upper case was clicked" + text);  
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoClick = () =>{
        //console.log("Lower case was clicked" + text);  
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");

    }
     const handleClearText = () =>{
        //console.log("Text is cleared" + text);  
        let newText = '';
        setText(newText);    
        props.showAlert("Text should be clear", "success");
    }
     const handleOnChange = (event) =>{
        //console.log("on Change");  
        setText(event.target.value);    
    }
    const handleCopy = () =>{
      var text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0, 9999);  
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard", "success");

    }
    const HandleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra Spaces are removed", "success");

    }

    const [text, setText] = useState('');
  return (
    <> 
    <div className="container" style={{color: props.mode === 'dark'?'white': '#042743'}}>  
           <h1 className='mb-2'>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} placeholder ={`Please enter the text`} style={{backgroundColor: props.mode === 'dark'?'#13466e': 'white', 
              color: props.mode === 'dark'?'white': '#042743' }} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handleClearText}>Clear Text</button>
            <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={HandleExtraSpaces}>Remove Extra Text</button>
    </div>
      <div className="container my-2" style={{color: props.mode === 'dark'?'white': '#042743'}}>  
        <h1>Your Text Summary here</h1>
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
         <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
       <p><strong>{text.length>0?text:"Nothing to preview!"}</strong></p> 
      </div>
    </>
  )
}
