import { useEffect, useState } from 'react';
import useFetch from "./useFetch";
import {API_KEY} from "../const";

//Function that returns the summary of a recipe

const useSummary = (id) => {
    const [ summary, setSummary ] = useState('');
    const { data, isPending } = useFetch(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${API_KEY}`);

    useEffect(() => !isPending ? setSummary(data.summary.replace(/(&nbsp;|<([^>]+)>)/ig, "")) : setSummary('No summary'), [summary, isPending]);

    return summary;
}

export default useSummary;