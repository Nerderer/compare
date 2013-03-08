var allProducts = [
    {
        title: 'Big Ass Sword of Baddassery',
        img: 'sword.png',
        category: 'Weapons',
        subCategory: 'Swords',
        price: '100 gold',
        attributes: {
            'Hands': '2',
            'Damage': '12-21',
            'Damage type': 'Piercing'
        }
    },
    {
        title: 'Short Sword',
        img: 'dagger.png',
        category: 'Weapons',
        subCategory: 'Swords',
        price: '25 gold',
        attributes: {
            'Hands': '1',
            'Damage': '7-10',
            'Damage type': 'Piercing'
        }
    },
    {
        title: 'Wand of Foo',
        img: 'wand.png',
        category: 'Weapons',
        subCategory: 'Staffs',
        price: '1250 gold',
        attributes: {
            'Hands': '2',
            'Damage': '8-13',
            'Damage type': 'Blunt',
            'Fire damage': '15-25'
        }
    },
    {
        title: 'Health Potion',
        img: 'potion.png',
        category: 'Misc',
        subCategory: 'Potions',
        price: '10 gold',
        attributes: {
            'HP': '+50'
        }
    },
    {
        title: 'Mana Potion',
        img: 'potion_blu.png',
        category: 'Misc',
        subCategory: 'Potions',
        price: '10 gold',
        attributes: {
            'MP': '+50'
        }
    },
    {
        title: 'MC Hammer',
        img: 'hammer.png',
        category: 'Weapons',
        subCategory: 'Axes and hammers',
        price: '50 gold',
        attributes: {
            'Hands': '1',
            'Damage': '8-12',
            'Hammer Style': '+5',
            'Damage type': 'Blunt'
        }
    },
    {
        title: 'Steel Helmet of Ice Protection',
        img: 'helmet.png',
        category: 'Armor',
        subCategory: 'Helmets',
        price: '60 gold',
        attributes: {
            'Armor value': '15',
            'Bonus': 'Can not be frozen'
        },
        resistances: {
            'Ice': '25',
            'Electricity': '-15'
        }
    },
    {
        title: 'Plated Shield',
        img: 'shield.png',
        category: 'Armor',
        subCategory: 'Shields',
        price: '30 gold',
        attributes: {
            'Hands': '1',
            'Armor value': '10'
        }
    },
    {
        title: 'Baby Raccoon',
        img: 'pets_raccoon.png',
        category: 'Pets',
        subCategory: 'Mammals',
        price: '300 gold',
        attributes: {
            'Hands': '2',
            'Destruction': '10'
        }
    },
    {
        title: 'Monkey',
        img: 'pets_monkey.png',
        category: 'Pets',
        subCategory: 'Mammals',
        price: '100 gold',
        attributes: {
            'Hands': '2?',
            'Bonus': 'Can climb like a monkey!',
            'Sound': 'Oooo, oooo, ooo!'
        }
    },
    {
        title: 'Kitteh',
        img: 'pets_kitteh.png',
        category: 'Pets',
        subCategory: 'Mammals',
        price: '50 gold',
        attributes: {
            'Hands': '0',
            'Cuteness': '5',
            'Destruction': '5',
            'Sound': 'Mew!'
        }
    },
    {
        title: 'Dragon',
        img: 'pets_dragon.png',
        category: 'Pets',
        subCategory: 'Reptiles',
        price: '20000 gold',
        attributes: {
            'Bonus': 'Pretty scary!'
        }
    }
];