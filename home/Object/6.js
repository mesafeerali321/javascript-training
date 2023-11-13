let shop ={
    shekhana: 'Bharat kirana store',
    imadpur: 'Shadab kirana store',
    chajju: 'Affan store'
}

let garhpar = 'aaa store'
shop.chajju = 'Amanat store'

garhpar = shop.imadpur

console.log(shop)     //{ shekhana: 'Bharat kirana store'  imadpur:'Shadab kirana store'  chajju:'Amanat store' }
console.log(garhpar)  //Shadab kirana store
