import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import cls from './MainPage.module.scss'
import { StackList } from 'widgets/StackList';
import { useEffect } from 'react';
import { USER_LOCALSTORAGE_REFRESH, USER_LOCALSTORAGE_TOKEN } from 'shared/const/localStorage';
import { repeatAuth } from 'entities/User';
const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
          const jwtToken = localStorage.getItem(USER_LOCALSTORAGE_TOKEN);
          const refreshToken = localStorage.getItem(USER_LOCALSTORAGE_REFRESH);
          if (jwtToken && refreshToken) {
              dispatch(repeatAuth({ jwtToken, refreshToken }));
          }
  }, [dispatch]);

    return (
        <div className={cls.MainPage}>
            <StackList />
        </div>
    )
}

export default MainPage;