export default class Kartya {
    #kep
    #taroloElem
    constructor(kep,taroloElem){
        this.#kep = kep
        this.#taroloElem = taroloElem
        this.kepBehelyez()
        this.gombElem = this.#taroloElem.find(".kiskep:last")
        this.esemenykezelo()
    }
    kepBehelyez(){
        this.#taroloElem.append(`<div class="card kiskep  col-lg-3 col-md-4 col-sm-4"> <div class="card-body"> <img src="${this.#kep.src}" alt="${this.#kep.alt}"> </div> </div>`)

    }
    esemenykezelo(){
        this.gombElem.on("click",()=>{
            const e = new CustomEvent("kivalaszt",{detail:this.#kep})
            window.dispatchEvent(e)
            
        })
        
    }
}