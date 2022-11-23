import { Route, Routes } from 'react-router-dom';
import Test from './pages/Test';
import Home from './pages/Home';
import UrlTest from './pages/UrlTest';
import QueryTest from './pages/QueryTest';


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/url/:param" element={<UrlTest />} />
        <Route path="/query" element={<QueryTest />} />
      </Routes>
  );
};

export default App;
