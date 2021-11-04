import React from "react";
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Button,Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap'
export default class AddUrl extends React.Component {
  constructor(props) {
    super(props);
    this.state={modal:false,urlStatus:'',name:'',url:'',tag:[]}

  }
isValidHttpUrl(string) {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }
  
  addBookmark=(event)=>{
      event.preventDefault()
      if(this.isValidHttpUrl(this.state.url))
      {
      let bookmark=this.state
      delete bookmark['modal']
      delete bookmark['urlStatus']
      this.props.addURL(bookmark)
      console.log(this.props)
      this.setState({modal:false,name:'',url:'',tag:[]})
      }else{
          return false
      }
  }
modalToggle=()=>{
    if(!this.state.modal)
    {
this.setState({modal:true})
}else{
    
    this.setState({modal:false})
    }
}
changeName=(event)=>{
this.setState({name:event.currentTarget.value})
}
changeURL=(event)=>{
    console.log(this.isValidHttpUrl(event.currentTarget.value))
    if(this.isValidHttpUrl(event.currentTarget.value))
    {
        this.setState({urlStatus:''})
    }else{
        this.setState({urlStatus:'error'})
        
    }
    this.setState({url:event.currentTarget.value})
    console.log(this.state.url)
}
changeTag=(event)=>{
console.log(event.target.value)
let tagList=event.target.value.split(',')
this.setState({tag:tagList})
}

  render() {
    return (
    
      <div>
<Button
    color="success"
    onClick={this.modalToggle}
  >
    Add Link
  </Button>
  <Modal isOpen={this.state.modal} toggle={this.modalToggle}>
    <ModalHeader toggle={this.modalToggle}>
      Add My Link
    </ModalHeader>
    <form action="" onSubmit={this.addBookmark}>
    <ModalBody>
         <label htmlFor="">Name</label>
         <br />
         <input type="text" placeholder='Name' value={this.state.name} onChange={this.changeName}/>
         <br />
     <label htmlFor="">My URL</label>
     <br />
   <input className={this.state.urlStatus} type="text" placeholder="https://example.com" value={this.state.url} name='url' onChange={this.changeURL}/>
   {this.state.urlStatus==='error'?<div className='warning'>Your URL should be 'http://example.com'</div>:null}
   <br />
   <label htmlFor="">tag</label>
   <br />
   <input type="text" value={this.state.tag.join(',')} onChange={this.changeTag} />
    </ModalBody>
    <ModalFooter>
    <Button type='submit' color='primary'>Add bookmark</Button>
      <Button onClick={this.modalToggle}>
        Cancel
      </Button>
    </ModalFooter>
        </form>
  </Modal>
        
       
      </div>
    );
  }
}
