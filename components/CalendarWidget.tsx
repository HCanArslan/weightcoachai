import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarWidget = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar />
      </CardContent>
    </Card>
  );
};

export default CalendarWidget;
