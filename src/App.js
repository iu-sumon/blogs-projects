import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Videos from './Components/Videos/Videos';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import SingleBlogDetails from './Components/SingleBlogDetails/SingleBlogDetails';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>

        <Route path='/' element={<Blog/>}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/getBlog/:BlogId' element={<SingleBlogDetails/>}/>
         
      </Routes>
    </div>
  );
}

export default App;
