const fall = [
    {
        id: 1,
        name: "Amaranth",
        type: "Grain",
        seedName: "Amaranth seeds",
        seedCost: 25,
        growthTime: 8,
        regrowBoolean: "true",
        regrowTime: 5,
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/f/f6/Amaranth.png/revision/latest?cb=20221016050004",
    },
    {
        id: 2,
        name: "Artichoke",
        type: "Vegetable",
        seedName: "Artichoke seeds",
        seedCost: 45,
        growthTime: 8,
        regrowBoolean: "true",
        regrowTime: 4,
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/d/dd/Artichoke.png/revision/latest?cb=20221016022004",
    },
    {
        id: 3,
        name: "Barley",
        type: "Grain",
        seedName: "Barley seeds",
        seedCost: 100,
        growthTime: 8,
        regrowBoolean: "false",
        regrowTime: "Does not regrow.",
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/d/df/Barley.png/revision/latest?cb=20221016022025",
    },
    {
        id: 4,
        name: "Basil",
        type: "Herb",
        seedName: "Basil seeds",
        seedCost: 20,
        growthTime: 5,
        regrowBoolean: "false",
        regrowTime: "Does not regrow.",
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/6/6e/Basil.png/revision/latest?cb=20221016050008",
    },
    {
        id: 5,
        name: "Beet",
        type: "Vegetable",
        seedName: "Beet seeds",
        seedCost: 20,
        growthTime: 6,
        regrowBoolean: "false",
        regrowTime: "Does not regrow.",
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/a/a4/Beet.png/revision/latest?cb=20221016022032",
    },
    {
        id: 6,
        name: "Blue dahlia",
        type: "Flower",
        seedName: "Blue dahlia seeds",
        seedCost: 50,
        growthTime: 4,
        regrowBoolean: "false",
        regrowTime: "Does not regrow.",
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/8/82/Blue_dahlia.png/revision/latest?cb=20221016050011",
    },
    {
        id: 7,
        name: "Bok choy",
        type: "Vegetable",
        seedName: "Bok choy seeds",
        seedCost: 60,
        growthTime: 8,
        regrowBoolean: "false",
        regrowTime: "Does not regrow.",
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/5/53/Bok_choy.png/revision/latest?cb=20221016050012",
    },
    {
        id: 8,
        name: "Cactus",
        type: "Flower",
        seedName: "Cactus flower seeds",
        seedCost: 300,
        growthTime: 13,
        regrowBoolean: "false",
        regrowTime: "Does not regrow.",
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/a/a6/Cactus.png/revision/latest?cb=20221016022101",
    },
    {
        id: 9,
        name: "Cotton",
        type: "Resource",
        seedName: "Cotton seeds",
        seedCost: 50,
        growthTime: 9,
        regrowBoolean: "false",
        regrowTime: "Does not regrow.",
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/c/c3/Cotton.png/revision/latest?cb=20221016022946",
    },
    {
        id: 10,
        name: "Cranberry",
        type: "Fruit",
        seedName: "Cranberry seeds",
        seedCost: 20,
        growthTime: 5,
        regrowBoolean: "true",
        regrowTime: 2,
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/d/dd/Cranberry.png/revision/latest?cb=20221016050014",
    },
    {
        id: 11,
        name: "Eggplant",
        type: "Vegetable",
        seedName: "Eggplant seeds",
        seedCost: 35,
        growthTime: 9,
        regrowBoolean: "true",
        regrowTime: 3,
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/8/8f/Eggplant.png/revision/latest?cb=20221016050015",
    },
    {
        id: 12,
        name: "Fairy rose",
        type: "Flower",
        seedName: "Fairy rose seeds",
        seedCost: 135,
        growthTime: 8,
        regrowBoolean: "false",
        regrowTime: "Does not regrow",
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/c/c3/Fairy_rose.png/revision/latest?cb=20221020233502",
    },
    {
        id: 13,
        name: "Garlic",
        type: "Vegetable",
        seedName: "Garlic seeds",
        seedCost: 30,
        growthTime: 9,
        regrowBoolean: "false",
        regrowTime: "Does not regrow",
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/c/cc/Garlic.png/revision/latest?cb=20221016023033",
    },
    {
        id: 14,
        name: "Grape",
        type: "Fruit",
        seedName: "Grape seeds",
        seedCost: 150,
        growthTime: 9,
        regrowBoolean: "true",
        regrowTime: 6,
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/c/c2/Grape.png/revision/latest?cb=20221016050017",
    },
    {
        id: 15,
        name: "Hot pepper",
        type: "Vegetable",
        seedName: "Hot pepper seeds",
        seedCost: 40,
        growthTime: 7,
        regrowBoolean: "true",
        regrowTime: 3,
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/8/86/Hot_pepper.png/revision/latest?cb=20221016023118",
    },
    {
        id: 16,
        name: "Lily",
        type: "Flower",
        seedName: "Lily seeds",
        seedCost: 60,
        growthTime: 9,
        regrowBoolean: "false",
        regrowTime: "Does not regrow.",
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/f/f0/Lily_%28flower%29.png/revision/latest?cb=20221020233504",
    },
    {
        id: 17,
        name: "Orchid",
        type: "Flower",
        seedName: "Orchid seeds",
        seedCost: 75,
        growthTime: 8,
        regrowBoolean: "false",
        regrowTime: "Does not regrow.",
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/3/3f/Orchid.png/revision/latest?cb=20221016023223",
    },
    {
        id: 18,
        name: "Pumpkin",
        type: "Fruit",
        seedName: "Pumpkin seeds",
        seedCost: 90,
        growthTime: 13,
        regrowBoolean: "true",
        regrowTime: 7,
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/6/64/Pumpkin.png/revision/latest?cb=20221016023247",
    },
    {
        id: 19,
        name: "Rice",
        type: "Grain",
        seedName: "Rice seeds",
        seedCost: 15,
        growthTime: 9,
        regrowBoolean: "false",
        regrowTime: "Does not regrow.",
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/d/da/Rice.png/revision/latest?cb=20221016023310",
    },
    {
        id: 20,
        name: "Sweet potato",
        type: "Vegetable",
        seedName: "Sweet potato seeds",
        seedCost: 60,
        growthTime: 9,
        regrowBoolean: "true",
        regrowTime: 4,
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/2/27/Sweet_potato.png/revision/latest?cb=20221016023409",
    },
    {
        id: 21,
        name: "Taro root",
        type: "Vegetable",
        seedName: "Taro root seeds",
        seedCost: 35,
        growthTime: 5,
        regrowBoolean: "true",
        regrowTime: 2,
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/6/66/Taro_root.png/revision/latest?cb=20221016023412",
    },
    {
        id: 22,
        name: "Watermelon",
        type: "Fruit",
        seedName: "Watermelon seeds",
        seedCost: 50,
        growthTime: 11,
        regrowBoolean: "false",
        regrowTime: "Does not regrow.",
        imgUrl: "https://static.wikia.nocookie.net/coralisland/images/0/06/Watermelon.png/revision/latest?cb=20221021060207",
    },
]

module.exports = fall