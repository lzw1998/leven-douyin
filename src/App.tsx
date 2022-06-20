import { BrowserRouter } from 'react-router-dom';
import MainRoute from 'src/routes';
import '@icon-park/react/styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  );
}

export default App;
