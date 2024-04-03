import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/login-form/login-form';

function LoginPage(): JSX.Element {
  return (
    <main className="page__main page__main--login">
      <Helmet>
        <title>6 cities. Login</title>
      </Helmet>
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <LoginForm />
        </section>

        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to="#">
              <span>Amsterdam</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
