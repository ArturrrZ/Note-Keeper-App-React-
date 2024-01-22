import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  function submitted(note){
    console.log(note.title, note.content);
    setNotes(prevValue=>{return [...prevValue,note]});
    console.log(notes);
  }
  var [notes,setNotes] = useState([]);

  return (
    <div>
      <Header />
      <CreateArea afterSubmit={submitted}/>
      {notes.map(
        function (note,index) {return <Note key={index} title={note.title} content={note.content} />}
      )}
      
      <Footer />
    </div>
  );
}

export default App;
