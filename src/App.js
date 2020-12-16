import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormDialog from './FormDialog';
import LineChartCard from './LineChartCard';
import WordCloudCard from './WordCloudCard';
import './App.css';

function App() {
  const onSubmit = () => {
    // console.log('on:submit');
  };

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <h1 className="app-header-text">Secret Retro</h1>
          <FormDialog
            className="app-header-submit"
            onSubmit={onSubmit}
          />
        </Container>
      </header>
      <main>
        <Container>
          <WordCloudCard />
          <LineChartCard />
        </Container>
      </main>
    </div>
  );
}

export default App;
