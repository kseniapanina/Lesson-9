import React, { Component } from 'react';


export default class ErrorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: " ",

        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };

    render() {
        if (this.state.input === "Error") {
            throw new Error('I crashed!');
        }
        return (
            <div>
                <h1>Input Error!</h1>
                <form >
                    <input name="input" type="text" value={this.state.input} onChange={this.handleChange} />
                </form>
            </div>
        );
    }
}