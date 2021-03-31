import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import PostLike from './PostLike';
import PostThread from './PostThread'

const baseURL = `https://forum-api-jkrop.ondigitalocean.app`;

const GetThreads = () => {
    const {categoryId} = useParams();
    const getCategoryThreadsURL = `${baseURL}/category/${categoryId}/thread`

    const [threads, setThreads] = useState([]);

    useEffect(() => {
        if(threads.length === 0) {
            fetch(getCategoryThreadsURL).then(res => res.json().then(data => setThreads(data)))
        }
    })

    const listStyle = {
        display: "inline-table",
        border: "1px solid",
        paddingRight: "60px",
        paddingBottom: "10px",
        paddingTop: "10px"
    }

    return(
    <>
        <h2>Trådar tillhörande kategori</h2>
        <div>
            <ul style={listStyle}>
                {threads.map( t => (
                <li>
                    <p>{t.title}</p>
                    <PostLike id={t._id} type="THREAD"></PostLike>
                </li>
                ))}
            </ul>
            <PostThread categoryId={categoryId}/>
        </div>
    </>
    )
}

export default GetThreads