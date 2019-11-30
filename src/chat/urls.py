# Built-in Django Modules
from django.urls import path, re_path

# Local Django Modules
from .views import index, room

app_name = 'chat'  # app name
# url patterns
urlpatterns = [
    path('', index, name='index'),
    re_path(r'^(?P<room_name>[^/]+)/$', room, name='room'),
]
