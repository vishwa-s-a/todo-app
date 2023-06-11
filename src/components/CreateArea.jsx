import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [isExpanded,setExpanded]=useState(false);

  const [note,setNote]=useState({
    title:"",
    content:""
  });
  
  function changeHandler(event){
    const {name,value}=event.target;
    setNote(prevValue=>{
      return {
        ...prevValue,
        [name]:value
      }

    })
  }

  function submitNote(event){
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title:"",
      content:""});//to clear the present input
  }

  function expand(){
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {
          //conditional rendering 
          isExpanded?<input onChange={changeHandler} name="title" value={note.title} placeholder="Title" />:null
        }
        <textarea 
        onChange={changeHandler} 
        name="content" 
        onClick={expand}
        value={note.content} 
        placeholder="Take a note..." 
        rows={isExpanded?3:1} 

        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
