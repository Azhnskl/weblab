from django.db import migrations


CATEGORIES = [
    {"id": 1, "name": "Electronics"},
    {"id": 2, "name": "Books"},
    {"id": 3, "name": "Home"},
    {"id": 4, "name": "Sports"},
]

PRODUCTS = [
    {
        "id": 1,
        "name": "Wireless Mouse",
        "description": "Ergonomic wireless mouse with silent clicks.",
        "price": 24.99,
        "rating": 4.5,
        "images": ["https://example.com/images/mouse.jpg"],
        "link": "https://example.com/products/wireless-mouse",
        "likes": 12,
        "categoryId": 1,
    },
    {
        "id": 2,
        "name": "Mechanical Keyboard",
        "description": "Compact keyboard with tactile switches.",
        "price": 79.99,
        "rating": 4.8,
        "images": ["https://example.com/images/keyboard.jpg"],
        "link": "https://example.com/products/mechanical-keyboard",
        "likes": 30,
        "categoryId": 1,
    },
    {
        "id": 3,
        "name": "USB-C Hub",
        "description": "Seven-port USB-C hub for laptops and tablets.",
        "price": 39.99,
        "rating": 4.4,
        "images": ["https://example.com/images/hub.jpg"],
        "link": "https://example.com/products/usb-c-hub",
        "likes": 8,
        "categoryId": 1,
    },
    {
        "id": 4,
        "name": "Noise Cancelling Headphones",
        "description": "Over-ear headphones with active noise cancelling.",
        "price": 149.99,
        "rating": 4.7,
        "images": ["https://example.com/images/headphones.jpg"],
        "link": "https://example.com/products/headphones",
        "likes": 25,
        "categoryId": 1,
    },
    {
        "id": 5,
        "name": "Portable SSD",
        "description": "Fast external SSD with 1TB capacity.",
        "price": 99.99,
        "rating": 4.6,
        "images": ["https://example.com/images/ssd.jpg"],
        "link": "https://example.com/products/portable-ssd",
        "likes": 17,
        "categoryId": 1,
    },
    {
        "id": 6,
        "name": "Python Basics",
        "description": "Beginner-friendly guide to Python programming.",
        "price": 19.99,
        "rating": 4.3,
        "images": ["https://example.com/images/python-book.jpg"],
        "link": "https://example.com/products/python-basics",
        "likes": 9,
        "categoryId": 2,
    },
    {
        "id": 7,
        "name": "Django in Practice",
        "description": "Project-based introduction to Django development.",
        "price": 27.5,
        "rating": 4.6,
        "images": ["https://example.com/images/django-book.jpg"],
        "link": "https://example.com/products/django-in-practice",
        "likes": 14,
        "categoryId": 2,
    },
    {
        "id": 8,
        "name": "Clean Code Notes",
        "description": "Short handbook about maintainable software design.",
        "price": 16.0,
        "rating": 4.2,
        "images": ["https://example.com/images/clean-code.jpg"],
        "link": "https://example.com/products/clean-code-notes",
        "likes": 11,
        "categoryId": 2,
    },
    {
        "id": 9,
        "name": "Algorithms Explained",
        "description": "Visual overview of common algorithms and data structures.",
        "price": 22.0,
        "rating": 4.4,
        "images": ["https://example.com/images/algorithms.jpg"],
        "link": "https://example.com/products/algorithms-explained",
        "likes": 13,
        "categoryId": 2,
    },
    {
        "id": 10,
        "name": "REST API Design",
        "description": "Practical patterns for building web APIs.",
        "price": 24.5,
        "rating": 4.5,
        "images": ["https://example.com/images/rest-api.jpg"],
        "link": "https://example.com/products/rest-api-design",
        "likes": 15,
        "categoryId": 2,
    },
    {
        "id": 11,
        "name": "LED Desk Lamp",
        "description": "Adjustable lamp with warm and cool light modes.",
        "price": 34.99,
        "rating": 4.5,
        "images": ["https://example.com/images/lamp.jpg"],
        "link": "https://example.com/products/desk-lamp",
        "likes": 10,
        "categoryId": 3,
    },
    {
        "id": 12,
        "name": "Storage Basket Set",
        "description": "Set of three woven baskets for shelves.",
        "price": 28.99,
        "rating": 4.1,
        "images": ["https://example.com/images/baskets.jpg"],
        "link": "https://example.com/products/storage-baskets",
        "likes": 6,
        "categoryId": 3,
    },
    {
        "id": 13,
        "name": "Ceramic Mug",
        "description": "Large ceramic mug for tea or coffee.",
        "price": 12.99,
        "rating": 4.4,
        "images": ["https://example.com/images/mug.jpg"],
        "link": "https://example.com/products/ceramic-mug",
        "likes": 18,
        "categoryId": 3,
    },
    {
        "id": 14,
        "name": "Throw Pillow",
        "description": "Soft decorative pillow for sofa or bed.",
        "price": 21.99,
        "rating": 4.0,
        "images": ["https://example.com/images/pillow.jpg"],
        "link": "https://example.com/products/throw-pillow",
        "likes": 5,
        "categoryId": 3,
    },
    {
        "id": 15,
        "name": "Wall Clock",
        "description": "Minimal wall clock with silent movement.",
        "price": 26.49,
        "rating": 4.3,
        "images": ["https://example.com/images/clock.jpg"],
        "link": "https://example.com/products/wall-clock",
        "likes": 7,
        "categoryId": 3,
    },
    {
        "id": 16,
        "name": "Yoga Mat",
        "description": "Non-slip yoga mat for indoor workouts.",
        "price": 29.99,
        "rating": 4.6,
        "images": ["https://example.com/images/yoga-mat.jpg"],
        "link": "https://example.com/products/yoga-mat",
        "likes": 21,
        "categoryId": 4,
    },
    {
        "id": 17,
        "name": "Football",
        "description": "Durable football for training and matches.",
        "price": 18.99,
        "rating": 4.2,
        "images": ["https://example.com/images/football.jpg"],
        "link": "https://example.com/products/football",
        "likes": 16,
        "categoryId": 4,
    },
    {
        "id": 18,
        "name": "Tennis Racket",
        "description": "Lightweight racket suitable for beginners.",
        "price": 64.99,
        "rating": 4.4,
        "images": ["https://example.com/images/racket.jpg"],
        "link": "https://example.com/products/tennis-racket",
        "likes": 12,
        "categoryId": 4,
    },
    {
        "id": 19,
        "name": "Resistance Bands",
        "description": "Five resistance bands for strength training.",
        "price": 15.99,
        "rating": 4.5,
        "images": ["https://example.com/images/bands.jpg"],
        "link": "https://example.com/products/resistance-bands",
        "likes": 19,
        "categoryId": 4,
    },
    {
        "id": 20,
        "name": "Water Bottle",
        "description": "Reusable insulated bottle for workouts.",
        "price": 17.49,
        "rating": 4.3,
        "images": ["https://example.com/images/bottle.jpg"],
        "link": "https://example.com/products/water-bottle",
        "likes": 22,
        "categoryId": 4,
    },
]


def seed_store_data(apps, schema_editor):
    category_model = apps.get_model("shop_backend", "Category")
    product_model = apps.get_model("shop_backend", "Product")

    created_categories = {}
    for item in CATEGORIES:
        category, _ = category_model.objects.get_or_create(
            id=item["id"],
            defaults={"name": item["name"]},
        )
        created_categories[category.id] = category

    for item in PRODUCTS:
        category = created_categories[item["categoryId"]]
        product_model.objects.get_or_create(
            id=item["id"],
            defaults={
                "name": item["name"],
                "description": item["description"],
                "price": item["price"],
                "rating": item["rating"],
                "images": item["images"],
                "link": item["link"],
                "likes": item["likes"],
                "category": category,
            },
        )


def unseed_store_data(apps, schema_editor):
    apps.get_model("shop_backend", "Product").objects.filter(
        id__in=[item["id"] for item in PRODUCTS]
    ).delete()
    apps.get_model("shop_backend", "Category").objects.filter(
        id__in=[item["id"] for item in CATEGORIES]
    ).delete()


class Migration(migrations.Migration):
    dependencies = [
        ("shop_backend", "0001_initial"),
    ]

    operations = [
        migrations.RunPython(seed_store_data, unseed_store_data),
    ]
