import React from 'react';
import Loader from './Loader'

const Link = ({ url }) => {
  return (
    <div>
      <a
        className="App-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {url}
      </a>
    </div>
  )
}

const RenderRow = ({ data }) => {
  if (data.items.length <= 0) return null

  return (
    <React.Fragment>
      <td>{data.items[0].user.login}</td>
      <td>{data.total_count}</td>
      <td className="td-link">{data.items.map((item, index) => <Link url={item.pull_request.html_url} key={index} />)}</td>
    </React.Fragment>
  )
}

const getHeader = function (header) {
  return header.map(key => {
    return <th key={key}>{key.toUpperCase()}</th>
  })
}

const getRowsData = function (data) {
  return data.map((row, index) => {
    return <tr key={index}><RenderRow key={index} data={row} /></tr>
  })
}

function PullRequestTable({ data }) {
  if (!data || !data.length || data.length <= 0) return <Loader />;

  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>{getHeader(['username', 'PR', 'link'])}</tr>
        </thead>
        <tbody>
          {getRowsData(data)}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default PullRequestTable;