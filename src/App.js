import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormDialog from './FormDialog';
import LineChartCard from './LineChartCard';
import BubbleChartCard from './BubbleChartCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <h1 className="app-header-text">Secret Retro</h1>
          <FormDialog className="app-header-submit"/>
        </Container>
      </header>
      <main>
        <Container>
          <LineChartCard />
          <BubbleChartCard />
        </Container>
      </main>
    </div>
  );
}

export default App;
