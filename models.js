class Restaurant {
    constructor({name, image = 'https://image.url'}) {
        if(!name) throw new Error('Restaurant must have a name')
        this.name = name
        this.image = image
        this.menus = []
    }
    addMenu1(menu1){
        this.menus.push(menu1)
    }
    addMenu2(menu2){
        this.menus.push(menu2)
    }
    addMenu3(menu3){
        this.menus.push(menu3)
    }
}

class Menu1 {
    constructor({title}){
    this.type1 = 'Drinks Menu'
    this.title = title
    this.items = []
    }

    addItem(item){
        this.items.push(item)
    }
}

class Menu2 {
    constructor({title}){
    this.type2 = 'Food Menu'
    this.title = title
    this.items = []
    }

    addItem(item){
        this.items.push(item)
    }
}

class Menu3 {
    constructor({title}){
    this.type3 = 'Dessert Menu'
    this.title = title
    this.items = []
    }

    addItem(item){
        this.items.push(item)
    }
}

class Item {
    constructor({name, price}){
    this.name = name
    this.price = price
    }
}



module.exports = {
    Restaurant,
    Menu1,
    Menu2,
    Menu3,
    Item
}