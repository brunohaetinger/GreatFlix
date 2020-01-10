pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'echo "ok"'
      }
    }

    stage('Echo') {
      steps {
        sh 'docker image ls'
      }
    }

  }
}