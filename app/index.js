import ReactDOM from 'react-dom';
import App from './app';

function main () {
    const app = document.createElement('div');
    document.body.appendChild(app);
    ReactDOM.render(<App />, app);
}


main();
