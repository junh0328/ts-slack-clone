import { useState, useCallback, Dispatch, SetStateAction } from 'react';

type ReturnTypes<T = any> = [T, (e: any) => void, Dispatch<SetStateAction<T>>];

const useInput = <T = any>(initialValue: T): ReturnTypes<T> => {
  // initialValue로 string 값이 온다면 generics가 string으로 변환됨
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
  // (return 값, 즉 반환 값에 대한 타입스크립트의 타이핑 처리라고 보면 된다.)
  // [T, (e: any) => void, Dispatch<SetStateAction<T>>]
};

export default useInput;
