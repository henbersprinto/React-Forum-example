import React, { useState, useReducer } from 'react'
import {categoryReducer, getCategoriesAsync} from '../reducers/categoryReducer'


const sandbox = 'HenningsAPIv2' //Byt denna mot er egna sandbox
const postCategoryURL = `https://forum-api-jkrop.ondigitalocean.app/sandbox/${sandbox}/category`;

const PostCategory = () => {

    const [newCategory, setNewCategory] = useState('');
    const [response, setResponse] = useState('');

    const handleOnChange = (e) => {
        setNewCategory(e.target.value);
        setResponse('');
    }

    const submitCategory = () => {
        const requestBody = {
            "name": newCategory
        };

        fetch(postCategoryURL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        }).then(res => res.json().then(data => {
            setNewCategory('');
            setResponse(JSON.stringify(data));
        }));
    }

    return (
        <div>
            <h1>Lägg till ny kategori</h1>
            <input 
                type="text" 
                placeholder="Write a category name" 
                value={newCategory}
                onChange={(e) => handleOnChange(e)}>
            </input>
            <button onClick={() => submitCategory()}>Skicka</button>
            <h3>Svar från API - skapad kategori</h3>
            <textarea value={response}></textarea>
        </div>
    )
}

export default PostCategory  
