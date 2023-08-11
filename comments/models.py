from django.db import models
from django.contrib.auth.models import User
from posts.models import Post
from podcastposts.models import PodcastPost


class Comment(models.Model):
    """
    Code adapted from Code Institute
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField()

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.content


class PodcastComment(models.Model):
    """
    Code adapted from Code Institute
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    podcastposts = models.ForeignKey(PodcastPost, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField()

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.content