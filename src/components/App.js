import { Component } from 'react';
import './App.css';
import Input from './Input';
import uuid from 'react-uuid';
import List from './list';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items:[],
      id: uuid(),
      title: '',
      description: '',
      complete:[],
      strike: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    }
    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    handleSubmit(event) {
      event.preventDefault();


      const newItem = {
        id:this.state.id,
        title: this.state.title,
        description: this.state.description,
        strike: this.state.strike
      }
   
      const updatedItems = [...this.state.items, newItem];
      var list = JSON.parse(localStorage.getItem("items"));
      if(list == null) list= [];
      list.push(newItem);
      localStorage.setItem('items',  JSON.stringify(list));
      

      this.setState({
        items: updatedItems,
        title:'',
        description: '',
        id: uuid(),
        strike: this.state.strike
      })

     
    }

    handleDelete = (id) => {
      var storage= JSON.parse(localStorage.getItem('items'));    
      const filterdItems = storage.filter(item => 
        item.id !== id);
       
        localStorage.setItem('items',  JSON.stringify(filterdItems));


    }
    handleComplete = (id) => {
      var storage= JSON.parse(localStorage.getItem('items'));
      const filterdItems = storage.filter(item => 
        item.id !== id);
      const filterdItem = storage.filter(item => 
          item.id === id);

        localStorage.setItem('items',  JSON.stringify(filterdItems));
        filterdItem[0].strike= true;
        var newlist = JSON.parse(localStorage.getItem("items"));
        newlist.push(filterdItem[0]);
        localStorage.setItem('items',  JSON.stringify(newlist));
        
        const updatedItems  = [...this.state.complete, filterdItem];
       
        
        this.setState({
          complete: updatedItems
        });
    }

    


   render() {
    return (
      <>
      <div className="App">
        <h2>Todo List</h2>
      </div>
      <Input  title={this.state.title} description={this.state.description} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      <List items={this.state.items} handleDelete={this.handleDelete} handleComplete={this.handleComplete} />
      </>
    );
   }
  
}

export default App;
