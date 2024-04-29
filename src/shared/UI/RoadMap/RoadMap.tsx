import React from 'react';
import cls from './RoadMap.module.scss';

const RoadMap = () => {
  const items = [
    { id: 1, title: 'HTML' },
    { id: 2, title: 'CSS' },
    { id: 3, title: 'JavaScript' },
  ];

  return (
    <div className={cls.roadmap}>
      {items.map((item, index) => (
        <div key={item.id} className={cls.roadmap__item}>
          <div className={cls.roadmap__dot}></div>
          <div className={cls.roadmap__title}>{item.title}</div>
          {index < items.length - 1 && (
            <div className={cls.roadmap__arrow}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RoadMap;