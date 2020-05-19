const items = [
    {
        id: '1',
        name: 'Aegisium',
        description: 'Shielding material against corrosive substances. Used in storage units for fuels and other chemicals.',
        image: '/img/materials/aegisium.png',
        rank: 'common',
        type: 'Industrial metal ore',
        prices: [
            {
                price: 16,
                date: '2020-05-14T20:00:00.000Z'
            },
            {
                price: 15.49,
                date: '2020-05-15T20:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '2',
        name: 'Ajatite',
        description: 'Used as a base material for many basic electrical devices. Glass is also made out of Ajatite dust.',
        image: '/img/materials/ajatite.png',
        rank: 'worthless',
        type: 'Rock',
        prices: [
            {
            price: 0.77,
            date: '2020-05-14T20:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '3',
        name: 'Arkanium',
        description: 'Used in microcircuits to create complex electronics within the object. Many optics, sensors and small electronics use Arkanium.',
        image: '/img/materials/arkanium.png',
        rank: 'rare',
        type: 'Noble metal ore',
        prices: [
            {
                price: 160,
                date: '2020-05-14T20:00:00.000Z'
            },
            {
                price: 155.15,
                date: '2020-05-15T20:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '4',
        name: 'Balistic Velidenum',
        description: 'More durable version of Velidenum. (Armored Velidenum	on wiki ?)',
        image: '/img/materials/balistic_velidenum.png',
        rank: 'n/a',
        type: 'Alloy material',
        prices: [
            {
                price: 38,
                date: '2020-05-14T20:00:00.000Z'
            },
            {
                price: 37.61,
                date: '2020-05-15T20:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '5',
        name: 'Bastium',
        description: 'Most common metal available. Most objects in spaceships are made out of Bastium. Offers excellent structural durability for objects.',
        image: '/img/materials/bastium.png',
        rank: 'low',
        type: 'Industrial metal ore',
        prices: [
            {
                price: 10,
                date: '2020-05-14T20:00:00.000Z'
            },
            {
                price: 9.29,
                date: '2020-05-15T20:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '6',
        name: 'Bastonium',
        description: 'Light material with a relatively high armor value, used for military grade armor.',
        image: '/img/materials/bastonium.png',
        rank: 'n/a',
        type: 'Alloy material',
        prices: [
            {
                price: 66,
                date: '2020-05-14T20:00:00.000Z'
            },
            {
                price: 65.33,
                date: '2020-05-15T20:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '7',
        name: 'Charodium',
        description: 'Heat resistant industrial metal. Used mainly as armor plating or general construction material when heat resistance is required.',
        image: '/img/materials/charodium.png',
        rank: 'common',
        type: 'Industrial metal ore',
        prices: [
            {
                price: 20,
                date: '2020-05-14T20:00:00.000Z'
            },
            {
                price: 18.6,
                date: '2020-05-15T20:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '8',
        name: 'Corazium',
        description: 'Highly valuable and rare material for expensive electronics like FCU\'s and MFC\'s. It also has some corrosive resistant properties, and is used in chemical compounds.',
        image: '/img/materials/corazium.png',
        rank: 'rare',
        type: 'Noble metal ore',
        prices: [
            {
                price: 480,
                date: '2020-05-14T20:00:00.000Z'
            },
            {
                price: 459.82,
                date: '2020-05-15T20:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '9',
        name: 'Exorium',
        description: 'This radioactive metal is used as generator fuel.',
        image: '/img/materials/exorium.png',
        rank: 'low',
        type: 'Minor noble metal ore',
        prices: [
            {
                price: 8,
                date: '2020-05-14T20:00:00.000Z'
            },
            {
                price: 7.74,
                date: '2020-05-15T20:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '10',
        name: 'Haderite',
        description: 'Used in chemical compounds and advanced material crafting.',
        image: '/img/materials/haderite.png',
        rank: 'medium',
        type: 'Frozen material',
        prices: [
            {
                price: 28,
                date: '2020-05-14T20:00:00.000Z'
            },
            {
                price: 46.5,
                date: '2020-05-15T20:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '11',
        name: 'Ilmatrium',
        description: 'Highly conductive material that can store electricity well. Used in batteries, electronics, and heat transfer material.',
        image: '/img/materials/ilmatrium.png',
        rank: 'low',
        type: 'Minor noble metal ore',
        prices: [
            {
                price: 13,
                date: '2020-05-14T20:00:00.000Z'
            },
            {
                price: 12.4,
                date: '2020-05-15T20:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '12',
        name: 'Karnite',
        description: 'Used in chemical compounds and advanced material crafting.',
        image: '/img/materials/karnite.png',
        rank: 'medium',
        type: 'Frozen material',
        prices: [
            {
                price: 13,
                date: '2020-05-14T20:00:00.000Z'
            },
            {
                price: 38.76,
                date: '2020-05-15T20:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '13',
        name: 'Kutonium',
        description: 'Lightweight and strong metal that lacks electric and radiation properties to make it an effective all-around industrial metal. Good impact, heat, and corrosive resistances make it useful for: Weapons, tools, and other objects that need durability against wear and tear.',
        image: '/img/materials/kutonium.png',
        rank: 'rare',
        type: 'Noble metal ore',
        prices: [
            {
                price: 80,
                date: '2020-05-14T20:00:00.000Z'
            },
            {
                price: 77.54,
                date: '2020-05-15T20:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '14',
        name: 'Lukium',
        description: 'Used as radiation shielding material.',
        image: '/img/materials/lukium.png',
        rank: 'common',
        type: 'Industrial metal ore',
        prices: [
            {
                price: 24,
                date: '2020-05-14T20:00:00.000Z'
            },
            {
                price: 23.24,
                date: '2020-05-15T20:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '15',
        name: 'Merkerium',
        description: 'Industrial metal with unusually high electric conduction.',
        image: '/img/materials/merkerium.png',
        rank: 'common',
        type: 'Industrial metal ore',
        prices: [
            {
                price: 20,
                date: '2020-05-14T20:00:00.000Z'
            },
            {
                price: 18.63,
                date: '2020-05-15T20:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '16',
        name: 'Nhurgite',
        description: 'Widely used in explosives and in ammunition. Also used to make coolant.',
        image: '/img/materials/nhurgite.png',
        rank: 'common',
        type: 'Frozen material',
        prices: [
            {
                price: 32,
                date: '2020-05-14T20:00:00.000Z'
            },
            {
                price: 31.03,
                date: '2020-05-15T20:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '17',
        name: 'Oninum',
        description: 'Strong and heavy metal used in armor plating of spaceships.',
        image: '/img/materials/oninum.png',
        rank: 'medium',
        type: 'Industrial metal ore',
        prices: [
            {
                price: 64,
                date: '2020-05-14T20:00:00.000Z'
            },
            {
                price: 62.03,
                date: '2020-05-15T20:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '18',
        name: 'Surtrite',
        description: 'Highly flammable chemical, used in incendiary explosives.',
        image: '/img/materials/surtrite.png',
        rank: 'common',
        type: 'Frozen material',
        prices: [
            {
                price: 16,
                date: '2020-05-14T20:00:00.000Z'
            },
            {
                price: 15.49,
                date: '2020-05-15T20:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '19',
        name: 'Tengium',
        description: 'Lightweight corrosion resistant material that has wide uses in engines, electronics, and in ammunition casings.',
        image: '/img/materials/tengium.png',
        rank: 'low',
        type: 'Minor noble metal ore',
        prices: [
            {
                price: 12,
                date: '2020-05-14T20:00:00.000Z'
            },
            {
                price: 11.16,
                date: '2020-05-15T20:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '20',
        name: 'Ukonium',
        description: 'Used in high capacity batteries and in generators as heat transfer fluid in its molten state. Has very low melting point and has volatile reaction with oxygen.',
        image: '/img/materials/ukonium.png',
        rank: 'low',
        type: 'Minor noble metal ore',
        prices: [
            {
                price: 8,
                date: '2020-05-14T20:00:00.000Z'
            },
            {
                price: 7.74,
                date: '2020-05-15T20:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '21',
        name: 'Valkite',
        description: 'Used in building tool as cheap build material, and filling material for stations.',
        image: '/img/materials/valkite.png',
        rank: 'worthless',
        type: 'Rock',
        prices: [
            {
                price: 0.37,
                date: '2020-05-15T10:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '22',
        name: 'Velidenum',
        description: 'Transparent glass-like material.',
        image: '/img/materials/velidenum.png',
        rank: 'n/a',
        type: 'Alloy material',
        prices: [
            {
                price: 6,
                date: '2020-05-14T20:00:00.000Z'
            },
            {
                price: 5.6,
                date: '2020-05-17T10:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '23',
        name: 'Vokarium',
        description: 'Commonly used material in any kind of electronics to transfer electricity and data.',
        image: '/img/materials/vokarium.png',
        rank: 'low',
        type: 'Minor noble metal ore',
        prices: [
            {
                price: 8,
                date: '2020-05-15T20:00:00.000Z'
            },
            {
                price: 7.75,
                date: '2020-05-17T10:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '24',
        name: 'Water',
        description: 'Just... water :D',
        image: '/img/materials/water.png',
        rank: 'n/a',
        type: 'n/a',
        prices: [
            {
                price: 4,
                date: '2020-05-15T20:00:00.000Z'
            },
            {
                price: 3.18,
                date: '2020-05-17T10:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
    {
        id: '25',
        name: 'Xhalium',
        description: 'Rarest of noble metals. Used in most advanced electronics in small quantities. MFC\'s Xhalium CPU core makes it the top priority piece for salvage teams.',
        image: '/img/materials/xhalium.png',
        rank: 'rare',
        type: 'Noble metal ore',
        prices: [
            {
                price: 800,
                date: '2020-05-15T20:00:00.000Z'
            },
            {
                price: 797.5,
                date: '2020-05-17T10:00:00.000Z'
            },
        ],
        updatedAt: '2020-05-15T20:00:00.000Z'
    },
];

export default items;