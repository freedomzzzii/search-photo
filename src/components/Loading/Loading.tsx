import { useRef, useEffect, useState, RefObject } from 'react';
import lottie from 'lottie-web';

import './Loading.scss';

import animationData from './loading.json';

export default function Loading() {
  const [isLoadLottie, setIsLoadLottie] = useState<boolean>(false);

  const animationBoxRef: RefObject<any> = useRef(null);

  useEffect(() => {
    if (!isLoadLottie) {
      lottie.loadAnimation({
        container: animationBoxRef?.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData,
      });

      setIsLoadLottie(true);
    }
  }, [animationBoxRef]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div id="lottie-container" className="Loading">
      <div className="box-lottie">
        <div className="lottie" ref={animationBoxRef} />
      </div>
    </div>
  );
}
