from django.db import models

# Create your models here.
class House(models.Model):
    name = models.CharField(default = '')
    image_url = models.CharField(default = '', max_length = 512)

    def __str__(self):
        return self.name

class Student(models.Model):
    name = models.CharField(default = '', max_length = 100)
    image_url = models.CharField(default = '', max_length = 512)
    house = models.ForeignKey(House, on_delete = 'CASCADE', related_name = 'students')

    def __str__(self):
        return self.name
