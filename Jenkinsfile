pipeline {
    agent any
    stage('Checkout'){
        steps{
            sh 'git checkout main'
        }
    }
    
    stages {
        stage('Eslint') {
            steps {
                // Run eslint
                sh 'npm run eslint'
            }
        }
        
        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }
        
        stage('Build') {
            steps {
                // Build the application
                sh 'npm run build'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                // Build the Docker image for frontend
                sh 'docker build -t frontend-image ./frontend'
                
                // Build the Docker image for backend
                sh 'docker build -t backend-image ./backend'
            }
        }
        
        stage('Deploy') {
            steps {
                // Deploy the frontend and backend using Docker Compose
                sh 'docker-compose up -d'
            }
        }
    }
}