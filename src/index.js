import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './Components/App/App';
import { store } from './Redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
