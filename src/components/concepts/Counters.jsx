import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    render() { 
        const {onDelete, onIncrement, onDecrement, onAddCounter, onReset} = this.props;
        return ( 
            <div>
                <button className="btn btn-success m-2 p-1" onClick={onAddCounter}>Add Counter</button>
                <button className="btn btn-secondary m-2 p-1" onClick={onReset}>Reset</button>
                {this.props.counters.map( counter =>
                <Counter
                    key={counter.id}
                    counter={counter}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                />
                )}
            </div>
        );
    }
}
 
export default Counters;