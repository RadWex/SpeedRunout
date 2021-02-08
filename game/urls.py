from django.urls import path
from . import views

urlpatterns = [
    path('',  views.HomePageView.as_view(), name='index'),
    path('game/', views.GamePageView.as_view(), name='game')
]