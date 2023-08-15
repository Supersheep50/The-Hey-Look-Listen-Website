from django.db import IntegrityError
from rest_framework import serializers
from .models import Follower

"""
Code adapted from Code Institute walkthrough
"""

class FollowerSerializer(serializers.ModelSerializer):
    """
    Code adapted from Code Institute
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    followed_name = serializers.ReadOnlyField(source='followed.username')

    class Meta:
        model = Follower
        fields = [
            'id', 'owner', 'created_at', 'followed', 'followed_name'
        ]

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError({'detail': 'possible duplicate'})