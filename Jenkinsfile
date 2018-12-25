node {
  try {
    parameters {
        booleanParam(defaultValue: true, description: '', name: 'userFlag')
    }

    stage("foo") {
        echo "flag: ${params.userFlag}"
    }
    // stage('Checkout') {
    //   checkout scm
    // }
    // stage('Environment') {
    //   env.NODE_ENV = "prod"
    //   sh 'git --version'
    //   echo "Branch: ${env.BRANCH_NAME}"
    //   //sh 'printenv'
    // }
    // stage('install'){
    //   sh 'yarn install'
    // }
    // stage('build'){
    //   sh 'yarn build'
    // }
  }
  catch (err) {
    throw err
  }
}