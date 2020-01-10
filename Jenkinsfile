pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t greatflix .'
      }
    }

    stage('Echo') {
      steps {
        sh 'echo "Olá"'
      }
    }

  }
}