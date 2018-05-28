import React, { Component } from 'react';

class NameForm1 extends Component {
    
    state = { error: this.props.getErrorMessage('') }

    handleSubmit = (event) => {
        event.preventDefault()
        const value = this.inputNode.value
        const error = this.props.getErrorMessage(value,)
        if (error) {
            alert(`error: ${error}`)
        } else {
            alert(`success: ${value}`)
        }
    }

    handleChange = (event) => {
        const {value} = event.target
        this.setState({
            error: this.props.getErrorMessage(value)
        })
    }

    render() {
        const {error} = this.state
        return (
            <form onSubmit={this.handleSubmit} >
                <label>
                    Name:
                    <input type={'text'} name='username' ref={node => this.inputNode = node} 
                        onChange={this.handleChange}
                    />
                </label>
        {error ? (
                <div style={{color: 'red'}}>
                    {error}
                </div>
            ) : null}
                <button disabled={Boolean(error)} type='submit' >Submit</button>
            </form>
        );
    }
}

export default NameForm1;