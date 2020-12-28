pipeline{
    stages{
        stage('Build'){
            steps{
                sh 'npm clean'
                sh 'npm install'
            }
        }
        stage('Deliver'){
            steps{
                sh 'docker build -t react-app --no-cache .'
                sh 'docker tag react-app localhost:5000/react-app'
                sh 'docker push localhost:5000/react-app'
                sh 'docker rmi -f react-app localhost:5000/react-app'
            }
        }
    }
}