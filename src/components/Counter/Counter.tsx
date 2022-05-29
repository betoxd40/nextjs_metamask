import { FunctionComponent, useEffect, useState } from 'react';

type Props = {
  timer: number;
  onComplete: () => void;
};

export const Counter: FunctionComponent<Props> = ({ timer, onComplete }) => {
  const [counter, setCounter] = useState<number>(timer);

  useEffect(() => {
    const TIMEOUT_ONE_SECOND = 1000;
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), TIMEOUT_ONE_SECOND);
    } else {
      onComplete();
    }
  }, [counter]);

  return <>{counter}</>;
};
