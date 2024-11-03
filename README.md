## About The Project

EVs Aampere is a test project made with React + Vite in frontend with two pages: a list of vehicles and a detail page for each vehicle. The backend is made with Express using MVC pattern.

## Getting Started

### Prerequisites

To run this software locally you'll need:

- Docker installed locally

### Run the project

Clone the repo

```sh
### With HTTPS
git clone https://github.com/andres326/aampere-project.git
### With SSH
git clone git@github.com:andres326/aampere-project.git
```

If you have installed Docker Desktop, you should be able to run the project with the following command:

```sh
cd aampere-project
docker-compose up --build
```

This will launch the frontend and backend at the same time. You can access the frontend at http://localhost:4000 and the backend at http://localhost:3000.

If you don't have Docker Desktop, you should build the images separately and run them with the following commands:

```sh
cd aampere-vehicles-frontend
docker build -t aampere-frontend .

cd aampere-vehicles-backend
docker build -t aampere-backend .

docker run -p 4000:4000 -e VITE_API_URI=http://localhost:3000 aampere-frontend
docker run -p 3000:3000 aampere-backend
```

After that, you can access the frontend at http://localhost:4000 and the backend at http://localhost:3000.

## Deploying the project

If you want to deploy the project, you can use any provider of your choice. For example, we can use an EC2 instance with Docker installed and run the project with same commands as before. If we want to use a sofisticated solution like Kubernetes to orchestrate the containers, we can check Kubernetes clusters offered by AWS or any other provider.

If you don't want to use Docker to deploy the project, you can deploy the frontend and backend separately using dedicated services like Vercel, Render, GCP or AWS. Depending on what you prioritize, you can choose the best solution for your project.
