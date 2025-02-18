import React , {useState}  from 'react'



export default function TextArea(props) {

    const handleUpClick = ()=> {
        //console.log("Uppercase Was Clicked" );
        let newText=(text.toUpperCase());
        setText(newText)
        props.showAlert("Converted To Upper Case" , "success")


    }
   
    const handleLoClick =()=> {
        let newText=(text.toLowerCase());
        setText(newText)
        props.showAlert("Converted To Lower Case" , "success")
    }
    const clear = ()=>{
        let newText=("");
        setText(newText)
        props.showAlert("Text Area Is Cleared" , "success")
    }

    const [text, setText] = useState("");
    const wordsPerMinute = 200;
    const countWords = (text) => {
        const words = text.trim().split(/\s+/);
        return text.trim() === "" ? 0 : words.length;
    }
    const countSentences = (text) => {
        const sentences = text.trim().split(/[.!?]+\s*/);
        return text.trim() === "" ? 0 : sentences.length;
      };

    const calculateReadingTime = (text) => {
        const wordCount = text.trim().split(/\s+/).length;
        const timeInMinutes = wordCount / wordsPerMinute;
        
        const minutes = Math.floor(timeInMinutes);
        const seconds = Math.round((timeInMinutes - minutes) * 60);
        return { minutes, seconds };

        
    };
    const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText(text);
          props.showAlert("Text Is Copied To Clipboard" , "success")
        } catch (err) {
          alert("Failed to copy text: ", err);
        }
    }
   

    const { minutes, seconds } = calculateReadingTime(text);
    

   
  return (
    <>
    


    <div className="container" style={{color: props.Mode==="dark"?"white":"black"}} >
        
        <div className="mb-3">
            
        <textarea className="form-control" value={text} onChange={(e) => setText(e.target.value)}
        placeholder="Enter or Paste Your Text" style={{backgroundColor: props.Mode==="dark"?"#012e4b":"white" , color: props.Mode==="dark"?"white":"black" , height: 619 , width : 696}} id="mybox" rows="20"></textarea>
       
        </div>



        <button type="button" className="btn btn-dark mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button type="button" className="btn btn-dark mx-2" onClick={handleLoClick}>Convert to LowerCase</button> 
        <button type="button" className="btn btn-dark mx-2" onClick={handleCopy}>Copy To Clipboard</button> 
    
        
        <button type="button" className="btn btn-dark mx-2" onClick={clear}>Clear</button> 

       
    </div>

    <div className = "border rounded-md bg-gray-100 text-center" style={{marginLeft: "51rem" , marginTop: "-41rem" , display: "block",color: props.Mode==="dark"?"white":"black"}}>
        
    <div className="Count" style={{display: "flex" , marginLeft:"13px" ,  marginTop: "7px" }}>
        <div>{countWords(text)}</div>
        <p style={{marginTop: "23px" , marginLeft: "-10px"}}>Words</p>
        
      </div>
      
        <div className="Count1" style={{display: "flex" , marginLeft:"85px" ,  marginTop: "-62px" }}>
        <p>{text.trim().length}</p>
        <p style={{marginTop: "23px" , marginLeft: "-10px"}}>Characters</p>
        
      </div>
      <div className="Count1" style={{display: "flex" , marginLeft:"184px" ,  marginTop: "-63px" }}>
        <div className=""> {countSentences(text)} </div>
        <p style={{marginTop: "23px" , marginLeft: "-10px"}}>Sentences</p>
        
      </div>
        <p style = {{marginLeft: "-16rem"}}> Reading time  {minutes} min {seconds} sec </p>
    </div>
    </>
  )
}
