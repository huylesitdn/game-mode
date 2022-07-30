import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import {find, get, findIndex} from 'lodash'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './index.scss'
import backIcon from 'assets/icons/back.svg'
import incorrectIcon from 'assets/images/answers/incorrect.svg'
import correctIcon from 'assets/images/answers/correct.svg'
import {items} from 'constants'


function Detail() {

  const params = useParams()
  const [detailId, setDetailId] = useState(params.id)
  const [detail, setDetail] = useState()
  const [correct, setCorrect] = useState()
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    if(detailId !== params.id) { // reset state
      setDetail()
      setCorrect()
      setShowResult(false)
      setDetailId(params.id)
    }
    setDetail(find(items, ['id', params.id]));
    console.log('detailId', detailId)
    console.log('params.id', params.id)
  }, [params, params.id, detailId])

  const handleChooseAnswer = answer => e => {
    setShowResult(true)
    setCorrect(answer.correct)
  }

  const renderContent = () => {
    const _detail = get(detail, 'detail')
    const currentIndex = findIndex(items, ['id', params.id]);
    const nextIndex = (currentIndex + 1) % items.length;

    return (
      <div className="detail-page__container">
        <div className="container detail-page__container__top">
          <div className="detail-page__container__top__nav">
            <Link to='/' className="detail-page__container__top__nav__back">
              <img src={backIcon} alt="" />
            </Link>
            <div>
              {correct === true && <Link to={`/detail/${get(items, `[${nextIndex}].id`, params.id)}`} className="btn btn-light">Next Question</Link>}
              {correct === false && <Link to='/results' className="btn btn-secondary">Show Results</Link>}
            </div>
          </div>    
          <h1>{_detail.title}</h1>
        </div>
        <div className="row detail-page__container__items">
          {
            _detail.answers.map((answer, key) => (
              <div className="col-lg-6 col-12 detail-page__container__items__item" key={key}>
                <LazyLoadImage effect="blur" className="detail-page__container__items__item__img" src={answer.img} alt="" />
                {
                  !showResult && (
                    <div className="detail-page__container__items__item__content">
                      <button className="btn btn-light btn-choose" onClick={handleChooseAnswer(answer)}>Choose Answer</button>
                    </div>
                  )
                }
                {!!showResult && renderResultContent(answer)}
              </div>
            ))
          }
        </div>
      </div>
    )
  }

  const renderResultContent = answer => {
    const isCorrect = answer.correct
    return (
      <div className="detail-page__container__items__item__result">
        <div className="detail-page__container__items__item__result__content">
          <LazyLoadImage effect="blur" src={isCorrect ? correctIcon : incorrectIcon} alt="" />
          <div className="text">
            {
              isCorrect ? 
                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour':
                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'
            }
          </div>
        </div>
      </div>
    )
  }

  const renderNoContent = () => {
    return (
      <div>
        No detail found
      </div>
    )
  }

  return (
    <section className="detail-page">
      {!!detail ? renderContent() : renderNoContent()}
    </section>
  );
}

export default Detail;
