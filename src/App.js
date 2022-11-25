import { Route, Routes } from 'react-router-dom';
import Layout from "./layout/Layout";
import Test from './pages/Test';
import Home from './pages/Home';
import UrlTest from './pages/UrlTest';
import LoginPage from './pages/users/Login';
import JoinPage from './pages/users/Join';
import QueryTest from './pages/QueryTest';
import ContentList from './pages/contents/ContentList';
import ContentView from './pages/contents/ContentView';
import NotFound from "./pages/errors/NotFound";


const App = () => {
  return (
      <Routes>

          {/*기본 레이아웃*/}
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/test" element={<Test />} />
              <Route path="/url/:param" element={<UrlTest />} />
              <Route path="/query" element={<QueryTest />} />
              <Route path="/contents" element={<ContentList />} />
              <Route path="/contents/:id" element={<ContentView />} />
          </Route>
          
            {/* 레이아웃 제외 단독페이지 */}
          <Route path="/user" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
            {/*에러페이지*/}
          <Route path="*" element={<NotFound />} />

      </Routes>
  );
};

export default App;
