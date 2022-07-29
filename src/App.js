import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Layout from 'components/common/layout';
import Home from 'pages/home';
import NotFound from 'pages/NotFound';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
