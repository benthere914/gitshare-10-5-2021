import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { populateProduce } from './store/produce'
import { addToCart } from './store/cart';
import configureStore from './store';
import './index.css';
import App from './App';

const store = configureStore();
if (process.env.NODE_ENV !== 'production'){
    window.store = store;
    window.populateProduce = populateProduce;
    window.addToCart = addToCart;
}
function Root() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
