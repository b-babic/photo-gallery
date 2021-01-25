import { useEffect, useState } from 'react';

const API_ENDPOINT = 'http://www.splashbase.co/api/v1/images/latest';

export interface Photo {
  id: string;
  url: string;
  // eslint-disable-next-line camelcase
  large_url: string;
}

interface Data {
  images: Photo[];
}

export const useSplashBase = () => {
  const [data, setData] = useState<Photo[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [failed, setFailed] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    fetch(API_ENDPOINT)
      .then((res) => {
        return res.json();
      })
      .then((res: Data) => {
        setData(res.images);
        setLoading(false);
      })
      .catch(() => {
        setFailed(true);
      });
  }, []);

  return {
    loading,
    data,
    failed,
  };
};
