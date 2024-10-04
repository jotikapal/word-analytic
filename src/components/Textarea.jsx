import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({text, setText}) {
  // const [text,setText] = useState('');
  const [warningText,setWarningText] = useState("");

  // const numberOfCharacters = text.length;
  // console.log(numberOfCharacters,"numberOfhcaracters")

  const handleChange = (e) => {
    // console.log(e,"e");
    let newText = e.target.value;

    if(newText.includes("<script>")){
      setWarningText("No script tag allowed!")
      newText = newText.replace("<script>","");
    }else if(newText.includes("@")){
      setWarningText("No @ symbol allowed!")
      newText = newText.replace("@","");
    }else{
      setWarningText("");
    }
    
    setText(newText);
    // console.log(text,"text");

  }
  return (
    <div className="textarea">
    <textarea
    value={text}
      onChange={handleChange}
      className="textarea"
      placeholder="Enter your text"
      spellCheck="false"
    />
    <Warning warningText={warningText} /> 
    </div>
  );
}
