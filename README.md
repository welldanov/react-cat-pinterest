# Cat Pinterest

Приложение для просмотра котиков с использованием **TheCatAPI**, возможностью добавлять изображения в избранное и
просматривать их на отдельной странице.

**⚠️ Важно:** TheCatAPI может быть недоступен с российских IP-адресов. Для корректной загрузки изображений и работы API может потребоваться **VPN**.

## Демо

**Live Demo:** [React Cat Pinterest](https://welldanov.github.io/react-cat-pinterest/)

---

## Функциональность

- Просмотр списка всех котиков
- ️Бесконечная прокрутка (`IntersectionObserver`)
- Добавление и удаление котиков из избранного
- Сохранение избранного в `localStorage` через `zustand/persist`
- Отдельная страница с любимыми котиками
- Навигация между вкладками через `react-router`
- Sticky header при скролле
- Обработка ошибок загрузки API
- Lazy loading изображений
- Адаптивность интерфейса

---

## Стек технологий

- **React**
- **TypeScript**
- **Vite**
- **React Router**
- **Zustand**
- **SCSS Modules**
- **TheCatAPI**

---

## Структура проекта

Проект организован на FSD:

```text
src/
 ├── app/
 │   ├── layouts/
 │   ├── router/
 │   └── store.ts
 │
 ├── entities/
 │   └── cat/
 │       ├── api/
 │       └── model/
 │
 ├── pages/
 │   └── public/
 │       ├── feed/
 │       └── favorites/
 │
 ├── widgets/
 │   ├── header/
 │   └── cat-card/
 │
 └── shared/
     ├── assets/
     └── lib/
```

## Установка и запуск

1.  **Клонировать репозиторий**
2.  **Установить зависимости**
    ```bash
    npm install
    ```

3.  **Создать .env**
    Создайте файл `.env` в корне проекта:
    ```env
    VITE_CAT_API_KEY=your_api_key_here
    ```
    > API ключ можно получить на сайте: [thecatapi.com](https://thecatapi.com)

4.  **Запустить проект**
    ```bash
    npm run dev
    ```

## Сборка production
```bash
npm run build
```

## Особенности реализации

### Infinite Scroll
Реализован через `IntersectionObserver` для автоматической подгрузки новых котиков при достижении конца списка.

### Favorites
Избранные котики сохраняются в **zustand store** с использованием `persist`, поэтому данные не теряются даже после перезагрузки страницы.

### Производительность
*   `loading="lazy"` для всех изображений.
*   Защита от повторных запросов через `useRef`.
*   Разделение на переиспользуемые компоненты.
