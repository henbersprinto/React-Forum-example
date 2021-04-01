import React, { useState } from 'react'

const baseURL = `https://forum-api-jkrop.ondigitalocean.app`;

const PostComment = ({id}) => {

    const postCommentURL = `${baseURL}/thread/${id}/comment`

    const [commentTitle, setCommentTitle] = useState('');
    const [commentContent, setCommentContent] = useState('');

    const [response, setResponse] = useState('');

    const handleOnChange = (e) => {
        setCommentTitle(e.target.value);
    }

    const handleContentChange = (e) => {
        setCommentContent(e.target.value);
    }

    const submitComment = async () => {
      const requestBody = {
        "title": commentTitle,
        "content": commentContent
      };

      const apiResponse = await fetch(postCommentURL, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
        body: JSON.stringify(requestBody)
      });
      
      const data = await apiResponse.json();
      setCommentTitle('');
      setCommentContent('');
      setResponse(JSON.stringify(data));
    }

    return (
      <div>
        <h2>Kommentera tråd</h2>
        <section>
          <label>Titel: </label>
          <input type="text"
            value={commentTitle}
            onChange={(e) => handleOnChange(e)}
          ></input>
        </section>
        <section>
          <label>Innehåll: </label>
          <textarea type="text" value={commentContent} onChange={(e) => handleContentChange(e)}></textarea>
        </section>
        <button onClick={() => submitComment()}>Skicka</button>
        <h3>Svar från API - ny kommentar</h3>
        <textarea value={response}></textarea>
      </div>
    )
}

export default PostComment