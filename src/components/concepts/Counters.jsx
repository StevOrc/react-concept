import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    
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

    render() { 
        return ( 
            <div>
                <button className="btn btn-secondary m-2 p-1" onClick={this.hanldeReset}>Reset</button>
                {this.state.counters.map( counter =>
                <Counter
                    key={counter.id}
                    counter={counter}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
                )}
            </div>
        );
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
        if(counters[index].value > 0) counters[index].value--;
        this.setState({counters});
    }

    handleDelete = (idCounter) => {
        console.log("delete", idCounter);
        const counters= this.state.counters.filter( counter => counter.id !== idCounter);
        this.setState({counters});
    }
}
 
export default Counters;