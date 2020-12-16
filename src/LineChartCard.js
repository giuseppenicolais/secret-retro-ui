import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LineChart from './LineChart';
import { getLineChartData } from './service';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 10,
    marginTop: 10,
  },
});

const mock = [
  ['x', 'rating'],
  [0, 0],
  [1, 10],
  [2, 23],
  [3, 17],
  [4, 18],
  [5, 9],
  [6, 11],
  [7, 27],
];

export default function LineChartCard() {
	const classes = useStyles();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dateRange, setDateRange] = useState(null);

  useEffect(() => {
    getLineChartData().then((data) => {
      console.log(data);
      // setLoading(false);
    });
  }, [setLoading]);


  return (
     <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Line Chart
        </Typography>
        <Typography color="textSecondary">
          <span>{'2020-11-16 to 2020-12-16'}</span>
        </Typography>
        <LineChart
          data={mock}
        />
      </CardContent>
    </Card>
  );
}
