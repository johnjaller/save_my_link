import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button,Badge,Table,Container,Row,Col} from 'reactstrap'
import AddUrl from "./AddUrlComponent";
import SearchComponent from "./SearchComponent";
export default class listComponent extends React.Component{
    constructor(props) {
        super(props)
        this.state={bookmark:this.props.storage||[],query:''}
        }
        removeLink=(props)=>{
            console.log(props.index)
            this.state.bookmark.splice(props.index,1)
            console.log(this.state.bookmark)
            localStorage.setItem('bookmark',JSON.stringify(this.state.bookmark))
            this.setState({bookmark:JSON.parse(localStorage.getItem('bookmark'))||[]})
        }
      
        

        filterLink=(queryString)=>{
            console.log(queryString)
            this.setState({query:queryString})
            let result=this.state.bookmark.filter(item=>item.name.toLowerCase().includes(this.state.query)||item.url.toLowerCase().includes(this.state.query)||item.tag.map(tagName=>tagName.toLowerCase().includes(this.state.query)).includes(true))
            if(queryString==="")
            {
                this.setState({bookmark:JSON.parse(localStorage.getItem('bookmark'))})
            }else{
                console.log(result)
                this.setState({bookmark:result})
            }
        }
        addLink=(props)=>{
            console.log(props)
            this.state.bookmark.push(props)
            console.log(this.state.bookmark)
            localStorage.setItem('bookmark',JSON.stringify(this.state.bookmark))
            this.setState({bookmark:JSON.parse(localStorage.getItem('bookmark'))})
        }
        render()
        {
            return(<div className='home'>
                <h1>My private bookmark</h1>
            <SearchComponent search={this.filterLink}/>
                <Container>
            <Row>
            <Col lg='2' className='addURLButton' >
            <AddUrl addURL={this.addLink}/>
            </Col>
            <Col lg='10'>
            <Table>
            <thead><tr><td>Name</td><td>URL</td><td>Tag</td><td>Action</td></tr></thead>
            <tbody>

                {this.state.bookmark.map((item,index)=>{return( <tr key={index}><td>{item.name}</td><td><a href={item.url} target='_blank' rel='noreferrer'>{item.url}</a></td>{item.tag.length>0?<td>{item.tag.map((tagName,tagIndex)=>{return( <Badge className='tag' key={tagIndex} color='primary' pill>{tagName}</Badge>)})}</td>:<td>no tag</td>}<td><Button onClick={()=>this.removeLink({index})}>Delete</Button></td></tr>)})}
            </tbody>
            </Table>
            </Col>
            </Row>
                </Container>
            </div>)
        }
    
}