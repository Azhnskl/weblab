# shop-back

Django REST API backend for the Online Shop project.

## Setup

```bash
# 1. Create and activate virtual environment
python -m venv venv

# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# 2. Install dependencies
pip install -r requirements.txt

# 3. Run migrations
python manage.py migrate

# 4. (Optional) Create superuser for Django admin
python manage.py createsuperuser

# 5. Start the development server
python manage.py runserver
```

## API Endpoints

| Endpoint | Description |
|---|---|
| `GET /api/products/` | List all products |
| `GET /api/products/<id>/` | Get one product by ID |
| `GET /api/categories/` | List all categories |
| `GET /api/categories/<id>/` | Get one category by ID |
| `GET /api/categories/<id>/products/` | List products by category |

## Project Structure

```
shop-back/
├── manage.py
├── requirements.txt
├── .gitignore
├── shop_back/           # Project config
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── api/                 # API app
    ├── models.py        # Product & Category models
    ├── views.py         # JSON endpoint logic
    ├── urls.py          # URL routing
    ├── admin.py
    └── migrations/
```
