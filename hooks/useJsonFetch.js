import { useEffect, useState } from 'react';

export function useJsonFetch(url, opt) {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, changeStatusLoading] = useState(false);

  useEffect(() => {
    fetchData(url, opt);
  }, []);

  const fetchData = (url, opt) => {
    changeStatusLoading(true);

    fetch(url, opt)
      .then(res => {
        if (res.ok) {
          changeStatusLoading(false);
          setLoadData(res);
        } else {
          changeStatusLoading(false)
          setLoadData(res)
          setError(true);
        }
      })
  }

  const setLoadData = (res) => {
    res.json()
      .then(
        loadData => setData(loadData)
      )
      .catch(error => {
        setError(true)
        setData({status: 'Ошибка парсинга'})
      })
  }

  return [data, error, loading]
}