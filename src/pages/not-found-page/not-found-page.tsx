import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <main className="page__main page__main--offer">
      <section className='container'>
        <p>Страница не найдена</p>
        <Link to={'/'}>Вернуться на главную страницу</Link>
      </section>
    </main>
  );
}

export default NotFoundPage;
