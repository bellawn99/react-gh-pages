import React, { Component } from 'react';
import './App.css';
import Navbar from './componen/Navbar.js';
import HotelCard from './componen/Card.js';
import SimpleMap from './componen/SimpleMap.js';




class App extends Component {
  state = {
    open : false,
    hotels : [
      {nama: 'Lorem Ipsum', tanggal : '12 September 2019', deskripsi: 'Lorem Ipsum bla bla bla bla bla bla'},
      {nama: 'Lorem Ipsum', tanggal : '12 September 2019', deskripsi: 'Lorem Ipsum bla bla bla bla bla bla'},
      {nama: 'Lorem Ipsum', tanggal : '12 September 2019', deskripsi: 'Lorem Ipsum bla bla bla bla bla bla'},
      {nama: 'Lorem Ipsum', tanggal : '12 September 2019', deskripsi: 'Lorem Ipsum bla bla bla bla bla bla'},
    ]
  };
  
  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  

  render() {

    return (
      <div >
        <Navbar/>
        <div className="row">
        <div className="col m12">
        {this.state.hotels.map((data,key) =>{
          return (
            <div>
              <HotelCard title={data.nama} key={key} tanggal={data.tanggal} deskripsi={data.deskripsi} /><br/><br/>
            </div>
          )
        })}
        </div>
        </div>
        <div className="col m6">
        <SimpleMap/>
        </div>
      </div>
      
    );
  }
}


export default App;
