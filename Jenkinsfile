pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build & Deploy Containers') {
            steps {
                sh 'docker compose -f docker-compose.prod.yml build'
                sh 'docker compose -f docker-compose.prod.yml up -d'
            }
        }

        stage('Cleanup') {
            steps {
                sh 'docker image prune -f'
            }
        }
    }
}