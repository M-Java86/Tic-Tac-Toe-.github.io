[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Authentication in Django

Authentication comes built in to Django, so there's no need for something like
Passport! The built-in authentication system will handle user accounts, groups,
and permissions. There are also some view-helpers for common authentication
related forms. The default configuration will work great for most projects, but
Django's authentication system is also flexible and adaptable for larger
projects.

## Objectives

By the end of this, developers should be able to:

- Implement Authentication in a Django project
- Make some routes require login

## Introduction

The Django authentication system handles both authentication and authorization.
What's the difference?

- Authentication: verifying a user is who they say they are
- Authorization: determining what a user is allowed to do

We'll start by integrating Authentication and include Authorization at the end
of the lesson.

## Setup

- Activate virtual env
- Create new app
- add app to settings.py
- Creating a user through the Django shell

## Authentication

Django's authentication system is very flexible, giving you a range of
implementation options. For instance, you can:

- Use their off-the-shelf authentication system, which may work for quick
  prototypes and hackathons
- Write your own `User` model and implement an entirely custom authentication
  system
- Use the collection of methods and forms provided to implement a mostly custom
  authentication system, as a good middle ground

We'll start with the off-the-shelf system and then modify it so that we can use
custom templates.

### Getting Started

We need to start by creating a new app inside our Django project for
authentication. Generally, each app should have a single function or cover a
single piece of functionality for our project.

```sh
pipenv run django-admin startapp accounts
```

> NOTE: we can't call it `auth`, because that's the name of the app where Django
> keeps all the authentication functionality (we can't have two apps with the
> same name).

Once our app is created, we need to:

1. Add it to our list of `INSTALLED_APPS` in `settings.py`
1. Add `LOGIN_REDIRECT_URL = '/'` to `settings.py`
1. Include the `accounts` app urls in `tunr_django/urls.py`
1. Create a `urls.py` inside of the `accounts` app

## Log In and Log Out

Let's start by implementing log in and log out.

Django provides a set of views that we can used inside of
`'django.contrib.auth.urls'`, all we need to do is set up our `accounts/urls.py`
file to use it:

```python
# accounts/urls.py
from django.urls import path
from django.contrib.auth import views as auth_views

urlpatterns = [
    # Login / Log Out
    path('accounts/login/', auth_views.login,
         {'template_name': 'accounts/login.html'}, name='login'),
    path('accounts/logout/', auth_views.logout,
         {'template_name': 'accounts/logged_out.html'}, name='logout'),
]
```

We're creating two routes here, one for logging in and one for logging out. The
`auth_views` variable holds all of the views provided by Django for handling
authentication functionality. We're passing in an explicit reference to the
template that we'd like to use (`login.html` and `logged_out.html`).

Our next step is to create those two templates:

1. Make a `templates/` directory inside of your `accounts` app (i.e.
   `accounts/templates/`)
1. Create an `accounts/` directory inside of the `templates/` directory (i.e.
   `accounts/templates/accounts`)
1. Create two html files: `login.html` and `logout.html`.

Here is the source code for the two html files you just created.

The login template:

```html
<!-- templates/accounts/login.html -->
{% extends "tunr/base.html" %}

{% block content %}

  {% if form.errors %}
    <p>Your username and password didn't match. Please try again.</p>
  {% endif %}

  <form method="post" action="{% url 'login' %}">
    {% csrf_token %}
    {{form.as_p}}

    <input type="submit" value="login" />
  </form>

{% endblock %}
```

The logged out template, which will be displayed to the user when they log out:

```html
<!-- templates/accounts/logout.html -->
{% extends "tunr/base.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login' %}">Click here to login again.</a>
{% endblock %}
```

### Testing the Views

Let's test out our views and templates. Make sure your app is running and visit
`/accounts/login/`. You should see our login page! Try to log in with the user
you created in the previous lesson. Alternatively, create a new user in the
Django admin panel and try to sign in with this new user.

Once you're able to log in, try logging out by visiting `/accounts/logout/`. You
should see the `logout` template we just created.

We can't ask our users to manually navigate to the sign in page. We want to show
them, in the UI! Let's update the header menu in
`tunr/templates/tunr/base.html`:

```html
<!-- tunr/templates/tunr/base.html -->
<!-- ... -->
        <nav>
            <a href="{% url 'song_list' %}">Songs</a>
            <a href="/">Artists</a>
            <div class="user-info">
                {% if user.is_authenticated %}
                    Welcome, {{ user.username }}
                    <a href="{% url 'logout' %}">Signout</a>
                {% else %}
                    <a href="{% url 'login' %}">Login</a>
                    <a href="{% url 'signup' %}">Signup</a>
                {% endif %}
            </div>
        </nav>
<!-- ... -->
```

We're updating the `<nav>` element in the `base` template so that it changes
based on whether or not a user is logged in. If a user is logged in, they'll see
a welcome message and a link to log out. If they are not logged in, they'll see
links to log in or sign up.

Only one catch! We have no way for users to sign up! Let's implement that next.

## Sign Up

Back in `accounts/urls.py`, we want to add a view and url for users to sign up
and create an account. Django provides most of what we'll need to implement
authentication, but generally assumes that you'll create users through the Admin
panel. That's not helpful for us, we want users to be able to create accounts on
their own. To do so, we'll need to implement a custom view.

Inside `accounts/urls.py`, add the following route:

```diff
# accounts/urls.py
from django.urls import path
from django.contrib.auth import views as auth_views
+from . import views


urlpatterns = [
    # Login / Log Out
    path('accounts/login/', auth_views.login,
         {'template_name': 'accounts/login.html'}, name='login'),
    path('accounts/logout/', auth_views.logout,
         {'template_name': 'accounts/logged_out.html'}, name='logout'),
+    # Sign Up
+    path('accounts/signup', views.sign_up, name="signup")
]
```

We're adding a route for `accounts/signup` that will use the `sign_up` view
we're about to create.

Navigate to `accounts/views.py`:

```python
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm

# Create your views here.


def sign_up(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('artist_list')
    else:
        form = UserCreationForm()
    return render(request, 'accounts/signup.html', {'form': form})
```

> Take 5 minutes to read through this code and understand what it does. Write
> down any questions you have about this code block and we will discuss them
> when 5 minutes is up.

We have our sign up view in place, now we need to implement the template. Create
a new file at `accounts/templates/accounts/signup.html` and add the following:

```html
{% extends "tunr/base.html" %}

{% block content %}

<form method="post" action="{% url 'signup' %}">
    {% csrf_token %}
    {{form.as_p}}

    <input type="submit" value="Sign Up" />
</form>

{% endblock %}
```

Give it a shot! You should be able to sign up as a new user and sign in and out
as that user.

## Authorization

Now that users can sign up for our application and sign in and out of the
account they've created, let's make it so that some routes require being
authorized (signed in) in order to visit them.

Django makes this relatively straightforward for us.

### Requiring Authentication

To make a view require a user be authenticated, we just need to import the
`login_required` decorator that Django provides. Add the following to the top of
`tunr/views.py` to import the `login_required` decorator:

```python
# tunr/views.py
from django.contrib.auth.decorators import login_required
```

What's a decorator? A decorator is a function called on a function in order to
change it's behavior. In this case, it adds an if statement to each function: if
the user is logged in, continue with the view logic, otherwise redirect them to
the login page. The syntax looks like this:

```diff
+@login_required
def artist_create(request):
    if request.method == 'POST':
        form = ArtistForm(request.POST)
        if form.is_valid():
            artist = form.save()
            return redirect('artist_detail', pk=artist.pk)
    else:
        form = ArtistForm()
    return render(request, 'tunr/artist_form.html', {'form': form})
```

Go ahead and add the decorator (`@login_required`) to every create, update, and
delete path.

Now when you try to visit any of the create/edit forms, you should be redirected
to the login page. (Unless you're logged in, which is the point!)

### Updating our Views

We're almost finished - one last finishing touch!

When you get redirected to the login page, two things happen:

1. You don't see a message explaining why you were sent to the login page
1. When you login, you get redirected back to the homepage (rather than the page
   you were trying to visit in the first place)

These are relatively small issues but they're also small and easy to fix, so
let's fix them. We're going to update both `login.html` and `signup.html`.

First, make the following additions to `login.html`:

```diff
{% extends "tunr/base.html" %}

{% block content %}

  {% if form.errors %}
    <p>Your username and password didn't match. Please try again.</p>
  {% endif %}

+  {% if next %}
+      <p>Please login to see this page.</p>
+  {% endif %}

  <form method="post" action="{% url 'login' %}">
    {% csrf_token %}
    {{form.as_p}}

    <input type="submit" value="login" />
+  <input type="hidden" name="next" value="{{ next }}" />
  </form>
{% endblock %}
```

Take a minute to read through and understand these additions before moving on.

Next, make the following addition to `signup.html`:

```diff
{% extends "tunr/base.html" %}

{% block content %}

  <form method="post" action="{% url 'signup' %}">
      {% csrf_token %}
      {{form.as_p}}

      <input type="submit" value="Sign Up" />
+      <input type="hidden" name="next" value="{{ next }}" />
  </form>

{% endblock %}
```

We're all set! We've added basic authentication, so that users can sign up for
an account in our application and then log in and out of the account they
create.

Django's authentication system is very powerful and we've only scratched the
surface here. A number of things that are normally very tricky to implement are
made very simple, like creating groups of users and assigning users different
permissions. For more, check out the documentation in the
[Additional Resources](#additional-resources) section!

## Social Authentication

Now that we have a basic authentication setup in place, let's expand on it so
that users can sign in using their favorite social media app.

Social Authentication is using social media platforms (like Facebook and
Twitter) for your authentication. For the remainder of class, work on getting
social authentication working in tunr using
[`social-auth-app-django`](https://github.com/python-social-auth/social-app-django).

Use the [documentation](http://python-social-auth.readthedocs.io/en/latest/) or
[this walkthrough](https://simpleisbetterthancomplex.com/tutorial/2016/10/24/how-to-add-social-login-to-django.html).

## Additional Resources

- [User Authentication in Django](https://docs.djangoproject.com/en/2.0/topics/auth/)
- [Using the Django Authentication system](https://docs.djangoproject.com/en/2.0/topics/auth/default/)
- [Customizing Authentication in Django](https://docs.djangoproject.com/en/2.1/topics/auth/customizing/)
- [How to Create User Sign Up View](https://simpleisbetterthancomplex.com/tutorial/2017/02/18/how-to-create-user-sign-up-view.html#basic-sign-up)

## Contributors

Original content from [DC at e7cc51](https://git.generalassemb.ly/dc-wdi-python-django/django-auth/commit/e7cc514ec9620352e9a6f2129e1ee3e3b6816cd6). Original contributors can be found in that repository's history. Recent contributors can be found in this repository's history.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
