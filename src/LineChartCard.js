import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default function LineChartCard() {
	const classes = useStyles();
  const start = <span>{moment('2020-12-25').format('DD/MM/YYYY')}</span>;
  const end = <span>{moment('2020-11-25').format('DD/MM/YYYY')}</span>;

  return (
     <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Line Chart
        </Typography>
        <Typography color="textSecondary">
          {start} - {end}
        </Typography>
      </CardContent>
    </Card>
  );
}
