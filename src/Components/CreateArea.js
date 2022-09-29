import React from 'react'
import { useState, useContext} from 'react'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import Zoom from '@mui/material/Zoom';
import NotesDetail from '../Context/NotesDetail';
import Editted from '../Context/Editted';
import NoteIdx from '../Context/NoteIdx';


export default function CreateArea(props) {

    const {note, setNote} = useContext(NotesDetail);
    const [expand, setExpand] = useState(false);
    const {editted} = useContext(Editted);
    const {editIdx} = useContext(NoteIdx);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleClick = (e) => {
        props.onAdd(note, editIdx);
        setNote({
            title: "",
            content: ""
        })
        e.preventDefault();
    }

    const handleExpand = () => {
        setExpand(true);
    }

    return (
        <div>
            <form>
                {expand && (<input type="text" name="title" id="" onChange={handleChange} placeholder='Title' value={note.title} />)}

                <textarea onClick={handleExpand} name="content" id="" rows={expand ? 3 : 1} onChange={handleChange} placeholder="Take a note...." value={note.content}></textarea>

                <Zoom in={expand ? true : false}>
                    <Fab id = "favButton" onClick={handleClick}>
                        {!editted ? <AddIcon /> : <CheckIcon />}
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}
