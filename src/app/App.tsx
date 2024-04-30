import React, { Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';
import { Header } from 'widgets/Header';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { USER_LOCALSTORAGE_REFRESH, USER_LOCALSTORAGE_TOKEN } from 'shared/const/localStorage';
import { repeatAuth } from 'entities/User';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
            const accessToken = (localStorage.getItem(USER_LOCALSTORAGE_TOKEN));
            const refreshToken = localStorage.getItem(USER_LOCALSTORAGE_REFRESH);
            if (accessToken && refreshToken) {
                dispatch(repeatAuth({ accessToken, refreshToken }));
            }
    }, [dispatch]);

    return (
        <div className="app">
            <Header />
            <Suspense fallback="">
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
