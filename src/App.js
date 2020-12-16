import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormDialog from './FormDialog';
import LineChart from './LineChart';
import BubbleChart from './BubbleChart';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <h1>Secret Retro</h1>
        </Container>
      </header>
      <main>
        <Container>
          <FormDialog />
          <LineChart />
          <BubbleChart />
        </Container>
      </main>
    </div>
  );
}

export default App;
