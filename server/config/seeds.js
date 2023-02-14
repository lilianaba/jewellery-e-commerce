const db = require('./connection');

const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Necless' },
    { name: 'Ear Rings' },
    { name: 'Bracelets' },
    { name: 'Rings' },
    { name: 'Chains' }, 
    { name: 'Watches'}
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Pendant',
      description:
        'Pendant in platinum with round brilliant diamonds. 3.2 mm diameter. On a 16" chain. Carat total weight .16.',
      image: '1.jpg',
      category: categories[0]._id,
      price: 3000,
      quantity: 10
    },
    {
      name: 'Bead Chain',
      description:
        '45cm Multi-Layer Bead Chain in Sterling Silver',
      image: '2.jpg',
      category: categories[0]._id,
      price: 150,
      quantity: 10
    },
    {
      name: 'Morganite studs',
      category: categories[1]._id,
      description:
        'Stud Earrings with Morganite in 10kt Rose Gold',
      image: '4.jpg',
      price: 500,
      quantity: 8
    },
    {
      name: 'Tennis Bracelet',
      category: categories[2]._id,
      description:
        'Tennis Bracelet with Sapphire & 1 Carat TW of Diamonds in 10kt White Gold',
      image: '6.jpg',
      price: 3500,
      quantity: 7
    },
    {
      name: 'Natural Sapphire ring',
      category: categories[3]._id,
      description:
        '9ct Yellow Gold Natural Sapphire + Zirconia Ring',
      image: '7.jpg',
      price: 722,
      quantity: 4
    },
    {
      name: 'Gold and emerald ring',
      category: categories[3]._id,
      description:
        'Halo Ring with Laboratory Created Emerald & Natural Diamonds in 10kt Yellow Gold',
      image: '8.jpg',
      price: 650,
      quantity: 10
    },
    {
      name: 'Snowflake',
      category: categories[0]._id,
      description:
        'Flawless Cut Diamonds in 9ct Yellow Gold Snowflake Pendant With 45cm Chain Included',
      image: '10.jpg',
      price: 1100,
      quantity: 6
    },
    {
      name: 'Rose Gold and Diamond Ring',
      category: categories[3]._id,
      description:
        'This exquisite 9ct Rose Gold 2.40ct Rose Amethyst and Diamond Ring is the ultimate in feminine elegance and sophistication. The oval cut rose amethyst centre is simply stunning. This amazing stone has a generous 2.40ct size, with beautiful lilac undertones to meet the classic amethyst purple. Set in a floral design adorn with diamonds, it is impossible not to fall in love with this gemstone. A 9ct rose gold band is the perfect backdrop, with lovely shape and colour to contrast the amethyst and diamonds.',
      image: '11.webp',
      price: 499,
      quantity: 18
    },
    {
      name: 'White Gold 3 Carat Diamond Chain',
      category: categories[4]._id,
      description: 'Embrace sparkle with this amazing 10ct White Gold 3 Carat Diamond On 45cm Chain. Crafted in the cool tones of white gold with a shiny finish and smooth lustre, this necklace is comfortable to wear. The chain is embellished with an astonishing 3 carats of diamond that have unmissable sparkles. Turn heads wherever you go with a necklace that is sure to impress. Spoil someone special in your life with a diamond necklace that will be treasured for many years to come.',
      image: '12.webp',
      price: 4899.3,
      quantity: 7
    },
    {
      name: 'Silverfilled Fancy Mesh Boltring Bracelet',
      category: categories[2]._id,
      description:
        'Comfortable and elegant, this fancy mesh boltring bracelet will suit any outfit. Width - 12mm, Length - 20cm',
      image: '13.webp',
      price: 629,
      quantity: 2
    },
    {
      name: 'Silverfilled Pendants on Chain',
      category: categories[2]._id,
      description:
        'You will fall in love with these pretty 3 heart charm pendants on 45cm chain.',
      image: '14.webp',
      price: 99.5, 
      quantity: 27
    },
    {
      name: 'Michael Kors MK6961 Womens Watch',
      category: categories[5]._id,
      description:
        'Exude opulence and class in this Michael Kors MK6961 Camille Stone Set Womens Watch that is perfect for those who value sparkle and glitter. Crafted in rose gold plated stainless steel, and embellished with hundreds of round stones that sparkle from every angle. Embrace glamour and femininity in this iconic Michael Kors watch. Not only this, but it has a 50 metre water resistance, which means that you can wear this watch through your everyday activities with ease.',
      image: '15.webp',
      price: 979,
      quantity: 5
    }, 
    {
      name: 'Jag J2523A Gold Tone Womens Watch',
      category: categories[5]._id,
      description:
        `A modern slimline watch that features an all-over yellow gold-plated stainless-steel construction, the Jag J2523A Alice Gold Tone Women's Watch boasts simplicity in an elegant style. Featuring a 32mm dial with button time markers and a white backdrop, this timepiece will radiate from the wrist to proclaim its beauty. It is JAG in all its glory, with the clever addition of a minimalist mesh band that helps to accentuate the clarity of the watch face. A true classic that will certainly add sophistication and a tasteful appeal to your look.`,
      image: '16.jpeg',
      price: 111.75,
      quantity: 32
    },
    {
      name: 'Michael Kors MK6977 Womens Watch',
      category: categories[5]._id,
      description:
        `The Michael Kors MK6977 features a gold-tone stainless steel case and bracelet, a bezel that has been encircled with clear gemstones, the dial is covered with the same clear gemstones in various sizes. The watch has chronograph movement with a three dial design and a date window for added functionality. The stainless steel strap has its centre link set with the same clear gemstones in various sizes. This is the perfect statement piece for those who love shiny things.`,
      image: '17.jpeg',
      price: 779,
      quantity: 1
    },
    {
      name: 'Olivia Burton OB16CH04 Womens Watch',
      category: categories[5]._id,
      description:
        `Add a touch of playfulness to your look with this Olivia Burton watch adorned with a 3D daisy chain motif and a chalk blue leather strap.`,
      image: '18.jpeg',
      price: 459,
      quantity: 5
    }, 
    {
      name: 'Seiko SSC514P Solar Mens Watch',
      category: categories[5]._id,
      description:
        `The Seiko SSC314P9 Le Grand Sport Solar Diamond Set Gents Watch is a modern piece with the reliability of a classic. From the Le Grand Sport Collection, the black stainless-steel casing, bracelet and diamond-set bezel adds a luxurious look. The sleek textured charcoal dial features three sub dials, including an alarm, stopwatch and dual time, and a date window, making the solar and chronograph piece the perfect dress and everyday watch.`,
      image: '19.webp',
      price: 899,
      quantity: 10
    }, 
    {
      name: 'Yellow Gold 1.5 Carats Diamond Stud Earrings',
      category: categories[1]._id,
      description:
        `Feel on top of the world with these absolutely stunning 14ct Yellow Gold Diamond Stud Earrings with Approximately 1.5 Carats of Diamonds. It's rare to find any gemstone of this size and quality, let alone a pair of beautiful diamonds like these. Each are finely worked into a brilliant cut, showing off every bit of sparkle and fiery glimmer the diamonds have to offer. Set in yellow gold with a screw back that ensures they won't fall out; these diamond earrings are forever. Buy them for someone you adore or treat yourself to true luxury.`,
      image: '20.webp',
      price: 6299.3,
      quantity: 8
    }, 
    {
      name: 'Yellow Gold 1.5 Carats Diamond Stud Earrings',
      category: categories[1]._id,
      description:
        `Feel on top of the world with these absolutely stunning 14ct Yellow Gold Diamond Stud Earrings with Approximately 1.5 Carats of Diamonds. It's rare to find any gemstone of this size and quality, let alone a pair of beautiful diamonds like these. Each are finely worked into a brilliant cut, showing off every bit of sparkle and fiery glimmer the diamonds have to offer. Set in yellow gold with a screw back that ensures they won't fall out; these diamond earrings are forever. Buy them for someone you adore or treat yourself to true luxury.`,
      image: '21.jpeg',
      price: 3499.3,
      quantity: 9
    }, 
    {
      name: 'Yellow Gold Diamond Hoop Earrings',
      category: categories[1]._id,
      description:
        `If you want to make a real impression, then these Flawless Cut 9ct Yellow Gold Diamond Hoop Earrings are the ultimate choice. Set with 0.5 carats of diamonds with high clarity, this is a truly luxury set of hoops. Each of these high quality diamonds are ready to delight with their classy shimmer. Flawless are known for their magnificent diamonds, and this yellow gold hoops are the perfect way to show them off.`,
      image: '22.webp',
      price: 1499,
      quantity: 5
    }, 
    {
      name: 'Yellow Gold Diamond Hoop Earrings',
      category: categories[1]._id,
      description:
        `Pink Diamonds become affordable with our Luminesce Lab Grown Pink Diamond Range. Rare and beautiful, these Pink Luminesce Lab Grown Diamond Solitaire Earrings are sure to become one of your favourite pairs of earrings. Set in Rose Gold and also available in a pink Luminesce Lab Grown Diamond ring and matching Pink Solitaire Pendant. Luminesce Lab Grown Diamonds are quickly increasing in popularity as not only do they offer a bigger, better and brighter Diamond for less, they are also the most environmentally friendly choice when selecting your next diamond.`,
      image: '23.webp',
      price: 699,
      quantity: 32
    }, 
    {
      name: 'Yellow Gold Natural Sapphire Studs',
      category: categories[1]._id,
      description:
        `Black sapphire is said to deflect stress and negativity, making it perfect for use in jewellery. These 9ct Yellow Gold 6x4mm Natural Sapphire and Diamond Pear Halo Studs are entrancing, calming, and full of deep colour to adore. Cut into a beautiful pear shape and coated with diamonds, these elegant gemstones add sophistication and depth to any look. Yellow gold offers a luxury backdrop that completes this incredible pair.`,
      image: '24.webp',
      price: 999,
      quantity: 13
    }, 
    {
      name: 'Yellow SOLID Gold Heavy Curb Chain',
      category: categories[4]._id,
      description:
        `This 9ct Yellow SOLID Gold Heavy Curb 55cm Chain 450 Gauge commands respect. Its heavy 230g weight makes a strong statement to anyone you meet, with a striking yellow gold gleam on full display. The popular curb chain style sits flat against your chest, and makes wearing this luxury piece surprisingly comfortable. Along with its enormous 450 gauge, this solid gold chain offers extra length than typical chains for a sophisticated allure.`,
      image: '25.jpeg',
      price: 27999.3,
      quantity: 1
    }, 
    {
      name: 'Yellow Gold 45cm Curb Chain',
      category: categories[4]._id,
      description:
        `This solid 9ct yellow gold chain is sure to please. The bevelled curb chain is 45cm in length.`,
      image: '26.webp',
      price: 599.5,
      quantity: 98
    }, 
    {
      name: 'Rhodium Plated Fancy Cleopatra Chain',
      category: categories[4]._id,
      description:
        `Sterling Silver Rhodium Plated Fancy 43cm Cleopatra Chain`,
      image: '27.jpeg',
      price: 459,
      quantity: 3
    }, 
    {
      name: 'Yellow Gold 5 Carat Diamond Bracelet',
      category: categories[2]._id,
      description:
        `This 9ct Yellow Gold 5 Carat Diamond 18.5cm Bracelet with Brilliants and Baguettes is an utterly dazzling luxury statement. Coated in a vast expanse of round brilliant and lengthened baguette cut diamonds, this glitzy piece will make you stand out wherever you go. Each and every diamond is full of life and white colour, contrasting beautifully with the durable 9ct yellow gold. Treasure every moment spent with this enchanting luxury bracelet.`,
      image: '28.webp',
      price: 9099.3,
      quantity: 4
    }
  ]);

  console.log('products seeded');

  process.exit();
});

