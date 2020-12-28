pipeline{
    agent{
        docker{
            image 'node:12'
            args '-p 3000:3000 --name front'
        }
    }

    stages{
        stage('Build'){
            steps{
                sh 'npm clean'
                sh 'npm install'
            }
        }
    }
}