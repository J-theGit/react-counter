import React, { Component } from "react";

class Counter extends Component {
    render() {
        const { counter, onIncrement, onDecrement, onDelete } = this.props;
        return (
            <div className="row">
                <div className="col-1">
                    <span className={this.countClass()}>
                        {this.formatCount()}
                    </span>
                </div>
                <div className="col">
                    <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => onIncrement(counter.id)}
                        style={{ minWidth: "2em" }}
                    >
                        +
                    </button>
                    <button
                        className="btn btn-secondary btn-sm m-2"
                        onClick={() => onDecrement(counter.id)}
                        style={{ minWidth: "2em" }}
                        disabled={
                            this.props.counter.value === 0 ? "disabled" : ""
                        }
                    >
                        -
                    </button>
                    <button
                        onClick={() => onDelete(counter.id)}
                        className="btn btn-danger btn-sm"
                        style={{ minWidth: "2em" }}
                    >
                        X
                    </button>
                </div>
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
