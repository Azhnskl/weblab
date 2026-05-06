from django.http import JsonResponse

from .generics import (
    CategoryDetailAPIView,
    CategoryListAPIView,
    CategoryProductsAPIView,
    ProductDetailAPIView,
    ProductListAPIView,
)

# Switch product implementation here when moving between lab levels.
# from .fbv import product_detail as product_detail_view
# from .fbv import products_list as product_list_view
# from .cbv import ProductDetailAPIView, ProductListAPIView
# from .mixins import ProductDetailAPIView, ProductListAPIView

product_list_view = ProductListAPIView.as_view()
product_detail_view = ProductDetailAPIView.as_view()


def api_overview(request):
    return JsonResponse(
        {
            "message": "Lab 10 shop API",
            "active_level": "generics",
            "endpoints": {
                "categories": "/api/categories/",
                "category_detail": "/api/categories/<id>/",
                "category_products": "/api/categories/<id>/products/",
                "products": "/api/products/",
                "product_detail": "/api/products/<id>/",
            },
        }
    )
