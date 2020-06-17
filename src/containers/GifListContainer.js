import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component{

    constructor(){
        super()
        this.state={
            gif : []
        }
    }


 

    render(){
        return (
        <div>
            <GifSearch handleSearchSubmit={this.handleSearchSubmit}/>
            <ul>
                {this.state.gif.map(singleGif => <GifList gif={singleGif.images.original.url}/>)}
                
            </ul>
        </div>
        )
    }

    handleSearchSubmit = (searchTerm) => {
           debugger
           fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
           .then(response => response.json())
           .then(data => {
            //    debugger
               this.setState({
                   gif : data.data
                   
               })
              debugger
           }
           )
    }

    componentDidMount(searchTerm ="dolphin"){
        // debugger
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(response => response.json())
        .then(data => {
            // debugger
            this.setState({
                gif : data.data
                
            })
        }
        )

        // this.handleSearchSubmit("dolphin")
        
    }
}