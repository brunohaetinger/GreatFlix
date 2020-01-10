pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install && npm run build:prod'
      }
    }

    stage('Echo') {
      steps {
        sh 'docker image ls'
      }
    }

  }
}