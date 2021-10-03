import { useEffect } from "react";
import { useState } from "react";


const useLoadData = (url) => {
    const [items,setItems] = useState([]);
    useEffect(()=>{
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    },[url])
    
    return items;
};

export default useLoadData;