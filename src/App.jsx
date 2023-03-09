import { JsonFetchTest } from '../components/JsonFetchTest';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App container">
      <div className="row mt-4">
        <JsonFetchTest url='http://localhost:7070/data' />
        <JsonFetchTest url='http://localhost:7070/error' />
        <JsonFetchTest url='http://localhost:7070/loading' />
      </div>
    </div>
  )
}

export default App
