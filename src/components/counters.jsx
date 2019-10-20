import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    render() {
        const { onReset, onDelete, onIncrement, onDecrement } = this.props;
        return (
            <div>
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={onReset}
                >
                    Reset
                </button>
                <div className="container">
                    {this.props.counters.map(counter => (
                        <Counter
                            key={counter.id}
                            counter={counter}
                            onDelete={onDelete}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Counters;
