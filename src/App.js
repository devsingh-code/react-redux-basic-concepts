import React, { Component } from 'react';
import Ninjas from './ninjas';
import AddNinja from './AddNinja';


class App extends Component {
  state={
    ninjas :[
      {name:'Ryu', age:30, belt:'black', id:1},
      {name:'Ryan', age:40, belt:'red', id:2},
      {name:'Father Dcosta', age:10, belt:'blue', id:3}
    ]
  }

  addNinja = (ninja) =>{
    ninja.id = Math.random();
    let ninjas =[...this.state.ninjas,ninja];

    this.setState({
        ninjas: ninjas
    })
    
  } 

  deleteNinja = (id) =>{
      let ninjas = this.state.ninjas.filter(ninja =>{
        return ninja.id!== id
      });

      this.setState({
        ninjas: ninjas
      })
  }

  render()
  {
    return (
      <div className="App">
      <h1>First react App</h1>
      <p>Welcome !!</p>
      <Ninjas deleteNinja={this.deleteNinja} ninjas = {this.state.ninjas} />
      <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
  
}

export default App;
