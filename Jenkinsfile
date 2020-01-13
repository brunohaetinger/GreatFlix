pipeline {
  agent {
    docker {
      image 'node:12.2.0'
    }
  }
  stages {
    stage('Install Packages') {
      steps {
        sh 'npm install --unsafe-perm=true'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build:prod'
      }
    }
    stage('Deployment') {        
      when {
        branch 'master'
      }
      steps {
        withAWS(region:'us-west-1',credentials: "${env.awsKeyID}") {
          s3Delete bucket: 'greatflix', path: '**/*'
          s3Upload bucket: 'greatflix', workingDir: 'dist/great-flix/', includePathPattern: '**/*'
        }
        mail subject: 'Production Build', body: 'New Deployment to Production', to: 'brunohaetinger@mail.com'
      }
    }
  }
}