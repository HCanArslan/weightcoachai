import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Protein', 'Carbs', 'Fats'],
  datasets: [
    {
      data: [40, 40, 20],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const NutritionPlanStatistics = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nutrition Plan Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <Pie data={data} />
      </CardContent>
    </Card>
  );
};

export default NutritionPlanStatistics;
