import {useQuery} from '@tanstack/react-query';
import axiosInstance from '../axios/axios-instance';
import {QueryKeys} from './query-keys.enum';

const useFetchCats = () => {
  return useQuery({
    queryKey: [QueryKeys.FetchCats],
    queryFn: async () =>
      await axiosInstance.get('votes?limit=10&order=DESC').then(res => res),
  });
};

export default useFetchCats;
