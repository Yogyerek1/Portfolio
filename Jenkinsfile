pipeline {
    agent any

    parameters {
        string(name: 'EMAIL_HOST', defaultValue: 'smtp.gmail.com', description: 'SMTP server')
        string(name: 'EMAIL_USER', defaultValue: '', description: 'E-mail adress')
        password(name: 'EMAIL_PASS', defaultValue: '', description: 'SMTP Password / App Password')
        string(name: 'EMAIL_PORT', defaultValue: '465', description: 'SMTP Port (465 or 587)')
        string(name: 'APP_URL', defaultValue: 'https://portfolio.milkovics-szebasztian.hu', description: 'Frontend URL')
        string(name: 'VITE_API_URL', defaultValue: 'https://api.portfolio.milkovics-szebasztian.hu', description: 'Backend API URL for Frontend')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build & Deploy Containers') {
            steps {
                withEnv([
                    "EMAIL_HOST=${params.EMAIL_HOST}",
                    "EMAIL_USER=${params.EMAIL_USER}",
                    "EMAIL_PASS=${params.EMAIL_PASS}",
                    "EMAIL_PORT=${params.EMAIL_PORT}",
                    "APP_URL=${params.APP_URL}",
                    "VITE_API_URL=${params.VITE_API_URL}"
                ]) {
                    sh 'docker compose -f docker-compose.prod.yml build'
                    sh 'docker compose -f docker-compose.prod.yml up -d'
                }
            }
        }

        stage('Cleanup') {
            steps {
                sh 'docker image prune -f'
            }
        }
    }
}