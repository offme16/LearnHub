import style from './NotResult.module.scss';
interface Error {
    error: string;
}
const NotResult: React.FC<Error> = ({error}) => {
    return (
        <div className={style.error}>
            <span>{error}</span>
        </div>
    )
}
export default NotResult;