import React,{useState} from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function Createnote(props) {

  const [expand,setExpand] = useState(false);

  const [note,setNote] = useState(
    {
      title:'',
      content:'',
    }
  );

  const inputEvent=(event)=>{

    // const value= event.target.value;
    // const name= event.target.name;

    const{name,value} = event.target;
    setNote((prevData)=>{
      return {
        ...prevData , [name]:value,
      };
    });
    // console.log(note);
  };
  const addEvent = (e)=>{
     e.preventDefault()
    props.passNote(note);
    setNote(
      {
        title:'',
        content:'',
      }
    )
  }

  const expandIt=()=>{
    setExpand(true);
  }
  const collapseIt=()=>{
    setExpand(false);
  }
  return (
    <>
      <div className='main_note' onDoubleClick={collapseIt}>
        <form>
        {expand?
          <input type='text'  value = {note.title} name='title' onChange={inputEvent} placeholder='title' autoComplete='off'/> : null}

          <textarea rows='' column='' value = {note.content} name='content' onChange={inputEvent} placeholder='write note...' onClick={expandIt}></textarea>

          <div className='btncon'>
          {expand?
          <button className="btn" onClick={(e)=>addEvent(e)}>
            <AddIcon className='plus_sign'/>
          </button>:null}
          </div>
        </form>
      </div>
    </>
  )
}

export default Createnote
