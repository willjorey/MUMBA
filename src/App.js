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

  render() {
    let sideDrawer;
    let backdrop;
    if(this.state.sideDrawerOpen){
      sideDrawer = <Sidedrawer/>;
      backdrop = <Backdrop/>;
    }
    return (
      <div style={{height:'100%'}}>
        <Navbar drawerClickHander={this.drawerToggleClickHandler}/>
        {sideDrawer}
        {backdrop}
      </div>
    );
  }
}

export default App;
