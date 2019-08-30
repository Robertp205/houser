import React, { Component } from 'react'
// import axios from 'axios'

import Header from './Components/Header/Header';
import './App.css'
import routes from './routes';

export default class App extends Component {
  render() {
    return (
      <div >
        <Header/>
        <div className='body'>

          <div className='weird-green-box-thing'>
            {routes}
          </div>
       

        </div>
      </div>
    )
  }
}

