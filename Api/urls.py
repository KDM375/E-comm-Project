from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router =DefaultRouter()
router.register(r'items', views.ItemsViewSet)
urlpatterns = [
    path('store/', views.StoreListCreate.as_view(), name='create'),
    path('store/<int:pk>/', views.StoreRUD.as_view(), name='update'),
    path('', include(router.urls))

]