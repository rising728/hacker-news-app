# Hacker News Reader

This project is a simplified web-based version of Hacker News that allows you to browse stories using a clean and user-friendly interface. It is built with Vite and React.

## Prerequisites

Before you begin, ensure you have installed the following software on your computer:

- [Docker Desktop](https://www.docker.com/products/docker-desktop): This is necessary to build and run the application container.
- [Git](https://git-scm.com/downloads): You will use Git to clone the repository.

## Installation

To get started, follow the steps below:

1. **Clone the repository**

   Use the following command to clone the repository to your desired directory:

   ```bash
   git clone https://github.com/rising728/hacker-news-app.git
   ```

2. **Build and start the application**

   Navigate into the `hacker-news-app` directory and use docker-compose to build and start the application:

   ```bash
   cd hacker-news-app
   docker-compose up --build
   ```

3. **Access the application**

   Once the build process is complete, you can access the application by opening your web browser and navigating to:

   ```
   http://localhost:5173
   ```

   **Note:** The application currently fetches 20 stories per load. If you wish to load more stories at once, navigate to `src/pages/stories.jsx` and adjust the value in line 22:

   ```
   const { isLoading, stories } = useDataFetcher(type ? type : "top", 20);
   ```

   The `20` is the total number of stories that will be fetched. Change this value according to your needs.

## Contributing

We welcome any contributions to improve this project. Please feel free to fork the repository and submit pull requests.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

This project would not be possible without the data provided by the Hacker News API. Thanks to the team at Y Combinator for maintaining this resource.
