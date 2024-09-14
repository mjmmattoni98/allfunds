# Technical project for Allfunds

This project is a technical test for Allfunds. It consists of a RESTful API that provides news from a MongoDB database. The API allows users to fetch actual and archive news, archive them and remove them. It also provides a Swagger documentation for the API in the route `/api-docs`.

If you have docker installed, you can test this server locally without struggling with the installation of MongoDB. Just run the following command:

```sh
docker compose up
```

This will start the server and the MongoDB database in separate containers. The server will be running on `http://localhost:3000`.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Docker (optional, for containerization)

### Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a [.env](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cjavie%5C%5CDevelopment%5C%5CPersonal%5C%5Callfunds%5C%5Cbackend%5C%5C.env%22%2C%22_sep%22%3A1%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fjavie%2FDevelopment%2FPersonal%2Fallfunds%2Fbackend%2F.env%22%2C%22scheme%22%3A%22file%22%7D%7D) file in the root directory and add your environment variables:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/allfunds
   ```

### Running the Application

1. Start MongoDB:

   ```sh
   mongod
   ```

2. Run the application:

   ```sh
   npm start
   ```

3. The server will be running on `http://localhost:3000`.

### API Documentation

API documentation is available at `http://localhost:3000/api-docs`.

### Docker

To run the application using Docker:

1. Build the Docker image:

   ```sh
   docker build -t news-api .
   ```

2. Run the Docker container:
   ```sh
   docker run -p 3000:3000 --env-file .env news-api
   ```

## Project Files

- [app.js](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cjavie%5C%5CDevelopment%5C%5CPersonal%5C%5Callfunds%5C%5Cbackend%5C%5Capp.js%22%2C%22_sep%22%3A1%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fjavie%2FDevelopment%2FPersonal%2Fallfunds%2Fbackend%2Fapp.js%22%2C%22scheme%22%3A%22file%22%7D%7D): Main application file.
- [compose.yml](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cjavie%5C%5CDevelopment%5C%5CPersonal%5C%5Callfunds%5C%5Cbackend%5C%5Ccompose.yml%22%2C%22_sep%22%3A1%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fjavie%2FDevelopment%2FPersonal%2Fallfunds%2Fbackend%2Fcompose.yml%22%2C%22scheme%22%3A%22file%22%7D%7D): Docker Compose configuration.
- [Dockerfile](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cjavie%5C%5CDevelopment%5C%5CPersonal%5C%5Callfunds%5C%5Cbackend%5C%5CDockerfile%22%2C%22_sep%22%3A1%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fjavie%2FDevelopment%2FPersonal%2Fallfunds%2Fbackend%2FDockerfile%22%2C%22scheme%22%3A%22file%22%7D%7D): Docker configuration.
- [package.json](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cjavie%5C%5CDevelopment%5C%5CPersonal%5C%5Callfunds%5C%5Cbackend%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fjavie%2FDevelopment%2FPersonal%2Fallfunds%2Fbackend%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%7D): Project metadata and dependencies.
- [news.js](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cjavie%5C%5CDevelopment%5C%5CPersonal%5C%5Callfunds%5C%5Cbackend%5C%5Croutes%5C%5Cnews.js%22%2C%22_sep%22%3A1%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fjavie%2FDevelopment%2FPersonal%2Fallfunds%2Fbackend%2Froutes%2Fnews.js%22%2C%22scheme%22%3A%22file%22%7D%7D): News routes.
- [swagger.js](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cjavie%5C%5CDevelopment%5C%5CPersonal%5C%5Callfunds%5C%5Cbackend%5C%5Cswagger.js%22%2C%22_sep%22%3A1%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fjavie%2FDevelopment%2FPersonal%2Fallfunds%2Fbackend%2Fswagger.js%22%2C%22scheme%22%3A%22file%22%7D%7D): Swagger configuration.
- [news.schema.js](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cjavie%5C%5CDevelopment%5C%5CPersonal%5C%5Callfunds%5C%5Cbackend%5C%5Cutils%5C%5Cnews.schema.js%22%2C%22_sep%22%3A1%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fjavie%2FDevelopment%2FPersonal%2Fallfunds%2Fbackend%2Futils%2Fnews.schema.js%22%2C%22scheme%22%3A%22file%22%7D%7D): Mongoose schema for news.

## License

This project is licensed under the MIT License.
