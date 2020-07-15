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
                {this.state.counters.map( counter =>
                <Counter key={counter.id} value={counter.value} id={counter.id}/>
                )}
            </div>
        );
    }
}
 
export default Counters;