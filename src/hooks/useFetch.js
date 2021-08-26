import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw {
                        err: true,
                        status: res.status,
                        statusText: res.statusText ? res.statusText : "An error has ocurred",
                    }
                }
                const data = await res.json();

                setData(data);
                setIsPending(false);
                setError({ err: false })
            } catch (e) {
                setError(e);
                setIsPending(true);
            }
        }
        getData();
    }, [url])

    return {
        data,
        isPending,
        error
    }

}