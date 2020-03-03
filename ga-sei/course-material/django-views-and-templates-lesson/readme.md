[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Django Views & Templates

This lesson will build off of the lesson on Django models and migrations and
wrap up everything we need to build basic applications with Django. Today, we
are going to look at how to actually display our data using views and templates!

## Prerequisites

* Python
* SQL & PostgreSQL
* Django Models & Migrations
* Virtual environments

## Learning Objectives

By the end of this, developers should be able to:

* Use Django to create views
* Use routing in Django
* Create templates using Django
* Complete CRUD functionality in Django

## Review

In the previous lesson, we learned how Django deals with data using models. We
updated our `settings.py` file with the `DATABASE` and `INSTALLED APPS`. We
utilized the `models.py` file to define our schema, set our data types and
require constraints. We used our `admin.py` file to allow our superuser to
perform CRUD on our application in the Django UI. There are a lot of other files
here that we haven't used.

### You Do: Django Application File Review (5 min)

Take a few minutes to look through the files in our application, knowing what
you learned in the last lesson. What have we done so far? What files will we
need in today's lesson?

### Before We Start

Navigate to the directory in your sandbox where you've been following along as
we built out Tunr. Activate the virtual environment you created earlier with the
following command:

```sh
pipenv shell
```

## View Functions

Using the `Artist` and `Song` models that we have already implemented, let's
create views to display our application's data! Views are really similar to
controllers in the other languages we have looked at so far. They pass data to
our templates.

```python
# tunr/views.py
from django.shortcuts import render

from .models import Artist, Song

def artist_list(request):
    artists = Artist.objects.all()
    return render(request, 'tunr/artist_list.html', {'artists': artists})
```

On the first line, you will see that `render` is already imported. This function
is super helpful, and it does exactly what it sounds like - it renders views!
Next, we have imported our models, `Artist` and `Song`.

Let's break the function down a bit:

* The declaration of the function looks like any other Python function! The only parameter passed into it is the request, which is exactly what it sounds like. This represents the HTTP Request dictionary.
* Next, we are selecting all of the artists from the database into a QuerySet called artists.
* On the third line, we see that we are rendering a template. The first argument is the request argument. The second is the template that we want to render, and the third is a dictionary (which is Python's equivalent to an object!) with the data we want to send to the template. In this case, we are sending the artist QuerySet with the key 'artists'.

### You Do: Song List Function

Write the view and the url to list all of the songs in the application.

<details>
<summary>Solution: Song List Function</summary>

```python
def song_list(request):
    songs = Song.objects.all()
    return render(request, 'tunr/song_list.html', {'songs': songs})
```

</details>

## URLs

Let's go ahead at how we will access these views -- through the URLs!

In Django, the URL's deviate from the ones we've seen in other frameworks. They
use stricter parameters where we have to specify the types of parameters. This
eliminates a ton of the issues we've seen where we've had to reorder urls, but
it makes them a bit more complicated.

Let's look at the existing `urls.py` in the `tunr_django` directory. In there,
let's add a couple things.

```python
# tunr_django/urls.py
from django.conf.urls import include
from django.urls import path
from django.contrib import admin

urlpatterns = [
    path('admin', admin.site.urls),
    path('', include('tunr.urls')),
]
```

On the first line, we are adding an import - `include` - so that we can include
other url files in our main one. We are doing this in order to make our app more
modular. These "mini apps" in Django are supposed to plug into another parent
app if needed, and modularity makes this possible.

Next, Let's write our urls for our app in another file in the `tunr` directory.
Create a file called called `urls.py` and paste the following code block into
it.

```python
# tunr/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.artist_list, name='artist_list'),
]
```

The path takes three arguments:

* The first argument represents the URL path. Here, the artist list is going to be rendered in the root URL. Similar to the "/" URL in other languages, the path of the root URL starts, ends, and has nothing in between. In Django, we do not even need to include the `/`. This way of doing URLs is great because they are explicit. We no longer have to reorder or rename URLs in order to make them work!
* The URL's second argument is the view function this route is going to match up with in the view file. So, at the root URL, the application will run the `artist_list` function we wrote in `views.py`.
* Thirdly, we are going to use a named parameter. This is going to be referenced in our templates in order to link from one page to another.

### You Do: Song List URL

Add a URL to `tunr/urls.py` for the Song List.

<details>
<summary>Solution: Song List URL</summary>

```python
urlpatterns = [
    path('', views.artist_list, name='artist_list'),
    path('songs/', views.song_list, name='song_list')
]
```

</details>


## Templates and Django Templating Language

Now that we have two URLs, let's finish up by writing the templates to render
our views!

In previous classes, we've used Handlebars as our primary templating language.
Django has its own! It looks a lot like Handlebars in that it uses a bunch of
curly braces.

In the `tunr` directory, add a `templates` directory and a `tunr` subdirectory.
Here, create a file called `artist_list.html` and add the following code. In
your browser, navigate to `localhost:8000` and see what appears!

> NOTE: If you do not have your server running already, run the command `python
> manage.py runserver` in the virtual environment of your project folder in your
> terminal.

```html
<!-- tunr/templates/tunr/artist_list.html -->
<h2>Artists <a href="">(+)</a></h2>
<ul>
    {% for artist in artists %}
        <li>
            <a href="">{{ artist.name }}</a>
        </li>
    {% endfor %}
</ul>
```

What's happening here?

* Right now, we will keep our `href` values blank until we have more routes. We will eventually add paths to URLS here, as we create them throughout this lesson.
* The Django template here loops through our QuerySet of artists, rendering the name of each.
* The distinction between `{{}}` and `{%%}` usually is the difference between rendering or just running code (i.e. if's or for's). The one exception is with url's - which we will see later on today.

### You Do: Song List Template

Add a template file `song_list.html` to render the Song List. When you open the
song list in your browser, what path will you use?

<details>
<summary>Solution: Song List URL</summary>

```html
<h2>Songs</h2>
<ul>
    {% for song in songs %}
    <li>
        <a href="">{{ song.title }}</a>
    </li>
    {% endfor %}
</ul>
```

</details>

## We Do: Artist Show

Now that we have successfully rendered the artist and song lists, let's add
another route. This time, let's add a show page for each of our two models
starting with views. In the `tunr/views.py` file, add the following code:

```python
# tunr/views.py
def artist_detail(request, pk):
    artist = Artist.objects.get(id=pk)
    return render(request, 'tunr/artist_detail.html', {'artist': artist})
```

This function is similar to the list view. This time, we are selecting one
artist instead of all of them. To do this, we receive a second parameter to the
function, the primary key of the artist we want to display. Let's look at where
that is coming from and connect the URL to the view in `urls.py`.

```python
# tunr/urls.py
path('artists/<int:pk>', views.artist_detail, name='artist_detail'),
```

In the show url we have added `<int:pk>` to the path in the first argument. In
Django, we use `pk` as an alternate term for `id`. In the database, primary keys
are the unique ids for each row, and Django adopts that terminology by
convention. The second argument directs us to the `artist_detail` function in
`views.py`. The third argument used a named parameter to be referenced in our
templates.

Finally, let's write our template.

```html
<!-- tunr/templates/tunr/artist_detail.html -->
<h2>{{ artist.name }} <a href="">(edit)</a></h2>
<h4>{{ artist.nationality }}</h4>

<img src="{{ artist.photo_url }}" alt="" class="artist-photo">

<h3>Songs <a href="">(+)</a></h3>
<ul>
    {% for song in artist.songs.all %}
        <li>
            <a href="">{{ song.title }}-{{ song.album }}</a>
        </li>
    {% endfor %}
</ul>
```

Here, we are showing some attributes of the artist object, then we are looping
through the songs attached to that artist.

Let's take a step back to our `artist_list.html`.  Before, we omitted the links
to to the next page. Now that we have created our show page, let's add its URL
tag to the `href` attribute.

In the `href` attribute, let's add a URL tag. First, we use the name of the URL
that we declared back in the `url` file. Then we need to pass the primary key of
that artist into that url. Update your `artist_detail.html` file with the
following code:

```html
<!-- tunr/templates/tunr/artist_list.html -->
<a href="{% url 'artist_detail' pk=artist.pk %}">
    {{ artist.name }}
</a>
```

### You Do: Song Show

Create the show page for the song. Also, link to this view in both the
`artist_detail` and `song_list` templates.

<details>
<summary>Solution: Song Show View in tunr/views.py</summary>

```python
def song_detail(request, pk):
    song = Song.objects.get(id=pk)
    return render(request, 'tunr/song_detail.html', {'song': song})
```

</details>
<details>
<summary>Solution: Song Show URL in tunr/urls.py</summary>

```python
path('songs/<int:pk>', views.song_detail, name='song_detail')
```

</details>
<details>
<summary>Solution: Song Show Template in tunr/templates/tunr/song_detail.html</summary>

```html
<h2>{{ song.title }} <a href="">(edit)</a></h2>
<h3>By: {{ song.artist.name }}</h3>

Album: {{ song.album }}
```

</details>
<details>
<summary>Solution: Artist Show Template Update</summary>

```html
<a href="{% url 'song_detail' pk=song.pk %}">
    {{ song.title }}-{{ song.album }}
</a>
```

</details>
<details>
<summary>Solution: Song List Template Update</summary>

```html
<a href="{% url 'song_detail' pk=song.pk %}">
    {{ song.title }}
</a>
```

</details>

## We Do: base.html and CSS

Right now we have two views, but they are really ugly. Let's do something about
that! Add a `base.html` file in the `tunr` templates. It's going to look exactly
like any other HTML base template we normally have, with one exception: we will
have a block where we want our template to go. We will name this block content.

> NOTE: This is very similar to the {{{body}}} tag we used in the `layout.hbs`
> file in Handlebars!

> NOTE: We could have multiple blocks if we wanted. In that case they would be
> named other things -- say "title" or "header" instead of "content".

```html
<!-- tunr/templates/tunr/base.html -->
<html>
    <head>
        <title>Tunr</title>
    </head>
    <body>
        <h1>Tun.r</h1>
        <nav>
            <a href="/songs">Songs</a>
            <a href="/">Artists</a>
        </nav>
        {% block content %}
        {% endblock %}
    </body>
</html>
```

In order to use our `base.html` file as a boilerplate for the rest of our
templates, we must add some code to each of our template files.

```html
<!-- tunr/templates/tunr/artist_list.html -->
{% extends 'tunr/base.html' %}

{% block content %}
    <h2>Artists <a href="{% url 'artist_create' %}">(+)</a></h2>
    <ul>
        {% for artist in artists %}
            <li>
                <a href="{% url 'artist_detail' pk=artist.id %}">{{ artist.name }}</a>
            </li>
        {% endfor %}
    </ul>
{% endblock %}
```

Each template is going to extend the base by adding `{% extends 'tunr/base.html'
%}` to the beginning of the file. The content between `{% block content %}` and
`{% endblock %}` will render in place of the content block in the `base.html`
file.

Next, let's add styling. By default, Django is going to host our static files in
the `static` folder. Add a `static` directory, a `css` subdirectory, and
a `tunr.css` file to the `tunr` directory. Copy the following css code into
`tunr.css`:

```css
/* tunr/static/css/tunr.css */
body {
    font-family: 'Helvetica Neue', sans-serif;
    max-width: 50em;
    margin: auto;
    padding: 2em 1em;
}

nav a {
    border: 1px solid black;
    margin: .5em;
    padding: .5em;
    background-color: #eeeeee;
}

nav a:hover {
    background-color: orange;
    color: blue;
}

a,
a:visited {
    text-decoration: none;
    color: blue;
}

a:hover {
    background-color: #ccc;
}

ul {
    list-style-type: none;
}

li {
    margin: .25em;
}

h1 {
    font: inherit;
    color: inherit;
    letter-spacing: -.05em;
    text-decoration: none;
    border-bottom: 1px solid black;
}

h2>a {
    font-size: .75em;
}

input {
    display: block;
    margin: 5px 0 20px 0;
    padding: 9px;
    border: solid 1px black;
    width: 300px;
    background: whitesmoke;
}

input[type=submit],
a.delete {
    width: auto;
    padding: 9px 15px;
    background-color: gray;
    border: 0;
    font-size: 14px;
    color: #FFFFFF;
}

a.delete {
    background-color: red;
}

.artist-photo {
    width: 400px;
}

span.nationality {
    font-size: .5em;
}

.user-info {
    float: right;
}

a.fav {
    text-decoration: none;
    color: red;
}

a.no-fav {
    text-decoration: none;
    color: black;
}

.fav:visited,
.no-fav:visited {
    text-decoration: none;
}
```

Finally, add the following code into `base.html`:

```html
<!-- tunr/templates/tunr/base.html -->
{% load staticfiles %}
<html>
    <head>
        <title>Tunr</title>
        <link rel="stylesheet" href="{% static 'css/tunr.css' %}">
    </head>
    <body>
        <h1>Tun.r</h1>
        <nav>
            <a href="/songs">Songs</a>
            <a href="/">Artists</a>
        </nav>
        {% block content %}
        {% endblock %}
    </body>
</html>
```

Let's break this down:

* On the first line, we are telling Django to load the static files onto the current page.
* Then in the `link` tag, we can refer to our stylesheet and include our static `tunr.css` file. This is essentially the same as requiring any stylesheet in an html boilerplate.
* This may seem a bit messy, but it really helps when you deploy your app, especially if you want to host your static files on a separate server.

## We Do: Artist Create

So far we've just shown our artists. Let's now create a new one! First, create
a file called `forms.py` in the `tunr` directory. This is going to be where we
make our forms using Python code.

```python
# tunr/forms.py
from django import forms
from .models import Artist, Song

class ArtistForm(forms.ModelForm):

    class Meta:
        model = Artist
        fields = ('name', 'photo_url', 'nationality',)
```

Let's break this down:

* First, we will create a class to house our form.
* Inside of it we will declare another class. The `Meta` class within the form contains meta data we have to describe the form. In this case, the model attached to the form and the fields we want to include in our form.
* Note that the fields are in parenthesis instead of square brackets - they are in a tuple instead of a list! Tuples are like lists but they are immutable. They can't be changed.

The rationale for the `Meta` class within the class is that it contains
information describing the class that isn't specific to a particular instance,
rather it just contains configuration details.

(Bonus: [You can do this for models as well](https://docs.djangoproject.com/en/1.11/ref/models/options/)).

For clarification (and maybe interview) purposes, this is different than
a Python `metaclass`. They deal with meta-programming in Python!

In our `views.py` file, let's add functionality to create an artist:

```python
# tunr/views.py
from django.shortcuts import render, redirect

from .forms import ArtistForm

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

What happening here?

* We must change the first line of our file to `from django.shortcuts import render, redirect` so that we have redirects available to us.
* We must import our ArtistForm class
* This function is a little bit different than what we have seen so far. Instead of having different functions that handle different types of requests, we can handle multiple types within the same function in Django. So, in the first line we check to see if our request is a post request. If it is, we will fill in our form with data from the post request, and check if the form is valid. If it is valid, then we will save the new artist and redirect to it's show page. If it errors, then we will render the artist form with those errors.
* If instead the request method is 'get', we just create an instance of the form without any pre-filled data, and then we will render the form template.

Next, add a url:

```python
# tunr/urls.py
path('artists/new', views.artist_create, name='artist_create'),
```

Finally, let's make the template. Since we already declared the fields we want
in our form in the `forms.py` file, we can just do this:

```html
<!-- tunr/templates/tunr/artist_form.html -->
{% extends 'tunr/base.html' %}

{% block content %}
    <h1>New Artist</h1>
    <form method="POST" class="artist-form">
        {% csrf_token %}
        {{ form.as_p }}
        <button type="submit" class="save btn btn-default">Save</button>
    </form>
{% endblock %}
```

When we declare our form tags in html we need to have our `csrf_token`, and then
we can just insert our form like `{{ form.as_p }}`. The `.as_p` just formats the
form nicely, you could also just do `{{ form }}` but it would be ugly. We also
need a submit button and then we are good! Errors are handled for us in-line!

In our `artist_list.html` file, update the `href` to include a path to our
`artist_create` url.


```html
<!-- tunr/templates/tunr/artist_list.html -->
<h2>Artists <a href="{% url 'artist_create' %}">(+)</a></h2>
<ul>
    {% for artist in artists %}
        <li>
            <a href="{% url 'artist_detail' pk=artist.pk %}">
                {{ artist.name }}
            </a>
        </li>
    {% endfor %}
</ul>
```

### You Do: Song Create

Your turn! Do the same as above but for the song creation form.

<details>
<summary>Solution: Song Create Form in tunr/forms.py</summary>

```python
from django import forms
from .models import Artist, Song

class SongForm(forms.ModelForm):

    class Meta:
        model = Song
        fields = ('title', 'album', 'preview_url', 'artist',)
```

</details>
<details>
<summary>Solution: Song Create View in tunr/views.py</summary>

```python
from .forms import ArtistForm, SongForm

def song_create(request):
    if request.method == 'POST':
        form = SongForm(request.POST)
        if form.is_valid():
            song = form.save()
            return redirect('song_detail', pk=song.pk)
    else:
        form = SongForm()
    return render(request, 'tunr/song_form.html', {'form': form})
```

</details>
<details>
<summary>Solution: Song Create URL in tunr/urls.py</summary>

```python
path('songs/new', views.song_create, name='song_create')
```

</details>
<details>
<summary>Solution: Song Create Template in tunr/templates/tunr/song_form.html</summary>

```html
{% extends 'tunr/base.html' %}

{% block content %}
<h1>New Song</h1>
<form method="POST" class="song-form">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit" class="save btn btn-default">Save</button>
</form>
{% endblock %}
```

</details>
<details>
<summary>Solution: Artist Show Template Update</summary>

```html
<h3>Songs <a href="{% url 'song_create' %}">(+)</a></h3>
```
</details>

## We Do: Artist Edit

Django makes forms modular and reusable, so all we have to do is add a new view
function and a url to make our form edit instead of create. Add the following
code to the `views.py` file.

```python
# tunr/views.py
def artist_edit(request, pk):
    artist = Artist.objects.get(pk=pk)
    if request.method == "POST":
        form = ArtistForm(request.POST, instance=artist)
        if form.is_valid():
            artist = form.save()
            return redirect('artist_detail', pk=artist.pk)
    else:
        form = ArtistForm(instance=artist)
    return render(request, 'tunr/artist_form.html', {'form': form})
```

The only additionally thing we are doing here is adding the instance of the
artist as a named parameter to our ArtistForm class. Voilà! We have an edit form
now! We are rendering the same template and everything!

Next, add a new url:

```python
# tunr/urls.py
path('artists/<int:pk>/edit', views.artist_edit, name='artist_edit'),
```

Finally, update the `href` in `artist_detail.html` with a path to the `artist_edit` url:

```html
<!-- tunr/templates/tunr/artist_detail.html -->
<h2>{{ artist.name }} <a href="{% url 'artist_edit' pk=artist.pk %}">(edit)</a></h2>
```

### You Do: Song Edit

Do the same thing for the song edit form!

<details>
<summary>Solution: Song Edit View in tunr/views.py</summary>

```python
def song_edit(request, pk):
    song = Song.objects.get(pk=pk)
    if request.method == "POST":
        form = SongForm(request.POST, instance=song)
        if form.is_valid():
            artist = form.save()
            return redirect('song_detail', pk=song.pk)
    else:
        form = SongForm(instance=song)
    return render(request, 'tunr/song_form.html', {'form': form})
```

</details>
<details>
<summary>Solution: Song Edit URL in tunr/urls.py</summary>

```python
path('songs/<int:pk>/edit', views.song_edit, name='song_edit')
```

</details>
<details>
<summary>Solution: Song Show Template Update</summary>

```html
<h2>{{ song.title }} <a href="{% url 'song_edit' pk=song.pk %}">(edit)</a></h2>
```

</details>

## We Do: Artist Delete

Delete functions are really simple as well.

```python
# tunr/views.py
def artist_delete(request, pk):
    Artist.objects.get(id=pk).delete()
    return redirect('artist_list')
```

We just need to find an artist, delete it, and then redirect to the index page.

Let's add the url:

```python
# tunr/urls.py
path('artists/<int:pk>/delete', views.artist_delete, name='artist_delete'),
```

### You Do: Song Delete

Do the same thing for Songs!

<details>
<summary>Solution: Song Delete View in tunr/views.py</summary>

```python
def song_delete(request, pk):
    Song.objects.get(id=pk).delete()
    return redirect('song_list')
```

</details>
<details>
<summary>Solution: Song Delete URL in tunr/urls.py</summary>

```python
path('songs/<int:pk>/delete', views.song_delete, name='song_delete')
```

</details>

## Bonus: Jinja

Jinja is an awesome templating language for Django. It takes the place of Django
Templates and adds some additional functionality.
[Here](https://docs.djangoproject.com/en/2.0/topics/templates/#django.template.backends.jinja2.Jinja2)
are the instructions for getting started with it.

## Bonus: RegEx

You can also use RegEx's for creating URLs in Django -- it can be really helpful
for customizing your URLs.

We won't go over them in detail here, but
[here](http://www.aivosto.com/vbtips/regex.html) is a link about them in more
detail, and
[here](https://www.google.com/search?q=regex+sanbox&oq=regex+sanbox&aqs=chrome..69i57j0l5.2240j0j7&sourceid=chrome&ie=UTF-8)
is a sandbox to test them out.

A quick primer on what will be helpful for creating urls:

* `^` - beginning of the text
* `$` - end of  text
* `\d` - digit
* `+` - required
* `()` - captures part of a pattern

## Additional Resources

* [Django Docs: Templates](https://docs.djangoproject.com/en/2.1/topics/templates/)
* [Django Docs: The Django Templating Language](https://docs.djangoproject.com/en/2.1/ref/templates/language/)
* [Django Docs: Writing Views](https://docs.djangoproject.com/en/2.1/topics/http/views/)
* [Django Docs: Class Based Views](https://docs.djangoproject.com/en/2.1/topics/class-based-views/)

## Contributors

Original content from [DC at acc1ba](https://git.generalassemb.ly/dc-wdi-python-django/django-views-and-templates/commit/acc1baf861bd2159f5ab18447a4b6e3d64c66821). Original contributors can be found in that repository's history. Recent contributors can be found in this repository's history.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
