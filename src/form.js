import React from 'react';
import { useRef,useState } from 'react';
import Inpu from './input';

const Frm = (props) => {
      
        //create an object for handlinf the inputs
const [ values, setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"",
});

const inputs =[
{
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username",
    errorMessage:"username should be 3-16 character and shouldn't include any special character",
    label:"Username",
    pattern:"^[A-Za-z0-9]{3,16}$",
    required:true,
},
{
    id:2,
    name:"email",
    type:"email",
    placeholder:"Email",
    errorMessage:"It should be a valid email",
    label:"Email",
    required:true,
},
{
    id:3,
    name:"birthday",
    type:"date",
    placeholder:"Birthday",
    errorMessage:"",
    label:"Birthday",
    required:true,
}
,
{
    id:4,
    name:"password",
    type:"password",
    placeholder:"Password",
    errorMessage:"It should be 8-20 charcters and include at least 1 letter,1 number and 1 speccial character",
    label:"Password",
    pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required:true,
},
{
        id:5,
        name:"confirmPassword",
        type:"text",
        placeholder:"Confirm Password",
        errorMessage:"Password don't match",
        label:"Confirm Password",
        pattern:values.password,
        required:true,

},

];
 // const holder = useRef(); not to reeder a component  as we do in usestate
 const submit = (even) => {
    even.preventDefault();//prevent the default action
          // const data = new FormData(even.target);
          // console.log(Object.fromEntries(data.entries()));
    };
    const onChange = (ev) =>{

        setValues({...values, [ev.target.name] : ev.target.value});
    };

    console.log(values);

  return (
  
    <div className='hello'>
      <form  onSubmit={submit}>
          
      <h3 >{props.title}</h3>
      { inputs.map((input) => (
      
       <Inpu key= {input.id}  {...input} value={values[input.name]} onChange={onChange}  />
      
       ))}
    
        <button className='button'>submit</button>
      </form>
    </div>
  );
};

export default Frm;
