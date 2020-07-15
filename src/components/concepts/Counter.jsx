import React, { Component } from 'react';

class Counter extends Component {
    
    constructor(props){
        super(props);
        const {id, value} = this.props
        this.state = { id, value }
    }

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.getFormatCounter()}</span>
                    <button onClick={this.handleIncrement} className="btn btn-primary m-2">Increment</button>
                    <button onClick={this.handleDecrement} className="btn btn-danger m-2">Decrement</button>
            </div>
        );
    }

    handleIncrement = () => {
        const value  = this.state.value + 1;
        this.setState({value});
    }

    handleDecrement = () => {
        const value = this.state.value > 0 ? this.state.value - 1 : 0;
        this.setState({value});
    }

    getBadgeClasses = () => {
        let classes = 'badge m-2 badge-';
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    getFormatCounter = () => {
        return this.state.value ? this.state.value : 'zero';
    }
}
 
export default Counter;