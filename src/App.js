import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookmarksPage from './pages/BookmarksPage';
import NoPage from './pages/NoPage';

function App() {
    return (
      <div className='parent_div'>
        <BrowserRouter>
         <Routes>
          <Route index element = {<HomePage />} />
          <Route path = "/HomePage" element = {<HomePage />} />
          <Route path = "/BookmarksPage" element = {<BookmarksPage />} />
          <Route path = "*" element = {<NoPage />} />
         </Routes>
         <Footer />
        </BrowserRouter>
      </div>
    );
};

export default App;