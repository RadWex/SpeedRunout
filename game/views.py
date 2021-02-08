from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.generic.edit import FormMixin
from django.urls import reverse_lazy
from django.views.generic import CreateView


class HomePageView(TemplateView):
    template_name = 'main_page/index.html'


class GamePageView(TemplateView):
    template_name = 'game/game.html'