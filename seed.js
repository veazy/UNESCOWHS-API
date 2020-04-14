var mongoose = require("mongoose");
var HSite = require("./models/sites");

var data = [
	{
	sr_no: '1',
	name: "Ajanta Caves",
	location: "Maharashtra",
	period: "2nd century BC to the 6th century",
	UNESCO_data: "242; 1983; i, ii, iii, vi",
	description: "The Ajanta Caves are Budhhists caves built in two phases. The first, was from the reign of Emperor Ashoka. The second, further additions were made during the 5th and 6th centuries AD of the Gupta period. The caves depict richly decorated fresco paintings, reminiscent of the Sigiriya paintings and sculptures in Sri Lanka. There are 31 rock-cut cave monuments which are unique representations of the religious art of Budhhism.",
	image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ajanta_%2863%29.jpg/1200px-Ajanta_%2863%29.jpg",
	enlistment_year: "1983",
	site_type: "man-made"
},
	{
	sr_no: '2',
	name: "Ellora Caves",
	location: "Maharashtra",
	period: "600 to 1000 AD",
	UNESCO_data: "243; 1983; (i)(iii)(vi)",
	description: "The Ellora Caves, also known as the Ellora Complex, are a cultural mix of religious arts of Buddhism, Hinduism and Jainism. 34 monasteries and temples sculpted contiguously into rock walls of a high basalt cliff are seen along a length of 2 kilometres (1.2 mi). Dated to 600 to 1000 AD, they are a reflection of artistic creation of the ancient civilization of India.",
	image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kailasha_temple_at_ellora.JPG/1200px-Kailasha_temple_at_ellora.JPG",
	enlistment_year: "1983",
	site_type: "man-made"
},
	{
	sr_no: '3',
	name: "Agra Fort",
	location: "Uttar Pradesh",
	period: "16th Century",
	UNESCO_data: "251; 1983; iii",
	description: "The Agra Fort, also known as the Red Fort of Agra, represents Mughal opulence and power as the center piece of their empire. It was inscribed in the UNESCO World Heritage List in 1982, under Category iii as a cultural monument. The fortress is located on the right bank of the Yamuna River, built in red sandstone, covering a length of 2.5 kilometres (1.6 mi). It is surrounded by a moat which encloses several palaces, towers, and mosques. They were built from the 16th century onward until the early 18th century. This corresponds to Emperor Akbar's reign in the 16th century to that of Aurangzeb in the early part of the 18th century, including the contributions made during the reign of Jahangir and Shahjahan of the Moghul Rule in India. The impressive structures built within the precincts of the fort are the Khas Mahal, the Shish Mahal, Muhamman Burje (an octagonal tower), Diwan-i-Khas (1637), Diwan-i-Am, white marble mosque or the Pearl Mosque (built during 1646–1653) and the Nagina Masjid (1658–1707). These monuments are remarkable for the fusion of Persian art of the Timurid and Indian art forms. It is near the famous Taj Mahal, with a buffer zone separating the two monuments.",
	image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/AgraFort.jpg/150px-AgraFort.jpg",
	enlistment_year: "1983",
	site_type: "man-made"
},
	{
	sr_no: '4',
	name: "Taj Mahal",
	location: "Uttar Pradesh",
	period: "17th Century",
	UNESCO_data: "252; 1983;i",
	description: "The Taj Mahal, one of the Seven Wonders of the World, is a mausoleum — a funerary mosque. It was built by Emperor Shahjahan in memory of his third wife Begum Mumtaz Mahal who had died in 1631. It is a large edifice made in white marble in typical Mughal architecture, a style that combines elements from Persian, Islamic, and Indian architectural styles. This much acclaimed masterpiece was built over a 16-year period between 1631 and 1648 under the Chief Architect Ustad Ahmad Lahauri supported by several thousand artisans under the guidance of an Imperial Committee. It was inscribed in the UNESCO World Heritage List in 1983, under Category i, as a cultural property/monument. It is set amidst the vast Mughal Gardens, which cover 17 hectares (42 acres) of land on the right bank of the Yamuna River. It has an octagonal layout marked by four exclusive minarets at four corners with a pristine elevation of a central bulbous dome below which the tombs are laid in an underground chamber. Calligraphic inscriptions in-crusted in polychromatic pierra dura, decorative bands and floral arabesques glorify the monument's graphic beauty and provide a picture perfect impression to the viewers.",
	image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Taj_Mahal_at_sunrise%2C_Agra.jpg/150px-Taj_Mahal_at_sunrise%2C_Agra.jpg",
	enlistment_year: "1983",
	site_type: "man-made"
},
	{
	sr_no: '5',
	name: "Konarak Sun Temple",
	location: "Puri District, Odisha",
	period: "13th Century",
	UNESCO_data: "246; 1984;(i)(iii)(vi)",
	description: "The Konark Sun Temple is a 13th-century Sun Temple, also known as the \"Black Pagoda\", at Konark, in Odisha. Located on the east coast of the Bay of Bengal in the Mahanadi Delta, it is built in the form of the chariot of Surya (Arka), the sun god with 24 wheels, and is heavily decorated with symbolic stone carvings and led by a team of six horses. It was constructed from oxidizing weathered ferruginous-coloured sandstone by King Narasimhadeva I of the Eastern Ganga Dynasty. The temple is one of the most renowned temples in India and is a World Heritage Site inscribed in 1984 as a cultural property under categories (i), (iii) and (vi).",
	image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Konark_Sun_Temple_Front_view.jpg/150px-Konark_Sun_Temple_Front_view.jpg",
	enlistment_year: "1984",
	site_type: "man-made"
},
	{
	sr_no: '6',
	name: "Group of Monuments at Mahabalipuram",
	location: "Mahabalipuram, Tamil Nadu",
	period: "7th and 8th centuries",
	UNESCO_data: "249; 1984; (i)(ii)(iii)(vi)",
	description: "The Group of Monuments at Mahabalipuram, in Tamil Nadu, about 58 km (36 mi) from Chennai, were built by the Pallava kings in the 7th and 8th centuries. The town has gained prominence under the rule of Mamalla. These monuments have been carved out of rock along the Coromandel coast. The temple town has approximately forty monuments, including the largest open-air bas-relief in the world. It was inscribed under the UNESCO World Heritage list in 1984 as a cultural heritage under categories (i)(ii)(iii)(vi). The monuments inscribed are the Ratha Temples: Temples in the form of chariots, Mandapas, 11 Cave sanctuaries covered with bas-reliefs, rock relief of Descent of the Ganges, which is the largest open air Rock relief also known as Arjuna's Penance or Bhagiratha's Penance.",
	image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Mamallapuram-april2008.jpg/150px-Mamallapuram-april2008.jpg",
	enlistment_year: "1984",
	site_type: "man-made"
},
	{
	sr_no: '7',
	name: "Kaziranga National Park",
	location: "Assam",
	period: "20th Century",
	UNESCO_data: "337; 1985; ix, x",
	description: "Kaziranga, located in the Northeastern state of Assam in the flood plains of the Brahmaputra River's south bank, was declared a World Heritage Site by UNESCO in 1985 for its unique natural environment. It was first established as a reserved forest in 1908 to protect the dwindling numbers of rhinoceros. It underwent several transformations over the years, as The Kaziranga Game Sanctuary in 1916, renamed Kaziranga Wildlife Sanctuary in 1950, and declared a national park in 1974. The park, which covers an area of 42,996 hectares (106,250 acres), has the distinction of being home to the largest population of the great Indian one-horned rhinoceros. There are many other mammals and birds species in the sanctuary.",
	image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Kazi_rhino_edit.jpg/150px-Kazi_rhino_edit.jpg",
	enlistment_year: "1985",
	site_type: "natural"
},
	{
	sr_no: '8',
	name: "Manas Wildlife Sanctuary",
	location: "Assam",
	period: "20th Century",
	UNESCO_data: "338; 1985; vii, ix, x",
	description: "The Manas Wildlife Sanctuary, located in the northeastern state of Assam covers an area of 50,000 hectares (120,000 acres) in the plains of the Manas River in the foothills of the Himalayas, on the border with Bhutan (contiguous with the Manas Wildlife Sanctuary in Bhutan). It was inscribed as a World Heritage Site by UNESCO in 1985 for its unique natural environment. The sanctuary is the habitat of several species of plants, 21 most-threatened species of mammals (out of 55 mammal species in the sanctuary), 36 reptile species, three amphibians and 350 species of birds. Endangered species include: the tiger, pygmy hog, clouded leopard, sloth bear, Indian rhinoceros, wild buffaloes (the only pure strain of buffalo in India), Indian elephants, golden langur and Bengal florican. In 1907, it was declared a reserve forest, a sanctuary in 1928, and became a tiger reserve in 1973 as part of \"Project Tiger\" and a World Heritage Site in December 1985. Plants listed under the broad category of Burma Monsoon Forests include 285 species of Dicotyledons and 98 species of Monocotyledons. Since 1992, the sanctuary was listed under \"The World Heritage in Danger\", but removed in 2011 after significant conservation efforts.",
	image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Manas_National_Park.jpg/150px-Manas_National_Park.jpg",
	enlistment_year: "1985",
	site_type: "natural"
},
	{
	sr_no: '9',
	name: "Keoladeo National Park",
	location: "Rajasthan",
	period: "1981",
	UNESCO_data: "340; 1985; (x)",
	description: "The Keoladeo National Park in Bharatpur is located within the Indus-Ganges Monsoon Forest Biogeographical Province. It extends over an area of 2,783 hectares (6,880 acres). It was declared a national park in 1982. In 1900 it was a duck-hunting reserve of the Maharajasof Bharatpur, then became a bird sanctuary in 1956, with the Maharajas exercising shooting rights until 1972. It was recorded as a Ramsar Wetland site in 1981. It was inscribed in the UNESCO World Heritage List in 1985 under category (x), as a natural property. The area of the wetland of the park shrinks to 1,000 hectares (2,500 acres) during most of the year. It has a human-built environment created partly by embankments dividing the area into 10 units, and has a sluice controlled arrangement to maintain the water level. It is famous for 364 species of wintering birds that flock in large numbers, arriving from distant countries of Afghanistan, Turkmenistan, China and Siberia. It is surrounded by 17 villages and Bharatpur city.",
	image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sarus_Crane%2C_Keoladeo_National_Park.jpg/150px-Sarus_Crane%2C_Keoladeo_National_Park.jpg",
	enlistment_year: "1985",
	site_type: "natural"
},
	{
	sr_no: '10',
	name: "Churches and Convents of Goa",
	location: "Velha Goa, Goa",
	period: "16th and 18th centuries",
	UNESCO_data: "234; 1986; (ii)(iv)(vi)",
	description: "The Churches and Convents of Goa are monuments inscribed by UNESCO under the World Heritage List in 1986 as cultural property, under criteria (ii),(iv) and (vi), which were built by the Portuguese colonial rulers of Goa between the 16th and 18th centuries. These monuments are mainly in the former capital of Velha Goa. Velha Goa is also known as Goem, Pornem Gõy, Adlem Gõi, Old Goa or Saibachem Gõi, where Saib or Goencho Saib refers to Saint Francis Xavier. The most significant of these monuments is the Basilica of Bom Jesus, which enshrines the tomb containing the relics of St. Francis Xavier. These monuments of Goa, known as the \"Rome of the Orient\", were established by different Catholic religious orders, from November 25, 1510 onward. There were originally 60 churches of which some of the surviving monuments in the city of Velha Goa are: the Saint Catherine's Chapel (where one of the first, probably only besides the Angediva Island, Latin rite mass in Asia, was held on Saint Catherine's feast day, November 25, 1510); the Church and Convent of Saint Francis of Assisi; the Sé Catedral de Santa Catarina dedicated to Saint Catherine of Alexandria; the Jesuit Borea Jezuchi Bajilika or Basílica do Bom Jesus; Igreja de São Francisco de Assis (also known as Asisachea Sanv Fransiskachi Igorz); the Theatine Igreja da Divina Providência (São Caetano) (also known as San Kaitanachi Igorz or the church of Saint Cajetan and its seminary (resembles Basilica Papale di San Pietro in Vaticano); Igreja de Nossa Senhora do Rosário (also known as Ruzai Saibinnichi Igorz (Church of Our Lady of the Rosary)) and Igreja de Santo Agostinho (also known as Sanv Agustineachi Igorz (Church of Saint Augustine) (only the belfry stands today and some graves, including the Georgian Orthodox Church Saint, Saint Ketevan, who was also a queen). These monuments were forerunners in establishing an ensemble of the Manueline, Mannerist and Baroque art forms in the Asian region. The monuments are built in laterites and the walls are plastered with limestone mortar mixed with broken shells. For this reason, the monuments need constant maintenance to prevent deterioration due to monsoon climatic conditions.",
	image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/St_Cajetan_Goa.jpg/150px-St_Cajetan_Goa.jpg",
	enlistment_year: "1986",
	site_type: "man-made"
},
	{
	sr_no: '11',
	name: "Khajuraho Group of Monuments",
	location: "Madhya Pradesh",
	period: "950 AD to 1050 AD",
	UNESCO_data: "240; 1986; (i) (iii)",
	description: "The Khajuraho Group of Monuments attributed to the Chandela dynasty which, under sovereignty of Gurjar Pratihars reached its glory. The ensemble of monuments that have survived belong to the Hindu and Jain Religious practices with striking fusion of sculpture and architecture; the best example of this outstanding feature is seen in the Kandariya Temple. Of the 85 temples built, only 22 temples have survived in an area of 6 km2, which represents the Chandela period of the 10th century. Located in the Indian state of Madhya Pradesh, it was inscribed by UNESCO as a World Heritage Site, a cultural property on October 15, 1982, for its unique original artistic creation and proof of the Chandela Culture that existed prior to the Muslim invasion of India in the early 12th century.",
	image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Khajuraho5.jpg/150px-Khajuraho5.jpg",
	enlistment_year: "1986",
	site_type: "man-made"
},
	{
	sr_no: '12',
	name: "Group of Monuments at Hampi",
	location: "Ballari district, Karnataka",
	period: "14th and 16th centuries",
	UNESCO_data: "241 ; 1986; (i)(iii)(iv)",
	description: "The Group of Monuments at Hampi comprise a sombre but ostentatious Hampi town, on the banks of the river Tungabhadra in Karnataka. Hampi subsumes the ruins of Vijayanagara, which was the former capital of the powerful Vijayanagara Empire. Dravidian temples and palaces abound in Hampi. These won the admiration of travellers between the 14th and 16th centuries. Hampi, as an important Hindu and Jain religious centre, has the Virupaksha Temple (different from Pattadakal's Virupaksha Temple) and several other monuments, which are part of the cultural heritage site inscribed under category (i), (iii) and (iv) in the UNESCO World Heritage List.",
	image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Hampi_virupaksha_temple.jpg/150px-Hampi_virupaksha_temple.jpg",
	enlistment_year: "1986",
	site_type: "man-made"
},
	{
	sr_no: '13',
	name: "Fatehpur Sikri",
	location: "Uttar Pradesh",
	period: "16th Century",
	UNESCO_data: "255; 1986; ii, iii, iv",
	description: "Fatehpur Sikri, \"the City of Victory,\" was built during the second half of the 16th century by the Mughal Emperor Akbar (1556–1605). It was the capital of the Empire and seat of the grand Mughal court but only for 14 years. Despite bearing exceptional testimony to the Mughal civilization at the end of the 16th century, it had to be abandoned due to the twin reasons of lack of water and unrest in north-west India, leading the emperor to shift the capital to Lahore. Akbar decided to construct it in 1571, on the same site where the birth of his son, the future Emperor Jahangir, was predicted by the wise saint Shaikh Salim Chisti (1480–1572). The work, supervised by the great Mughal himself, was completed in 1573. The complex of monuments and temples, all uniformly in Mughal architectural style, includes one of the largest mosques in India, the Jama Masjid, the Buland Darwaza, the Panch Mahal, and the Tomb of Salim Chishti. The English traveller Ralph Fitch considered the city in 1585 as 'considerably larger than London and more populous.' Its form and layout strongly influenced the evolution of Indian town planning, notably at Shahjahanabad (Old Delhi). The city has numerous other palaces, public buildings and mosques, as well as living areas for the court, the army, servants of the king and for an entire population whose history has not been recorded.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Fatehput_Sikiri_Buland_Darwaza_gate_2010.jpg/150px-Fatehput_Sikiri_Buland_Darwaza_gate_2010.jpg",
	enlistment_year: "1986",
	site_type: "man-made"
},
	{
	sr_no: '14',
	name: "Group of Monuments at Pattadakal",
	location: "Bagalkot District, Karnataka",
	period: "8th Century",
	UNESCO_data: "239 ; 1987; (iii)(iv)",
	description: "The Group of monuments in Pattadakal designated under UNESCO World Heritage List, in 1987, cover a remarkable series of nine Hindu temples, as well as a Jain sanctuary in northern Karnataka. In this group of temples, the Virupaksha Temple, built c. 740 by Queen Lokamahadevi to commemorate her husband's (King Vikramaditya II) victory over the Pallava kings from the south, is considered the most outstanding architectural edifice (This is different from the Virupaksha Temple at Hampi.) These are a remarkable combination of temples built by the Chalukya Dynasty in the 6th to the 8th century at Aihole, Badami and Pattadakal, the latter city was known as the \"Crown Rubies\". The temples represent a remarkable fusion of the architectural features of northern (Nagara) and southern (Dravida) India. Pattadakal is considered a Hindu holy city and within the heritage complex are eight temples dedicated to Shiva, a ninth shaivite sanctuary called the Papanatha Temple, and a Jain Narayana temple.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Virupaksha_temple_at_Pattadakal.jpg/150px-Virupaksha_temple_at_Pattadakal.jpg",
	enlistment_year: "1987",
	site_type: "man-made"
},
	{
	sr_no: '15',
	name: "Elephanta Caves",
	location: "Maharashtra",
	period: "5th to 8th centuries",
	UNESCO_data: "244rev; 1987; (i)(iii)",
	description: "The Elephanta Caves are a network of sculpted caves located on Elephanta Island, or Gharapuri (literally \"the city of caves\") in Mumbai Harbour, 10 kilometres (6.2 mi) to the east of the city of Mumbai. The island, located on an arm of the Arabian Sea, consists of two groups of caves — the first is a large group of five Hindu caves, the second, a smaller group of two Buddhist caves. The Hindu caves contain rock cut stone sculptures, representing the Shaiva Hindu sect, dedicated to the god Shiva. The rock-cut architecture of the caves is dated to between the 5th and 8th centuries, although the identity of the original builders is still a subject of debate. The caves are hewn from solid basalt rock. Renovated in the 1970s, the caves were designated a World Heritage Site in 1987 to preserve the artwork.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Elephanta_Caves%2C_Mumbai.jpg/150px-Elephanta_Caves%2C_Mumbai.jpg",
	enlistment_year: "1987",
	site_type: "man-made"
},
	{
	sr_no: '16',
	name: "Great Living Chola Temples",
	location: "Tamil Nadu",
	period: "11th and 12th century",
	UNESCO_data: "250bis; 1987; (ii)(iii)",
	description: "The Great Living Chola Temples, built by kings of the Chola Empire stretched over all of Tamil Nadu. This cultural heritage site includes three great temples of the 11th and 12th centuries namely, the Brihadisvara Temple at Thanjavur, the Brihadisvara Temple at Gangaikondacholisvaram and the Airavatesvara Temple at Darasuram. The Temple of Gangaikondacholisvaram, built by Rajendra I, was completed in 1035. Its 53 metres (174 ft) vimana (sanctum tower) has recessed corners and a graceful upward curving movement, contrasting with the straight and severe tower at Thanjavur. The Airavatesvara temple complex, built by Rajaraja II, at Darasuram features a 24 metres (79 ft) vimana and a stone image of Shiva. The temples testify to the brilliant achievements of the Chola in architecture, sculpture, painting and bronze casting. The site was inscribed under UNESCO World Heritage List in 1987 as Cultural heritage under criteria (ii) and (iii).",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Airavateshwarar_Darasuram.jpg/150px-Airavateshwarar_Darasuram.jpg",
	enlistment_year: "1987",
	site_type: "man-made"
},
	{
	sr_no: '17',
	name: "Sundarbans National Park",
	location: "Tamil Nadu",
	period: "1939 and 1982",
	UNESCO_data: "452; 1987 ; (ix) and (x)",
	description: "The Sundarbans National Park, the largest estuarine mangrove forest in the world is a national park, tiger reserve, World Heritage Site and a biosphere reserve located in the Sundarbans Ganges river delta bordering the Bay of Bengal, in West Bengal. It is also on the UNESCO World Network of Biosphere Reserves. The Sundarbans as a whole encompasses 10,000 km2 (3,900 sq mi) of land and water, about 5,980 km2 (2,310 sq mi) in Bangladesh and the balance is in India. It is integral to the world's largest delta of 80,000 km2 formed from sediments deposited by the three great rivers, the Ganges, the Brahmaputra and the Meghna, which confluence in the Bengal Basin. The entire basin is traversed by a complex network of interconnecting waterways. Though, the history of protection in the area of Indian part of the Sundarbans dates back to 1878, it was declared as the core area of Sundarbans Tiger Reserve in 1973, and a wildlife sanctuary in 1977 of 133,000-hectare core area within the 258,500 hectares (639,000 acres) Sundarbans Tiger Reserve. On May 4, 1984, it was declared a National Park. It was inscribed on the UNESCO World Heritage list in 1987 as a natural property under category (ix) and (x). This region is densely covered by mangrove forests, and is one of the largest reserves for the Bengal tiger. It is also home to a variety of bird, reptile and invertebrate species, including the salt-water crocodile.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Sunderbans_map.png/150px-Sunderbans_map.png",
	enlistment_year: "1987",
	site_type: "natural"
},
	{
	sr_no: '18',
	name: "Nanda Devi and Valley of Flowers National Parks",
	location: "Uttarakhand",
	period: "1939 and 1982",
	UNESCO_data: "335bis; 1988, 2005 ;(vii),(x)",
	description: "The Nanda Devi and Valley of Flowers National Parks are nestled high in West Himalaya. Valley of Flowers National Park is renowned for its meadows of endemic alpine flowers and outstanding natural beauty. It is located in the Garhwal Himalaya of Chamoli District of Uttarakhand. This richly diverse area is also home to rare and endangered animals, including the Asiatic black bear, snow leopard, brown bear and blue sheep. The gentle landscape of the Valley of Flowers National Park complements the rugged mountain wilderness of Nanda Devi National Park. Together, they encompass a unique transition zone between the mountain ranges of the Zanskar and Great Himalaya. The park stretches over an expanse of 87.5 km2 (33.8 sq mi). It was established as a national park on November 6, 1982. However, it was initially established as a game sanctuary on January 7, 1939. It was inscribed under the UNESCO World Heritage List in 1988 with extension in 2005 under category (vii) and (x).[45][46] Together, they comprise the Nanda Devi Biosphere Reserve, which is on the UNESCO World Network of Biosphere Reserves since 2004.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Valley_of_flowers_uttaranchal_full_view.JPG/150px-Valley_of_flowers_uttaranchal_full_view.JPG",
	enlistment_year: "1988",
	site_type: "natural"
},
	{
	sr_no: '19',
	name: "Buddhist Monuments at Sanchi",
	location: "Madhya Pradesh",
	period: "2nd and 1st centuries BC to the 12th century AD",
	UNESCO_data: "524; 1989; (i)(ii)(iii)(iv)(vi)",
	description: "The Buddhist Monuments at Sanchi, located 45 kilometres (28 mi) from Bhopal in the Indian state of Madhya Pradesh are a group of Buddhist monuments dated between 200 BC and 100 BC. The site, however, has been conjectured to have been developed in the 3rd century BC, when Emperor Ashoka of the Mauryan Empire ruled. The principal monument is Stupa 1 dated to the 2nd century and 1st century BC. These Buddhist sanctuaries were active Buddhist religious monuments, which flourished until the 12th century. The sanctuary has a plethora of monolithic pillars, palaces, temples and monasteries in different status of preservation. It was inscribed as a World Heritage Site by UNESCO on January 24, 1989, for its unique cultural importance. It was discovered only in 1818 in a deserted state of preservation. Archaeological excavations undertaken thereafter revealed 50 unique monuments.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Sanchi.jpg/150px-Sanchi.jpg",
	enlistment_year: "1989",
	site_type: "man-made"
},
	{
	sr_no: '20',
	name: "Humayun's Tomb",
	location: "Delhi",
	period: "1572",
	UNESCO_data: "232, 1993, (ii), (iv)",
	description: "Humayun's Tomb, Delhi, the first tomb built with several innovations, set at the centre of luxurious gardens with water channels, was the precursor monument to the Taj Mahal (built a century later). It was built in 1570 and was inscribed as a UNESCO World Heritage Monument in 1993 for its cultural importance. It was built in 1569–1570 by the second Mughal Emperor Humayun's widow Biga Begum (Hajji Begum). Its architecture is credited to Mirza Ghiyath and its Mughal architectural style has been acclaimed as the \"necropolis of the Mughal dynasty\" for its double domed elevation provided with Chhatris. Apart from the tomb of Humayun, the funerary also has 150 tombs of various members of the royal family. The tomb is built with a char-bagh (fourfold) layout with two gates, one on the south and the other on the west. It has a number of water channels, a pavilion and a bath. The tomb set on an irregular octagonal plinth has a raised dome of 42.5 metres (139 ft) in height, covered by marble slabs and decorated with chhatris.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Humayun%27s_Tomb_from_the_entrance%2C_Delhi.jpg/150px-Humayun%27s_Tomb_from_the_entrance%2C_Delhi.jpg",
	enlistment_year: "1993",
	site_type: "man-made"
},
	{
	sr_no: '21',
	name: "Qutb Minar and its Monuments",
	location: "Delhi",
	period: "Late 12th century",
	UNESCO_data: "233, 1993, (iv)",
	description: "The Qutb Minar and its Monuments, Delhi, located to the south of Delhi, is a complex with the Qutb Minar as the centre piece, which is a red sandstone tower of 72.5 metres (238 ft) height with a base of 14.32 metres (47.0 ft) reducing to 2.75 metres (9.0 ft) diameter at the top. Built in the beginning of the 13th century, the complex of structures comprises itineraries, the Alai Darwaza Gate (1311), the Alai Minar (an incomplete mound of the intended Minar or tower), the Qubbat-ul-Islam Mosque (the earliest existing mosque in India), the tomb of Iltutmish, and an Iron Pillar. The complex is a testimony to the Islamic depredations during the period as seen from the materials used for building the complex which are those that were removed after destroying Hindu and Jain temples; a shining iron pillar of 7.02 metres (23.0 ft) height (without any trace of rusting) erected at the centre of the complex, with inscriptions in Sanskrit, of the Chandra Gupta II period is a mute witness. History records its construction, initially by Qutubuddin Aibak in 1192, its completion by Iltumish (1211–36) and again by Alauddin Khalji (1296–1316). It underwent several renovations by subsequent rulers, following damage to the structures due to lightning. It was inscribed under the UNESCO World Heritage List under category iv for its unique representation of the Islamic architectural and artistic excellence.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Qutub_minar.JPG/150px-Qutub_minar.JPG",
	enlistment_year: "1993",
	site_type: "man-made"
},
	{
	sr_no: '22',
	name: "Mountain Railways of India",
	location: "Darjeeling, West bengal; Ooty, Tamil Nadu; Kalka-Shimla Railway, Himachal Pradesh",
	period: "19th and early 20th centuries",
	UNESCO_data: "944ter; 1999, 2005, 2008; (ii)(iv)",
	description: "The Mountain Railways of India represent a collective listing of the Darjeeling Himalayan Railway, the Nilgiri Mountain Railway and the Kalka-Shimla Railway under the UNESCO World Heritage Site. Two railways, the Darjeeling Himalayan Railway (1881) and the Kalka-Shimla Railway (1898) are located in the rugged hill regions of the Himalayas of Northern India and the other two, the Nilgiri Mountain Railway (1908) and the Matheran Hill Railway (1907) are located in the rugged hill regions of the Western Ghats of Southern India. The World Heritage UNESCO recognition of these mountain railways of India has been stated as for being \"outstanding examples of bold, ingenious engineering solutions for the problem of establishing an effective rail link through a rugged, mountainous terrain\". The Darjeeling Himalayan Railway was recognized first in 1999, the Nilgiri Mountain Railway followed suite as an extension to the site in 2005, and in 2008 the Kalka–Shimla Railway was further added as an extension; and the three together have been titled as Mountain Railways of India under Criteria: ii, iv under the region in the Asia-Pacific. The claim of the Matheran Hill Railway, the fourth mountain railway, is pending acceptance by the international body.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Darjeelinghimalayanrailway.jpg/150px-Darjeelinghimalayanrailway.jpg",
	enlistment_year: "1995, 2005, 2008",
	site_type: "man-made"
},
	{
	sr_no: '23',
	name: "Mahabodhi Temple Complex at Bodh Gaya",
	location: "Bihar",
	period: "3rd century BC, 5th and 6th century AD and 19th century",
	UNESCO_data: "1056 rev; 2002; i, ii, iii, iv, vi",
	description: "The Mahabodhi Temple Complex at Bodh Gaya (Buddha Gaya), spread over an area of 4.86 hectares (12.0 acres) was inscribed in the UNESCO World Heritage List i as a unique property of cultural and archaeological importance. The first temple was built by Emperor Ashoka in the 3rd century BC (260 BC) around the Bodhi Tree Ficus religiosa (to the west of the temple). However, the temples seen now are dated between 5th and 6th centuries AD. The structures have been built in bricks. Revered and sanctified as the place where Siddhartha Gautama Buddha was enlightened in 531 BC at age 35, and then propagated his divine knowledge of Buddhism to the world, it has been the ultimate temple for reverential worship, over the last several centuries, by Buddhists of all denominations, from all over the world who visit on pilgrimage. The main temple is 50 metres (160 ft) in height, built in Indian architectural style, dated between 5th and 6th centuries, and it is the oldest temple in the Indian sub-continent built during the \"Golden Age\" of Indian culture credited to the Gupta period. Sculpted balustrades of the Ashokan times (3rd century BC) are preserved in the Archaeological Museum located within the temple complex.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mahabodhitemple.jpg/150px-Mahabodhitemple.jpg",
	enlistment_year: "2002",
	site_type: "man-made"
},
	{
	sr_no: '24',
	name: "Rock Shelters of Bhimbetka",
	location: "Madhya Pradesh",
	period: "30,000 years old",
	UNESCO_data: "925; 2003; (iii) (v)",
	description: "The Rock Shelters of Bhimbetka described in the UNESCO Inscription as \"the site complex … a magnificent repository of rock paintings within natural rock shelters\" is located in the foothills of the Vindhya range of hills in the Central Indian state of Madhya Pradesh. It is spread in sandstone formations extending over an area of 1893 ha with a buffer zone 10,280 hectares (25,400 acres). The rock shelters, discovered only in 1957, comprise a group of \"five clusters of rock shelters\" with paintings that are inferred to date from the \"Mesolithic period right through to the Historical period\", with the 21 villages surrounding them reflecting the traditions displayed in the rock paintings. The unique rock art has been discovered in 400 painted shelters spread over an area of 1,892 ha amidst dense forest with high diversity of flora and fauna, with some of the shelters dated from 100,000 BC (Late Acheulian) to 1000 AD. It was inscribed as a World Heritage Site by UNESCO in 2003 as a unique cultural property representing a convergence displayed in the art form between the people and the landscape with links to the hunting gathering economy of the past.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Bhimbetka_Caves%2C_Madhya_Pradesh.jpg/150px-Bhimbetka_Caves%2C_Madhya_Pradesh.jpg",
	enlistment_year: "2003",
	site_type: "man-made"
},
	{
	sr_no: '25',
	name: "Chhatrapati Shivaji Terminus (formerly Victoria Terminus)",
	location: "Maharashtra",
	period: "1887–1888",
	UNESCO_data: "945rev; 2004; (ii)(iv)",
	description: "The Chhatrapati Shivaji Terminus is a historic railway station in Mumbai, which serves as the headquarters of the Central Railways. It is one of the busiest railway stations in India, and serves Central Railway trains terminating in Mumbai as well as the Mumbai Suburban Railway. The station was designed by Frederick William Stevens, a consulting architect in 1887–1888. It took ten years to complete and was named \"Victoria Terminus\" in honour of the Queen and Empress Victoria; it was opened on the date of her Golden Jubilee in 1887. This famous architectural landmark in Gothic style was built as the headquarters of the Great Indian Peninsular Railway. In 1996, in response to demands by the Shiv Sena, and in keeping with the policy of renaming locations with Indian names, the station was renamed by the state government after Chatrapati Shivaji, the famed 17th-century Maratha king. On July 2, 2004, the station was nominated as a World Heritage Site by the World Heritage Committee of UNESCO.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Mumbai_India.jpg/150px-Mumbai_India.jpg",
	enlistment_year: "2004",
	site_type: "man-made"
},
	{
	sr_no: '26',
	name: "Champaner-Pavagadh Archaeological Park",
	location: "Gujarat",
	period: "Prehistoric and 8th to 14th centuries",
	UNESCO_data: "1101; 2004; iii, iv, v, vi",
	description: "Champaner-Pavagadh Archaeological Park is situated in the Panchmahal district in Gujarat, India. It was inscribed as a UNESCO World Heritage Site in 2004 as a cultural site. There is a concentration of largely unexcavated archaeological, historic and living cultural heritage properties cradled in an impressive landscape which includes prehistoric (chalcolithic) sites, a hill fortress of an early Hindu capital, and remains of the 16th-century capital of the state of Gujarat. The site also includes, among other vestiges, fortifications, palaces, religious buildings, residential precincts, agricultural structures and water installations, from the 8th to the 14th centuries. The Kalikamata Temple and Jain Temple on top of the Pavagadh Hill is considered to be an important shrine, attracting large numbers of pilgrims throughout the year. The site is the only complete and unchanged Islamic pre-Mughal city.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Top_of_Pavadagh_hill.JPG/150px-Top_of_Pavadagh_hill.JPG",
	enlistment_year: "2004",
	site_type: "man-made"
},
		{
	sr_no: '27',
	name: "Red Fort Complex",
	location: "Delhi",
	period: "1648",
	UNESCO_data: "231rev, 2007, (ii), (iii), (vi)",
	description: "The Red Fort Complex, also known as Lal Qila is a palace fort built in the 17th century by Shahjahan (1628–58), the fifth Mughal emperor as part of his new capital city of Shahjahanabad. Located to the north of Delhi, it represents the glory of the Mughal rule and is considered the Highpoint of Mughal architectural, artistic aesthetic creativity. The architectural design of the structures built within the fort represents a blend of Persian, Timuri and Indian architectural styles; Isfahan, the Persian Capital is said to have provided the inspiration to build the Red Fort Complex. The planning and design of this complex, in a geometrical grid plan with pavilion structures, was the precursor of several monuments which were built later in Rajasthan, Delhi, Agra and other places. The palace complex has been fortified by an enclosure wall built with red sandstone (hence the name Red Fort). It is adjacent to the Salimgarh Fort on its north built by Islam Shah Suri in 1546 and is now part of the Red Fort Complex (area covered 120 acres) under the revised inscription of the UNESCO World Heritage List under categories (i),(ii), (iii) and (vi). Built between 1639 and 1648, enclosing an area of size 656 metres (2,152 ft) x 328 metres (1,076 ft) and raising to a height of 23 metres (75 ft) on the right bank of the Yamuna River, it is linked to the Salimgarh Fort through a bridge over an old river channel, now a city road. The palace within the fort complex, located behind the Diwan-i-Am (Hall of Public Audience), comprises a series of richly engraved marble palace pavilions, interconnected by water channels called the Nehr-i-Behishit meaning the \"Stream of Paradise\", the Diwane-i-khas (Private audience hall), several other essential private structures, and also the Moti Masjid (Pearl Mosque built by Emperor Aurangzeb).",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Red_Fort_3.jpg/150px-Red_Fort_3.jpg",
	enlistment_year: "2007",
	site_type: "man-made"
},
	{
	sr_no: '28',
	name: "The Jantar Mantar",
	location: "Rajasthan",
	period: "1727 and 1734",
	UNESCO_data: "1338; 2010; (iii)(iv)",
	description: "The Jantar Mantar in Jaipur is a collection of architectural astronomical instruments, built by Maharaja (King) Jai Singh II at his then new capital of Jaipur between 1727 and 1734. It is modelled after the one that he had built at the Mughal capital of Delhi. He had constructed a total of five such facilities at different locations, including the ones at Delhi and Jaipur. The Jaipur observatory is the largest and best preserved of these and has a set of some 20 main fixed instruments built in masonry. It has been inscribed as cultural property on the UNESCO World Heritage List as \"an expression of the astronomical skills and cosmological concepts of the court of a scholarly prince at the end of the Mughal period.\"",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Yantramandir01.jpg/150px-Yantramandir01.jpg",
	enlistment_year: "2010",
	site_type: "man-made"
},
	{
	sr_no: '29',
	name: "Western Ghats",
	location: "Western Ghats",
	period: "-",
	UNESCO_data: "2012",
	description: "The Western Ghats, also known as the Sahyadri Mountains, a mountain range along the western side of India and one of the world's ten \"Hottest biodiversity hotspots\". A total of thirty nine properties (including national parks, wildlife sanctuaries and reserve forests) were designated as World Heritage Sites – twenty in the state of Kerala, ten in Karnataka, five in Tamil Nadu and four in Maharashtra.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Talakaveri_valley.jpg/150px-Talakaveri_valley.jpg",
	enlistment_year: "2012",
	site_type: "natural"
},
	{
	sr_no: '30',
	name: "Hill Forts of Rajasthan",
	location: "Rajasthan",
	period: "7th to 16th centuries",
	UNESCO_data: "247; 2013;(ii)(iii)",
	description: "The Hill Forts of Rajasthan, are a series of sites located on rocky outcrops of the Aravallis mountain range in Rajasthan. They represent a typo of Rajput military hill architecture, a style characterized by its mountain peak settings, utilizing the defensive properties of the terrain. These hill forts in Rajasthan represent Rajput military strongholds across a vast range of geographical and cultural zones. The number of hill forts is said to express the development of Rajput defensive architecture and are examples of Rajput military architecture. Rajput forts are well known for their defensive architecture. They enclose large territories and even complete villages in walled compounds. The property consists of Chittor Fort, Kumbhalgarh Fort, Ranthambore Fort, Gagron Fort, Amer Fort, Jaisalmer Fort. These fort complexes include palaces, Hindu and Jain temples, urban centers and trading centers.[73] Due to the variety of built structures in each hill fort, only the most significant elements of each complex are described.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Aerial_view_of_Kumbhalgarh.jpg/150px-Aerial_view_of_Kumbhalgarh.jpg",
	enlistment_year: "2013",
	site_type: "man-made"
},
	{
	sr_no: '31',
	name: "Rani ki vav (The Queen's Stepwell)",
	location: "Patan, Gujarat",
	period: "11th century AD",
	UNESCO_data: "2014",
	description: "Rani ki vav (The Queen's Stepwell) at Patan, Gujarat, is a famous stepwell It is famous for its size and sculpture. The length of Rani ki Vav is more than 64 m (210 ft) long, 20 m (66 ft) wide and 27 m (89 ft) deep and there are more than 500 sculptures of god. Most of the sculptures are in devotion to Vishnu, in the forms of Dus-Avatars Kalki, Rama, Mahisasurmardini, Narsinh, Vaman, Varahi and others representing their return to the world. Nagkanya, Yogini beautiful women – Apsara showcasing 16 different styles of make-up to look more attractive called Solah-shringar.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Rani_ki_vav_02.jpg/150px-Rani_ki_vav_02.jpg",
	enlistment_year: "2014",
	site_type: "man-made"
},
	{
	sr_no: '32',
	name: "Great Himalayan National Park",
	location: "Himachal Pradesh",
	period: "-",
	UNESCO_data: "2014",
	description: "The Great Himalayan National Park at Kullu, Himachal Pradesh, is characterized by high alpine peaks, alpine meadows and riverine forests. The 90,540 ha property includes the upper mountain glacial and snow melt water source origins of several rivers, and the catchments of water supplies that are vital to millions of downstream users. The GHNPCA protects the monsoon-affected forests and alpine meadows of the Himalayan front ranges. It is part of the Himalaya biodiversity hotspot and includes 25 forest types along with a rich assemblage of fauna species, several of which are threatened. This gives the site outstanding significance for biodiversity conservation.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/On_way_to_Sar_Pass-_colours_of_the_morning_I_IMG_7133.jpg/150px-On_way_to_Sar_Pass-_colours_of_the_morning_I_IMG_7133.jpg",
	enlistment_year: "2014",
	site_type: "natural"
},
	{
	sr_no: '33',
	name: "Archaeological Site of Nalanda Mahavihara at Nalanda, Bihar",
	location: "Bihar",
	period: "5th to 12th centuries",
	UNESCO_data: "2016",
	description: "The Nalanda Mahavihara site is in the State of Bihar, in north-eastern India. It comprises the archaeological remains of a monastic and scholastic institution dating from the 3rd century BCE to the 13th century CE. It includes stupas, shrines, viharas (residential and educational buildings) and important art works in stucco, stone and metal. Nalanda stands out as the most ancient university of the Indian Subcontinent. It engaged in the organized transmission of knowledge over an uninterrupted period of 800 years. The historical development of the site testifies to the development of Buddhism into a religion and the flourishing of monastic and educational traditions.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Nalanda_University_India_ruins.jpg/150px-Nalanda_University_India_ruins.jpg",
	enlistment_year: "2016",
	site_type: "man-made"
},
	{
	sr_no: '34',
	name: "Khangchendzonga National Park",
	location: "Sikkim",
	period: "-",
	UNESCO_data: "2016",
	description: "Located at the heart of the Himalayan range in northern India (State of Sikkim), the Khangchendzonga National Park includes a unique diversity of plains, valleys, lakes, glaciers and spectacular, snow-capped mountains covered with ancient forests, including the world's third highest peak, Mount Khangchendzonga.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kangch-Goechala.jpg/150px-Kangch-Goechala.jpg",
	enlistment_year: "2016",
	site_type: "natural"
},
	{
	sr_no: '35',
	name: "The Architectural Work Of Le Corbusier",
	location: "Chandigarh",
	period: "20th century",
	UNESCO_data: "2016",
	description: "Chosen from the work of Le Corbusier, the 17 sites comprising this transnational serial property are spread over seven countries. Urban and Architectural Work of Le Corbusier in Chandigarh, is home to numerous architectural projects of Le Corbusier, Pierre Jeanneret, Matthew Nowicki and Albert Mayer.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Palace_of_Assembly_Chandigarh_2006.jpg/150px-Palace_of_Assembly_Chandigarh_2006.jpg",
	enlistment_year: "2016",
	site_type: "man-made"
},
	{
	sr_no: '36',
	name: "Historic City of Ahmedabad",
	location: "Gujarat",
	period: "15th century",
	UNESCO_data: "2017",
	description: "The walled city of Ahmedabad, founded by Sultan Ahmad Shah I in the 15th century, on the eastern bank of the Sabarmati River, presents a rich architectural heritage from the sultanate period, notably the Bhadra citadel, the walls and gates of the Fort city and numerous mosques and tombs as well as important Hindu and Jain temples of later periods. The urban fabric is made up of densely-packed traditional houses (pols) in gated traditional streets (puras) with characteristic features such as bird feeders, public wells, and religious institutions. The city continued to flourish as the capital of the State of Gujarat for six centuries, up to the present.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Teen_Darwaza_1880s.jpg/150px-Teen_Darwaza_1880s.jpg",
	enlistment_year: "2017",
	site_type: "man-made"
},
	{
	sr_no: '37',
	name: "The Victorian and Art Deco Ensemble of Mumbai",
	location: "Maharashtra",
	period: "1862",
	UNESCO_data: "2018",
	description: "This is a collection of the Victorian Gothic buildings and Art Deco buildings. They are the Bombay High Court, Rajabai Clock Tower, Eros Cinema and the University of Mumbai.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Rajabai_Clock_Tower%2C_Mumbai_%2831_August_2008%29.jpg/150px-Rajabai_Clock_Tower%2C_Mumbai_%2831_August_2008%29.jpg",
	enlistment_year: "2018",
	site_type: "man-made"
},
	{
	sr_no: '38',
	name: "Jaipur",
	location: "Rajasthan",
	period: "1727",
	UNESCO_data: "2019",
	description: "The fortified city of Jaipur, in India's northwestern state of Rajasthan was founded in 1727 by Sawai Jai Singh II. Unlike other cities in the region located in hilly terrain, Jaipur was established on the plain and built according to a grid plan interpreted in the light of Vedic architecture. The streets feature continuous colonnaded businesses that intersect in the centre, creating large public squares called chaupars. Markets, stalls, residences and temples built along the main streets have uniform facades. The city's urban planning shows an exchange of ideas from ancient Hindu and modern Mughal as well as Western cultures. The grid plan is a model that prevails in the West, while the organization of the different districts refers to traditional Hindu concepts. Designed to be a commercial capital, the city has maintained its local commercial, artisanal and cooperative traditions to this day.",
image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Jaipur_Montage.png/150px-Jaipur_Montage.png",
	enlistment_year: "2019",
	site_type: "man-made"
},
	
	]

function seedDB(){
	data.forEach(function(seed){
		HSite.create(seed, function(err, site){
			if(err){
				console.log(err);
			}
		})
	})
}

module.exports = seedDB;