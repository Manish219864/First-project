from django.contrib import admin

# Register your models here.
#custom added for shipment tracking backend
from django.contrib import admin
from .models import Shipment

admin.site.register(Shipment)


#custom 2
from django.contrib import admin
from .models import Shipment, ReturnRequest, Wallet

# Prevent double registration
from django.contrib.admin.sites import AlreadyRegistered

models_to_register = [Shipment, ReturnRequest, Wallet]

for model in models_to_register:
    try:
        admin.site.register(model)
    except AlreadyRegistered:
        pass
