node {
  try {
    parameters {
        string(name: 'custom_var', defaultValue: '')
    }

    stage("foo") {
        echo "flag: ${params.custom_var}"
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