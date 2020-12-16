import React, { useState, useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { getWordCloudData } from './service';

const callbacks = {
  getWordColor: word => word.type === 'GOOD' ? "blue" : "red",
  getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
}

const words = [
  {
    text: 'sprint planning',
    value: 10,
    type: 'GOOD'
  },
  {
    text: 'mistake',
    value: 11,
    type: 'BAD'
  },
  {
    text: 'thought',
    value: 16,
    type: 'GOOD'
  },
  {
    text: 'bad',
    value: 17,
    type: 'BAD'
  },
];

export default function WordCloud() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // getWordCloudData();
  }, [setLoading]);

  return (<ReactWordcloud
    callbacks={callbacks}
    words={words}
  />);
}
