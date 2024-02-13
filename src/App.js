import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetail from './BlogDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route index element = {<Home />} />
              <Route path='create' element={<Create />} />
              <Route path='/blogs/:id' element={<BlogDetail />}  />
            </ Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;