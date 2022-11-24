import { Route, Routes } from 'react-router-dom';
import Layout from "./layout/Layout";
import Test from './pages/Test';
import Home from './pages/Home';
import UrlTest from './pages/UrlTest';
import QueryTest from './pages/QueryTest';
import ContentList from './pages/contents/ContentList';
import ContentView from './pages/contents/ContentView';
import NotFound from "./pages/errors/NotFound";


const App = () => {
  return (
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/test" element={<Test />} />
              <Route path="/url/:param" element={<UrlTest />} />
              <Route path="/query" element={<QueryTest />} />
              <Route path="/contents" element={<ContentList />}>
                  <Route path=":id" element={<ContentView />} />
              </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default App;
