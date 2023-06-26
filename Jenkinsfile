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
    stage('Deploy') {
      steps {
        // Run Docker Compose with environment variables
        sh 'docker-compose up -d'
      }
    }
  }
}
