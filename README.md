# Installation Instructions

Follow these steps to set up the project and add your API key.

## Install Dependencies

First, ensure you have [Yarn](https://yarnpkg.com/) installed. Then, run the following command to install the project dependencies:

```bash
yarn install
```

## Add API Key

1. Create a new `.env` file in the root directory of the project by copying the provided `.env.example` file:

  ```bash
  cp .env.example .env
  ```

2. Open the newly created `.env` file and add your API key to the `VITE_API_KEY` variable:

  ```env
  VITE_API_KEY=your_api_key_here
  ```

Replace `your_api_key_here` with your actual API key.

That's it! You have successfully installed the dependencies and added your API key.

## Run the Project

To start the development server, run the following command:

```bash
yarn dev
```

This will start the project and you can view it in your browser at `http://localhost:5173`.



## Run End-to-End Tests

To run the unit tests, use the following command:

```bash
yarn test
```

This will execute the tests using vitest.

## Run End-to-End Tests

To run the end-to-end tests, start the server and than run the e2e tests with the command:

```bash
yarn e2e
```

This will execute the e2e tests using playwright.


## TODOS

### Integrate with Sessions API

- Fetch previously favorited movies for the current session.
- Allow users to mark a movie as a favorite for the current session.

### Sorting and Filtering

- Add sorting options on the main list screen.
- Implement filters to refine the movie list based on user preferences.