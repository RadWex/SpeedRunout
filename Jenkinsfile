#!/usr/bin/bash

pipeline {
    agent { dockerfile {args '-e HEROKU_API_KEY=${env.HEROKU_API_KEY} -e HEROKU_MAIL=${env.HEROKU_MAIL}'}
    }

    stages {
        stage('Build') {
            steps {
              sh 'cd ./&&python3 -m venv env && . env/bin/activate && pip3 install --upgrade -r requirements.txt'
            }
        }
        stage('Test') {
            steps {
              sh '. env/bin/activate && python ./manage.py test'
            }
        }
        stage('Deploy') {
            steps {
              sh 'heroku git:remote -a speed-runout'
              sh 'git push -f https://${HEROKU_MAIL}:${HEROKU_API_KEY}@git.heroku.com/speed-runout.git HEAD:main'
            }
        }
    }
}