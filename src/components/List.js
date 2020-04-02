import React, { Component } from 'react'
import axios from 'axios'
import Genres from './Genres'
import { Switch, Route, Link } from 'react-router-dom'

export default class List extends Component {
    constructor() {
        super()
        this.state = {
            list: [{}, {}, {}]
        }
    }

    componentDidMount() {
        axios.get('/api/movies').then(res => {
            this.setState({ list: res.data })
        })
    }

    render() {
        return (
            <div className='movies-container'>
                <div className='anything'>
                    {this.state.list.map((item, i) => (
                        <div key={i} >{item.name}</div>
                        ))}
                </div>
                        <Link to='/movies/genres' >add genres</Link>
                <Switch>
                    <Route path='/movies/genres' component={Genres}/>
                </Switch>
            </div>
        )
    }
}