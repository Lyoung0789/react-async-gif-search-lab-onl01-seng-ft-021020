import React, { Component } from 'react'

export default class GifSearch extends Component{

    constructor(){
        super()
        // debugger
        this.state ={
            search: ""
        }
    }

    handleSubmit = (event) => {

        // debugger
        event.preventDefault()
        this.props.handleSearchSubmit(this.state.search)
    }

    handleOnChange = (event) => {
        // debugger
        this.setState({
            search: event.target.value
        })
        // debugger
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Enter a Search Term</label>
                <input type="text" name="subject" value={this.state.search} onChange = {event => this.handleOnChange(event)}/>
                <input type="submit"/>
            </form>
        )
    }
}
