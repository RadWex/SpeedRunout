from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.generic.edit import FormMixin
from django.urls import reverse_lazy
from django.views.generic import CreateView
from django.http import HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator


class HomePageView(TemplateView):
    template_name = 'main_page/index.html'


class GamePageView(TemplateView):
    template_name = 'game/game.html'

    @method_decorator(login_required)
    def dispatch(self, *args, **kwargs):
        return super(GamePageView, self).dispatch(*args, **kwargs)
