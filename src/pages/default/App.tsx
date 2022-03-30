import React from 'react';
import logo from '../../assets/images/logo.svg';
import { ToastButtonComponent } from '../../components/ToastButtonComponent/ToastButtonComponent';
import './App.scss';

const App = (): React.ReactElement => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <ToastButtonComponent></ToastButtonComponent>
            </header>
        </div>
    );
};

export default App;
