import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.scss';

import { fetchGetListPhoto, fetchFilterListPhoto } from './redux/actions';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { actionDefaultType } from './common/type';

type stateType = {
  getListPhoto: actionDefaultType & {
    data: Array<dataType>,
  },
};
type dataType = {
  albumId: number,
  id: number,
  thumbnailUrl: string,
  title: string,
  url: string,
};

function App() {
  const dispatch = useDispatch();
  const { getListPhoto } = useSelector((state: stateType) => state);

  useEffect(() => {
    dispatch(fetchGetListPhoto());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchFilterListPhoto(getListPhoto.data));
  }, [getListPhoto]);

  if (!getListPhoto.data) {
    return null;
  }

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
