import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap'
export default class list extends React.Component{
    constructor(props) {
        super(props)
        this.state={bookmark:JSON.parse(this.props.storage)||[]}
        }
        removeLink=(props)=>{
            console.log(props.index)
            this.state.bookmark.splice(props.index,1)
            console.log(this.bookmark)
            localStorage.setItem('bookmark',JSON.stringify(this.state.bookmark))
            this.setState({bookmark:JSON.parse(localStorage.getItem('bookmark'))||[]})
        }
        render()
        {
            return(<div>
            <table>
            <thead><tr><td>Name</td><td>URL</td><td>Delete</td></tr></thead>
            <tbody>

                {this.state.bookmark.map((item,index)=>{return( <tr key={index}><td>{item.name}</td><td><a href={item.url}>{item.url}</a></td><td><Button onClick={()=>this.removeLink({index})}>Delete</Button></td></tr>)})}
            </tbody>
            </table>
            </div>)
        }
    
}