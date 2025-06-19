from django.contrib import admin

# Register your models here.
#custom added for shipment tracking backend
from django.contrib import admin
from .models import Shipment

admin.site.register(Shipment)
