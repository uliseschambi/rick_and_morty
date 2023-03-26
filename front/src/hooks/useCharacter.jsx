import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCharacterDetail, cleanDetail } from '../redux/actions';

const useCharacter = () => {
  const { detailId } = useParams();
  const dispatch = useDispatch();
  const character = useSelector(state => state.characterDetail);

  useEffect(() => {
    dispatch(getCharacterDetail(detailId));
    return () => {
      dispatch(cleanDetail());
    };
  }, [detailId]);

  return character;
};

export default useCharacter;
