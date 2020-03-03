from django import forms
from .models import House, Student

class HouseForm(forms.ModelForm):

    class Meta:
        model = House
        fields = ('name', 'image_url')


class StudentForm(forms.ModelForm):

    class Meta:
        model = Student
        fields = ('name', 'image_url', 'house')
