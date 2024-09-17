import Kartya from "./Kartya.js";
export default class Kartyak{
    #lista=[]
    #taroloElem
    constructor(lista,taroloElem){
        this.#lista = lista
        this.#taroloElem = taroloElem
        this.kartyakElhelyezese()
    }
    kartyakElhelyezese(){
        this.#lista.forEach((elem)=>{
            new Kartya(elem,this.#taroloElem)
        })
    }
}