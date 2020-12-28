pipeline{
    agent{
        none
    }

    stages{
        stage('Build'){
            steps{
                ah 'npm run clean'
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}