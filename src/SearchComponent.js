import React from "react";

export default class searchComponent extends React.Component{
    constructor(props) {
        super(props)
        this.state={query:''}
    }
    search=(event)=>{
        console.log(event.currentTarget.value)
        this.setState({query:event.currentTarget.value.toLowerCase()})
        this.props.search(event.currentTarget.value.toLowerCase())
        console.log(this.props)
    }
    render(){
        return (
            <div className='searchBar'>
                <label htmlFor="search">🔍Search:</label>
            <input className='search' name='search' type="text" value={this.state.query} placeholder='click here to search' onChange={this.search} />
            {this.state.query!==''?<h3 className='query'>Search result :{this.state.query}</h3>:<p></p>}
            </div>
        )
        }

}