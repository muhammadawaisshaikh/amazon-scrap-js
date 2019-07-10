All Products:
var products = document.querySelectorAll(".s-result-item")
products[0]

image:
products[0].querySelectorAll('.s-access-image.cfMarker')[0].currentSrc

Title:
products[0].querySelectorAll('.s-color-twister-title-link')[0].text

Price:
products[0].querySelectorAll('.a-size-base.a-color-base')[0].outerText

for(int i=0; i<products.length; i++){ 
  console.log(products[i].querySelectorAll('.s-access-image.cfMarker')[0].currentSrc);
  console.log(products[i].querySelectorAll('.s-color-twister-title-link')[0].text);
  console.log(products[i].querySelectorAll('.a-size-base.a-color-base')[0].outerText);
}
