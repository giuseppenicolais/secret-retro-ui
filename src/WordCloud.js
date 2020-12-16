import React, { useState, useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';

const callbacks = {
  getWordColor: word => word.type === 'GOOD' ? "green" : "red",
  getWordTooltip: word => `${word.text} (${word.value}) [${word.type}]`,
}

const options = {
  enableTooltip: true,
  deterministic: false,
  fontSizes: [25, 90],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  // rotations: 3,
  // rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000
};

export default function WordCloud({ words }) {
  return (<ReactWordcloud
    callbacks={callbacks}
    words={words}
    options={options}
  />);
}
