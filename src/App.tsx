import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.scss';

import { fetchGetListPhoto, fetchFilterListPhoto } from './redux/actions';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import { actionDefaultType } from './common/type';
import Loading from './components/Loading/Loading';

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
  }, [getListPhoto]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!getListPhoto.data) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
