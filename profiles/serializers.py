from rest_framework import serializers
from .models import Profile

"""
Profile serializer. Code adapted from Code Institute's DRF API
walkthrough.
"""
class ProfileSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Profile
        fields = [
            'id', 'owner', 'created_at', 'updated_at', 'name',
            'content', 'image'
        ]