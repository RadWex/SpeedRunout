#!/usr/bin/groovy

node {
  stage 'Update Python Modules'

  // Create a virtualenv in this folder, and install or upgrade packages
  sh 'virtualenv env && source env/bin/activate && pip install --upgrade -r requirements.txt'
  
  stage 'Test'
  // Invoke Django's tests
  sh 'source env/bin/activate && python ./manage.py runtests'

  stage 'Deploy'
  sh 'mvn heroku:deploy'
}