import './App.css';
import Blog from './components/Blog';
import './Blog.css'
import './Services.css'
import ArticleSuite from './components/ArticleSuite'
import { useParams } from 'react-router-dom'; 
import { Routes,Route } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import { Switch } from '@mui/material';
import { Services } from './components/Services';
function App() {

  return (
    <Routes>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/' element={<Blog/>}/>
      <Route path="/articles/:id" element={<ArticleSuite />} />
    </Routes>
  );
}

export default App;
