node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'printenv'
    }
    stage('install'){
      sh 'yarn install'
    }
    stage('build'){
      sh 'yarn build'
    }
  }
  catch (err) {
    throw err
  }
}