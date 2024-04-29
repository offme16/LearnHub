import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import cls from './MainPage.module.scss'
import { StackList } from 'widgets/StackList';
import { useEffect } from 'react';
import { USER_LOCALSTORAGE_REFRESH, USER_LOCALSTORAGE_TOKEN } from 'shared/const/localStorage';
import { repeatAuth } from 'entities/User';
const MainPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
          const accessToken = (localStorage.getItem(USER_LOCALSTORAGE_TOKEN));
          const refreshToken = localStorage.getItem(USER_LOCALSTORAGE_REFRESH);
          if (accessToken && refreshToken) {
              dispatch(repeatAuth({ accessToken, refreshToken }));
          }
  }, [dispatch]);

    return (
        <div className={cls.MainPage}>
            
            <StackList />
        </div>
    )
}

export default MainPage;