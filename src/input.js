import { useState } from "react";
import "./App.css";

const Inpu = (props) => {
    const [ focused,setFocused] = useState("false");
    const { label , id ,errorMessage, onChange , ...inputProps }  = props;
    
    const handleFocus = (e)=>
    {
      setFocused(true);
    };
    
    return (
        <div>
          <label>{label}</label><br/>  
    <input {...inputProps} onChange={onChange} required onBlur={handleFocus} focused={focused.toString()} /><br/>
          <span>{errorMessage}</span><br/>
        </div>
    
    );

};
export default Inpu;