import type { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router';

import { Layout } from '@src/app/layouts';
import { Feed } from '@src/pages/public/feed';
import { Favorites } from '@src/pages/public/favorites';

export const RouterApp: FC = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<Navigate to="/feed" replace />} />

        <Route path={'/feed'} element={<Feed />} />
        <Route path={'/favorites'} element={<Favorites />} />

        <Route path="*" element={<Navigate to="/feed" replace />} />
      </Route>
    </Routes>
  );
};