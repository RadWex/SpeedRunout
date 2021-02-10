from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.generic.edit import FormMixin
from django.urls import reverse_lazy
from django.views.generic import CreateView
from django.http import HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from .models import Score
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.csrf import ensure_csrf_cookie
import json


class HomePageView(TemplateView):
    template_name = 'main_page/index.html'


class GamePageView(TemplateView):
    template_name = 'game/game.html'

    # @method_decorator(login_required)
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        if self.request.user.is_authenticated:
            user = self.request.user.id
            score = Score.objects.filter(user=user).first()
            score = score.score
            context["score"] = score
        return context

    # @login_required
    def post(self, request, *args, **kwargs):
        context = super(GamePageView, self).get(request, *args, **kwargs)
        if self.request.user.is_authenticated:
            user = self.request.user.id
            score = Score.objects.filter(user=user).first()
            if int(request.body) > score.score:
                score.score = int(request.body)
                score.save()
        return context
