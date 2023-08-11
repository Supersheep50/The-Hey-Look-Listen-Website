# Generated by Django 3.2.20 on 2023-08-11 09:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('podcastposts', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('likes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='PodcastLike',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('podcastpost', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='podcastposts.podcastpost')),
            ],
            options={
                'ordering': ['-created_at'],
                'unique_together': {('owner', 'podcastpost')},
            },
        ),
    ]