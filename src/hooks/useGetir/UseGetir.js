import {useState,useEffect} from 'react';
import axios from 'axios';
const UseGetir = (url) => {
    const [error, setError] = useState(null);
    const [productList, useProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const getir = async () => {
        try {
            const response = await axios.get(url);
            useProductList(response.data);
        } catch (error) {
            setError(error.message);
        }
        finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        getir();
    }, []);

    return {error,productList,loading}
}
export default UseGetir;