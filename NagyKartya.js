export default class NagyKartya {
  #kep;
  #taroloElem;

  constructor(kep, taroloElem) {
    this.#kep = kep;
    this.#taroloElem = taroloElem;
    this.kepBehelyez();
    this.gombElem = this.#taroloElem.find(".kiskep:last");

    this.jobbElem = $(".jobb");
    this.jobbElem.on("click", () => {
      this.#esemenyTrigger("jobb");
    });
    this.balElem = $(".bal");
    this.balElem.on("click", () => {
        this.#esemenyTrigger("bal");
      });
  }
  kepBehelyez() {
    this.#taroloElem.append(
      `<div class="card kiskep  col-lg-3 col-md-4 col-sm-4"> <div class="card-body"> <img src="${
        this.#kep.src
      }" alt="${this.#kep.alt}"> </div> </div>`
    );
  }
  #esemenyTrigger(esemenynev) {
    const e = new CustomEvent(esemenynev);
    window.dispatchEvent(e)
  }
}
