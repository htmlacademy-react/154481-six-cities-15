import { Link } from 'react-router-dom';
import Header from '../../components/header/header';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className='container'>
          <p>Страница не найдена</p>
          <Link to={'/'}>Вернуться на главную страницу</Link>
        </section>
      </main>
    </div>
  );
}

export default NotFoundPage;
