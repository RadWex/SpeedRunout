# SpeedRunout

Arcade 3d car game in browswer.

![](preview.gif)

# Play here

https://speed-runout.herokuapp.com/

# Info

Site is created in Django, HTML and CSS. Game is written using paradigm DOP (data oriented programming) in JavaScript and Three.js. Login to account allow to save best score in database.

Jenkinsfile describe pipeline for CI/CD. Dockerfile describe custom Python container for this pipline. Site is deployed to Heroku service.

# Development

### Environment setup

```
python -m venv <env-name>
```

### Environment activation on Windows

```
<env-name>\Scripts\activate
```

### Environment activation on Linux

```
source <env-name>\bin\activate
```

### Install dependencies

```
pip install -r requirements.txt
```

### Run development server

```
python manage.py runserver
```
