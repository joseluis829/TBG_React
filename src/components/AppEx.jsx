import React, { Component } from 'react';

class AppEx extends Component {
    state = { items: [] }

    static allItems = [
        {id: 'a', value: 'apple'},
        {id: 'o', value: 'orange'},
        {id: 'g', value: 'grape'},
        {id: 'p', value: 'pear'},
    ]

    addItem = () => {
        this.setState(({items}) => ({
            items: [
                ...items,
                AppEx.allItems.find(i => !items.includes(i)),
            ]
        }))
    }

    removeItem = item => {
        this.setState(({items}) => ({
            items: items.filter(i => i !== item),
        }))
    }

    render() {
        const {items} = this.state
        return (
            <div>
                <button disabled={items.length >= AppEx.allItems.length} onClick={this.addItem}>
                    +
                </button>
                {items.map((i, index) => (
                    <div key={i.id}>
                        <button onClick={() => this.removeItem(i)}>
                            -
                        </button>
                        {i.value}:
                        <input />
                    </div>
                ))}
                {AppEx.allItems.map(item => (
                   <div key={item.id} >{item.value}</div> 
                ))}
            </div>
        );
    }
}

export default AppEx;