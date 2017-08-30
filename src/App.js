import React, {Component} from 'react';
import Header from './components/Header';
import Container from './components/Container';
import ViewSelector from './components/ViewSelector';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <ViewSelector/>
                <Container></Container>
            </div>
        );
    }
}

export default App;
