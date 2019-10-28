import React, { useState, useEffect } from 'react';
import contributor from './Contributor.json'

const PullRequestFetcher = () => {
  const [hasError, setErrors] = useState(false);
  const [pullRequests, setData] = useState({});

  async function fetchData() {
    // store urls to fetch in an array
    const urls = contributor.map(author => `https://api.github.com/search/issues?q=author:${author}+is:pr+created:>${process.env.REACT_APP_BASE_DATE}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)

    // use map() to perform a fetch and handle the response for each url
    Promise.all(urls.map(url =>
      fetch(url)
        .then(res => res.json())
        .catch(err => setErrors(err))
    ))
      .then(data => {
        setData(data)
      })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <span>{JSON.stringify(pullRequests)}</span>
      <hr />
      {hasError && <span>Has error: {JSON.stringify(hasError)}</span>}
    </div>
  )
}

export default PullRequestFetcher;
