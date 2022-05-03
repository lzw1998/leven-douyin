import { BrowserRouter } from 'react-router-dom';
import MainRoute from 'src/routes';

function App() {
  return (
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  );
}

export default App;
