//import data from "./gameproducts";
// products

const productsDOM = document.querySelector(".ps4-products");
let result=  fetch("gameproducts.json");
console.log(result)
       // let data =  result.json();
        let products = result;
        products = products.map(item => {
          const { title } = item.title;
          const {price} = item.price;
          const { id } = item.id;
          const image = item.image;
          //return { title, price, id, image };
        });
        console.log(products);
class Products {
    async getProducts() {
      try {
       
        let result= await fetch("gameproducts.json");
        let data = await result.json();
        let products = data.items;
        products = products.map(item => {
          const { title } = item.title;
          const {price} = item.price;
          const { id } = item.id;
          const image = item.image;
          return { title, price, id, image };
        });
        console.log(products);
        return products;
    } catch (error) {
      console.log(error);
    }
  }
}
class UI {
    displayProducts(products) {
      let result = "";
      products.forEach(product => {
        result += `
     <!-- single product -->
          
            <div class="product-top">
              <img
                src=${product.image}
                alt="product"
                class="product-img"
              />
              <div class="overlay-right">
                            <button type="button"class="btn btn-secondary" title="Quick pay">
                                <i class="fa fa-eye"></i>
                            </button>
                            <button type="button"class="btn btn-secondary" title="Add to Cart">
                                <i class="fa fa-shopping-cart"></i>
                            </button>
            </div>
            <div class="product-bottom text-center">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
            <h3>${product.title}</h3>
            <h4>$${product.price}</h4>
          </div>
          <!-- end of single product -->
     `;
      });
      productsDOM.innerHTML = result;
    }
}
class Storage{

}
document.addEventListener("Contentloaded", () => {
    const ui= new UI();
    const products = new Products();
    products.getProducts().then(data => console.log(data));
});