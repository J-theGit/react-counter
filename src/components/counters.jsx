import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 1 },
            { id: 2, value: 1 },
            { id: 3, value: 1 },
            { id: 4, value: 2 }
        ]
    };
    handleDelete = id => {
        const counters = this.state.counters.filter(
            counter => counter.id !== id
        );
        this.setState({ counters });
    };
    handleReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({ counters });
    };

    handleIncrement = id => {
        const counters = this.state.counters.map(counter => {
            if (counter.id === id) counter.value++;
            return counter;
        });
        this.setState({ counters });
    };

    handleDecrement = id => {
        const counters = this.state.counters.map(counter => {
            if (counter.id === id && counter.value) counter.value--;
            return counter;
        });
        this.setState({ counters });
    };

    render() {
        return (
            <div>
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={this.handleReset}
                >
                    Reset
                </button>
                {this.state.counters.map(counter => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
