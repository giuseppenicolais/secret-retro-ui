import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import BubbleChartContainer from './BubbleChartContainer';

export default function BubbleChartCard() {
  const start = <span>{moment('2020-12-25').format('DD/MM/YYYY')}</span>;
  const end = <span>{moment('2020-11-25').format('DD/MM/YYYY')}</span>;

  return (
     <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Bubble Chart
        </Typography>
        <Typography color="textSecondary">
          {start} - {end}
        </Typography>
        <BubbleChartContainer />
      </CardContent>
    </Card>
  );
}
