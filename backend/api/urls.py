from django.urls import path
from .views import signup , protected_view

urlpatterns = [
    path('signup/', signup),
    path('protected/', protected_view),
]
