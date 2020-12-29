pipeline {
    environment{
        app = ''
    }
    agent any

    stages{
        stage('Clone repository') {
                /* Cloning the Repository to our Workspace */
                steps{
                    checkout scm
                }
        }
        stage('Build'){
            steps{
                sh 'npm install joi'
                sh 'Build Command'
            }
        }
        stage('Test'){
            steps{
                sh 'node test'
            }
        }
        stage('Build image') {
            /* This builds the actual image */
            steps{
                script{
                    app = docker.build("rtgrdh/frontend")
                }
            }
        }
        stage('Push image') {
            /*
                You would need to first register with DockerHub before you can push images to your account
            */
            steps{
                script{
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub') {
                        app.push("${env.BUILD_NUMBER}")
                        app.push("latest")
                    }
                        echo "Trying to Push Docker Build to DockerHub"
                    }
                }
            }
        stage('Remove Unused docker image') {
            steps{
                sh "docker rmi $registry:$BUILD_NUMBER"
            }
        }
    }

}