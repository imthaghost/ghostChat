"""ghostChat URL Configuration
"""
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('chat/', include('chat.urls', namespace='chat')),  # chat url pattern
    path('admin/', admin.site.urls),
]
