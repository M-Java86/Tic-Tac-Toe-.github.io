from django.urls import path
from . import views

urlpatterns = [
    path('', views.house_list),
    path('houses/', views.house_list, name = 'house_list'),
    path('houses/<int:pk>', views.house_detail, name = 'house_detail'),
    path('houses/new', views.house_create, name = 'house_create'),
    path('houses/<int:pk>/edit', views.house_update, name = 'house_update'),
    path('houses/<int:pk>/delete', views.house_delete, name = 'house_delete'),
    path('students/', views.student_list, name = 'student_list'),
    path('students/<int:pk>', views.student_detail, name = 'student_detail'),
    path('students/new', views.student_create, name = 'student_create'),
    path('students/<int:pk>/edit', views.student_update, name = 'student_edit'),
    path('students/<int:pk>/delete', views.student_delete, name = 'student_delete'),
]
