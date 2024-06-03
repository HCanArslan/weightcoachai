import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const dailyProgress = [
  { name: 'John Doe', activity: 'Running', status: 'Completed' },
  { name: 'Jane Smith', activity: 'Yoga', status: 'Pending' },
  { name: 'Sam Wilson', activity: 'Weight Lifting', status: 'Missed' },
];

const DailyProgress = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Todays Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {dailyProgress.map((progress, index) => (
            <li key={index} className="flex justify-between py-2">
              <span>{progress.name}</span>
              <span className="text-gray-600">{progress.activity}</span>
              <span
                className={`text-sm font-semibold ${
                  progress.status === 'Completed'
                    ? 'text-green-500'
                    : progress.status === 'Pending'
                    ? 'text-yellow-500'
                    : 'text-red-500'
                }`}
              >
                {progress.status}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default DailyProgress;
