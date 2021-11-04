import React,{useState} from "react";
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Button,Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap'
export default function AddUrl (props) {
  
  const[modal,setModal]=useState(false)
  const[urlStatus,setUrlstatus]=useState('')
  const[name,setName]=useState('')
  const[url,setUrl]=useState('')
  const[tag,setTag]=useState([])
const isValidHttpUrl=(string)=> {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }
  
  const addBookmark=(event)=>{
      event.preventDefault()
      if(isValidHttpUrl(url))
      {
    
      props.addURL({name:name,url:url,tag:tag})
      console.log(props)
      setModal(false)
      setName('')
      setUrl('')
      setTag([])
      }else{
          return false
      }
  }
const modalToggle=()=>{
    if(modal)
    {
      setModal(false)

}else{
    
    setModal(true)
    
}
}

const changeURL=(event)=>{
    console.log(isValidHttpUrl(event.currentTarget.value))
    if(isValidHttpUrl(event.currentTarget.value))
    {
        setUrlstatus('')
    }else{
        setUrlstatus('error')
        
    }
    setUrl(event.currentTarget.value)
}
const changeTag=(event)=>{
console.log(event.target.value)
let tagList=event.target.value.split(',')
setTag(tagList)
}

  
    return (
    
      <div>
<Button
    color="success"
    onClick={modalToggle}
  >
    Add Link
  </Button>
  <Modal isOpen={modal} toggle={modalToggle}>
    <ModalHeader toggle={modalToggle}>
      Add My Link
    </ModalHeader>
    <form action="" onSubmit={addBookmark}>
    <ModalBody>
         <label htmlFor="">Name</label>
         <br />
         <input type="text" placeholder='Name' value={name} onChange={(event)=>setName(event.target.value)}/>
         <br />
     <label htmlFor="">My URL</label>
     <br />
   <input className={urlStatus} type="text" placeholder="https://example.com" value={url} name='url' onChange={changeURL}/>
   {urlStatus==='error'?<div className='warning'>Your URL should be 'http://example.com'</div>:null}
   <br />
   <label htmlFor="">tag</label>
   <br />
   <input type="text" value={tag.join(',')} onChange={changeTag} />
    </ModalBody>
    <ModalFooter>
    <Button type='submit' color='primary'>Add bookmark</Button>
      <Button onClick={modalToggle}>
        Cancel
      </Button>
    </ModalFooter>
        </form>
  </Modal>
        
       
      </div>
    );
  
}
