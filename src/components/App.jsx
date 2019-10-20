import React, { Component } from "react";
import Nav from "./navbar";
import Counters from "./counters";
class App extends Component {
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
            <React.Fragment>
                <Nav
                    totalCounters={
                        this.state.counters.filter(c => c.value > 0).length
                    }
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onDecrement={this.handleDecrement}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        onReset={this.handleReset}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
