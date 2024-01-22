import React, {useState} from "react";

function CreateArea(props) {
  var [inputText,setInputText] = useState({
    title: "",
    content: ""
  });
  function handleChange (event) {
     var {name,value} = event.target;
     setInputText(
      prevValue=>{
        return {...prevValue, [name]:value}
      }
     )
  }
  function handleSubmit(event) {
    props.afterSubmit(inputText);
    setInputText({title:"",content:""})
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={inputText.title} onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={inputText.content} onChange={handleChange} />
        <button >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
