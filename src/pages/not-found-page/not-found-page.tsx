import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import {Helmet} from 'react-helmet-async';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <section>
        <Helmet>
          <title>Страница не найдена</title>
        </Helmet>
        <h1>Старница не найдена</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
    </div>
  );
}

export default NotFoundPage;
