import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAll():Product[]{
    return [
      {
        id:1,
        name: 'adapter',
        description: 'horoshi adapter',
        price: 15_000,
        rating: 4.7,
        image: 'assets/images/products/adapter.jpg',
        link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000',
      },

      {
        id:2,
        name: 'airpods 4',
        description: 'prikolnyi',
        price: 75_000,
        rating: 4.0,
        image: 'assets/images/products/airpods.jpg',
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000',
      },

      {
        id:3,
        name: 'chehol',
        description: 'prozrachnyi',
        price: 3_000,
        rating: 4.2,
        image: 'assets/images/products/chehol.jpg',
        link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
      },

      {
        id:4,
        name: 'iphone 17',
        description: 'cringe',
        price: 655_000,
        rating: 3.6,
        image: 'assets/images/products/iphone17.jpg',
        link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
      },

      {
        id:5,
        name: 'kabel',
        description: 'horoshi kabel dlya horoshego adaptera',
        price: 10_000,
        rating: 4.1,
        image: 'assets/images/products/kabel.jpg',
        link: 'https://kaspi.kz/shop/p/kabel-varium-usb-4-type-c-m-1-m-vtt03-belyi-144182006/?c=750000000',
      },

      {
        id:6,
        name: 'podstavka',
        description: 'esli ty taksist',
        price: 3_000,
        rating: 4.0,
        image: 'assets/images/products/podstavka.jpg',
        link: 'https://kaspi.kz/shop/p/podstavka-afkas-nova-ak-37-chernyi-107656268/?c=750000000',
      },

      {
        id:7,
        name: 'popsocket',
        description: 'tiktoker chtol',
        price: 600,
        rating: 4.5,
        image: 'assets/images/products/popsocket.jpg',
        link: 'https://kaspi.kz/shop/p/popsoket-002-rozovyi-122283935/?c=750000000',
      },

      {
        id:8,
        name: 'powerbank',
        description: 'helper at sos moment',
        price: 9_000,
        rating: 5.0,
        image: 'assets/images/products/power.jpg',
        link: 'https://kaspi.kz/shop/p/vneshnii-akkumuljator-virma-spb20k-20000-mach-22-5-vt-seryi-134445391/?c=750000000',
      },

      {
        id:9,
        name: 'steklo',
        description: 'incognito ))',
        price: 2_000,
        rating: 4.8,
        image: 'assets/images/products/steklo.jpg',
        link: 'https://kaspi.kz/shop/p/steklo-dlja-apple-iphone-13-tempered-glass-film-18d-chernyi-108450863/?c=750000000',
      },

      {
        id:10,
        name: 'chasy prikolnye',
        description: 'kruglyi, vrode vremya pokazyvaet',
        price: 120_000,
        rating: 4.3,
        image: 'assets/images/products/watch.jpg',
        link: 'https://kaspi.kz/shop/p/yunteko-dmi50-grafitovyi-chernyi-112844424/?c=750000000',
      },

    ]
  }
}
