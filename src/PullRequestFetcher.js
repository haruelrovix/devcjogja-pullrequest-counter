import React, { useState, useEffect } from 'react';
import contributor from './Contributor.json'

const PullRequestFetcher = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  async function fetchData() {
    const authors = contributor.map(author => `author:${author}`).join('+')

    const res = await fetch(`https://api.github.com/search/issues?q=${authors}+is:pr+created:>2019-10-26&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <span>{JSON.stringify(planets)}</span>
      <hr />
      {hasError && <span>Has error: {JSON.stringify(hasError)}</span>}
    </div>
  )
}

export default PullRequestFetcher;
