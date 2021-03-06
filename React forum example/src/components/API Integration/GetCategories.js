import React, { useState, useEffect, useReducer } from 'react'
import { Link } from "react-router-dom";
import {categoryReducer, getCategoriesAsync} from '../reducers/categoryReducer'


// const sandbox = 'HenningsAPIv2' //Byt denna mot er egna sandbox
// const getCategoriesUrl = `https://forum-api-jkrop.ondigitalocean.app/sandbox/${sandbox}/category`;

const GetCategories = () => {

    // const [categoriesState, setCategoriesState] = useState([]);
    const initialState = {
        "categories": []
    }
    const [categoriesState, dispatch] = useReducer(categoryReducer, initialState);
    
    useEffect(() => {
            getCategoriesAsync(dispatch);
    },[])

    // useEffect(() => {
    //     fetch(getCategoriesUrl).then(res => res.json().then(data => setCategoriesState(data)));
    // }, [])

    const listStyle = {
        display: "inline-table",
        border: "1px solid",
        paddingRight: "60px",
        paddingBottom: "10px",
        paddingTop: "10px"
    }

    return (
        <>
            <h2>Vilka kategories finns i API:et?</h2>
            <div>
                <ul style={listStyle}>
                    {/* {categoriesState.map( category => ( */}
                    {categoriesState.categories.map( category => (
                    <li>
                        <p>{category.name}</p>
                        <Link to={`/category/${category._id}/thread`}>
                            Visa trådar
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default GetCategories  
