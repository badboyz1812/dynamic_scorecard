from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

# Define a simple homepage view
def homepage(request):
    return HttpResponse("<h1>Welcome to Dynamic Scorecard</h1>")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')), 
    path('', homepage, name='homepage'),
]
