import React, { Component } from "react";

class Counter extends Component {
    render() {
        const { counter, onIncrement, onDecrement, onDelete } = this.props;
        return (
            <div>
                <span style={{ minWidth: "4em" }} className={this.countClass()}>
                    {this.formatCount()}
                </span>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => onIncrement(counter.id)}
                >
                    +
                </button>
                <button
                    className="btn btn-secondary btn-sm m-2"
                    onClick={() => onDecrement(counter.id)}
                >
                    -
                </button>
                <button
                    onClick={() => onDelete(counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }
    formatCount = () => {
        const { value } = this.props.counter;
        return value === 0 ? "zero" : value;
    };
    countClass = () => {
        return `badge badge-${
            this.props.counter.value ? "primary" : "warning"
        } m-2`;
    };
}

export default Counter;
