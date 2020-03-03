[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Nostaldja

Nostaldja is an app for tracking fads across decades.

## Prerequisites

* Python
* Django
* Virtual environments

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Set up your virtual environment and activate it.
1. Install dependencies.
1. Fulfill the listed requirements.

Please turn in your submission by the deadline on your cohort calendar.

## Setup

Read through the setup instructions from the Django
[Models](https://git.generalassemb.ly/dc-wdi-python-django/django-models) and
[Views and
Templates](https://git.generalassemb.ly/dc-wdi-python-django/django-views-and-templates)

The goal of this app is to have a full-CRUD application with multiple views.

## Requirements

Your Django project should be called `nostaldja_project` and your app should be
called `nostaldja`. You'll need to create a new psql database for your app.

### Models

Create two models: `Decade` and `Fad`.

A `Decade` will have `Fad`s, or in other words a fad will have a foreign key for a decade.

* Decades
  * start_year
* Fads
  * name
  * image_url
  * description
  * decade

### Seeding

To seed your database with some initial data, you'll need to create a [data
migration](https://docs.djangoproject.com/en/2.1/topics/migrations/#data-migrations).
Read the documentation on data migrations first, then **carefully** follow the
instructions below.

***After*** you've run `makemigrations` and `migrate`, you can then run the
following to create a new, empty migration:

```sh
python manage.py makemigrations --empty nostaldja
```

Then, paste into the newly generated file the code below:

```py
from django.db import migrations

def seed(apps, schema_editor):
    Fad = apps.get_model('nostaldja', 'Fad')
    Decade = apps.get_model('nostaldja', 'Decade')
    eighties = Decade(start_year="1980s")
    nineties = Decade(start_year="1990s")
    oughts = Decade(start_year="2000s")
    tens = Decade(start_year="2010s")
    eighties.save()
    nineties.save()
    oughts.save()
    tens.save()

    Fad(decade = tens, name='Fidget Spinners', description='A fidget spinner is a toy that consists of a ball bearing in the center of a multi-lobed (typically two or three) flat structure made from metal or plastic designed to spin along its axis with little effort. Fidget spinners became popular toys in April 2017, although similar devices had been invented as early as 1993. ', image_url='https://www.dhresource.com/0x0s/f2-albu-g5-M01-79-07-rBVaJFiuqDSAF3I7AAKBk1FyKy0267.jpg/hand-spinner-fidget-spinner-tri-spinner-diy.jpg').save()
    Fad(decade = tens, name='Block Chain', description='A blockchain, originally block chain, is a continuously growing list of records, called blocks, which are linked and secured using cryptography. Each block typically contains a cryptographic hash of the previous block, a timestamp and transaction data. By design, a blockchain is inherently resistant to modification of the data.', image_url='http://sixpl.com/wp-content/uploads/2017/09/Blockchain-and-Cryptocurrency-Content-Writer.jpg').save()
    Fad(decade = oughts, name='Silly Bandz', description='Silly Bandz are rubber bands made of silicone rubber formed into shapes including animals, objects, numbers, and letters. ', image_url='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Silly_Bandz_2009.jpg/2560px-Silly_Bandz_2009.jpg').save()
    Fad(decade = oughts, name='iPods', description='iPhone - Phone = iPod', image_url='https://commons.wikimedia.org/wiki/File:Ipod-touch-1st-gen.jpg').save()
    Fad(decade = oughts, name='Myspace', description='Myspace (stylized as MySpace) is a social networking website offering an interactive, user-submitted network of friends, personal profiles, blogs, groups, photos, music, and videos. Myspace was the largest social networking site in the world, from 2004 to 2010.', image_url='https://us.hellomagazine.com/imagenes/travel/2018012645793/tom-myspace-founder-travel-photographer/0-230-700/myspace-tom-now-t.jpg').save()
    Fad(decade = nineties, name='JNCOs', description='JNCO, short for "Judge None Choose One", is a Los Angeles, California based clothing company specializing in boys\' and men\'s jeans.', image_url='https://img.buzzfeed.com/buzzfeed-static/static/2015-06/23/15/enhanced/webdr08/enhanced-22226-1435087265-4.jpg?downsize=715:*&output-format=auto&output-quality=auto').save()

def fallow(apps, schema_editor):
    Fad = apps.get_model('nostaldja', 'Fad')
    Decade = apps.get_model('nostaldja', 'Decade')
    Decade.objects.all().delete()
    Fad.objects.all().delete()
```

Then below, add only the line highlighted in green:

```diff
class Migration(migrations.Migration):


    dependencies = [
        ('nostaldja', '0006_auto_20180504_1246'),
    ]

    operations = [
+       migrations.RunPython(seed, fallow)
    ]

```

### URLs

Think about the URLs you will need for each resource (`Decade`s and `Fad`s).
Hint: both resources will need at least 4 URLs, one for each CRUD action.

Add these URLs to your `urls.py` file.

## Views

Build out some function in your views file to perform actions corresponding to
each URL. Again, you'll want full CRUD for each resource.

## Templates

Using your URLs and view functions, also build out some templates!

Aside from the base/layout template, you'll want templates like:

| Resource | Action |
|---------|-------|
| Fad | Display all |
| Fad | Display detail |
| Fad | Edit detail |
| Decade | Display all |
| Decade | Display detail |
| Decade | Edit detail |

## Plagiarism

Take a moment to refamiliarize yourself with the [Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md). Plagiarized work will not be accepted.

## Contributors

Original content from [DC at 0b9bd9](https://git.generalassemb.ly/dc-wdi-python-django/nostal-dja/commit/0b9bd9f149055ad10ac59142e3a1904f3dde610d). Original contributors can be found in that repository's history. Recent contributors can be found in this repository's history.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
