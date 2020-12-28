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
        stage('Deliver'){
            sh 'docker build -t react-app --no-cache .'
            sh 'docker tag react-app localhost:5000/react-app'
            sh 'docker push localhost:5000/react-app'
            sh 'docker rmi -f react-app localhost:5000/react-app'
        }
    }
}