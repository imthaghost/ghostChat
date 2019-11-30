# Built-in Django Modules
from django.urls import path

# Local Django Modules
from .views import index

app_name = 'chat'  # app name
# url patterns
urlpatterns = [
    path('', index, name='index'),
]
