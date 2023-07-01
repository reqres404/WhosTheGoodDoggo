pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build and Package') {
            steps {
                dir('client') {
                    sh 'npm install --legacy-peer-deps'
                    sh 'npm run build' // Build the client application
                }
                dir('server') {
                    sh 'npm install -g nodemon'
                    sh 'npm install'
                    sh 'npm run build' // Build the server application
                }
            }
        }

        stage('Deploy') {
            environment {
                    DB_URL = credentials('DB_URL')
                    CLOUDINARY_CLOUD_NAME = credentials('CLOUDINARY_CLOUD_NAME')
                    CLOUDINARY_API_KEY = credentials('CLOUDINARY_API_KEY')
                    CLOUDINARY_SECRET_KEY = credentials('CLOUDINARY_SECRET_KEY')
                    CLOUDINARY_ENV_VAR = credentials('CLOUDINARY_ENV_VAR')
                    CLOUDINARY_URL = credentials('CLOUDINARY_URL')
            }
            steps {
                dir('server') {
                    sh 'npm install -g pm2' // Install PM2 globally
                    sh 'pm2 delete my-app || :' // Stop and delete any running instances
                    sh 'pm2 start build/server.js --name my-app --env production' // Start the server with PM2
                }
            }
        }
    }
}