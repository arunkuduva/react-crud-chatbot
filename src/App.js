import React, { Component } from 'react';
import IndividualItem from './individualItem'
//import {Header} from "./Header";
import Header from './Header'
//import Chatcontainer from './chatcontainer'


class App extends Component {

  state= { master:
    [
      {key:1, item:'item1'},
      {key:2, item:'item2'},
      {key:3, item:'item3'},
      {key:4, item:'item4'},
      {key:5, item:'item5'}],
    keyplaceholder: '',
    itemplaceholder: ''
  };

 renderList = () => {
 return this.state.master.map(item => {
      return <IndividualItem item = {item} deleteFunction = {this.deleteFunction}
      updateFunction = {this.updateFunction}/>
    })
  }

  deleteFunction = (item)=>{
   const destinationstate = this.state.master.filter(i=> i.key!==item.key)
   this.setState({master:destinationstate})
  }
updateFunction =(item)=>{
 
  var index = this.state.master.findIndex(x=> x.key == item.key);
 
  if (index === -1){
    // handle error
  }
  else {
  
    this.setState({master : [
      ...this.state.master.slice(0,index),
      Object.assign({}, this.state.master[index], {key: item.key,item : item.item}),
      ...this.state.master.slice(index+1)]
    })
  }

}
  
  handleSubmit =(event)=>{
    event.preventDefault();
  }

  addItem = (event)=>{
    this.setState({
      master: [...this.state.master, {key:this.state.keyplaceholder, item:this.state.itemplaceholder}]
    })
  }

  handleKeyChange = (e)=>{
  this.setState({keyplaceholder : e.target.value})
  }

  handleItemChange = (e)=>{
    this.setState({itemplaceholder : e.target.value})
  console.log(this.state.itemplaceholder)
  }

  render() {
    return (
      <div className='list'> 
      
      <div class="ui card"> 
      <div class="content">
        <div class="header">h1 header </div>
      </div>
      
      <div class="content">
      <h4 class="ui sub header">Activity</h4>
      <div class="ui small feed">
      {this.renderList()}
        <div>
            <form onSubmit={this.handleSubmit}>
             <input type='text'  name = 'key' value={this.state.keyplaceholder} onChange = {this.handleKeyChange}/>
              <input type='text'  name = 'item' value={this.state.itemplaceholder} onChange = {this.handleItemChange}/>
            <button class="ui button" onClick = {this.addItem}>add item</button>
           </form>
        </div>
       </div>
      </div>
      </div>
      <div class="ui card"> 
      <div class="content">
        {/* <div class="header"> <Chatcontainer />  </div> */}
      </div>
      </div>
      </div>
    );
  }
}

export default App;
