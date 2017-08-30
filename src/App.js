import React, {Component} from 'react';
import Header from './components/Header';
import Container from './components/Container';
import ViewSelector from './components/ViewSelector';

class App extends Component {
    state = {
        view: 'favorite'
    };

    handleSelectView = (view) => this.setState({view});

    render() {
        const {view} = this.state;
        const {handleSelectView} = this;

        return (
            <div>
                <Header/>
                <ViewSelector
                    onSelect={handleSelectView} selected={view}
                />
                <Container visible={view === 'favorite'}>favorite</Container>
                <Container visible={view === 'list'}>list</Container>
            </div>
        );
    };
}

export default App;
