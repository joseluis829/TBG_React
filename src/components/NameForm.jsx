import React, { Component } from 'react';

class NameForm extends Component {
    
    state = {  }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('====================================');
        console.log({target: event.target});
        console.log(event.target[0].value);
        console.log(event.target.elements.username.value);
        console.log(this.inputNode.value)
        console.log('====================================');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <label>
                    Name:
                    <input type={'text'} name='username' ref={node => this.inputNode = node} />
                </label>
                <button type='submit' >Submit</button>
            </form>
        );
    }
}

export default NameForm;