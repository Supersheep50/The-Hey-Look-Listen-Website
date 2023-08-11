from django.urls import path
from podcastposts import views

urlpatterns = [
    path('podcastposts/', views.PodcastPostList.as_view()),
    path('podcastposts/<int:pk>/', views.PodcastPostDetail.as_view())
]
