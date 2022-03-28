import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import CardGroup2 from './components/CardGroup2/CardGroup2';

function App() {
  return (
    <div className="App">
      {/* npm install react-bootstrap bootstrap@5.1.3 */}
      <h1>Using React Bootstrap</h1>
      {/* import 'bootstrap/dist/css/bootstrap.min.css'; */}

      <Button variant="secondary">Button</Button>
      <br />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <CardGroup2></CardGroup2>
    </div>
  );
}

export default App;
