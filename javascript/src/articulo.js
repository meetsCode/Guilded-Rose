const {Item} = require("./item") ;


class Articulo extends Item {
  static nuevo(name, sellIn, quality){
    if (/Conjured/i.test(name) ){
 //     if (name === 'Conjured Mana Cake'){
      return new Conjured(name, sellIn, quality)
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


class Conjured extends Articulo {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
    // console.log("alquie cre un conjured")
  }
  minmaxQuality(calidad){
    const calidadMin0 = Math.max(0, calidad) ;
    const calidadMax50 = Math.min(50, calidadMin0) ;
    return calidadMax50
  }
  updateQuality(){
    this.sellIn = this.sellIn - 1 ;
    if (this.sellIn < 0){
      this.quality = this.minmaxQuality(this.quality - 4)
    }else {
      this.quality = this.minmaxQuality(this.quality - 2)
    }
  }
}


module.exports = {Articulo , Conjured}
