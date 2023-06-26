
pipeline {
	agent any
  environment {
    DB_URL = credentials('DB_URL')
    PORT = credentials('PORT')
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
					sh 'npm install'
				}
			}
		}

		stage('Server Tests') {
			steps {
				dir('server') {
					sh 'npm install'
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
				sh 'docker stop $(docker ps -a -q)'
				
        sh 'docker run -d -p 4000:4000 --network=host adittyapatil1818/wgd_jenkins:server'
				sh 'docker run -p 3000:3000 --network=host adittyapatil1818/wgd_jenkins:client'
			}
		
		}
	}
}
