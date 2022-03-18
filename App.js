import '../index.css';
import React , {useState} from "react";
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateNote from './CreateNote';



function App() {
  const [notes ,  setNotes] = useState([]);
 
 function addNote(newNote){
   setNotes(prevNote => {
     return [...prevNote , newNote];
   });
  }

  function deleteNote(id){
    setNotes((prevNote) => {
      return  prevNote.filter((noteItem , index)=>{
        return index !== id;
      });

    });

  }


  return (
    <div  >
      <Header />
      <CreateNote 
      onAdd={addNote}
      />
      {notes.map((noteItem, index) => {
        return <Note key={index} id={index} title = {noteItem.title} content= {noteItem.content} onDelete={deleteNote}/>
      })}
      
      <Footer />
    </div>
  );

}

export default App;