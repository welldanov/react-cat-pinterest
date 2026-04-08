import { Outlet } from 'react-router';

import cls from './Layout.module.scss';
import { Header } from '@src/widgets/header';

export const Layout = () => {
  return (
    <div className={cls.layoutWrapper}>
      <Header />
      <Outlet />
    </div>
  );
};