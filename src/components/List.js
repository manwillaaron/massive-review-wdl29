import React, { Component } from 'react'
import axios from 'axios'
import Genres from './Genres'
import { Switch, Route, Link } from 'react-router-dom'
import store from '../dux/store'
import {GET_MOVIES} from '../dux/store'

export default class List extends Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            list: reduxState.movies,
            update: false
        }
    }

    componentDidMount() {
        axios.get('/api/movies').then(res => {
            this.saveMovies(res.data)
            this.setState({update: !this.state.update})
            })
    }

    saveMovies=(list)=>{
        store.dispatch({type: GET_MOVIES, payload: list })
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