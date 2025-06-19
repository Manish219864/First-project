from django.db import models

# # Create your models here.
# custom file created for shipment tracking backend
from django.db import models

class Shipment(models.Model):
    tracking_id = models.CharField(max_length=100, unique=True)
    order_id = models.CharField(max_length=100)
    status = models.CharField(max_length=50)  # e.g., "In Transit", "Delivered", etc.
    current_location = models.CharField(max_length=255)
    last_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.tracking_id} - {self.status}"
