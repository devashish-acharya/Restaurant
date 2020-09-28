const {Restaurant, Menu1, Menu2, Menu3, Item} = require('./models')

//Restaruant
describe('Restaurant' , () => {
    test('has a name', () => {
        const restaurant = new Restaurant ({name: 'Everest'})
        expect(restaurant.name).toBe('Everest')
        expect(restaurant.image).toBe('https://image.url')
    })

    test('Must have a name', () => {
        expect(() =>{new Restaurant({})}).toThrow()
    })

    test('can add menu to the restaurant', () => {
        const restaurant = new Restaurant ({name: 'Everest'})
        const menu1 = new Menu1({type1: 'Drinks Menu'})
        restaurant.addMenu1(menu1)
        expect(restaurant.menus[0]).toEqual(menu1)
    })

    })


    //Menu
    describe('Menu', () => {
        test('has a title and items', () => {
            const menu = new Menu1({title: 'Cocktails'})
            expect(menu.title).toBe('Cocktails')
            expect(Array.isArray(menu.items)).toBeTruthy()
        })
        
        test('is a type of menu', () => {
            const menu1 = new Menu1({type1: 'Drinks Menu'})
            expect(menu1.type1).toBe('Drinks Menu')
            const menu2 = new Menu2({type2: 'Food Menu'})
            expect(menu2.type2).toBe('Food Menu')
            const menu3 = new Menu3({type3: 'Dessert Menu'})
            expect(menu3.type3).toBe('Dessert Menu')
        })
        
        
    })

    describe('Item', () => {
        test('Has a name', () => {
            const item = new Item({name: 'Singapore Sling'})
            expect(item.name).toBe('Singapore Sling')
        })
        
    })