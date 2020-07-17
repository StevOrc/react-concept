import React from 'react';
import './App.css';
import { Movie, Counter, Counters, NavBar, Like}  from './components'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 8},
            {id: 3, value: 2},
            {id: 4, value: 5}
        ]
    }
  }
  render(){
      return (
        <main className="container">
          <Movie/>
        </main>
          // <React.Fragment>
          // <NavBar totalItems={this.totalCount()}/>
          //   <main className="container">
          //     <Counters
          //       counters={this.state.counters}
          //       onDelete={this.handleDelete}
          //       onIncrement={this.handleIncrement}
          //       onDecrement={this.handleDecrement}
          //       onReset={this.hanldeReset}
          //       onAddCounter={this.handleAddCounter}
          //     />
          //   </main>
          // </React.Fragment>
      );
    }

  totalCount = () => {
    let total = 0;
    this.state.counters.forEach( c => {
      if(c.value > 0) total++;
    });
    return total;
  }

  handleAddCounter = () => {
    const counter = {id: this.state.counters.length +1, value: 0};
    const counters = [...this.state.counters];
    counters.push(counter);
    this.setState({counters});
  }

  hanldeReset = () => {
      const counters = this.state.counters.map( c => {
          c.value = 0;
          return c;
      });
      this.setState({counters});
  }

  handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters});
  }

  handleDecrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value--;
      this.setState({counters});
  }

  handleDelete = (idCounter) => {
      console.log("delete", idCounter);
      const counters= this.state.counters.filter( counter => counter.id !== idCounter);
      this.setState({counters});
    }
  }

export default App;
