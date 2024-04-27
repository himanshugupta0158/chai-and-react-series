import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {

  let url  = `https://api.exchangerate-api.com/v4/latest/${currency}`

  const [data, setData] = useState({

  });
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res["rates"]));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
