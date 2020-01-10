pipeline {
  agent {
    docker {
      image 'node:12.2.0'
    }
  }
  environment {
    CI = 'true'
    HOME = '.'
    npm_config_cache = 'npm-cache'
  }
  stages {
    stage('Install Packages') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test and Build') {
      parallel {
        stage('Run Tests') {
          steps {
            sh 'npm run test'
          }
        }
        stage('Create Build Artifacts') {
          steps {
            sh 'npm run build'
          }
        }
      }
    }
    stage('Deployment') {        
      when {
        branch 'master'
      }
      steps {
        withAWS(region:'us-west-1',credentials: "${env.awsKeyID}") {
          s3Delete bucket: 'greatflix', path: '**/*'
          // s3Upload bucket: 'greatflix', workingDir: 'dist/great-flix/', includePathPattern: '**/*'
        }
        mail subject: 'Production Build', body: 'New Deployment to Production', to: 'brunohaetinger@mail.com'
      }
    }
  }
}