import cls from './RoadMap.module.scss';

const Roadmap = () => {
  const items = [
    {
      id: 1,
      title: 'HTML + CSS',
      color: '#ff5722',
      resources: ['Основы HTML', 'Основы CSS', 'Адаптивная верстка'],
    },
    {
      id: 2,
      title: 'JavaScript',
      color: '#f0db4f',
      resources: ['Основы JS', 'DOM', 'c'],
    },
    {
      id: 3,
      title: 'Git + GitHub',
      color: '#f1502f',
      resources: ['', 'Coursera', 'Youtube'],
    },
    {
      id: 4,
      title: 'React.js',
      color: '#61dbfb',
      resources: ['Scrimba', 'Udacity', 'Udemy', 'beta.reactjs.org'],
    },
    {
      id: 5,
      title: 'Создание 2 сайтов',
      color: '#e34c26',
      resources: ['Landing Page', 'Ссылки на социальные медиа', 'Клон Landing Page'],
    },
    {
      id: 6,
      title: 'Практика и создание проектов',
      color: '#cccccc',
      resources: [
        'Создание 1-2 сложных проектов',
        'Создание портфолио сайта',
        'Обновление профиля LinkedIn',
        'Начало поиска работы',
      ],
    },
    {
      id: 7,
      title: 'Задания',
      color: '#4caf50',
      resources: ['codewars.com', 'frontendmentor.io', 'javascript30.com'],
    },
    {
      id: 8,
      title: 'Дальнейшие шаги',
      color: '#007acc',
      resources: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Максимальное количество кода'],
    },
  ];

  return (
    <div className={cls.roadmap}>
      <h2 className={cls.roadmap__title}>Frontend Developer Roadmap 2024</h2>
      <div className={cls.roadmap__grid}>
        {items.map((item) => (
          <div key={item.id} className={cls.roadmap__item}>
            <h3 className={cls.roadmap__itemTitle} style={{ backgroundColor: item.color }}>
              {item.title}
            </h3>
            <ul className={cls.roadmap__itemList}>
              {item.resources.map((resource) => (
                <li key={resource} className={cls.roadmap__itemResource}>
                  {resource}
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