import * as React from 'react';

class Counter extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {count: 0};
    }

    handleClick = () => {
        this.setState(({count}) => ({
            count: count + 1,
        }))
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.count}
            </button>
        );
    }
}

export default Counter;