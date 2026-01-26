from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')), #API routes for api app
    path('api/users/', include('users.urls')), #API routes for users app
    path('api/health/', include('health.urls')), #health check routes 
    path('api/accounts/', include('accounts.urls')), #account related routes    
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'), #JWT token obtain route
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), #JWT token refresh route
]
