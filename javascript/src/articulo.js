const {Item} = require("./item") ;


class Articulo extends Item {
  static nuevo(name, sellIn, quality){
    if (name === 'nadena'){
      return new Articulo(name, sellIn, quality)
    } else {
      return new Item(name, sellIn, quality)
    }
  }
  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
  }
  toString(){
    //return return "nombre,sellIn,quality>>>>" + this.name + " " + this.sellIn + " " +  this.quality + " " +  this.type
    console.log ('Neo, be aware of %o', this)
    return `nombre>>${this.name} , sellIn>>${this.name} , quality>>>${this.name} `
  }
}


class Estandar extends Articulo {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
  }
  set quality(valor){
      if (valor === '') {
        throw new Error(`name field of User cannot be empty`);
      }
      this.quality = valor;
  }
  get quality(){
    return this.quality;
  }
  updateQuality(){
    this.sellIn = this.sellIn - 1 ;
    if (this.sellIn < 0){
      this.setQuality(this.quality - 2)
    }else {
      this.setQuality(this.quality - 1)
    }

  }
}


  module.exports = {Articulo , Estandar}
