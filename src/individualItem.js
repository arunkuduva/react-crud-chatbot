import React from 'react';

export default class IndividualItem extends React.Component {
    state = {
        showEdit:false,
        keyplaceholder:'',
        itemplaceholder:''
    }
    showEdit=()=>{
        this.setState({showEdit:true})
    }
    handleSubmit =(event)=>{
        event.preventDefault();
    }
    
    handleKeyChange = (e)=>{
        this.setState({keyplaceholder : e.target.value})
        }
  
    handleItemChange = (e)=>{
          this.setState({itemplaceholder : e.target.value})

        }
    
    addItem = (event)=>{
            this.props.updateFunction({key: this.state.keyplaceholder, item: this.state.itemplaceholder})
            this.setState({showEdit:false})
          }

    showEditForm= ()=>{
        if(this.state.showEdit){
            return(
                <div>
                   { <form onSubmit={this.handleSubmit}>
                            <input type='text'  name = 'key' value={this.state.keyplaceholder} onChange = {this.handleKeyChange}/>
                            <input type='text'  name = 'item' value={this.state.itemplaceholder} onChange = {this.handleItemChange}/>
                            <button class="ui button" onClick = {this.addItem}>Update item</button>
                   </form> }
                 
                 </div>
              )
        }
    }
    render() {
        
        return (  
            <div class="event">
            <div class="content">
              <div class="summary">
              <div>my item key is {this.props.item.key}</div>
        <div>my item  is {this.props.item.item}</div>
        <button class="ui button" onClick={()=>this.props.deleteFunction(this.props.item)}> delete item</button>
        <button class="ui button" onClick={this.showEdit}>edit item</button>
        {this.showEditForm()}
              </div>
              </div>
              </div>
        
        )
    }
}