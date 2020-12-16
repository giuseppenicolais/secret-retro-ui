import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WordCloud from './WordCloud';
import { getWordCloudData } from './service';

export default function WordCloudCard() {
  const start = <span>{moment('2020-12-25').format('DD/MM/YYYY')}</span>;
  const end = <span>{moment('2020-11-25').format('DD/MM/YYYY')}</span>;

  const [loading, setLoading] = useState(true);
  const [words, setWords] = useState([]);

  useEffect(() => {
    getWordCloudData().then(({ labels }) => {
      const words = labels.map(({ label, type, value }) => {
        return { text: label, value, type };
      });

      setWords(words);
      // setLoading(false);
    });
  }, [setLoading]);

  return (
     <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Word Cloud
        </Typography>
        <Typography color="textSecondary">
          {start} - {end}
        </Typography>
        <WordCloud
          words={words}
        />
      </CardContent>
    </Card>
  );
}
