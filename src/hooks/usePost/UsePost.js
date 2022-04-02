import { useState } from 'react';
import axios from 'axios';
const UsePost = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    async function post(url, resData) {
        try {
            setLoading(true);
            const res = await axios.post(url, resData);
            setData(res.data);
            setLoading(false);
        } catch (err) {
            setError(err)
            setLoading(false);
        }
    }
    return { data, error, loading, post };
}
export default UsePost;