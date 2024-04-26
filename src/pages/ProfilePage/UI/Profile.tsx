import { useEffect } from "react";
import style from "./Profile.module.scss";
import { ReactECharts } from "shared/lib/Echarts/ReactECharts";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { getData, getResultScore, getValue } from "entities/Profile";
import { useSelector } from "react-redux";
  


const Profile: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect( () => {
    dispatch(getValue())
  }, [dispatch]);

  const data = useSelector(getData);

  const scores = data.map(item => item.score);
  const date = data.map(item => item.testDate.split('T')[0]);
    const option = {
      xAxis: {
        type: 'category',
        data: date,
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