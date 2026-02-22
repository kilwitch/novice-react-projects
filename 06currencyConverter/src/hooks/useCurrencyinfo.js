// hooks/useCurrencyInfo.js
import { useState, useEffect, useRef } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const prevData = useRef({}); 

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then(res => res.json())
            .then(res => {
                prevData.current = res[currency]; 
                setData(res[currency]);
            })
            .catch(() => {
                setData(prevData.current); 
            });
    }, [currency]);

    return data; 
}

export default useCurrencyInfo;