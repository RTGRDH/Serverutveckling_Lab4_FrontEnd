pipeline {
    agent any
    environment{
        app = ''
        CI = 'true'
    }
    stages{
        stage('Clone repository')
        {
            /* Cloning the Repository to our Workspace */
            steps
            {

                checkout scm
            }
        }
        stage('Build')
        {
            steps
            {
                sh 'npm install joi'
            }
        }
        stage('Test')
        {
            steps
            {
                sh './jenkins/scripts/tests.sh'
            }
        }
        stage('Build image')
        {
            /* This builds the actual image */
            steps
            {
                script
                {
                    app = docker.build("rtgrdh/frontend")
                }
            }
        }
        stage('Push image')
        {
            /*
            You would need to first register with DockerHub before you can push images to your account
            */
            steps
            {
                script
                {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub')
                    {
                        app.push("${env.BUILD_NUMBER}")
                    }
                    echo "Pushing to docker hub"
                }
            }
        }
    }

}