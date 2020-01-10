pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install && pm run build:prod'
      }
    }

    stage('Echo') {
      steps {
        sh 'docker image ls'
      }
    }

  }
}