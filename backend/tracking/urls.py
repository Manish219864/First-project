#custom file created for shiipment tracking backend

from django.urls import path
from .views import TrackShipmentAPIView

urlpatterns = [
    # POST request to create a shipment
    path('', TrackShipmentAPIView.as_view(), name='create-shipment'),

    # GET request to fetch shipment by tracking ID
    path('<str:tracking_id>/', TrackShipmentAPIView.as_view(), name='track-shipment'),
]

