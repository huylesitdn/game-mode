import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Layout from 'components/common/layout';

const Home = React.lazy(() => import("pages/home"));
const Detail = React.lazy(() => import("pages/detail"));
const NotFound = React.lazy(() => import("pages/NotFound"));

export default function App() {
  return (
    <React.Suspense fallback={`Loading`}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </React.Suspense>
  );
}
