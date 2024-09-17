import Kartyak from "./Kartyak.js";
import { kepekLista } from "./kepek.js";
import NagyKartya from "./NagyKartya.js";
const jatekterHTML = $(".jatekter");
const nagykepHTML = $(".nagykartya");
let index = 0;
new Kartyak(kepekLista, jatekterHTML);
new NagyKartya(kepekLista[index], nagykepHTML);

$(window).on("kivalaszt", (event) => {
  console.log(event.detail);
  $(nagykepHTML).empty();
  console.log(`index a ${event.detail.id} képnél:${index}`);

  new NagyKartya(event.detail, nagykepHTML);
});

$(window).on("jobb", (event) => {
  index = index+1;
  if (index === kepekLista.length) {
    console.log("Lista végére értünk")
    index = 0;
  }
  $(nagykepHTML).empty();
  new NagyKartya(kepekLista[index], nagykepHTML);
});
$(window).on("bal", (event) => {
  if( index > 0){
    index = index-1
  }
  console.log(index);
  $(nagykepHTML).empty();
  new NagyKartya(kepekLista[index], nagykepHTML);
});
