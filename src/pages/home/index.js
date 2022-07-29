import {Link} from 'react-router-dom'

import './index.scss'
import img1 from 'assets/images/main/1.png'
import img2 from 'assets/images/main/2.png'
import img3 from 'assets/images/main/3.png'
import img4 from 'assets/images/main/4.png'
import startIcon from 'assets/icons/start.svg'

const items = [
  {
    id: '1',
    name: 'Visual',
    img: img1,
    col: 2,
  },
  {
    id: '2',
    name: 'Intuitive',
    img: img2,
    col: 2,
  },
  {
    id: '3',
    name: 'Similiarity',
    img: img3,
    col: 2,
  },
  {
    id: '4',
    name: 'Cognitive',
    img: img4,
    col: 2,
  },
]


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
                  <img src={item.img} alt="" />
                  <div className="home-page__container__content__item__img__hover">
                    <Link to={'/'} className="btn btn-light btn-start">Start <img src={startIcon} alt="" /></Link>
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
