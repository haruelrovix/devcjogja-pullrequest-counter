[![Netlify Status](https://api.netlify.com/api/v1/badges/578617f2-f11f-4060-801c-72af711aee6f/deploy-status)](https://app.netlify.com/sites/devcjogja25/deploys)

## What is this?

Pull Request counter, for Dev C Jogja #25 Contributor. List is [here](https://github.com/haruelrovix/devcjogja-pullrequest-counter/blob/master/src/Contributor.json).


## How does it work?

Simple. It fetches data from GitHub API. You can try it on your terminal:

```bash
curl https://api.github.com/search/issues?q=author:${AUTHOR}+is:pr+created:${BASE_DATE}..${END_DATE}
```

- Change ${AUTHOR} with GitHub's username
- ${BASE_DATE} and ${END_DATE} in YYYY-MM-DD format

For example:

```bash
curl https://api.github.com/search/issues?q=author:haruelrovix+is:pr+created:2019-10-01..2019-10-31
```

In this repo, respective code is on this line, [#L11](https://github.com/haruelrovix/devcjogja-pullrequest-counter/blob/599f5d1d0849a78945918f154217f02665cae683/src/PullRequestFetcher.js#L11).


## If you want to run this site locally

1. Clone the repo

```
git clone https://github.com/haruelrovix/devcjogja-pullrequest-counter.git
```

2. Install dependencies

```
yarn
```

3. You need to provide GitHub app's Client ID and Client Secret. You can follow this tutorial, [Connect your app to GitHub
](https://auth0.com/docs/connections/social/github).

4. Next, copy-paste the Client ID and Client Secret into `.env` file.

```
REACT_APP_CLIENT_ID=<your-github-client-id>
REACT_APP_CLIENT_SECRET=<your-github-client-secret>
REACT_APP_BASE_DATE=2019-10-27
REACT_APP_END_DATE=2019-10-30
```

`BASE_DATE` and `END_DATE` can be modified to suit your needs.

5. Last, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
