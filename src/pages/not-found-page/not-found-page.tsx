import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>6 cities. Page not found</title>
      </Helmet>
      <section className='container'>
        <p>Страница не найдена</p>
        <Link to={'/'}>Вернуться на главную страницу</Link>
      </section>
    </main>
  );
}

export default NotFoundPage;
