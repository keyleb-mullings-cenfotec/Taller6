import React from "react";
import Table from "./Table";
import Form from "./Forms";

class App extends React.Component {
    state = {
        characters: [
            {
                name: 'John',
                job: 'Smithery'
            },
            {
                name: 'Clyde',
                job: 'Carpenter'
            },
            {
                name: 'Sam',
                job: 'Banker'
            },
            {
                name: 'Rayone',
                job: 'Engineer'
            },
        ],
    };

    removeCharacter = index => {
        const { characters } = this.state;
        this.setState({
            characters: characters.filter((char, i) => {
                return i !== index;
            })
        })
    };

    addCharacter = character => {
        this.setState({
            characters: [...this.state.characters, character]
        });
    };

    render() {
        const { characters } = this.state;

        return (
            <div className="container">
                <Table
                    characters={characters}
                    removeCharacter={this.removeCharacter}
                />

                <Form addCharacter={this.addCharacter} />
            </div>
        );
    }

}

export default App;
