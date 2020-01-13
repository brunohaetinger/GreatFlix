pipeline {
  agent{
    docker {
      image 'node:12.2.0'
      args '-v /dist/great-flix/:/dist/great-flix/'
    }
  } 
  stages {
    stage('Install Packages') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build:prod'
      }
    }
    stage('Deployment') {        
      when {
        branch 'hotfix/ci-cd'
      }
      steps {
        dir(path: '/dist/great-flix/') {
          withAWS(region:'us-west-1',credentials: "${env.awsKeyID}") {
            s3Delete bucket: 'greatflix', path: '**/*'
            s3Upload file: 'dist/great-flix/', bucket: 'greatflix', workingDir: 'dist/great-flix/', includePathPattern: '**/*'
          }
          mail subject: 'Production Build', body: 'New Deployment to Production', to: 'brunohaetinger@mail.com'
        }
      }
    }
  }
}