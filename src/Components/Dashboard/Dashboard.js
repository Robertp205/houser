import React, { Component } from 'react'
import House from '../House/House'
import './Dashboard.css'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                <Link to='/wizard'>
                    
                <button>ADD NEW PROPERTY</button>
                
                </Link>
                <House/>
            </div>
        )
    }
}
