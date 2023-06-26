pipeline {
  agent any
  environment {
    DB_URL = 'mongodb+srv://aditya:aditya@workoutapp.aec6ean.mongodb.net/?retryWrites=true&w=majority'
    PORT = '4000'
    CLOUDINARY_CLOUD_NAME = 'djgdrbb3k'
    CLOUDINARY_API_KEY = '779198893471583'
    CLOUDINARY_SECRET_KEY = 'bZhR5XldOnNCGw2FnkHMi8Q0P5k'
    CLOUDINARY_ENV_VAR = 'CLOUDINARY_URL=cloudinary://779198893471583:bZhR5XldOnNCGw2FnkHMi8Q0P5k@djgdrbb3k'
  }

  stages {
    		stage('Checkout') {
			steps {
				checkout scm
			}
		}
    stage('Build') {
      steps {
        // Build your app
        sh 'docker-compose build'
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
