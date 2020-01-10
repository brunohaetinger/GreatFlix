pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'echo "TOP"'
      }
    }

    stage('Echo') {
      steps {
        sh 'echo "ola"'
      }
    }

  }
}