from django.test import TestCase
from django.urls import reverse

from .models import Category, Product


class ShopApiTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        category = Category.objects.create(name='Phones')
        Product.objects.create(
            name='Test Phone',
            description='Example product',
            price=1000,
            rating=4.5,
            images=['https://example.com/image.jpg'],
            link='https://example.com/product',
            likes=3,
            category=category,
        )

    def test_categories_endpoint_returns_list(self):
        response = self.client.get(reverse('categories'))
        category_names = [item['name'] for item in response.json()]

        self.assertEqual(response.status_code, 200)
        self.assertIn('Phones', category_names)

    def test_category_products_endpoint_returns_products(self):
        category = Category.objects.get(name='Phones')
        response = self.client.get(reverse('category_products', args=[category.id]))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()[0]['categoryId'], category.id)
