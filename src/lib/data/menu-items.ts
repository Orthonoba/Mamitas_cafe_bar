import type { MenuItem, MenuCategoryMeta } from "@/types";

export const MENU_CATEGORIES: MenuCategoryMeta[] = [
  {
    id: "desayunos",
    label: "Desayunos",
    labelIt: "Colazioni",
    icon: "Sunrise",
    description: "Empieza el día con el alma de Venezuela",
    emoji: "☀️",
  },
  {
    id: "brunch",
    label: "Brunch Tropical",
    labelIt: "Brunch Tropicale",
    icon: "UtensilsCrossed",
    description: "Sábado & Domingo 10:00–14:00",
    emoji: "🌅",
  },
  {
    id: "cafeteria",
    label: "Cafetería",
    labelIt: "Bar",
    icon: "Coffee",
    description: "El mejor café venezolano al norte de los Alpes",
    emoji: "☕",
  },
  {
    id: "arepas",
    label: "Arepas",
    labelIt: "Arepas",
    icon: "CircleDot",
    description: "La arepa más auténtica del Ticino",
    emoji: "🫓",
  },
  {
    id: "sabores-latinos",
    label: "Sabores Latinos",
    labelIt: "Sapori Latini",
    icon: "Flame",
    description: "Platos que cuentan historias",
    emoji: "🌎",
  },
  {
    id: "panini",
    label: "Panini & Sándwich",
    labelIt: "Panini",
    icon: "Sandwich",
    description: "Clásicos con toque latino",
    emoji: "🥪",
  },
  {
    id: "ensaladas",
    label: "Ensaladas",
    labelIt: "Insalate",
    icon: "Salad",
    description: "Frescura venezolana",
    emoji: "🥗",
  },
  {
    id: "cocteleria",
    label: "Coctelería Tropical",
    labelIt: "Cocktail Tropicali",
    icon: "GlassWater",
    description: "Saborea el Caribe en cada sorbo",
    emoji: "🍹",
  },
  {
    id: "bebidas",
    label: "Bebidas",
    labelIt: "Bevande",
    icon: "Droplets",
    description: "Refrescos tropicales naturales",
    emoji: "🥤",
  },
  {
    id: "dulces",
    label: "Dulces & Postres",
    labelIt: "Dolci",
    icon: "Cake",
    description: "El final perfecto... o el principio",
    emoji: "🍭",
  },
  {
    id: "infantil",
    label: "Menú Infantil",
    labelIt: "Menu Bambini",
    icon: "Baby",
    description: "Para los exploradores de la mesa",
    emoji: "👶",
  },
  {
    id: "karaoke",
    label: "Karaoke Night",
    labelIt: "Notti Karaoke",
    icon: "Mic",
    description: "Viernes y Sábado — La noche más latina de Lugano",
    emoji: "🎤",
  },
  {
    id: "combos",
    label: "Combos & Paquetes",
    labelIt: "Combo & Pacchetti",
    icon: "Package",
    description: "Más por menos — diseñados para compartir",
    emoji: "🎁",
  },
  {
    id: "delivery",
    label: "Delivery Box",
    labelIt: "Consegna a Domicilio",
    icon: "Truck",
    description: "Mamitas a tu puerta — Smood, Uber Eats, Just Eat",
    emoji: "🚴",
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // ───────────────────────────────────────────────
  // ☀️ DESAYUNOS
  // ───────────────────────────────────────────────
  {
    id: "des-001",
    name: "Pabellón Mañanero",
    description:
      "Arepa con carne mechada, caraotas negras, tajadas de plátano y queso blanco. El desayuno más completo de Venezuela.",
    price: 18,
    category: "desayunos",
    tags: ["popular", "signature"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    allergens: ["gluten", "lácteos"],
  },
  {
    id: "des-002",
    name: "Desayuno de la Abuela",
    description:
      "Huevos al gusto, tajadas de plátano, queso blanco, arepita de maíz y jugo de temporada.",
    price: 22,
    category: "desayunos",
    tags: ["popular"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80",
    allergens: ["huevos", "lácteos"],
  },
  {
    id: "des-003",
    name: "Tostadas Perfectas",
    description:
      "Pan artesanal tostado, aguacate machacado, tomate cherry, huevo poché y aceite de oliva con flor de sal.",
    price: 16,
    category: "desayunos",
    tags: ["vegetarian", "new"],
    isVegetarian: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=600&q=80",
    allergens: ["gluten", "huevos"],
  },
  {
    id: "des-004",
    name: "Panquecas de Barquisimeto",
    description:
      "Torre de 3 panquecas esponjosas con papelón líquido, mantequilla clarificada y frutas tropicales de temporada.",
    price: 15,
    category: "desayunos",
    tags: ["vegetarian", "popular"],
    isVegetarian: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    allergens: ["gluten", "huevos", "lácteos"],
  },
  {
    id: "des-005",
    name: "Granola Mamitas",
    description:
      "Granola artesanal con yogur griego, mango fresco, parchita y coco rallado tostado.",
    price: 13,
    category: "desayunos",
    tags: ["vegetarian"],
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
    allergens: ["lácteos", "gluten"],
  },
  {
    id: "des-006",
    name: "Huevos Benedictinos Venezolanos",
    description:
      "Muffin inglés tostado, jamón de pierna, huevo pochado y salsa holandesa con toque de adobo criollo.",
    price: 21,
    category: "desayunos",
    tags: ["signature", "new"],
    isNew: true,
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&q=80",
    allergens: ["gluten", "huevos", "lácteos"],
  },

  // ───────────────────────────────────────────────
  // 🌅 BRUNCH TROPICAL (Sab-Dom 10:00-14:00)
  // ───────────────────────────────────────────────
  {
    id: "bru-001",
    name: "The Full Mamitas Brunch",
    description:
      "La experiencia completa: arepa a elección, huevos benedictinos venezolanos, aguacate, tajadas, jugo natural y café de la casa. Todo en un plato monumental.",
    price: 32,
    category: "brunch",
    tags: ["popular", "signature", "hero"],
    isPopular: true,
    isHero: true,
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80",
    allergens: ["gluten", "huevos", "lácteos"],
  },
  {
    id: "bru-002",
    name: "Açaí Bowl Tropical",
    description:
      "Açaí orgánico, plátano, granola casera, mango, pitahaya, frutos rojos y drizzle de miel de abeja. Tan bonito que da pena comerlo.",
    price: 16,
    category: "brunch",
    tags: ["viral", "vegan", "new"],
    isViral: true,
    isVegetarian: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&q=80",
  },
  {
    id: "bru-003",
    name: "French Toast de Coco",
    description:
      "Pan brioche empapado en leche de coco y huevo batido, dorado a la plancha, con jarabe de papelón, plátano flambeado y crema de coco.",
    price: 18,
    category: "brunch",
    tags: ["viral", "vegetarian", "popular"],
    isViral: true,
    isVegetarian: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80",
    allergens: ["gluten", "huevos", "lácteos"],
  },
  {
    id: "bru-004",
    name: "Shakshuka Latina",
    description:
      "Huevos pochados en salsa criolla de tomate, pimiento y ají dulce venezolano. Servido con arepa tostada para mojar.",
    price: 20,
    category: "brunch",
    tags: ["vegetarian", "new"],
    isVegetarian: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=80",
    allergens: ["gluten", "huevos"],
  },
  {
    id: "bru-005",
    name: "Waffle Venezolano",
    description:
      "Waffle crujiente dorado con pollo frito jugoso, miel de papelón artesanal y mantequilla de maracuyá. Sweet & savory perfecto.",
    price: 22,
    category: "brunch",
    tags: ["viral", "popular", "hero"],
    isViral: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    allergens: ["gluten", "huevos", "lácteos"],
  },
  {
    id: "bru-006",
    name: "Mimosa de Mango & Maracuyá",
    description:
      "Cava brut con jugo fresco de mango y parchita. El brunch no existía hasta este sorbo. Con o sin alcohol.",
    price: 12,
    category: "brunch",
    tags: ["popular", "viral"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&q=80",
    allergens: [],
  },
  {
    id: "bru-007",
    name: "Smoothie Bowl Mango Coco",
    description:
      "Base de mango congelado con leche de coco, toppings de granola, flores comestibles, kiwi y coco. Un cuadro comestible.",
    price: 14,
    category: "brunch",
    tags: ["vegan", "viral"],
    isVegetarian: true,
    isViral: true,
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&q=80",
  },

  // ───────────────────────────────────────────────
  // ☕ CAFETERÍA PREMIUM
  // ───────────────────────────────────────────────
  {
    id: "caf-001",
    name: "Guayoyo de Especialidad",
    description:
      "Café negro filtrado estilo Barquisimeto, origen Venezuela. Notas de cacao, frutas rojas y caramelo. La forma más pura de tomar café.",
    price: 5,
    category: "cafeteria",
    tags: ["signature", "vegan"],
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
  },
  {
    id: "caf-002",
    name: "Tetero Mamitas",
    description:
      "Café con leche, toque de papelón y canela. La receta secreta de la casa. Un abrazo en taza.",
    price: 6.5,
    category: "cafeteria",
    tags: ["popular", "signature"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    allergens: ["lácteos"],
  },
  {
    id: "caf-003",
    name: "Cold Brew de Parchita",
    description:
      "Cold brew extraído 18 horas, jarabe de maracuyá fresco y leche de coco. Frío, tropical y absolutamente adictivo.",
    price: 8,
    category: "cafeteria",
    tags: ["viral", "new"],
    isViral: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    allergens: [],
  },
  {
    id: "caf-004",
    name: "Matcha Latte Venezolano",
    description:
      "Matcha premium japonés con leche de coco y espuma de papelón. Cuando Oriente se encuentra con Venezuela.",
    price: 7.5,
    category: "cafeteria",
    tags: ["viral", "vegan", "new"],
    isViral: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80",
  },
  {
    id: "caf-005",
    name: "Café Bombón Latino",
    description:
      "Espresso intenso sobre leche condensada venezolana. Dos capas, un placer. El más fotogénico de la barra.",
    price: 6,
    category: "cafeteria",
    tags: ["popular"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80",
    allergens: ["lácteos"],
  },
  {
    id: "caf-006",
    name: "Chocolate Colonial",
    description:
      "Cacao venezolano 70%, leche entera, canela y clavo. Receta colonial venezolana del siglo XVIII. Incomparable.",
    price: 7,
    category: "cafeteria",
    tags: ["signature", "vegetarian"],
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=600&q=80",
    allergens: ["lácteos"],
  },

  // ───────────────────────────────────────────────
  // 🫓 AREPAS — EL CORAZÓN
  // ───────────────────────────────────────────────
  {
    id: "are-001",
    name: "La Reina",
    description:
      "Pollo cremoso desmenuzado con aguacate maduro, mayonesa artesanal y ají dulce venezolano. La más amada de Venezuela desde 1955.",
    price: 16,
    category: "arepas",
    tags: ["popular", "signature"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    allergens: ["huevos"],
  },
  {
    id: "are-002",
    name: "La Peluda",
    description:
      "Carne mechada con queso amarillo fundido que se extiende hacia fuera. Ese pull de queso que no puedes ignorar. 🧀",
    price: 17,
    category: "arepas",
    tags: ["popular", "viral"],
    isPopular: true,
    isViral: true,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",
    allergens: ["lácteos"],
  },
  {
    id: "are-003",
    name: "El Dominó",
    description:
      "Caraotas negras cremosas y queso blanco rallado. Sencillo. Perfecto. Eterno. El favorito de los venezolanos.",
    price: 14,
    category: "arepas",
    tags: ["vegetarian", "popular"],
    isVegetarian: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
    allergens: ["lácteos"],
  },
  {
    id: "are-004",
    name: "La Sifrina",
    description:
      "Jamón de pierna, tocineta crujiente, queso amarillo fundido y aguacate cremoso. Para los que quieren absolutamente todo.",
    price: 19,
    category: "arepas",
    tags: ["popular", "signature"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80",
    allergens: ["lácteos"],
  },
  {
    id: "are-005",
    name: "La Mamita",
    description:
      "Nuestra signature: pollo, aguacate, queso de mano venezolano, tomate confitado y nuestra salsa rosada secreta. Única en el mundo.",
    price: 20,
    category: "arepas",
    tags: ["popular", "signature", "hero"],
    isPopular: true,
    isHero: true,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    allergens: ["huevos", "lácteos"],
  },
  {
    id: "are-006",
    name: "La Barquisimet",
    description:
      "Pernil venezolano horneado 8 horas, caraotas negras, tajadas de plátano y queso blanco. La arepa de los domingos de Barquisimeto. Nuestra creación más premium.",
    price: 22,
    category: "arepas",
    tags: ["signature", "hero", "new"],
    isHero: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    allergens: ["lácteos"],
  },
  {
    id: "are-007",
    name: "La Vegana",
    description:
      "Aguacate cremoso, caraotas negras, pimientos asados, cebolla caramelizada y aliño de limón con hierbas frescas.",
    price: 15,
    category: "arepas",
    tags: ["vegan", "vegetarian"],
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
  },
  {
    id: "are-008",
    name: "La Catira",
    description:
      "Pollo mechado con queso blanco rallado. La combinación clásica que nunca falla. Pura y eterna.",
    price: 15,
    category: "arepas",
    tags: [],
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
    allergens: ["lácteos"],
  },

  // ───────────────────────────────────────────────
  // 🌎 SABORES LATINOS
  // ───────────────────────────────────────────────
  {
    id: "lat-001",
    name: "Pabellón Criollo",
    description:
      "El plato nacional de Venezuela: carne mechada, caraotas negras, arroz blanco y tajadas de plátano. Una experiencia que te lleva a Caracas.",
    price: 26,
    category: "sabores-latinos",
    tags: ["popular", "signature"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80",
  },
  {
    id: "lat-002",
    name: "Cachapas de la Abuela",
    description:
      "Tortilla de maíz tierno y dulce con queso de mano venezolano fundido. Sabor del campo. Auténtico y memorable.",
    price: 19,
    category: "sabores-latinos",
    tags: ["vegetarian", "signature", "viral"],
    isVegetarian: true,
    isViral: true,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    allergens: ["lácteos"],
  },
  {
    id: "lat-003",
    name: "Empanadas Criollísimas",
    description:
      "4 empanadas de maíz doradas al horno, rellenas a elección (carne, pollo, queso o caraotas). Con guasacaca verde.",
    price: 18,
    category: "sabores-latinos",
    tags: ["popular", "delivery-friendly"],
    isPopular: true,
    isDeliveryFriendly: true,
    image: "https://images.unsplash.com/photo-1599599810694-b5b37304c041?w=600&q=80",
    allergens: ["gluten"],
  },
  {
    id: "lat-004",
    name: "Tequeños Gourmet",
    description:
      "6 palitos de queso blanco venezolano en masa crujiente dorada. Con trío de dips: guasacaca, salsa rosada y picante de ají.",
    price: 16,
    category: "sabores-latinos",
    tags: ["popular", "viral", "delivery-friendly"],
    isPopular: true,
    isViral: true,
    isDeliveryFriendly: true,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    allergens: ["gluten", "lácteos"],
  },
  {
    id: "lat-005",
    name: "Pernil de Domingo",
    description:
      "Pernil venezolano horneado 6 horas con yuca frita, ensalada de aguacate y guasacaca. Solo los domingos.",
    price: 28,
    category: "sabores-latinos",
    tags: ["signature", "seasonal"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
  },

  // ───────────────────────────────────────────────
  // 🥪 PANINI & SÁNDWICH
  // ───────────────────────────────────────────────
  {
    id: "pan-001",
    name: "Panini Pollo Tropical",
    description:
      "Pollo a la plancha con aguacate, tomate, lechuga fresca y salsa de mango artesanal. Fresco y lleno de sabor.",
    price: 16,
    category: "panini",
    tags: ["popular"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
    allergens: ["gluten"],
  },
  {
    id: "pan-002",
    name: "Club Venezolano",
    description:
      "Jamón de pierna, pernil, queso amarillo, tomate, lechuga y mayonesa. Triple capa. El clásico reinventado.",
    price: 17,
    category: "panini",
    tags: ["popular"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=600&q=80",
    allergens: ["gluten", "huevos", "lácteos"],
  },
  {
    id: "pan-003",
    name: "Panini Caprese Latino",
    description:
      "Mozzarella fresca, tomate heirloom, aguacate, albahaca y vinagre balsámico sobre ciabatta tostada.",
    price: 14.5,
    category: "panini",
    tags: ["vegetarian"],
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=600&q=80",
    allergens: ["gluten", "lácteos"],
  },

  // ───────────────────────────────────────────────
  // 🥗 ENSALADAS
  // ───────────────────────────────────────────────
  {
    id: "ens-001",
    name: "Ensalada Tropical Mamitas",
    description:
      "Lechuga, mango maduro, aguacate, tomate cherry, coco rallado tostado y aderezo de limón con papelón. Nuestra favorita.",
    price: 15,
    category: "ensaladas",
    tags: ["vegan", "popular", "signature"],
    isVegetarian: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
  },
  {
    id: "ens-002",
    name: "Ensalada de Pollo Criollo",
    description:
      "Pechuga a la plancha sobre mix de lechugas, pepino, tomate cherry, aguacate y vinagreta criolla de ají dulce.",
    price: 18,
    category: "ensaladas",
    tags: ["popular"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
  },

  // ───────────────────────────────────────────────
  // 🍹 COCTELERÍA TROPICAL
  // ───────────────────────────────────────────────

  // Mocktails
  {
    id: "coc-001",
    name: "Papelón Sour",
    description:
      "Papelón venezolano, limón fresco, jengibre, soda artesanal y menta. Sin alcohol. Refrescante y sofisticado.",
    price: 9,
    category: "cocteleria",
    tags: ["vegan", "popular"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
  },
  {
    id: "coc-002",
    name: "Tropical Sunrise",
    description:
      "Mango, naranja, guanábana y granadina en capas perfectas. El más fotografiado del menú. Sin alcohol.",
    price: 12,
    category: "cocteleria",
    tags: ["viral", "vegan"],
    isViral: true,
    image: "https://images.unsplash.com/photo-1625527575307-616f5f793238?w=600&q=80",
  },
  {
    id: "coc-003",
    name: "Virgin Piña Colada",
    description:
      "Piña fresca, crema de coco, leche condensada y hielo. Puro Caribe sin alcohol. Con sombrillita incluida.",
    price: 11,
    category: "cocteleria",
    tags: ["popular", "vegan"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80",
  },
  // Cocktails con alcohol
  {
    id: "coc-004",
    name: "Mojito de Parchita",
    description:
      "Ron blanco, maracuyá fresco, menta, limón y soda. El cóctel más tropical de Lugano. Perfectamente equilibrado.",
    price: 14,
    category: "cocteleria",
    tags: ["popular", "alcohol"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&q=80",
    allergens: [],
  },
  {
    id: "coc-005",
    name: "Venezuela Sour",
    description:
      "Ron venezolano, papelón, limón, clara de huevo y amargo de Angostura. Suave, espumoso y con mucho carácter.",
    price: 16,
    category: "cocteleria",
    tags: ["signature", "alcohol"],
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&q=80",
    allergens: ["huevos"],
  },
  {
    id: "coc-006",
    name: "Sangría Mamitas",
    description:
      "Vino tinto, mango, parchita, brandy y naranja. Servida por jarra. Para compartir y celebrar.",
    price: 28,
    category: "cocteleria",
    tags: ["popular", "alcohol"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
    allergens: [],
  },
  {
    id: "coc-007",
    name: "Frozen Guanábana",
    description:
      "Soursop (guanábana) congelado, ron de coco y leche de coco. Verde vibrante. El más viral de la noche.",
    price: 16,
    category: "cocteleria",
    tags: ["viral", "alcohol", "signature"],
    isViral: true,
    image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80",
  },
  {
    id: "coc-008",
    name: "Parchita Spritz",
    description:
      "Maracuyá fresco, Aperol, agua tónica premium y hielo picado. El spritz más tropical de Suiza.",
    price: 14,
    category: "cocteleria",
    tags: ["popular", "alcohol"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1625527575307-616f5f793238?w=600&q=80",
  },

  // ───────────────────────────────────────────────
  // 🥤 BEBIDAS
  // ───────────────────────────────────────────────
  {
    id: "beb-001",
    name: "Papelón con Limón",
    description:
      "La bebida tradicional venezolana: panela disuelta, limón exprimido y agua fresca. Refrescante y natural.",
    price: 5,
    category: "bebidas",
    tags: ["vegan", "popular"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
  },
  {
    id: "beb-002",
    name: "Jugo de Parchita",
    description: "Maracuyá venezolano fresco. Natural, tropical y lleno de vitaminas.",
    price: 6,
    category: "bebidas",
    tags: ["vegan"],
    image: "https://images.unsplash.com/photo-1625527575307-616f5f793238?w=600&q=80",
  },
  {
    id: "beb-003",
    name: "Malta Polar",
    description: "La malta venezolana original. Sin alcohol. El sabor que recuerda el hogar.",
    price: 5.5,
    category: "bebidas",
    tags: ["vegan"],
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
  },
  {
    id: "beb-004",
    name: "Batido de Parchita y Coco",
    description:
      "Maracuyá fresco, leche de coco y hielo. Cremoso, tropical y absolutamente adictivo.",
    price: 8,
    category: "bebidas",
    tags: ["vegan", "popular", "signature"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80",
  },

  // ───────────────────────────────────────────────
  // 🍭 DULCES & POSTRES
  // ───────────────────────────────────────────────
  {
    id: "dul-001",
    name: "Quesillo Mamitas",
    description:
      "Flan de queso venezolano con caramelo oscuro artesanal. Cremoso, suave y adictivo. La reina de los postres.",
    price: 9,
    category: "dulces",
    tags: ["popular", "signature"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    allergens: ["huevos", "lácteos"],
  },
  {
    id: "dul-002",
    name: "Tres Leches de la Abuela",
    description:
      "Bizcocho esponjoso empapado en tres leches, nata fresca montada y canela. El postre más querido.",
    price: 10,
    category: "dulces",
    tags: ["popular"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    allergens: ["gluten", "huevos", "lácteos"],
  },
  {
    id: "dul-003",
    name: "Bienmesabe Colonial",
    description:
      "Crema venezolana de coco con yemas y azúcar. Receta del siglo XVIII. Con bizcochos de vainilla.",
    price: 8,
    category: "dulces",
    tags: ["signature", "vegetarian"],
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80",
    allergens: ["huevos"],
  },
  {
    id: "dul-004",
    name: "Churros con Dúo de Salsas",
    description:
      "Churros crujientes con dulce de leche venezolano artesanal y chocolate caliente de cacao 70%.",
    price: 11,
    category: "dulces",
    tags: ["popular", "vegetarian"],
    isVegetarian: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80",
    allergens: ["gluten", "huevos", "lácteos"],
  },
  {
    id: "dul-005",
    name: "Torta de Chocolate Venezolano",
    description:
      "Bizcocho de cacao venezolano 70%, ganache oscuro y flor de sal. Para los que no se conforman.",
    price: 9.5,
    category: "dulces",
    tags: ["vegetarian", "new"],
    isVegetarian: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
    allergens: ["gluten", "huevos", "lácteos"],
  },

  // ───────────────────────────────────────────────
  // 👶 MENÚ INFANTIL
  // ───────────────────────────────────────────────
  {
    id: "inf-001",
    name: "Mini Arepa Dominó",
    description:
      "Mini arepita tierna con caraotas negras cremosas y queso blanco. El clásico venezolano en tamaño explorador.",
    price: 9,
    category: "infantil",
    tags: ["popular", "vegetarian"],
    isVegetarian: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",
    allergens: ["lácteos"],
  },
  {
    id: "inf-002",
    name: "Mini Pancakes Tropicales",
    description:
      "3 pancakes pequeños y esponjosos con frutas tropicales coloridas y miel. Tan bonitos como deliciosos.",
    price: 10,
    category: "infantil",
    tags: ["vegetarian"],
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    allergens: ["gluten", "huevos", "lácteos"],
  },
  {
    id: "inf-003",
    name: "Nuggets Criollos",
    description: "6 nuggets de pollo crocantes con papas fritas doradas y ketchup casero de tomate.",
    price: 12,
    category: "infantil",
    tags: ["popular"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80",
    allergens: ["gluten"],
  },
  {
    id: "inf-004",
    name: "Pasta de la Abuela",
    description:
      "Pasta con mantequilla y queso parmesano. Simple, perfecta y adorada por todos los niños del mundo.",
    price: 11,
    category: "infantil",
    tags: ["vegetarian"],
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1551183053-bf91798d792b?w=600&q=80",
    allergens: ["gluten", "lácteos"],
  },
  {
    id: "inf-005",
    name: "Mini Quesillo",
    description: "Porción individual de flan venezolano. El postre favorito de los pequeños.",
    price: 5,
    category: "infantil",
    tags: ["popular"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    allergens: ["huevos", "lácteos"],
  },
  {
    id: "inf-006",
    name: "Batido de Fresa Mamitas",
    description: "Fresas frescas, leche entera y un toque de vainilla. Hecho con amor.",
    price: 6,
    category: "infantil",
    tags: ["vegetarian"],
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80",
    allergens: ["lácteos"],
  },

  // ───────────────────────────────────────────────
  // 🎤 KARAOKE NIGHT (Vie-Sab 19:00-00:00)
  // ───────────────────────────────────────────────
  {
    id: "kar-001",
    name: "Tabla Karaoke para 4",
    description:
      "La combinación perfecta para cantar y picar: tequeños, empanadas mini, guasacaca verde y salsa rosada. Para 4 personas.",
    price: 38,
    category: "karaoke",
    tags: ["popular", "signature"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    allergens: ["gluten", "lácteos"],
  },
  {
    id: "kar-002",
    name: "Jarra Sangría Latina",
    description:
      "1 litro de sangría de frutas tropicales. Para 3-4 personas. Porque la mejor voz la da la sangría.",
    price: 35,
    category: "karaoke",
    tags: ["popular", "alcohol"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
  },
  {
    id: "kar-003",
    name: "Shots Venezolanos x3",
    description:
      "Tres shots de papelón, canela, limón y ron blanco. El ritual de inicio de cualquier noche latina.",
    price: 18,
    category: "karaoke",
    tags: ["viral", "alcohol"],
    isViral: true,
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&q=80",
  },
  {
    id: "kar-004",
    name: "Nachos Criollos",
    description:
      "Nachos crujientes con guacamole venezolano, caraotas negras fritas, queso fundido y jalapeños.",
    price: 16,
    category: "karaoke",
    tags: ["vegetarian"],
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    allergens: ["gluten", "lácteos"],
  },
  {
    id: "kar-005",
    name: "Bucket de Cervezas x4",
    description:
      "4 cervezas artesanales en hielo con rodajas de limón y sal de mar. El set perfecto para la mesa.",
    price: 22,
    category: "karaoke",
    tags: ["popular", "alcohol"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
  },
  {
    id: "kar-006",
    name: "Ración Tequeños Noche x10",
    description:
      "10 tequeños de queso blanco venezolano con 3 salsas. El hit absoluto de las noches de karaoke.",
    price: 18,
    category: "karaoke",
    tags: ["popular", "vegetarian"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    allergens: ["gluten", "lácteos"],
  },

  // ───────────────────────────────────────────────
  // 🎁 COMBOS & PAQUETES
  // ───────────────────────────────────────────────
  {
    id: "com-001",
    name: "Combo Pareja",
    description:
      "2 arepas a elección + 2 cafés o jugos naturales + 1 postre para compartir. Perfecto para una tarde juntos.",
    price: 42,
    category: "combos",
    tags: ["popular"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
  },
  {
    id: "com-002",
    name: "Combo Familia (4 personas)",
    description:
      "4 arepas o platos a elección + 4 jugos naturales + 2 postres. El almuerzo familiar perfecto.",
    price: 68,
    category: "combos",
    tags: ["popular"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
  },
  {
    id: "com-003",
    name: "Combo Brunch Duo",
    description:
      "2 Full Mamitas Brunch + 2 Mimosas de Mango. El domingo perfecto. Con o sin reserva.",
    price: 58,
    category: "combos",
    tags: ["popular", "new"],
    isPopular: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80",
  },
  {
    id: "com-004",
    name: "Combo Karaoke Night",
    description:
      "Tabla Karaoke para 4 + Jarra Sangría Latina. Todo lo que necesitas para una noche perfecta.",
    price: 65,
    category: "combos",
    tags: ["popular"],
    isPopular: true,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
  },

  // ───────────────────────────────────────────────
  // 🚴 DELIVERY BOX
  // ───────────────────────────────────────────────
  {
    id: "del-001",
    name: "Arepa Box (3 arepas)",
    description:
      "3 arepas a elección en caja premium con salsas guasacaca y rosada. Perfecto para compartir en casa.",
    price: 42,
    category: "delivery",
    tags: ["popular", "delivery-friendly"],
    isPopular: true,
    isDeliveryFriendly: true,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
  },
  {
    id: "del-002",
    name: "Empanadas Family Pack (8 uds)",
    description:
      "8 empanadas criollísimas a elección con 3 salsas. El pack familiar más pedido de Lugano.",
    price: 38,
    category: "delivery",
    tags: ["popular", "delivery-friendly"],
    isPopular: true,
    isDeliveryFriendly: true,
    image: "https://images.unsplash.com/photo-1599599810694-b5b37304c041?w=600&q=80",
    allergens: ["gluten"],
  },
  {
    id: "del-003",
    name: "Tequeños Box (15 uds)",
    description:
      "15 tequeños de queso venezolano con 3 dips premium. El bestseller absoluto del delivery.",
    price: 28,
    category: "delivery",
    tags: ["popular", "viral", "delivery-friendly"],
    isPopular: true,
    isViral: true,
    isDeliveryFriendly: true,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    allergens: ["gluten", "lácteos"],
  },
  {
    id: "del-004",
    name: "Brunch Box para 2",
    description:
      "Para dos personas: 2 arepas, 2 jugos, 2 cafés y 2 postres. El brunch de Mamitas en tu casa.",
    price: 52,
    category: "delivery",
    tags: ["popular", "delivery-friendly"],
    isPopular: true,
    isDeliveryFriendly: true,
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80",
  },
  {
    id: "del-005",
    name: "Family Feast (4 personas)",
    description:
      "El festín familiar: 8 arepas a elección, tajadas de plátano, caraotas y guasacaca. Sin esfuerzo.",
    price: 78,
    category: "delivery",
    tags: ["popular", "delivery-friendly"],
    isPopular: true,
    isDeliveryFriendly: true,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
  },
  {
    id: "del-006",
    name: "Dulce Box (3 postres)",
    description:
      "3 postres a elección en envase individual premium. Quesillo, tres leches, churros. Elige tus favoritos.",
    price: 26,
    category: "delivery",
    tags: ["popular", "delivery-friendly"],
    isPopular: true,
    isDeliveryFriendly: true,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
  },
];

// ─── Filtered views ───
export const POPULAR_ITEMS = MENU_ITEMS.filter((item) => item.isPopular);
export const HERO_ITEMS = MENU_ITEMS.filter((item) => item.isHero);
export const VIRAL_ITEMS = MENU_ITEMS.filter((item) => item.isViral);
export const DELIVERY_ITEMS = MENU_ITEMS.filter(
  (item) => item.category === "delivery" || item.isDeliveryFriendly
);
export const NEW_ITEMS = MENU_ITEMS.filter((item) => item.isNew);
