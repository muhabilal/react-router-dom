import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Filter() {
    const [searchParam, setSearchParam] = useSearchParams();
    console.warn(searchParam.get('age'));
    console.warn(searchParam.get('city'));
    const age = searchParam.get('age');
    const city = searchParam.get('city');
    return (
        <div>
            <h1>Filter page</h1>
            <h3>My age is:{age}</h3>
            <h3>My city is:{city}</h3>
            <button onClick={(e) => setSearchParam({ age: 22, city: 'ISL' })}>Set Age in Query Params</button>
        </div>
    )
}

export default Filter
