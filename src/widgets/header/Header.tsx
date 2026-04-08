import { NavLink } from 'react-router';

import { combineClass } from '@src/shared/lib/CombineClass.ts';

import cls from './Header.module.scss';

export const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.container}>
        <nav className={cls.tabs}>
          <NavLink
            to="/feed"
            className={({ isActive }) =>
              combineClass([cls.tab, isActive ? cls.active : undefined])
            }
          >
            Все котики
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              combineClass([cls.tab, isActive ? cls.active : undefined])
            }
          >
            Любимые котики
          </NavLink>
        </nav>
      </div>
    </header>
  );
};