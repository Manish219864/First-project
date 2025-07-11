from django.urls import path
from .views import mock_orders_view  # ✅ only this is needed

urlpatterns = [
    path('mock-orders/', mock_orders_view),  # ✅ single GET+POST endpoint
]
