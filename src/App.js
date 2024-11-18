import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Createnote from "./Components/Createnote";
import Note from "./Components/Note";
import { useState } from "react";
function App() {
  const [addItem, setItem] = useState([]);

  const addNote = (note) => {
    // alert("im clicked");
    setItem((prev)=>[...prev,note]);
    // console.log(note);
  };
  const onDelete = (id) => 
  {
    setItem((olddata) => 
    {
      return olddata.filter((currdata,indx)=>
      {
        return indx !== id;
      })
    });
  }

  console.log(addItem)
  return (
    <>
      <Header />
      <Createnote passNote={addNote} />
      <div className="note-container">
      {
        addItem.map((currNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={currNote.title}
            content={currNote.content}
            deleteItem={onDelete}
          />
        );
      })}
      </div>
      <Footer />
    </>
  );
}

export default App;
