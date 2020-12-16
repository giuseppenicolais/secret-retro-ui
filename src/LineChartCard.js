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

export default function LineChartCard({ loading }) {
	const classes = useStyles();

  // const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dateRange, setDateRange] = useState(null);

  useEffect(() => {
    getLineChartData().then((response) => {
      console.log(response);

      const data = response.reduce((memo, { created_at, rating }) => {
        return [
          ...memo,
          [created_at, rating]
        ]
      }, [
        ['x', 'rating']
      ]);

      setData(data)
    });
  }, [loading]);


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
          data={data}
        />
      </CardContent>
    </Card>
  );
}
