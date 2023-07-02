pipeline {
    agent any

    environment {
        DB_URL = credentials('DB_URL')
        CLOUDINARY_CLOUD_NAME = credentials('CLOUDINARY_CLOUD_NAME')
        CLOUDINARY_API_KEY = credentials('CLOUDINARY_API_KEY')
        CLOUDINARY_SECRET_KEY = credentials('CLOUDINARY_SECRET_KEY')
        CLOUDINARY_ENV_VAR = credentials('CLOUDINARY_ENV_VAR')
        CLOUDINARY_URL = credentials('CLOUDINARY_URL')
        
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Client Tests') {
            steps {
                dir('client') {
                    sh 'npm install --legacy-peer-deps'
                }
            }
        }

        stage('Server Tests') {
            steps {
                dir('server') {
                    sh 'npm install --legacy-peer-deps'
                }
            }
        }

        stage('Build Images') {
            steps {
                dir('client') {
                    sh 'docker build -t adittyapatil1818/wgd_jenkins:client .'
                }
                dir('server') {
                    sh 'docker build -t adittyapatil1818/wgd_jenkins:server .'
                }
            }
        }

        stage('Push Images to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                    sh 'docker push adittyapatil1818/wgd_jenkins:client'
                    sh 'docker push adittyapatil1818/wgd_jenkins:server'
                }
            }
        }

        stage('Run Containers') {
            steps {
                // Stop and remove the existing containers you want to replace (with error handling)
                sh 'docker stop container_name1 container_name2 || true'
                sh 'docker rm container_name1 container_name2 || true'

                // Start the new containers
                sh 'docker run -d -p 4000:4000 -e DB_URL=$DB_URL -e CLOUDINARY_CLOUD_NAME=$CLOUDINARY_CLOUD_NAME -e CLOUDINARY_API_KEY=$CLOUDINARY_API_KEY -e CLOUDINARY_SECRET_KEY=$CLOUDINARY_SECRET_KEY -e CLOUDINARY_ENV_VAR=$CLOUDINARY_ENV_VAR -e CLOUDINARY_URL=$CLOUDINARY_URL --name container_name1 adittyapatil1818/wgd_jenkins:server'
                sh 'docker run -d -p 3000:3000 --name container_name2 adittyapatil1818/wgd_jenkins:client'
            }
        }
    }
}
//restart