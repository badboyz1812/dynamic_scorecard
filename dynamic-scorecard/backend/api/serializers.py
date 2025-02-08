from rest_framework import serializers
from .models import ScoreData

class ScoreDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScoreData
        fields = '__all__'