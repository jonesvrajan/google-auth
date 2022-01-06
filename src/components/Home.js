

import React, { useState, useEffect, useRef } from 'react';

function Home() {

    const [postId, setPostId] = useState(null);
    const [inp, setInp] = useState(false);
    const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
 
  const submit = e => {
    e.preventDefault()
    fetch(`https://hooks.zapier.com/hooks/catch/11607844/b1jdtzu`, {
      method: 'POST',
      body: JSON.stringify({ email, comment }),
    })
    console.log(email, comment)
    if (email) {
      setInp(true)
    }
  }

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React Hooks POST Request Example' })
  };
  fetch('https://reqres.in/api/posts', requestOptions)
      .then(response => response.json())
      .then(data => setPostId(data.id));
  }, [])


    return (
        <div className="card text-center m-3">
            <h5 className="card-header">Assignment - POST Request</h5>
            <div className="card-body">
                Returned Id: {postId}
            </div>

            <p>{email}</p>
            <p>{comment}</p>
            {inp ? <p>Form Submitted!</p> : null}
            <form onSubmit={submit}>
            <label htmlFor="email">Email (optional)</label> 
              <input
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <label htmlFor="comment">Your question or comment</label>
              <textarea
                name="comment"
                value={comment}
                onChange={e => setComment(e.target.value)}
              />
              <button type="submit">Send it!</button>
            </form>
            
        </div>
    );
}


export default Home;
