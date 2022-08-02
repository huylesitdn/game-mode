import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Layout from 'components/common/layout';

const Home = React.lazy(() => import("pages/home"));
const Detail = React.lazy(() => import("pages/detail"));
const Results = React.lazy(() => import("pages/results"));
const NotFound = React.lazy(() => import("pages/NotFound"));

const Loading = () => {
  return (
    <div className="loading">Loading ...</div>
  )
}

export default function App() {
  return (
    <React.Suspense fallback={<Loading/>}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </React.Suspense>
  );
}
