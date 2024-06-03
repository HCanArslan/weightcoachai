import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const schedule = [
  { time: '08:00', task: 'Morning Yoga' },
  { time: '10:00', task: 'Consultation with Coach' },
  { time: '12:00', task: 'Lunch' },
  { time: '14:00', task: 'Strength Training' },
  { time: '16:00', task: 'Evening Walk' },
];

const Schedule = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {schedule.map((item, index) => (
            <li key={index} className="flex justify-between py-2">
              <span>{item.time}</span>
              <span className="text-gray-600">{item.task}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Schedule;
