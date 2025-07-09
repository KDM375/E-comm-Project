from django.shortcuts import render
from rest_framework import generics, viewsets
from .models import Store
from .serializers import StoreSerializer

# Create your views here.
class StoreListCreate(generics.ListCreateAPIView):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer

    def delete(self, request, *args, **kwargs):
        Store.objects.all().delete()
        return 

class StoreRUD(generics.RetrieveUpdateDestroyAPIView):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer
    lookup_field = 'pk'

class ItemsViewSet(viewsets.ModelViewSet):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer