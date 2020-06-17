import React, { Component } from 'react'

export default class GifList extends Component{

    constructor(){
        super()
        // debugger
    }


    render(){
        return (<div>
            <li><img src={this.props.gif}></img></li>
        </div>)
    }

}
