import {Link} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './index.scss'
import startIcon from 'assets/icons/start.svg'
import {items} from 'constants'


function Home() {
  return (
    <section className="home-page">
      <div className="container home-page__container">
        <div className="home-page__container__top">
          <span className="home-page__container__top__welcome">Welcome To</span>
          <h1 className="home-page__container__top__title">Clasification Games</h1>
          <h3 className="home-page__container__top__subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h3>
        </div>
        <div className="row home-page__container__content">
          {
            items.map((item, key) => (
              <div key={key} className="col-xl-3 col-md-6 col-6 home-page__container__content__item">
                <div className="home-page__container__content__item__img">
                  <LazyLoadImage effect="blur" src={item.img} alt="" />
                  <div className="home-page__container__content__item__img__hover">
                    <Link to={`/detail/${item.id}`} className="btn btn-light btn-start">Start <img src={startIcon} alt="" /></Link>
                  </div>
                </div>
                <div className="home-page__container__content__item__text">{item.name}</div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Home;
