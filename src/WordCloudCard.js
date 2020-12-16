import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WordCloud from './WordCloud';
import { getWordCloudData } from './service';

export default function WordCloudCard({ loading }) {
  // const [loading, setLoading] = useState(true);
  const [words, setWords] = useState([]);
  const [dateRange, setDateRange] = useState(null);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    getWordCloudData().then(({ labels, date_range, avg_rating }) => {
      const words = labels.map(({ label, type, value }) => {
        return { text: label, value, type };
      });

      setWords(words);
      setDateRange(date_range);
      setAverageRating(avg_rating);

      // setLoading(false);
    });
  }, [loading]);

  return (
     <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Word Cloud
        </Typography>
        <Typography color="textSecondary">
          <span>{dateRange}</span>
        </Typography>
        <Typography color="textSecondary">
          <span>{'Average Rating: ' + averageRating}</span>
        </Typography>
        <WordCloud
          words={words}
        />
      </CardContent>
    </Card>
  );
}
