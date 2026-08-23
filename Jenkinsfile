pipeline {
    agent any

    parameters {
        string(name: 'EMAIL_HOST', defaultValue: 'smtp.gmail.com', description: 'SMTP Szerver')
        string(name: 'EMAIL_USER', defaultValue: '', description: 'E-mail cím (küldő)')
        password(name: 'EMAIL_PASS', defaultValue: '', description: 'SMTP Jelszó / App Password')
        string(name: 'EMAIL_PORT', defaultValue: '465', description: 'SMTP Port (pl. 465 vagy 587)')
        string(name: 'APP_URL', defaultValue: 'https://zenithfactory.dev', description: 'Frontend URL')
        string(name: 'VITE_API_URL', defaultValue: 'https://api.zenithfactory.dev', description: 'Backend API URL a Frontendnek')
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