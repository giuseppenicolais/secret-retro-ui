import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormDialog from './FormDialog';
import LineChartCard from './LineChartCard';
import WordCloudCard from './WordCloudCard';
import './App.css';

function App() {

   const [loading, setLoading] = useState(false);

  const onSubmitStart = () => {
    console.log('on:submit:start');
    setLoading(true);
  };

  const onSubmitComplete = () => {
    console.log('on:submit:complete');
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <h1 className="app-header-text">Secret Retro</h1>
          <FormDialog
            className="app-header-submit"
            onSubmitStart={onSubmitStart}
            onSubmitComplete={onSubmitComplete}
          />
        </Container>
      </header>
      <main>
        <Container>
          <WordCloudCard loading={loading}/>
          <LineChartCard loading={loading}/>
        </Container>
      </main>
    </div>
  );
}

export default App;
