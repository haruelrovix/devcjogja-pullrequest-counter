import React, { useState, useEffect } from 'react';
import contributor from './Contributor.json'
import PullRequestTable from './PullRequestTable'

const PullRequestFetcher = () => {
  const [hasError, setErrors] = useState(false);
  const [pullRequests, setData] = useState({});

  async function fetchData() {
    // store urls to fetch in an array
    const urls = contributor.map(author => `https://api.github.com/search/issues?q=author:${author}+is:pr+created:>${process.env.REACT_APP_BASE_DATE}+created:<${process.env.REACT_APP_END_DATE}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)

    // use map() to perform a fetch and handle the response for each url
    Promise.all(urls.map(url =>
      fetch(url)
        .then(res => res.json())
        .catch(err => setErrors(err))
    ))
      .then(data => {
        setData(data.sort((a, b) => b.total_count - a.total_count))
      })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {pullRequests && <span><PullRequestTable data={pullRequests} /></span>}
      <hr />
      {hasError && <span>Has error: {JSON.stringify(hasError)}</span>}
    </div>
  )
}

export default PullRequestFetcher;
