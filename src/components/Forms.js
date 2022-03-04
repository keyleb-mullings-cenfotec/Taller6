import React from 'react';

export default class Form extends React.Component {
    initialState = {
        name: '',
        job: '',
    };

    state = this.initialState;

    handleChange = event => {
        // console.info(event.target.name)
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        // console.info('submitted');
        this.props.addCharacter(this.state);
    };

    render() {
        const { name, job } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input id='name' type='text' name='name' value={name} onChange={this.handleChange} />

                <label htmlFor='job'>Job:</label>
                <input id='job' type='text' name='job' value={job} onChange={this.handleChange} />

                <input type="submit" value='Save' />
            </form>
        )
    }
}