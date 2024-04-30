import React, { useEffect } from "react";
import style from "./Profile.module.scss";
import { ReactECharts } from "shared/lib/Echarts/ReactECharts";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { getData, getValue } from "entities/Profile";
import { useSelector } from "react-redux";
import { USER_LOCALSTORAGE_ID } from "shared/const/localStorage";

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const userId = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_ID) || "null");
  console.log(userId);

  useEffect(() => {
    dispatch(getValue((userId)));
  }, [dispatch]);

  const data = useSelector(getData);

  const courses = ["JS", "Html", "CSS"];

  return (
    <div className={style.profile}>
      <h1>Мои результаты</h1>
      {courses.map((course) => {
        const courseData = data.filter((item) => item.courseName === course);

        if (courseData.length === 0) {
          return (
            <div className={style.noData} key={course}>
              <h2>{course}</h2>
              <p>Нет данных</p>
            </div>
          );
        }

        const scores = courseData.map((item) => item.score);
        const dates = courseData.map((item) => item.testDate.split("T")[0]);

        const option = {
          xAxis: {
            type: "category",
            data: dates,
            axisLabel: {
              interval: 0,
              rotate: 45,
            },
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: scores,
              type: "line",
              smooth: true,
              areaStyle: {},
            },
          ],
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#6a7985",
              },
            },
          },
        };

        return (
          <div className={style.course} key={course}>
            <h2>{course}</h2>
            <ReactECharts option={option} style={{ width: "100%", height: "300px" }} />
          </div>
        );
      })}
    </div>
  );
};

export default Profile;