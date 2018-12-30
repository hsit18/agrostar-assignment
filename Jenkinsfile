node {
  try {
    properties(
        [parameters([
            string(defaultValue: '', description: '', name: 'custom_var', trim: false),
            string(name: 'BRANCH_NAME', defaultValue: 'master', description: 'branch name'),
            choice(name: 'ENVIROMENT', choices: ['production', 'development', 'test'], description: 'Enviroment')
        ])]
    )
    // parameters {
    //     string(name: 'BRANCH', defaultValue: 'master', description: 'branch name')
    //     choice(name: 'ENVIROMENT', choices: ['production', 'development', 'test'], description: 'Enviroment')
    // }
    stage('Example') {
        
        echo "Branch ${params.BRANCH}"

        echo "Enviroment: ${params.ENVIROMENT}"
        
    }
    stage('Checkout') {
        checkout([$class: 'GitSCM', branches: [[name: "*/${params.BRANCH}" ]],
        userRemoteConfigs: [[url: 'https://gitlab.com/client-apps/agrostar-assignment.git']]])

        //checkout scm
    }
    stage('Environment') {
        env.NODE_ENV = "prod"
        sh 'git --version'
        echo "Branch: ${env.BRANCH_NAME}"
        //sh 'printenv'
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