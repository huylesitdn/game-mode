import {Link, useNavigate} from 'react-router-dom'
import './index.scss'

function Results() {
  const navigate = useNavigate()

  return (
    <section className="results-page">
      <div className="results-page__content">
        <h2>You Scored</h2>
        <h1>2</h1>
        <h3>
          Thats not a good score! The average score is 3.2<br/>
          No worries, you can play again and we will pretend we didn’t see that score!
        </h3>
        <div className="action">
          <Link to={`/`} className="btn btn-secondary">Back to menu</Link>
          <button onClick={()=>navigate(-1)} className="btn btn-light">Play Again</button>
        </div>
      </div>
    </section>
  );
}

export default Results;
