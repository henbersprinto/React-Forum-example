import React, { useState } from 'react'
import {
    useParams
  } from "react-router-dom";

const baseURL = `https://forum-api-jkrop.ondigitalocean.app`;

const PostThread = () => {
    let {categoryId} = useParams();

    const postThreadURL = `${baseURL}/category/${categoryId}/thread`

    const [threadTitle, setThreadTitle] = useState('');
    const [threadContent, setThreadContent] = useState('');

    const [response, setResponse] = useState('');

    const handleOnChange = (e) => {
      setThreadTitle(e.target.value);
    }

    const handleContentChange = (e) => {
      setThreadContent(e.target.value);
    }

    const submitThread = async () => {
      const requestBody = {
        "title": threadTitle,
        "content": threadContent
      };

      const apiResponse = await fetch(postThreadURL, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
        body: JSON.stringify(requestBody)
      });
      
      const data = await apiResponse.json();
      setThreadTitle('');
      setThreadContent('');
      setResponse(JSON.stringify(data));
    }

    return (
      <div>
        <h2>Skapa tråd</h2>
        <section>
          <label>Titel: </label>
          <input type="text"
            value={threadTitle}
            onChange={(e) => handleOnChange(e)}
          ></input>
        </section>
        <section>
          <label>Innehåll: </label>
          <textarea type="text" value={threadContent} onChange={(e) => handleContentChange(e)}></textarea>
        </section>
        <button onClick={() => submitThread()}>Skicka</button>
        <h3>Svar från API - skapad tråd</h3>
        <textarea value={response}></textarea>
      </div>
    )
}

export default PostThread