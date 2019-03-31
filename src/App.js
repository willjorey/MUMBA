import React, { Component } from 'react';

import Navbar from './components/navbar/navbar';
import Sidedrawer from './components/Sidedrawer/Sidedrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {

  state={
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () =>{
    // Gauruntee state change, with function form to pass the previous state
    this.setState((prevState)=>{
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
    console.log(this.state.sideDrawerOpen)
  };
  //Backdrop click handler
  backdropClickHandler = () =>{
    this.setState({sideDrawerOpen:false})
  };

  render() {
    // If the sidedrawer is open show the backdrop as well
    let backdrop;
    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <div style={{height:'100%'}}>
        <Navbar drawerClickHander={this.drawerToggleClickHandler}/>
        <Sidedrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
      </div>
    );
  }
}

export default App;
