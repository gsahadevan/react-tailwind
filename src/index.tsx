import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {SidebarProvider} from './contexts/SidebarContext';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from './contexts/ThemeContext';

ReactDOM.render(
    <React.StrictMode>
        {/* <ThemeProvider initialTheme={undefined} children={undefined}> */}
            <SidebarProvider>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <App />
                </BrowserRouter>
            </SidebarProvider>
        {/* </ThemeProvider> */}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
