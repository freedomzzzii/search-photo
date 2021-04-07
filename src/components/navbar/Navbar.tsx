import { useState, ChangeEvent, useRef, RefObject, KeyboardEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Navbar.scss';

import { fetchFilterListPhoto } from '../../redux/actions';
import { actionDefaultType } from '../../common/type';


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

function Navbar() {
  const dispatch = useDispatch();
  const { getListPhoto } = useSelector((state: stateType) => state);

  const [search, setSearch] = useState<string>('');

  const dropdownRef: RefObject<any> = useRef(null);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);

  const handleFilterData = () => {
    try {
      const newData = getListPhoto.data?.filter(ele => new RegExp(search).test(ele.title));

      return dispatch(fetchFilterListPhoto(newData));
    } catch (error) {
      return dispatch(fetchFilterListPhoto([]));;
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleFilterData();
    }
  };

  return (
    <div className="Navbar">
      <div className="nav">
        <div className="title">Allbum</div>
        <span className="box-search" ref={dropdownRef}>
          <input placeholder="search title" value={search} onChange={handleSearch} onKeyPress={handleKeyPress} />
          <button className="btn" onClick={handleFilterData}>search</button>
        </span>
        <span />
      </div>
    </div>
  );
}

export default Navbar;
