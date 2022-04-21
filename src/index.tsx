import ReactDOMClient from 'react-dom/client';
import App from './components/App';

const rootElement = document.getElementById('root') as Element;
ReactDOMClient.createRoot(rootElement).render(<App name='vortesnail' age={25} />);
