import { useState, useEffect, ChangeEvent, useRef, RefObject } from 'react';
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

  const handleFilterData = (): Array<any> => {
    try {
      return getListPhoto.data?.filter(ele => new RegExp(search).test(ele.title));
    } catch (error) {
      return [];
    }
  }

  useEffect(() => {
    dispatch(fetchFilterListPhoto(handleFilterData()));
  }, [search]);

  return (
    <div className="Navbar">
      <div className="nav">
        <div className="title">Allbum</div>
        <span className="box-search" ref={dropdownRef}>
          <input placeholder="search title" value={search} onChange={handleSearch} />
        </span>
        <span />
      </div>
    </div>
  );
}

export default Navbar;
