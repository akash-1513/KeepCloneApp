import React, {useContext} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import NoteListContext from '../Context/NoteList';
import NotesDetail from '../Context/NotesDetail';
import Editted from '../Context/Editted';
import NoteIdx from '../Context/NoteIdx';

export default function Note(props) {

  const {notesList} = useContext(NoteListContext);
  const {setNote} = useContext(NotesDetail);
  const {setEditted} = useContext(Editted);
  const {setEditIdx} = useContext(NoteIdx);

  const editNote = (idx) => {
    const t = notesList[idx].title;
    const c = notesList[idx].content;

    setNote({
      title : t, 
      content: c
    });

    setEditIdx(idx);
    setEditted(true);
  }

  return (
    <div id = {props.id} className = "notes">
        <h1>{props.title}</h1>
        <button className = "del" onClick = {() => {props.delNote(props.id)}}>
          <DeleteIcon />
        </button>
        <button onClick = {() => editNote(props.id)} className = "edit">
          <EditIcon />
        </button>
        <p>{props.content}</p>
    </div>
  )
}
