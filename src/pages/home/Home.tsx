import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './Home.scss';

import { actionDefaultType } from '../../common/type';

type stateType = {
  filterListPhoto: actionDefaultType & {
    payload: Array<dataType>,
  },
};
type dataType = {
  albumId: number,
  id: number,
  thumbnailUrl: string,
  title: string,
  url: string,
};

function Home() {
  const { filterListPhoto } = useSelector((state: stateType) => state);

  const [data, setData] = useState<Array<any>>([]);

  useEffect(() => {
    const newData: Array<any> = [];

    filterListPhoto.payload.forEach((element: dataType, index: number) => newData.push( // fix bug error react-dev-tools maximum size of map array (change map to foreach)
      <div className="item" key={`item-${index}`}>
        <img src={element.thumbnailUrl} alt={`thumbnai-${index}`} />
        <div className="title">{element.title}</div>
      </div>
    ));

    setData(newData);
  }, [filterListPhoto]);

  return (
    <div className="Home">
      <div className="box-items">
        {data}
      </div>
    </div>
  );
}

export default Home;
