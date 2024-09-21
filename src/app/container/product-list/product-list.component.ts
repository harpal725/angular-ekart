import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  selectedProduct : Product;
  products = [
    {
      id: 1,
      name: "hello 2023",
      description: "a metal plate or rim for the hoof of an animal.",
      brand : "Nike",
      gender: "Men",
      category:"running",
      size:[2,3,4,5,6],
      color: ["black","pink","blue"],
      price: 300,
      isAvalible: false,
      item_left: 3,
      imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nike.com%2Fin%2Ft%2Frevolution-7-road-running-shoes-dC34tK&psig=AOvVaw2DXH6-IRbyElVM6LbEBcP5&ust=1726240882337000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiH0cbavYgDFQAAAAAdAAAAABAEhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nytimes.com%2F2021%2F04%2F08%2Fstyle%2Fsatan-shoe-settlement-nike.html&psig=AOvVaw2DXH6-IRbyElVM6LbEBcP5&ust=1726240882337000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiH0cbavYgDFQAAAAAdAAAAABARhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tnvcollection.pk%2Fproducts%2Fhigh-top-men-sneakers-fashion-mesh-breathable-man-casual-shoes-outdoor-sports-walking-zapatillas-hombre-mens-shoes-blade-bottom&psig=AOvVaw29WRfhLg3peuu28H1So81t&ust=1726240959836000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNC2zO3avYgDFQAAAAAdAAAAABAJhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fmunns.co.nz%2Fproducts%2Fferracini-genuine-leather-mens-smart-casual-shoes-tan&psig=AOvVaw29WRfhLg3peuu28H1So81t&ust=1726240959836000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNC2zO3avYgDFQAAAAAdAAAAABAhhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fshoewarehouse.com.au%2Fblogs%2Fnews%2Felevate-your-style-mens-dress-shoes-and-boots-for-your-next-event&psig=AOvVaw29WRfhLg3peuu28H1So81t&ust=1726240959836000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNC2zO3avYgDFQAAAAAdAAAAABAp",
      slug:"sk80-low"
    },
    {
      id: 2,
      name: "vibe 2023",
      description: "Though the human foot can adapt to varied terrains and climate conditions",
      brand : "Nike",
      gender: "Men",
      category:"walking",
      size:[2,3,4,5,6],
      color: ["black","pink","blue"],
      price: 700,
      isAvalible: true,
      item_left: 3,
      imageUrl: "https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw5d4896d8/nk/992/1/d/6/7/8/9921d678_ed65_49c6_bdcb_e85bebeb7c46.jpg?sw=520&sh=520&sm=fit",
      slug:"sk80-low"
    },
    {
      id: 3,
      name: "Nike 2023",
      description: "made in pakistan",
      brand : "Nike",
      gender: "Women",
      category:"working",
      size:[2,3,4,5,6],
      color: ["black","green","blue"],
      price: 1000,
      isAvalible: true,
      item_left: 3,
      imageUrl: "https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw5d4896d8/nk/992/1/d/6/7/8/9921d678_ed65_49c6_bdcb_e85bebeb7c46.jpg?sw=520&sh=520&sm=fit",
      slug:"sk80-low"
    },
    {
      id: 4,
      name: "pata 2023",
      description: "Though the human foot can adapt to varied terrains and climate conditions",
      brand : "Nike",
      gender: "Men",
      category:"running",
      size:[2,6],
      color: ["black","red","blue"],
      price: 351,
      isAvalible: true,
      item_left: 3,
      imageUrl: "https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw5d4896d8/nk/992/1/d/6/7/8/9921d678_ed65_49c6_bdcb_e85bebeb7c46.jpg?sw=520&sh=520&sm=fit",
      slug:"sk80-low"
    },
    {
      id: 5,
      name: "Nike 2023",
      description: "made in pakistan",
      brand : "Vibe",
      gender: "women",
      category:"running",
      size:[2,3,4,5,6],
      color: ["black","red","blue"],
      price: 600,
      isAvalible: false,
      item_left: 3,
      imageUrl: "https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw5d4896d8/nk/992/1/d/6/7/8/9921d678_ed65_49c6_bdcb_e85bebeb7c46.jpg?sw=520&sh=520&sm=fit",
      slug:"sk80-low"
    },
    {
      id: 6,
      name: "zero 2023",
      description: "Strong adjectives can go a long way in making your product sound more appealing",
      brand : "Nike",
      gender: "Men",
      category:"office",
      size:[2,3,4,5,6],
      color: ["black","yellow","blue"],
      price: 1200,
      isAvalible: false,
      item_left: 3,
      imageUrl: "https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw5d4896d8/nk/992/1/d/6/7/8/9921d678_ed65_49c6_bdcb_e85bebeb7c46.jpg?sw=520&sh=520&sm=fit",
      slug:"sk80-low"
    },
    {
      id: 7,
      name: "Nike 2023",
      description: "a metal plate or rim for the hoof of an animal.",
      brand : "Nike",
      gender: "Men",
      category:"criket",
      size:[2,3,6],
      color: ["black","yellow","blue"],
      price: 550,
      isAvalible: true,
      item_left: 3,
      imageUrl: "https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw5d4896d8/nk/992/1/d/6/7/8/9921d678_ed65_49c6_bdcb_e85bebeb7c46.jpg?sw=520&sh=520&sm=fit",
      slug:"sk80-low"
    },
    {
      id: 8,
      name: "Bag 2023",
      description: "Strong adjectives can go a long way in making your product sound more appealing",
      brand : "Nike",
      gender: "Men",
      category:"running",
      size:[2,3,4,5,6],
      color: ["black","black","blue"],
      price: 152,
      isAvalible: true,
      item_left: 3,
      imageUrl: "https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw5d4896d8/nk/992/1/d/6/7/8/9921d678_ed65_49c6_bdcb_e85bebeb7c46.jpg?sw=520&sh=520&sm=fit",
      slug:"sk80-low"
    },
    {
      id: 9,
      name: "Nike 2023",
      description: "an outer covering for the human foot typically having a thick or stiff sole with an attached heel and an upper part of lighter material (such as leather)",
      brand : "Nike",
      gender: "Men",
      category:"traviling",
      size:[2,3,4,5,6],
      color: ["black","black","blue"],
      price: 451,
      isAvalible: false,
      item_left: 3,
      imageUrl: "https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw5d4896d8/nk/992/1/d/6/7/8/9921d678_ed65_49c6_bdcb_e85bebeb7c46.jpg?sw=520&sh=520&sm=fit",
      slug:"sk80-low"
    },
  ]


  totalproduct = this.products.length;
  instock = this.products.filter(p =>  p.isAvalible === true).length
  outofstock = this.products.filter(p =>  p.isAvalible === false).length

  selectedfilterradioButton: string = 'all';

  @Input()
  searchtext: string ='';

  onfilterChange(value : string){
    this.selectedfilterradioButton = value;
  }
}
