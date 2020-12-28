pipeline{
    agent{
        docker{
            image 'node:6-alpine'
            args '-p 3000:3000 --name front'
        }
    }

    stages{
        stage('Build'){
            steps{
                sh 'npm install'
            }
        }
    }
}