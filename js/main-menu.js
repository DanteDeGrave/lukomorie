const mainMenu = [
  {
    id:'cold-apetizers',
    image:'img/meat.jpg',
    groupName: 'Холодные закуски',
    dishes:[
      {
        name:'Мясные яства из деликатесов собственного приготовления',
        weight: 170,
        price: 390,
      },
      {
        name: 'Рыбная тарелка к застолью',
        weight: 200,
        price: 450,
      },
      {
        name: 'Ассорти сыров',
        weight: 200,
        price: 360,
      },
      {
        name: 'Блюдо из свежих овощей',
        weight: 210,
        price: 260,
      },
      {
        name: 'Соленья домашние',
        weight: 220,
        price: 260,
      },
      {
        name: 'Грибочки из бочки с луком и сметаной',
        weight: 180,
        price: 350,
      },
      {
        name: 'Филе сельди с молодым картофелем',
        weight: 200,
        price: 210,
      },
      {
        name: 'Холодец домашний из трех видов мяса',
        weight: 230,
        price: 230,
      },
      {
        name: 'Блинные рулетики с семгой и красной икрой',
        weight: 150,
        price: 350,
      },
      {
        name: 'Рулетики из языка с творожным сыром и хреном',
        weight: 200,
        price: 330,
      },
      {
        name: 'Семужка собственного посола со сливочным сыром',
        weight: 170,
        price: 380,
      },
      {
        name: 'Ростбиф из говяжьей вырезки с соусом из свежих трав',
        weight: 180,
        price: 510,
      },
      {
        name: 'Маслины, оливки',
        weight: 50,
        price: 120,
      },
      {
        name: 'Лимоны',
        weight: 100,
        price: 100,
      },
    ],
  },
  {
    id: 'salads',
    image:'img/salads.jpg',
    groupName: 'Салаты',
    dishes: [
      {
        name: 'Салат с ростбифом и свежими овощами',
        weight: 250,
        price: 450,
      },
      {
        name: 'Салат со слабосоленым лососем, картофелем и свежим огурцом',
        weight: 200,
        price: 430,
      },
      {
        name: 'Цезарь с цыпленком',
        weight: 220,
        price: 320,
      },
      {
        name: 'Цезарь с лососем и тигровыми креветками',
        weight: 220,
        price: 490,
      },
      {
        name: 'Салат Греческий',
        weight: 230,
        price: 290,
      },
      {
        name: 'Теплый салат с морепродуктами',
        weight: 220,
        price: 520,
      },
      {
        name: 'Салат с копченым цыпленком, авокадо и виноградом',
        weight: 200,
        price: 320,
      },
      {
        name: 'Сельдь под шубой',
        weight: 250,
        price: 260,
      },
      {
        name: 'Салат «Оливье» с языком',
        weight: 220,
        price: 290,
      },
      {
        name: 'Салат с языком по-русски',
        weight: 220,
        price: 300,
      },
      {
        name: 'Теплый салат с куриным филе и беконом',
        weight: 230,
        price: 350,
      },
      {
        name: 'Салат из тигровых креветок со свежим огурцом, томатами и авокадо',
        weight: 220,
        price: 490,
      },
      {
        name: 'Салат «Лукоморье»',
        weight: 230,
        price: 520,
      },
      {
        name: 'Салат из кальмаров по-домашнему',
        weight: 220,
        price: 290,
      },
    ],
  },
  {
    id: 'hot-apetizers',
    image:'img/hot.jpg',
    groupName: 'Горячие закуски',
    dishes: [
      {
        name: 'Жульен мясной',
        weight: 140,
        price: 190,
      },
      {
        name: 'Жульен с цыпленком',
        weight: 140,
        price: 190,
      },
      {
        name: 'Жульен из грибов',
        weight: 140,
        price: 190,
      },
      {
        name: 'Жареные куриные крылышки с острым соусом',
        weight: 200,
        price: 210,
      },
      {
        name: 'Тигровые креветки с соусом из свежих трав',
        weight: 180,
        price: 510,
      },
      {
        name: 'Гренки чесночные',
        weight: 100,
        price: 150,
      },
      {
        name: 'Острые свиные ребрышки',
        weight: 250,
        price: 350,
      },
      {
        name: 'Кольца кальмара',
        weight: '150/50',
        price: 340,
      },
      {
        name: 'Луковые кольца',
        weight: 100,
        price: 180,
      },
      {
        name: 'Большая тарелка к пиву',
        weight: 400,
        price: 520,
      },
    ],
  },
  {
    id: 'soups',
    image:'img/soup.jpg',
    groupName: 'Супы',
    dishes: [
      {
        name: 'Солянка мясная со сметаной',
        weight: '250/30',
        price: 300,
      },
      {
        name: 'Уха из трёх видов рыб',
        weight: 250,
        price: 330,
      },
      {
        name: 'Суп пюре из лесных грибов с гренками',
        weight: '250/30',
        price: 290,
      },
      {
        name: 'Суп крем из шпината с гренками',
        weight: '250/30',
        price: 220,
      },
      {
        name: 'Томатный суп с тигровыми креветками',
        weight: '250/30',
        price: 340,
      },
      {
        name: 'Суп из свинины с овощами',
        weight: '250/30',
        price: 270,
      },
      {
        name: 'Бульон с пельменями и сметаной',
        weight: '250/50',
        price: 240,
      },
      {
        subTitle: 'Хлеб:',
      },
      {
        name: 'Булочка белая домашняя',
        weight: 50,
        price: 30,
      },
      {
        name: 'Булочка черная «Баварская»',
        weight: 50,
        price: 30,
      },
    ],
  },
  {
    id: 'hot-meat',
    image:'img/hot-meat.jpg',
    groupName: 'Горячие блюда из мяса и птицы',
    dishes: [
      {
        name: 'Жареный телячий язык с картофельными драниками и соусом хрен',
        weight: 300,
        price: 420,
      },
      {
        name: 'Жаркое из двух видов мяса с картофелем и грибами',
        weight: 350,
        price: 490,
      },
      {
        name: 'Свиная корейка с разварным картофелем',
        weight: 280,
        price: 380,
      },
      {
        name: 'Свиная вырезка, фаршированная белыми грибами с рисом и сыром пармезан',
        weight: 300,
        price: 450,
      },
      {
        name: 'Медальоны из телятины с картофельным пюре и овощным рататуем',
        weight: 300,
        price: 670,
      },
      {
        name: 'Пожарские котлетки с картофелем, запеченным в беконе',
        weight: 300,
        price: 350,
      },
      {
        name: 'Стейк из свиной шеи с острым соусом',
        weight: 300,
        price: 390,
      },
      {
        name: 'Куриное филе в апельсиновой глазури с брокколи',
        weight: 200,
        price: 310,
      },
      {
        name: 'Медальоны из свиной вырезки с овощным миксом',
        weight: 250,
        price: 520,
      },
      {
        name: 'Цыпленок по-домашнему с разносолами',
        weight: '500/125/50',
        price: 450,
      },
      {
        name: 'Свиная рулька с домашними разносолами',
        weight: 1100,
        price: 1100,
      },
      {
        name: 'Пельмени со сметаной',
        weight: 250,
        price: 380,
      },
      {
        name: 'Шашлык из курицы',
        weight: '200/50',
        price: 350,
      },
      {
        name: 'Шашлык из свинины',
        weight: '200/50',
        price: 350,
      },
    ],
  },
  {
    id: 'hot-fish',
    image:'img/hot-fish.jpg',
    groupName: 'Горячие рыбные блюда',
    dishes: [
      {
        name: 'Филе семги с овощным миксом и голландским соусом',
        weight: 300,
        price: 540,
      },
      {
        name: 'Лосось в кунжуте с картофелем по-деревенски',
        weight: 250,
        price: 540,
      },
      {
        name: 'Филе лосося запечённое со сливочным сыром в слоеном тесте и с соусом «Тар-тар»',
        weight: 340,
        price: 550,
      },
      {
        name: 'Дорадо, запечённая с сыром и томатами',
        weight: 400,
        price: 740,
      },
      {
        name: 'Рагу из кальмаров с овощами в устричном соусе',
        weight: 330,
        price: 310,
      },
      {
        name: 'Форель жареная на гриле с овощами',
        weight: 300,
        price: 440,
      },
      {
        name: 'Филе лосося в беконе с овощным салатом',
        weight: 300,
        price: 530,
      },
      {
        name: 'Обжаренное филе судака с рисом и овощами',
        weight: 300,
        price: 340,
      },
      {
        name: 'Стейк из лосося со свежими овощами',
        weight: '160/130',
        price: 760,
      },
      {
        name: 'Сибас с соусом из свежих трав',
        weight: 350,
        price: 790,
      },
    ],
  },
  {
    id: 'overseas-viands',
    image:'img/pizza.jpg',
    groupName: 'Заморские яства',
    dishes: [
      {
        subTitle: 'Пасты',
      },
      {
        name: 'Паста «Карбонара»',
        weight: 300,
        price: 310,
      },
      {
        name: 'Паста с морепродуктами',
        weight: 300,
        price: 310,
      },
      {
        name: 'Паста с лососем',
        weight: 300,
        price: 370,
      },
      {
        name: 'Паста с белыми грибами',
        weight: 300,
        price: 300,
      },
      {
        name: 'Паста с тигровыми креветками',
        weight: 300,
        price: 620,
      },
      {
        name: 'Паста с телятиной в сливках с устричным соусом',
        weight: 300,
        price: 460,
      },
      {
        subTitle: 'Пицца',
      },
      {
        name: 'Маргарита',
        weight: 150,
        price: 290,
      },
      {
        name: 'Баварская',
        weight: 150,
        price: 290,
      },
      {
        name: 'Сырная',
        weight: 150,
        price: 290,
      },
      {
        name: 'С копченой грудкой и грибами',
        weight: 150,
        price: 290,
      },
      {
        subTitle: 'Кесадилья',
      },
      {
        name: 'С сыром',
        weight: 150,
        price: 190,
      },
      {
        name: 'С мясом',
        weight: 150,
        price: 190,
      },
      {
        name: 'С цыпленком',
        weight: 150,
        price: 190,
      },
      {
        name: 'С грибами',
        weight: 150,
        price: 190,
      },
    ],
  },
  {
    id: 'garnish',
    image:'img/garnish.jpg',
    groupName: 'Гарниры',
    dishes: [
      {
        name: 'Картофель разварной',
        weight: 150,
        price: 80,
      },
      {
        name: 'Картофель фри',
        weight: 150,
        price: 140,
      },
      {
        name: 'Картофель по-деревенски',
        weight: 150,
        price: 140,
      },
      {
        name: 'Драники из картофеля',
        weight: 150,
        price: 150,
      },
      {
        name: 'Картофель жареный с грибами',
        weight: 150,
        price: 190,
      },
      {
        name: 'Овощи гриль',
        weight: 150,
        price: 250,
      },
      {
        name: 'Фасоль стручковая с томатами',
        weight: 150,
        price: 130,
      },
      {
        name: 'Капуста цветная, брокколи',
        weight: 150,
        price: 130,
      },
      {
        name: 'Рис припущенный',
        weight: 150,
        price: 80,
      },
      {
        name: 'Греча с грибами',
        weight: 200,
        price: 190,
      },
    ],
  },
  {
    id: 'souses',
    image:'img/souse.jpg',
    groupName: 'Соусы',
    dishes: [
      {
        name: 'Голландский',
        weight: 50,
        price: 50,
      },
      {
        name: 'Соус из свежих трав',
        weight: 50,
        price: 40,
      },
      {
        name: 'Томатный острый',
        weight: 50,
        price: 40,
      },
      {
        name: 'Хрен сливочный',
        weight: 50,
        price: 50,
      },
      {
        name: 'Горчица',
        weight: 50,
        price: 30,
      },
      {
        name: 'Сметанный с чесноком и зеленью',
        weight: 50,
        price: 40,
      },
      {
        name: 'Медово-горчичный',
        weight: 50,
        price: 50,
      },
      {
        name: 'Гранатовый',
        weight: 50,
        price: 50,
      },
      {
        name: 'Майонез',
        weight: 50,
        price: 30,
      },
      {
        name: 'Кетчуп',
        weight: 50,
        price: 40,
      },
      {
        name: 'Кисло-сладкий',
        weight: 50,
        price: 40,
      },
    ],
  },
  {
    id:'desserts',
    image:'img/desserts.jpg',
    groupName: 'Десерты',
    dishes: [
      {
        name: 'Блинчики',
        weight: 150,
        price: 100,
        description:'c медом, c вареньем, cо cметаной, cо сгущеным молоком',
      },
      {
        name: 'Жареные бананы с мороженым и шоколадом',
        weight: 200,
        price: 170,
      },
      {
        name: 'Торт Фантазия',
        weight: 150,
        price: 190,
      },
      {
        name: 'Фруктовая тарелка',
        weight: 500,
        price: 350,
      },
      {
        name: 'Малиновый тар-тар',
        weight: 200,
        price: 290,
      },
      {
        name: 'Штрудель яблочный с ванильным соусом и мороженым',
        weight: 200,
        price: 190,
      },
      {
        name: 'Мороженое в ассортименте',
        weight: 50,
        price: 55,
      },
    ],
  },
  {
    id: 'drinks',
    image:'img/drinks.jpg',
    groupName: 'Напитки',
    dishes: [
      {
        subTitle: 'Безалкогольные напитки',
      },
      {
        name: 'Бон аква',
        weight: 500,
        price: 69,
        description:'газированная, негазированная',
      },
      {
        name: 'Кока кола, Спрайт, Фанта ',
        weight: 500,
        price: 79,
      },
      {
        name: 'Морс',
        weight: 250,
        price: 49,
      },
      {
        name: 'Морс',
        weight: 1000,
        price: 189,
      },
      {
        name: 'Сок пакетированный',
        weight: 250,
        price: 49,
        description:'апельсин, яблоко, персик, вишня, ананас, томат, красный виноград',
      },
      {
        name: 'Сок свежевыжатый',
        weight: 250,
        price: 149,
        description:'апельсиновый, яблочный, морковный со сливками',
      },
      {
        subTitle: 'Кофе',
      },
      {
        name: 'Эспрессо',
        weight: 60,
        price: 70,
      },
      {
        name: 'Американо',
        weight: 220,
        price: 70,
      },
      {
        name: 'Капучино',
        weight: 220,
        price: 90,
      },
      {
        name: 'Латте',
        weight: 220,
        price: 120,
      },
      {
        name: 'Мокко',
        weight: 220,
        price: 140,
      },
      {
        name: 'Гляссе',
        weight: 220,
        price: 140,
      },
      {
        subTitle: 'Безалкогольные коктейли',
      },
      {
        name: 'Молочный коктейль',
        weight: 280,
        price: 170,
        description:'ванильный, шоколадный, клубничный',
      },
      {
        name: 'Бананово-клубничный смузи',
        weight: 250,
        price: 140,
      },
      {
        name: 'Клубничный лимонад',
        weight: 260,
        price: 140,
      },
      {
        name: 'Бодрящее яблоко',
        weight: 260,
        price: 180,
      },
      {
        subTitle: 'Чай',
      },
      {
        name: 'Ассам',
        weight: 400,
        price: 120,
      },
      {
        name: 'Черный с чабрецом',
        weight: 400,
        price: 120,
      },
      {
        name: 'Эрл грей',
        weight: 400,
        price: 120,
      },
      {
        name: 'Сенча',
        weight: 400,
        price: 120,
      },
      {
        name: 'Жасминовый',
        weight: 400,
        price: 120,
      },
      {
        name: 'Ройбош крем-карамель',
        weight: 400,
        price: 120,
      },
      {
        name: 'Травяной чай Имбирь-лимон',
        weight: 400,
        price: 120,
      },
      {
        subTitle: 'Горячие напитки',
      },
      {
        name: 'Фирменный чай «Сказка»',
        weight: 400,
        price: 250,
      },
      {
        name: 'Какао',
        weight: 200,
        price: 140,
        description: 'классический',
      },
      {
        name: 'Глинтвейн безалкогольный',
        weight: 200,
        price: 210,
      },
    ],
  }
];

export {mainMenu};