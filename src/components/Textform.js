
import React , {useState} from 'react'

export default function Textform(props) {

    const handleclick = () =>{
        console.log("Uppercase Was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
            props.showAlert("Converted To Uppercase", "success");


    }
    const handleloclick = () =>{
        console.log("Uppercase Was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To Lowercase", "success");


    }

    const handlecleartext = () =>{
        console.log("Uppercase Was clicked" + text);
        let newText = "";
        setText(newText)

    }



    const handleOnChange = ( event )=>{
        console.log("on Change");
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter text here")

    return (
        <>
        <div className='container' style={{color:props.mode=== 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"  value={text} onChange={handleOnChange} id="mybox" style={{backgroundColor:props.mode=== 'dark'?'grey':'white',color:props.mode=== 'dark'?'white':'black'}} rows="8"></textarea>
                <div   className='btn btn-primary mx-2 my-1' onClick={handleclick} disabled={text.length===0} style={{backgroundColor:props.mode=== 'dark'?'red':'white',color:props.mode=== 'dark'?'white':'black'}}>Click to Convert Uppercase</div>
                <div  disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleloclick}>Click to Convert Lovercase</div>
                <div  disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handlecleartext}>Click to Clear text</div>


            </div>
        </div>

        <div className='container my-4' style={{color:props.mode=== 'dark'?'white':'black'}} >
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length-1} Minutes To Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something Above to Preview Here"}</p>

        </div>

        </>
    )
}
