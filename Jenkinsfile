node {
  try {
    properties(
        [parameters([
            string(defaultValue: '', description: '', name: 'custom_var', trim: false),
            string(name: 'BRANCH', defaultValue: 'master', description: 'branch name'),
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
    stage('install'){
        sh 'yarn install'
    }
    // stage('test'){
    //     sh 'yarn test'
    // }
    stage('Environment') {
        env.NODE_ENV = params.ENVIROMENT;
        echo "NODE_ENV: ${env.NODE_ENV}"
    }
    stage('build'){
        sh 'yarn build'
    }    
  }
  catch (err) {
    throw err
  }
}