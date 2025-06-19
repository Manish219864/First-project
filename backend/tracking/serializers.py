# backend/tracking/serializers.py

from rest_framework import serializers
from .models import Shipment

class ShipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shipment
        fields = '__all__'  # or list specific fields like ['id', 'status', 'tracking_number']
