import { useState } from 'react';
import './App.css';
import CreateArea from './Components/CreateArea';
import Header from './Components/Header';
import Note from './Components/Note';
import NoteListContext from './Context/NoteList';
import NotesDetail from './Context/NotesDetail';
import Editted from './Context/Editted';
import NoteIdx from './Context/NoteIdx';

function App() {

  const [editted, setEditted] = useState(false);
  const [notesList, setNotesList] = useState([]);
  const [note, setNote] = useState({
    title: '',
    content: ''
  })

  const [editIdx, setEditIdx] = useState(-1);

  const addNote = (noteObj, idx) => {
    if (!editted) {
      setNotesList((prev) => {
        return [
          ...prev,
          noteObj
        ]
      })
    } else {
      notesList[idx].title = note.title;
      notesList[idx].content = note.content;
      setEditted(false);
    }
  }

  const deleteNote = (idx) => {
    setNotesList((prev) => {
      return prev.filter((element, index) => {
        return index !== idx;
      })
    })
  }
  return (
    <>
      <Header />
      <NoteIdx.Provider value={{ editIdx, setEditIdx }}>
        <Editted.Provider value={{ editted, setEditted }}>
          <NotesDetail.Provider value={{ note, setNote }}>
            <CreateArea onAdd={addNote} />
            {notesList.map((ele, index) => {
              return <NoteListContext.Provider value={{ notesList, setNotesList }}><Note key={index} id={index} delNote={deleteNote} title={ele.title} content={ele.content} /> </NoteListContext.Provider>
            })}
          </NotesDetail.Provider>
        </Editted.Provider>
      </NoteIdx.Provider>
      {/* <Footer /> */}
    </>
  );
}

export default App;
