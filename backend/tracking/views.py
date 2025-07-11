# views.py

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt

# Simulated in-memory DB
mock_orders = []

@csrf_exempt  #custom 3
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def mock_orders_view(request):
    print(" mock_orders_view hit:", request.method)
    if request.method == 'POST':
        new_order = {
            "order_id": request.data.get("order_id"),
            "tracking_id": request.data.get("tracking_id"),
            "status": request.data.get("status"),
            "current_location": request.data.get("current_location"),
            "last_updated": timezone.now()
        }
        mock_orders.append(new_order)
        return Response({"message": "Order added", "order": new_order}, status=201)

    elif request.method == 'GET':
        new_orders = [o for o in mock_orders if o["status"] == "Shipped"]
        process_orders = [o for o in mock_orders if o["status"] == "Out for Delivery"]
        track_orders = [o for o in mock_orders if o["status"] == "Delivered"]
        all_orders = mock_orders

        return Response({
            "new_orders": new_orders,
            "process_orders": process_orders,
            "track_orders": track_orders,
            "all_orders": all_orders
        })
