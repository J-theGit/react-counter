import React, { Component } from "react";

class Counter extends Component {
    render() {
        return (
            <div>
                <span style={{ minWidth: "4em" }} className={this.countClass()}>
                    {this.formatCount()}
                </span>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={() =>
                        this.props.onIncrement(this.props.counter.id)
                    }
                >
                    +
                </button>
                <button
                    className="btn btn-secondary btn-sm m-2"
                    onClick={() =>
                        this.props.onDecrement(this.props.counter.id)
                    }
                >
                    -
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
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
