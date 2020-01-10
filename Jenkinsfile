pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'sudo docker build -t greatflix .'
      }
    }

    stage('Echo') {
      steps {
        sh 'sudo docker image ls'
      }
    }

  }
}