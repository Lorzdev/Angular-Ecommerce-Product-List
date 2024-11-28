import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Product[] {
    return [
      {
        name: 'AirPods Pro',
        description: ' 2nd generation with MagSafe Case (USB‑C)',
        price: 12490,
        imageUrl: 'https://switch.com.ph/cdn/shop/products/MQD83_AV1.jpg?v=1664351026&width=1100',
       
      },
      {
        name: 'Magnetic Holder',
        description: 'AWEI W22 Four-In-One Magnetic Holder With Wireless Charging',
        price: 2440,
        imageUrl: 'https://dynamic.zacdn.com/New-rjKAAlEHUcQm3WEhak-2K1k=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/latest-gadget-4771-9127292-1.jpg',
      },
      {
        name: 'Gaming Chair',
        description: ' MUSSO Aeolus Series Fabric Computer Gaming Chair 199A XL SIZE',
        price: 1000,
        imageUrl: 'https://www.officewarehouse.com.ph/__resources/_web_data_/products/products/image_gallery/9125_7082.jpg',
      },
      {
        name: 'HeadPhones',
        description: 'Adjustable wireless headphones with adjustable ear cups, integrated controls, and 20 hours of battery life on a single charge',
        price: 2500,
        imageUrl: 'https://www.sbsmobile.com/ned/294310-thickbox_default/floxy-headphones.jpg',
      },
      {
        name: 'RGB Keyborad',
        description: 'ACC 2in1 Kit RGB Keyboard and Mouse Combo in elegant white. Featuring customizable RGB lighting,',
        price: 7000,
        imageUrl: 'https://easypc.com.ph/cdn/shop/files/OvationACC2in1KitWhite-a_2048x2048.png?v=1694510080',
      },
      {
        name: 'Iphone 16 pro max fully paid',
        description: 'iPhone 16 Pro Max. Featuring a stunning titanium design. Camera Control. 4K 120 fps Dolby Vision. And the A18 Pro chip.',
        price: 89000,
        imageUrl: 'https://powermaccenter.com/cdn/shop/files/iPhone_16_Pro_Desert_Titanium_PDP_Image_Position_1__en-WW_a9715438-f77d-4048-994a-1a4506ccabda.jpg?v=1726237380&width=823',
      },
      {
        name: 'Iphone XR',
        description: 'iPhone XR 256GB Black - New battery',
        price: 9000,
        imageUrl: 'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-xr/iphone-xr-black.jpg',
      },
      {
        name: 'Magnetic Wireless Charge',
        description: 'Easy to carry when traveling and Support charging 3 devices at the same time',
        price: 600,
        imageUrl: 'https://img.myipadbox.com/sec/product_l/EDA007101701A.jpg',
      },
      {
        name: 'CHUWI HeroBook Pro ',
        description: ' 14.1 Laptop, 256GB SSD 8GB RAM, Windows 11 Laptop, 1TB SSD Expand, Intel Celeron N4020(up to 2.8GHz), 2K FHD IPS Display, Ultra Slim, Mini-HDMI, 5G WiFi, USB3.0,',
        price: 22000,
        imageUrl: 'https://m.media-amazon.com/images/I/61Iyy+2damL._AC_SL1500_.jpg',
      },
      {
        name: 'ROG Strix Scar',
        description: 'RTX 4090 175W Gaming Laptop (intel 24-Core i9-14900HX, 96GB DDR5 RAM, 2x4TB NVME SSD, Intel WiFi 6E, Thunderbolt 4, 18" 240Hz QHD+, Mux Switch) Windows 11 Pro Notebook Made_By_ASUS',
        price: 97700,
        imageUrl: 'https://m.media-amazon.com/images/I/51kKCy7NRNL._AC_SL1280_.jpg',
       
      },

 
 
    ];
  }
}
