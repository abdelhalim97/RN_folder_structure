import {useQuery} from '@tanstack/react-query';
import axiosInstance from '../axios/axios-instance';
import {QueryKeys} from './query-keys.enum';

const useFetchCats = () => {
  return useQuery({
    queryKey: [QueryKeys.FetchCats],
    queryFn: async () =>
      await axiosInstance
        .get(
          'images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1',
        )
        .then(res => res),
  });
};

export default useFetchCats;
