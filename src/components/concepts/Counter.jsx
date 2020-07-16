import React, { Component } from 'react';

class Counter extends Component {
    
    constructor(props){
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.getFormatCounter()}</span>
                    <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-primary m-2">Increment</button>
                    <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-warning m-2">Decrement</button>
                    <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2">Delete</button>
            </div>
        );
    }


    getBadgeClasses = () => {
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    getFormatCounter = () => {
        return this.props.counter.value ? this.props.counter.value : 'zero';
    }
}
 
export default Counter;