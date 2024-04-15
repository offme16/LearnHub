import style from "./Profile.module.scss";
import { ReactECharts } from "shared/lib/Echarts/ReactECharts";
  
  const data = [
    { date: '2024-04-01', score: 80 },
    { date: '2024-04-02', score: 85 },
    { date: '2024-04-03', score: 90 },
    { date: '2024-04-04', score: 88 },
    { date: '2024-04-05', score: 92 },
    // Добавьте свои данные по дате и баллам здесь
  ];


const Profile: React.FC = () => {
    const dates = data.map(item => item.date);
    const scores = data.map(item => item.score);
  
    // Конфигурация для графика
    const option = {
      xAxis: {
        type: 'category',
        data: dates,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: scores,
          type: 'line',
        },
      ],
    };
    return (
        <div>
        <ReactECharts
            option={option}
            style={{  width: '90%' , height: '300%'}}
        />
        </div>
    )
};
export default Profile;