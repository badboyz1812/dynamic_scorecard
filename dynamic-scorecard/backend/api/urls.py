from django.urls import path
from .views import UploadCSVView, GenerateGraphView, FetchScoresView

urlpatterns = [
    path('upload-csv/', UploadCSVView.as_view(), name='upload_csv'),
    path('graph-data/', GenerateGraphView.as_view(), name='generate_graph'),
    path('scores/', FetchScoresView.as_view(), name='fetch_scores'),
]
