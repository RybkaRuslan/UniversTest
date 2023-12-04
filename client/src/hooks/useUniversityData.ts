import { University, UseUniversityDataResult } from '@/types/types';
import { useEffect, useState } from 'react';
import { useQuery, UseQueryResult } from 'react-query';

 const useUniversityData = (country: string, name: string): UseUniversityDataResult => {
  const [progress, setProgress] = useState<number>(0);

  const { data, isLoading, isError }: UseQueryResult<University[], unknown> = useQuery(
    ['universities', country, name],
    () => fetchUniversities(country, name),
    {
      enabled: Boolean(country || name),
      placeholderData: true,
    }
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const fetchUniversities = async (country: string, name: string) => {
    const url = `http://universities.hipolabs.com/search?country=${country}&name=${name}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  return { data, isLoading, isError, progress };
};

export default useUniversityData;