node{
    def app

    stage('Clone repository'){
        checkout scm
    }
    stage('Build image'){
        echo 'Building image..'
        app = docker.build(frontend)
    }
    stage('Test image'){
        app.inside{
            echo "Tests passed"
        }
    }
    stage('Push image'){
        docker.withRegistry('https://registry.hub.docker.com','docker-hub'){
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
            echo "Trying to Push docker build to docker hub"
    }
}