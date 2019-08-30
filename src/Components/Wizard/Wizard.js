import React, { Component } from 'react'
import './Wizard.css';
import {Link} from 'react-router-dom'
export default class Wizard extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
    }

    render() {
        return (
            <div className='wizard'> 
                <Link exact to='/'>
                <button >CANCEL</button>
                
                </Link>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
                

                
            </div>
        )
    }
}
