import { Header } from 'widgets/Header';
import cls from './TaskPage.module.scss';
import { useSelector } from 'react-redux';
import { getTasks } from 'entities/Stack';
import Button from 'shared/UI/Button/Button';
import Slider from 'react-slick';

const TaskPage = () => {
    const asa = useSelector(getTasks)
    const mas = [1, 2, 3, 4]; 
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
      };
    return (
        <div>
            <Header />
             <Slider {...settings}>
              <div className={cls.container}>
                <div className={cls.container_description}>
                    <h2>QUESTION</h2>
                    <p>fhsdjbuwdsyvcgbywevbwshdvbsdvhsdiov</p>
                </div>
                <form className={cls.container_form}>
                    <h2>Выберите один из вариантов ответа</h2>
                {mas.map(e => <div className={cls.container_form__input} >
                        <input type='radio' id='radioInput' name='radioGroup'/>
                        <label htmlFor='radioInput'>Текст, связанный с инпутом</label>
                    </div>)}
                </form>
            </div>
             </Slider>
                
        </div>
    )
}
export default TaskPage;