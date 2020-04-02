import React, { Component } from 'react'
import axios from 'axios'

export default class Genres extends Component {
    constructor() {
        super()
        this.state = {
            list: [{},{},{}]
        }
    }

    componentDidMount(){
        console.log('hit geners')
        axios.get('/api/genre').then(res => {
            console.log(res.data)
            this.setState({list: res.data})
        })
    }
    
    render() {
        return (
            <div>
                {this.state.list.map((item, i) => (
                <div key={i} >{item.genre}</div>
            ))}
            </div>
        )
    }
}