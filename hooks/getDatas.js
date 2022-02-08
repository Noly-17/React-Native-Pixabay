import {useSelector} from 'react-redux';

export const getDatas = () => {
  const imageDatas = useSelector(state => state.datas.hits);
  return imageDatas;
};

export const getId = () => {
  // const imageDatas = useSelector(state => state.datas.hits);
  const id = useSelector(state => state.userId);
  // console.log(id);

  // const newArr = imageDatas.filter(val => val.id == id);

  return id;
};

// export const getLoading = () => {
//   const loading = useSelector(state => state.id);

//   const newArr = imageDatas.filter(val => val.id === id);

//   return loading;
// };
