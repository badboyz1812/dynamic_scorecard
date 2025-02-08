from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework import status
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from .models import ScoreData
from .serializers import ScoreDataSerializer
import pandas as pd
import json

from .models import ScoreData
from .serializers import ScoreDataSerializer


@method_decorator(csrf_exempt, name='dispatch')
class UploadCSVView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request, *args, **kwargs):
        try:
            file = request.FILES.get('file', None)
            if not file:
                return Response({'error': 'No file uploaded'}, status=status.HTTP_400_BAD_REQUEST)

            # Read CSV file
            df = pd.read_csv(file)
            results = []

            # Save each row into the database
            for _, row in df.iterrows():
                score_data = ScoreData(
                    name=row['name'],
                    category=row['category'],
                    score=row['score']
                )
                score_data.save()
                results.append(score_data)

            # Serialize and return data
            serializer = ScoreDataSerializer(results, many=True)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

class GenerateGraphView(APIView):
    def get(self, request, *args, **kwargs):
        try:
            data = ScoreData.objects.all()
            serializer = ScoreDataSerializer(data, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class FetchScoresView(APIView):
    def get(self, request, *args, **kwargs):
        try:
            scores = ScoreData.objects.all()
            serializer = ScoreDataSerializer(scores, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class CompareScoresView(APIView):
    def get(self, request):
        scores = ScoreData.objects.all()
        serializer = ScoreDataSerializer(scores, many=True)
        return Response(serializer.data)