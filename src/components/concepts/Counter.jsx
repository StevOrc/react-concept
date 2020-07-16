import React, { Component } from 'react';

class Counter extends Component {
    
    render() {
        const {onDelete, onIncrement, onDecrement, counter} = this.props;

        return (
                <div className="row">
                    <div className="col-1">
                        <span className={this.getBadgeClasses()}>{this.getFormatCounter()}</span>
                    </div>
                    <div className="col">
                        <button onClick={() => onIncrement(counter)} className="btn btn-primary m-1"> + </button>
                        <button
                            onClick={() => onDecrement(counter)} className="btn btn-secondary m-1"
                            disabled={counter.value === 0 ? 'disabled' : ""}
                        >
                             - 
                        </button>
                        <button onClick={ () => onDelete(counter.id)} className="btn btn-danger m-1">Delete</button>
                    </div>
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