import { useSelector } from 'react-redux';
import cls from './RoadMap.module.scss';
import { getResourseUrl } from 'entities/Stack';

const Roadmap = () => {
  const items = useSelector(getResourseUrl);

  return (
    <div className={cls.roadmap}>
      { 


      }
      <h2 className={cls.roadmap__title}>Ссылки на полезный материал</h2>
      <div className={cls.roadmap__grid}>
        {items.map((item) => (
        <div key={item.id} className={cls.roadmap__item}>
        <h3 className={cls.roadmap__itemTitle} style={{ backgroundColor: item.color }}>
          {item.name}
        </h3>
        <ul className={cls.roadmap__itemList}>
          {item.resources.map((resource) => (
            <li key={resource.link} className={cls.roadmap__itemResource} >
              <a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.title}</a>
            </li>
          ))}
        </ul>
      </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;