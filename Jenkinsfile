#!/usr/bin/bash

pipeline {
    agent { docker { image 'python:3.9.1' } }
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
    }
}