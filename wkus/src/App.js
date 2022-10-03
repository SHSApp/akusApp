//import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="primary">
         Button 1
          </Button>
          <Button variant="success" size="lg">
            Button 2
          </Button>
                    <Button as="input" type="button" value="Input" size="lg" />{' '}
      <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Block level button
      </Button>
      <Button variant="secondary" size="lg">
        Block level button
      </Button>
    </div>
      </header>
    </div>
  );
}

export default App;
