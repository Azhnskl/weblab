from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        ordering = ['id']

    def __str__(self) -> str:
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    rating = models.FloatField()
    images = models.JSONField(default=list)
    link = models.URLField(max_length=500)
    likes = models.PositiveIntegerField(default=0)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')

    class Meta:
        ordering = ['id']

    def __str__(self) -> str:
        return self.name
