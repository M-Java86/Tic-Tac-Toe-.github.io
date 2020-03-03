# Django Startup Guide

# Creating a new project

Note: `<project>` refers the to the root of your project;
`<django-project>` refers to the directory generated from `startproject`

1. `mkdir <project>; cd <project>` 
1. `pipenv install` (if Pipfile already exists) or `pipenv install django
   psycopg2-binary`
1. `pipenv run django-admin startproject <django-project> .`

# Setup SQL database

1. create a file `<project>/settings.sql` file with the following contents

    ```
    CREATE DATABASE tunr;
    CREATE USER tunruser WITH PASSWORD 'tunr';
    GRANT ALL PRIVILEGES ON DATABASE tunr TO tunruser;
    ```
1. edit `<django-project>/settings.py` to have to following

    ```python
    ...

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'tunr',
            'USER': 'tunruser',
            'PASSWORD': 'tunr',
            'HOST': 'localhost'
        }
    }

    ...
    ```
1. `psql -U postgres -f ./settings.sql`

# Create App

1. `pipenv run ./manage.py startapp <app>`

# Setup Admin Site

1. `pipenv run ./manage.py createsuperuser`
1. see Update SQL Tables

# Update SQL Tables

1. `pipenv run ./manage.py makemigrations`
1. `pipenv run ./manage.py migrate`

## Add model to Admin Site

1. edit `<app>/models.py` (adding a new model)
1. edit `<app>/admin.py`

    ```python
    from django.contrib import admin
    from .models import <model>

    admin.site.register(<model>)
    ```
1. see Update SQL Tables
