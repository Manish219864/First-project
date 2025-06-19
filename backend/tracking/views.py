from django.shortcuts import render

# Create your views here.
#custom created for shipment tracking backend


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Shipment
from .serializers import ShipmentSerializer
#custom added for backend
from rest_framework.permissions import IsAuthenticated

class TrackShipmentAPIView(APIView):

    #custom phase 4
    permission_classes = [IsAuthenticated]  # 👈 Add this line

    def get(self, request, tracking_id):
        try:
            shipment = Shipment.objects.get(tracking_id=tracking_id)
            serializer = ShipmentSerializer(shipment)
            return Response(serializer.data)
        except Shipment.DoesNotExist:
            return Response({"error": "Tracking ID not found"}, status=status.HTTP_404_NOT_FOUND)
        

    def post(self, request):
        serializer = ShipmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
