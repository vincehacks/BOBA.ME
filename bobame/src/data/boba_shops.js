var locations = JSON.parse(
  [
    {
      "City": "Alameda",
      "Name": "Bambu",
      "Address": "1321 Park St",
    },
    {
      "City": "Alameda",
      "Name": "i-Tea",
      "Address": "1626 Park St",
    },
    {
      "City": "Alameda",
      "Name": "Sharetea",
      "Address": "2670 5th St",
    },
    {
      "City": "Alameda",
      "Name": "T4",
      "Address": "1431 A Park St",
    },
    {
      "City": "Alameda",
      "Name": "Tapioca Express",
      "Address": "2306 Encinal Ave",
    },
    {
      "City": "Alameda",
      "Name": "Tea Delight",
      "Address": "650 Central Ave",
    },
    {
      "City": "Alameda",
      "Name": "Teaway",
      "Address": "2402 Central Ave",
    },
    {
      "City": "Alameda",
      "Name": "Teazzert",
      "Address": "1342 Park St",
    },
    {
      "City": "Albany",
      "Name": "Fruitlicious",
      "Address": "599 San Pablo Ave",
    },
    {
      "City": "Albany",
      "Name": "Tay Tah Cafe",
      "Address": "1182 Solano Ave",
    },
    {
      "City": "American Canyon",
      "Name": "Crave Cafe",
      "Address": "3419 Broadway St",
    },
    {
      "City": "American Canyon",
      "Name": "Quickly",
      "Address": "29 Napa Junction Rd",
    },
    {
      "City": "Antioch",
      "Name": "T4",
      "Address": "4532 Lone Tree Way",
    },
    {
      "City": "Antioch",
      "Name": "Quickly",
      "Address": "212 E 18th St",
    },
    {
      "City": "Belmont",
      "Name": "Ya-Ua Yogurt & Boba Tea",
      "Address": "1090 Alameda De Las Pulgas",
    },
    {
      "City": "Berkeley",
      "Name": "723 Tea Station",
      "Address": "2431 B Durant Ave",
    },
    {
      "City": "Berkeley",
      "Name": "85C Bakery Cafe",
      "Address": "21 Shattuck Ave",
    },
    {
      "City": "Berkeley",
      "Name": "Asha Tea House",
      "Address": "2086 University Ave",
    },
    {
      "City": "Berkeley",
      "Name": "Boba Ninja",
      "Address": "2519 B Durant Ave",
    },
    {
      "City": "Berkeley",
      "Name": "Bubble Tea Share Time",
      "Address": "1938 Shattuck Ave",
    },
    {
      "City": "Berkeley",
      "Name": "Face to Face",
      "Address": "2109 Milvia St",
    },
    {
      "City": "Berkeley",
      "Name": "Klevor Cup",
      "Address": "2300 Telegraph Ave",
    },
    {
      "City": "Berkeley",
      "Name": "Plentea",
      "Address": "2430 Durant Ave",
    },
    {
      "City": "Berkeley",
      "Name": "Purple Kow",
      "Address": "2164 Center St",
    },
    {
      "City": "Berkeley",
      "Name": "Quickly",
      "Address": "2505 G Hearst Ave",
    },
    {
      "City": "Berkeley",
      "Name": "Sharetea",
      "Address": "2440 Bancroft Way",
    },
    {
      "City": "Berkeley",
      "Name": "Sweetheart Cafe",
      "Address": "2523 Durant Ave",
    },
    {
      "City": "Berkeley",
      "Name": "Tea Fever",
      "Address": "2202 Shattuck Ave",
    },
    {
      "City": "Berkeley",
      "Name": "Tea One",
      "Address": "2380 Telegraph Ave",
    },
    {
      "City": "Berkeley",
      "Name": "Tea One",
      "Address": "200 Cory Hall",
    },
    {
      "City": "Berkeley",
      "Name": "Tea Press",
      "Address": "2552 Bancroft Way",
    },
    {
      "City": "Berkeley",
      "Name": "U Cha",
      "Address": "2199 Bancroft Way",
    },
    {
      "City": "Berkeley",
      "Name": "UCafe",
      "Address": "2550 Durant Ave",
    },
    {
      "City": "Brentwood",
      "Name": "E Tea",
      "Address": "3860 Balfour Rd",
    },
    {
      "City": "Brentwood",
      "Name": "Quickly",
      "Address": "2415 Empire Ave",
    },
    {
      "City": "Brisbane",
      "Name": "The Burrow",
      "Address": "109 Vistication",
    },
    {
      "City": "Burlingame",
      "Name": "Quickly",
      "Address": "1407 Burlingame Ave",
    },
    {
      "City": "Burlingame",
      "Name": "Tiger Tea",
      "Address": "1803 El Camino Real",
    },
    {
      "City": "Burlingame",
      "Name": "Tpumps",
      "Address": "1118 Burlingame Ave",
    },
    {
      "City": "Capitola",
      "Name": "Asian Express",
      "Address": "1955 41st Ave, Ste A-2",
    },
    {
      "City": "Capitola",
      "Name": "iCrave",
      "Address": "1601 41st Ave",
    },
    {
      "City": "Capitola",
      "Name": "Off The Block",
      "Address": "115 San Jose Ave, Ste Q",
    },
    {
      "City": "Castro Valley",
      "Name": "Cloud 9 Teahouse",
      "Address": "20669 Santa Maria Ave",
    },
    {
      "City": "Castro Valley",
      "Name": "i-Tea",
      "Address": "20666 Redwood Rd",
    },
    {
      "City": "Castro Valley",
      "Name": "Quickly",
      "Address": "20893 Redwood Rd",
    },
    {
      "City": "Castro Valley",
      "Name": "T4",
      "Address": "18911 Lake Chabot Rd",
    },
    {
      "City": "Concord",
      "Name": "Bobaloca",
      "Address": "1843 Willow Pass Rd",
    },
    {
      "City": "Concord",
      "Name": "Ice N Tea",
      "Address": "448 Sunvalley Mall",
    },
    {
      "City": "Concord",
      "Name": "Popping Fresh",
      "Address": "1825 Sutter St",
    },
    {
      "City": "Concord",
      "Name": "Quickly",
      "Address": "4115 Concord Blvd",
    },
    {
      "City": "Concord",
      "Name": "Sharetea",
      "Address": "1850 Mt Diablo St",
    },
    {
      "City": "Cupertino",
      "Name": "85C Bakery & Cafe",
      "Address": "19459 Stevens Creek Blvd",
    },
    {
      "City": "Cupertino",
      "Name": "Cafe LaTTea",
      "Address": "19501 Stevens Creek Blvd",
    },
    {
      "City": "Cupertino",
      "Name": "Coffee Society",
      "Address": "10300 Torre Ave",
    },
    {
      "City": "Cupertino",
      "Name": "Fantasia Coffee & Tea",
      "Address": "10933 N Wolfe Rd",
    },
    {
      "City": "Cupertino",
      "Name": "Happy Lemon",
      "Address": "20488 Stevens Creek Blvd",
    },
    {
      "City": "Cupertino",
      "Name": "Happy Lemon",
      "Address": "10963 N Wolfe Rd",
    },
    {
      "City": "Cupertino",
      "Name": "InTeaNet",
      "Address": "19505 Stevens Creek Blvd",
    },
    {
      "City": "Cupertino",
      "Name": "JS Stew House",
      "Address": "10271 Torre Ave",
    },
    {
      "City": "Cupertino",
      "Name": "Meet Fresh",
      "Address": "19449 Stevens Creek Blvd",
    },
    {
      "City": "Cupertino",
      "Name": "Monster Boba",
      "Address": "10787 S Blaney Ave",
    },
    {
      "City": "Cupertino",
      "Name": "Quickly",
      "Address": "21265 Stevens Creek Blvd",
    },
    {
      "City": "Cupertino",
      "Name": "Quickly",
      "Address": "10887 N Wolfe Rd",
    },
    {
      "City": "Cupertino",
      "Name": "Super Cue Cafe",
      "Address": "19620 Stevens Creek Blvd",
    },
    {
      "City": "Cupertino",
      "Name": "Tea Chansii",
      "Address": "19449 Stevens Creek Blvd",
    },
    {
      "City": "Cupertino",
      "Name": "Tea Era",
      "Address": "20916 Homestead Rd",
    },
    {
      "City": "Cupertino",
      "Name": "Ten Ren Teahouse",
      "Address": "10881 N Wolfe Rd",
    },
    {
      "City": "Cupertino",
      "Name": "Tpumps",
      "Address": "19959 Stevens Creek Blvd",
    },
    {
      "City": "Cupertino",
      "Name": "Verde Tea Express",
      "Address": "10963 N Wolfe St",
    },
    {
      "City": "Cupertino",
      "Name": "Verde Tea House",
      "Address": "10477 S De Anza Blvd",
    },
    {
      "City": "Cupertino",
      "Name": "What8ver Express",
      "Address": "10118 Bandley Dr",
    },
    {
      "City": "Daly City",
      "Name": "85C Bakery & Cafe",
      "Address": "5-L Serramonte Ctr",
    },
    {
      "City": "Daly City",
      "Name": "FrosTea Boba Tea",
      "Address": "6178 Mission St",
    },
    {
      "City": "Daly City",
      "Name": "Ketsourine Macarons",
      "Address": "500 Westlake Ctr",
    },
    {
      "City": "Daly City",
      "Name": "Onyx",
      "Address": "950 King St",
    },
    {
      "City": "Daly City",
      "Name": "Quickly",
      "Address": "175 Southgate Ave",
    },
    {
      "City": "Daly City",
      "Name": "Quickly",
      "Address": "3 Serramonte Ctr",
    },
    {
      "City": "Daly City",
      "Name": "Sheng Kee Bakery",
      "Address": "526 Westlake Ctr",
    },
    {
      "City": "Daly City",
      "Name": "Sheng Kee Bakery",
      "Address": "200 Skyline Plz",
    },
    {
      "City": "Daly City",
      "Name": "Teaven",
      "Address": "79 Skyline Plz",
    },
    {
      "City": "Dublin",
      "Name": "Cafe Tapioca",
      "Address": "7160 Regional St",
    },
    {
      "City": "Dublin",
      "Name": "i-Tea",
      "Address": "4064 Grafton St",
    },
    {
      "City": "Dublin",
      "Name": "Quickly",
      "Address": "4288 Dublin Blvd",
    },
    {
      "City": "Dublin",
      "Name": "Sharetea",
      "Address": "7375 Amador Valley Blvd",
    },
    {
      "City": "Dublin",
      "Name": "T4",
      "Address": "3744 Fallon Rd",
    },
    {
      "City": "El Cerrito",
      "Name": "Quickly",
      "Address": "3080 El Cerrito Plz",
    },
    {
      "City": "Fairfield",
      "Name": "Bobo Drinks",
      "Address": "1305 Gateway Blvd",
    },
    {
      "City": "Fairfield",
      "Name": "Quickly",
      "Address": "1350 Travis Blvd",
    },
    {
      "City": "Foster City",
      "Name": "Chatime",
      "Address": "969 A Edgewater Blvd",
    },
    {
      "City": "Foster City",
      "Name": "Quickly",
      "Address": "969 K Edgewater Blvd",
    },
    {
      "City": "Foster City",
      "Name": "Tpumps",
      "Address": "985 E Hillsdale Blvd",
    },
    {
      "City": "Fremont",
      "Name": "99% Tea House",
      "Address": "3623 Thornton Ave",
    },
    {
      "City": "Fremont",
      "Name": "Boba Queen",
      "Address": "34420 Fremont Blvd",
    },
    {
      "City": "Fremont",
      "Name": "Gong Cha",
      "Address": "46827 Warm Springs Blvd",
    },
    {
      "City": "Fremont",
      "Name": "i-Tea",
      "Address": "43421 Christy St",
    },
    {
      "City": "Fremont",
      "Name": "Icy Blue",
      "Address": "43360 Mission Blvd Ste 120",
    },
    {
      "City": "Fremont",
      "Name": "Milk & Honey Cafe",
      "Address": "34265 Fremont Blvd",
    },
    {
      "City": "Fremont",
      "Name": "One Tea",
      "Address": "46809 Warm Springs Blvd",
    },
    {
      "City": "Fremont",
      "Name": "Q Cup",
      "Address": "39129 Fremont Blvd",
    },
    {
      "City": "Fremont",
      "Name": "Q-Tea Monster",
      "Address": "39181 Cedar Blvd",
    },
    {
      "City": "Fremont",
      "Name": "Royaltea USA",
      "Address": "38509 Fremont Blvd",
    },
    {
      "City": "Fremont",
      "Name": "Sharetea",
      "Address": "3948 Washington Blvd",
    },
    {
      "City": "Fremont",
      "Name": "Sno-Crave Teahouse",
      "Address": "43773 Boscell Rd",
    },
    {
      "City": "Fremont",
      "Name": "Super Cue Cafe",
      "Address": "43743 Boscell Rd",
    },
    {
      "City": "Fremont",
      "Name": "Sweet CoCo",
      "Address": "46164 Warm Springs Blvd",
    },
    {
      "City": "Fremont",
      "Name": "Sweet Home Cafe",
      "Address": "6068 Stevenson Blvd",
    },
    {
      "City": "Fremont",
      "Name": "T4",
      "Address": "43430 Mission Blvd",
    },
    {
      "City": "Fremont",
      "Name": "T4",
      "Address": "46132 Warm Springs Blvd",
    },
    {
      "City": "Fremont",
      "Name": "T4",
      "Address": "36400 Fremont Blvd",
    },
    {
      "City": "Fremont",
      "Name": "Tarotaro Dessert & Tea House",
      "Address": "6018 Stevenson Blvd",
    },
    {
      "City": "Fremont",
      "Name": "Tata Teahouse",
      "Address": "39230 Argonaut Way",
    },
    {
      "City": "Fremont",
      "Name": "Tea Island",
      "Address": "46196 Warm Springs Blvd",
    },
    {
      "City": "Fremont",
      "Name": "Tea Papa",
      "Address": "46461 Ellsworth St",
    },
    {
      "City": "Fremont",
      "Name": "Tea Six",
      "Address": "34660 Fremont Blvd",
    },
    {
      "City": "Fremont",
      "Name": "uRbain tea",
      "Address": "1590 Washington Blvd",
    },
    {
      "City": "Fremont",
      "Name": "Verde Tea Expresso Bar",
      "Address": "47954 Warm Springs Blvd",
    },
    {
      "City": "Gilroy",
      "Name": "Got Cha",
      "Address": "3050 Hecker Pass Hwy, Gilroy, CA 95020",
    },
    {
      "City": "Half Moon Bay",
      "Name": "Boba Dude",
      "Address": "80 Cabrillo Hwy N",
    },
    {
      "City": "Hayward",
      "Name": "Eko Coffee Bar & Tea House",
      "Address": "1075 B St",
    },
    {
      "City": "Hayward",
      "Name": "Quickly",
      "Address": "25034 Hesperian Blvd",
    },
    {
      "City": "Hayward",
      "Name": "So Charm",
      "Address": "22580 Foothill Blvd",
    },
    {
      "City": "Hayward",
      "Name": "T4",
      "Address": "1033 B St",
    },
    {
      "City": "Hayward",
      "Name": "Teaster",
      "Address": "410 W A St",
    },
    {
      "City": "Hercules",
      "Name": "Cafe Tapioca",
      "Address": "Creekside Shopping Center",
    },
    {
      "City": "Hercules",
      "Name": "Tutti Frutti",
      "Address": "3700 San Pablo Ave #4",
    },
    {
      "City": "Livermore",
      "Name": "Fat Straw Cafe",
      "Address": "980 Murrieta Blvd",
    },
    {
      "City": "Livermore",
      "Name": "i-Tea",
      "Address": "2612 Livermore Outlets Dr",
    },
    {
      "City": "Livermore",
      "Name": "Quickly",
      "Address": "1106 E Stanley Blvd",
    },
    {
      "City": "Livermore",
      "Name": "T4",
      "Address": "4010 E Ave",
    },
    {
      "City": "Los Altos",
      "Name": "Teaspoon",
      "Address": "4546 El Camino Real",
    },
    {
      "City": "Manteca",
      "Name": "Tea Time Boba Cafe",
      "Address": "1375 E Yosemite Ave",
    },
    {
      "City": "Millbrae",
      "Name": "Bambu",
      "Address": "203 El Camino Real",
    },
    {
      "City": "Millbrae",
      "Name": "Eggettes",
      "Address": "979 Broadway",
    },
    {
      "City": "Millbrae",
      "Name": "Honeyberry",
      "Address": "153 El Camino Real",
    },
    {
      "City": "Millbrae",
      "Name": "Quickly",
      "Address": "325 El Camino Real",
    },
    {
      "City": "Millbrae",
      "Name": "Search Tea",
      "Address": "105 Park Blvd",
    },
    {
      "City": "Millbrae",
      "Name": "Sweet Indulgence",
      "Address": "298 Broadway",
    },
    {
      "City": "Millbrae",
      "Name": "T4",
      "Address": "315 Broadway",
    },
    {
      "City": "Millbrae",
      "Name": "Tasty Pearl Cafe",
      "Address": "213 El Camino Real",
    },
    {
      "City": "Milpitas",
      "Name": "Aiyah T House",
      "Address": "C L O S E D",
    },
    {
      "City": "Milpitas",
      "Name": "Bambu",
      "Address": "89 S Park Victoria Dr",
    },
    {
      "City": "Milpitas",
      "Name": "Bambu",
      "Address": "1756 N Milpitas Blvd",
    },
    {
      "City": "Milpitas",
      "Name": "BCute Tea",
      "Address": "200 Serra Way",
    },
    {
      "City": "Milpitas",
      "Name": "Chick & Tea",
      "Address": "1723 N Milpitas Blvd",
    },
    {
      "City": "Milpitas",
      "Name": "Fantasia Coffee & Tea",
      "Address": "528 Barber Ln",
    },
    {
      "City": "Milpitas",
      "Name": "Golden Bakery",
      "Address": "30 S Park Victoria Dr",
    },
    {
      "City": "Milpitas",
      "Name": "i-Tea",
      "Address": "760 E Calaveras Blvd",
    },
    {
      "City": "Milpitas",
      "Name": "Queen's Cafe",
      "Address": "372 Barber Ln",
    },
    {
      "City": "Milpitas",
      "Name": "Quickly",
      "Address": "1350 S Park Victoria Dr",
    },
    {
      "City": "Milpitas",
      "Name": "Sancha Bar",
      "Address": "279 Jacklin Rd",
    },
    {
      "City": "Milpitas",
      "Name": "Simpletea",
      "Address": "1535 Landess Ave",
    },
    {
      "City": "Milpitas",
      "Name": "Sno-Crave Teahouse",
      "Address": "1777 N Milpitas Blvd",
    },
    {
      "City": "Milpitas",
      "Name": "T4",
      "Address": "540 Barber Ln",
    },
    {
      "City": "Milpitas",
      "Name": "Tapioca Express",
      "Address": "1710 N Milpitas Blvd",
    },
    {
      "City": "Milpitas",
      "Name": "Tea Ren Tea Co",
      "Address": "1732 N Milpitas Blvd",
    },
    {
      "City": "Milpitas",
      "Name": "Tea Top",
      "Address": "82 Ranch Dr",
    },
    {
      "City": "Milpitas",
      "Name": "Tea Villa",
      "Address": "1679 N Milpitas Blvd",
    },
    {
      "City": "Milpitas",
      "Name": "Teasociety",
      "Address": "55 N Milpitas Blvd",
    },
    {
      "City": "Milpitas",
      "Name": "Teaspoon",
      "Address": "201 W Calaveras Blvd",
    },
    {
      "City": "Monterey",
      "Name": "Water & Leaves",
      "Address": "95 Fisherman's Wharf, Ste 1",
    },
    {
      "City": "Morgan Hill",
      "Name": "Bee & Tea",
      "Address": "1053 Cochrane Rd",
    },
    {
      "City": "Morgan Hill",
      "Name": "Eyefinitea",
      "Address": "15700 Monterey Rd",
    },
    {
      "City": "Morgan Hill",
      "Name": "TeaLite Drinks & Snow",
      "Address": "624 Tennant Station",
    },
    {
      "City": "Morgan Hill",
      "Name": "U Tea",
      "Address": "1295 E Dunne Ave",
    },
    {
      "City": "Newark",
      "Name": "85C Bakery Cafe",
      "Address": "35201 Newark Blvd",
    },
    {
      "City": "Newark",
      "Name": "Bambu",
      "Address": "6058 Mowry Ave",
    },
    {
      "City": "Newark",
      "Name": "Gong Cha",
      "Address": "39730 Cedar Blvd",
    },
    {
      "City": "Newark",
      "Name": "i-Tea",
      "Address": "34925 Newark Blvd",
    },
    {
      "City": "Newark",
      "Name": "Mandro Tea House",
      "Address": "34956 Newark Blvd",
    },
    {
      "City": "Newark",
      "Name": "Q Tea Monster",
      "Address": "39181 Cedar Blvd",
    },
    {
      "City": "Newark",
      "Name": "Tea O Day",
      "Address": "39185 Cedar Blvd",
    },
    {
      "City": "Newark",
      "Name": "Tea Station",
      "Address": "39115 Cedar Blvd",
    },
    {
      "City": "Oakland",
      "Name": "50 Tea",
      "Address": "1004 Webster St",
    },
    {
      "City": "Oakland",
      "Name": "9th Sweet Cafe",
      "Address": "536 9th St",
    },
    {
      "City": "Oakland",
      "Name": "Bambu",
      "Address": "839 International Blvd",
    },
    {
      "City": "Oakland",
      "Name": "Chick & Tea",
      "Address": "3932 Telegraph Ave",
    },
    {
      "City": "Oakland",
      "Name": "i-Tea",
      "Address": "388 9th St",
    },
    {
      "City": "Oakland",
      "Name": "Juice A-Go-Go",
      "Address": "901 Franklin St",
    },
    {
      "City": "Oakland",
      "Name": "Mr Green Bubble",
      "Address": "4299 Piedmont Ave",
    },
    {
      "City": "Oakland",
      "Name": "Quickly",
      "Address": "1243 33rd Ave",
    },
    {
      "City": "Oakland",
      "Name": "Quickly",
      "Address": "609 E 12th St",
    },
    {
      "City": "Oakland",
      "Name": "Quickly",
      "Address": "3306 Lakeshore Ave",
    },
    {
      "City": "Oakland",
      "Name": "Quickly",
      "Address": "328 10th St",
    },
    {
      "City": "Oakland",
      "Name": "Sancha Bar",
      "Address": "251 9th St",
    },
    {
      "City": "Oakland",
      "Name": "Shiny Tea",
      "Address": "901 Franklin St",
    },
    {
      "City": "Oakland",
      "Name": "Sweetheart Cafe",
      "Address": "315 9th St",
    },
    {
      "City": "Oakland",
      "Name": "T&Bowl",
      "Address": "901 Franklin St",
    },
    {
      "City": "Oakland",
      "Name": "T4",
      "Address": "1068 Webster St",
    },
    {
      "City": "Oakland",
      "Name": "The Sweet Booth",
      "Address": "388 9th St",
    },
    {
      "City": "Oakland",
      "Name": "U Tea Cafe",
      "Address": "1728 A Franklin St",
    },
    {
      "City": "Oakland",
      "Name": "Wing Man",
      "Address": "5295 College Ave",
    },
    {
      "City": "Pacifica",
      "Name": "Tea Worlds",
      "Address": "90 Eureka Sq",
    },
    {
      "City": "Palo Alto",
      "Name": "Gong Cha",
      "Address": "439 Waverly St",
    },
    {
      "City": "Palo Alto",
      "Name": "Pop Tea Bar",
      "Address": "456 Cambridge Ave",
    },
    {
      "City": "Palo Alto",
      "Name": "Sharetea",
      "Address": "540 Bryant St",
    },
    {
      "City": "Palo Alto",
      "Name": "T4",
      "Address": "165 University Ave",
    },
    {
      "City": "Pittsburg",
      "Name": "i-Tea",
      "Address": "2121 Loveridge Rd",
    },
    {
      "City": "Pittsburg",
      "Name": "Skyview Noodle & Tea",
      "Address": "200 E 3rd St",
    },
    {
      "City": "Pleasant Hill",
      "Name": "Milk Tea Lab",
      "Address": "1972 Contra Costa Blvd",
    },
    {
      "City": "Pleasant Hill",
      "Name": "Quickly",
      "Address": "60-A Golf Club Rd",
    },
    {
      "City": "Pleasanton",
      "Name": "Aroma Tapioca Tea & Coffee",
      "Address": "4833 Hopyard Rd",
    },
    {
      "City": "Pleasanton",
      "Name": "Kung Fu Tea",
      "Address": "4299 Rosewood Dr",
    },
    {
      "City": "Pleasanton",
      "Name": "Le Tea",
      "Address": "4299 Rosewood Dr",
    },
    {
      "City": "Pleasanton",
      "Name": "Quickly",
      "Address": "Stoneridge Mall",
    },
    {
      "City": "Pleasanton",
      "Name": "Tea Breeze",
      "Address": "4275 Rosewood Dr",
    },
    {
      "City": "Pleasanton",
      "Name": "Westea",
      "Address": "4233 Rosewood Dr",
    },
    {
      "City": "Pleasanton",
      "Name": "Yolanda",
      "Address": "600 Main St F",
    },
    {
      "City": "Redwood City",
      "Name": "Chatime",
      "Address": "2202 Broadway St",
    },
    {
      "City": "Redwood City",
      "Name": "Comebuy Drinks",
      "Address": "2074 Broadway",
    },
    {
      "City": "Redwood City",
      "Name": "Quickly",
      "Address": "300 Walnut St",
    },
    {
      "City": "Redwood City",
      "Name": "Teaquation",
      "Address": "1036 El Camino Real",
    },
    {
      "City": "Redwood City",
      "Name": "Teatime",
      "Address": "1003 El Camino Real",
    },
    {
      "City": "Richmond",
      "Name": "Bubble Loca",
      "Address": "3288 Pierce St",
    },
    {
      "City": "Richmond",
      "Name": "Quickly",
      "Address": "3288 Pierce St",
    },
    {
      "City": "Richmond",
      "Name": "Sunny Day Sweet House",
      "Address": "3288 Pierce St",
    },
    {
      "City": "Richmond",
      "Name": "Tea Ren Tea Co",
      "Address": "3288 Pierce St",
    },
    {
      "City": "Rohnert Park",
      "Name": "Quickly",
      "Address": "1451 Southwest Blvd",
    },
    {
      "City": "Rohnert Park",
      "Name": "Tea Rex",
      "Address": "1 Padre Pkwy",
    },
    {
      "City": "Rohnert Park",
      "Name": "ThirsTea",
      "Address": "6585 Commerce Blvd",
    },
    {
      "City": "San Bruno",
      "Name": "Aqua Club Dessert",
      "Address": "440 San Mateo Ave",
    },
    {
      "City": "San Bruno",
      "Name": "Quickly",
      "Address": "1212-A El Camino Real",
    },
    {
      "City": "San Bruno",
      "Name": "Raging Boba",
      "Address": "719 Camino Plaza",
    },
    {
      "City": "San Carlos",
      "Name": "Boba Guys",
      "Address": "872 Laurel St",
    },
    {
      "City": "San Francisco",
      "Name": "Asha Tea House",
      "Address": "17 Kearny St",
    },
    {
      "City": "San Francisco",
      "Name": "Bambu",
      "Address": "6050 Geary Blvd",
    },
    {
      "City": "San Francisco",
      "Name": "BB Tea Station",
      "Address": "1314 Noriega St",
    },
    {
      "City": "San Francisco",
      "Name": "Boba Delight",
      "Address": "528 Larkin St",
    },
    {
      "City": "San Francisco",
      "Name": "Boba Guys - Fillmore",
      "Address": "1522 Fillmore St",
    },
    {
      "City": "San Francisco",
      "Name": "Boba Guys - Hayes Valley",
      "Address": "8 Octavia St",
    },
    {
      "City": "San Francisco",
      "Name": "Boba Guys - Mission",
      "Address": "3491 19th St",
    },
    {
      "City": "San Francisco",
      "Name": "Boba Guys - Potrero",
      "Address": "1002 16th St",
    },
    {
      "City": "San Francisco",
      "Name": "Boba Guys - Union Square",
      "Address": "429 Stockton St",
    },
    {
      "City": "San Francisco",
      "Name": "Bobapioca",
      "Address": "708 Kearny St",
    },
    {
      "City": "San Francisco",
      "Name": "Bubblecup",
      "Address": "1900 Clement St",
    },
    {
      "City": "San Francisco",
      "Name": "Chatown",
      "Address": "1170 Powell St",
    },
    {
      "City": "San Francisco",
      "Name": "Chilly Munch",
      "Address": "2101 Showers Dr",
    },
    {
      "City": "San Francisco",
      "Name": "Cool Tea Bar",
      "Address": "103 Waverly Pl",
    },
    {
      "City": "San Francisco",
      "Name": "Cool Tea Bar",
      "Address": "643 Clay St",
    },
    {
      "City": "San Francisco",
      "Name": "Cuppa",
      "Address": "2810 Diamond St",
    },
    {
      "City": "San Francisco",
      "Name": "E Tea",
      "Address": "5344 Geary Blvd",
    },
    {
      "City": "San Francisco",
      "Name": "E Tea",
      "Address": "839 Kearny St",
    },
    {
      "City": "San Francisco",
      "Name": "Eggettes",
      "Address": "3136 Noriega St",
    },
    {
      "City": "San Francisco",
      "Name": "Golden Island Cafe",
      "Address": "1300 Noriega St",
    },
    {
      "City": "San Francisco",
      "Name": "Good Earth Cafe",
      "Address": "835 Kearny St",
    },
    {
      "City": "San Francisco",
      "Name": "Gosu",
      "Address": "1014 Clement St",
    },
    {
      "City": "San Francisco",
      "Name": "Homeplate Boba",
      "Address": "131-155 King St",
    },
    {
      "City": "San Francisco",
      "Name": "Honey B Tea",
      "Address": "2201 Clement St",
    },
    {
      "City": "San Francisco",
      "Name": "i-Tea",
      "Address": "253 Kearny St",
    },
    {
      "City": "San Francisco",
      "Name": "i-Tea",
      "Address": "2150 Irving St",
    },
    {
      "City": "San Francisco",
      "Name": "InfiniTea",
      "Address": "5351 Geary Blvd",
    },
    {
      "City": "San Francisco",
      "Name": "Irving Cafe",
      "Address": "716 Irving St",
    },
    {
      "City": "San Francisco",
      "Name": "Jazen Tea",
      "Address": "220 Castro St",
    },
    {
      "City": "San Francisco",
      "Name": "Katea",
      "Address": "3128 16th St",
    },
    {
      "City": "San Francisco",
      "Name": "Keep It",
      "Address": "1170 Powell St",
    },
    {
      "City": "San Francisco",
      "Name": "Kowloong Tong",
      "Address": "393 7th Ave",
    },
    {
      "City": "San Francisco",
      "Name": "Little Sweet",
      "Address": "3836 Geary Blvd",
    },
    {
      "City": "San Francisco",
      "Name": "Mitsu Teahouse",
      "Address": "22 Peace Plz",
    },
    {
      "City": "San Francisco",
      "Name": "Mr & Mrs Tea House",
      "Address": "544 Clement",
    },
    {
      "City": "San Francisco",
      "Name": "Mr T Cafe",
      "Address": "4689 Mission St",
    },
    {
      "City": "San Francisco",
      "Name": "Nameless Tea & Coffee",
      "Address": "981 Geneva Ave",
    },
    {
      "City": "San Francisco",
      "Name": "O Sweet Tea",
      "Address": "853 Clay St",
    },
    {
      "City": "San Francisco",
      "Name": "Ocha Tea Cafe & Restaurant",
      "Address": "1350 Grand Rd, Ste 8",
    },
    {
      "City": "San Francisco",
      "Name": "Pearl Cafe",
      "Address": "506 Showers Dr",
    },
    {
      "City": "San Francisco",
      "Name": "Plentea",
      "Address": "341 Kearny St",
    },
    {
      "City": "San Francisco",
      "Name": "Purple Kow",
      "Address": "3620 Balboa St",
    },
    {
      "City": "San Francisco",
      "Name": "Quickly",
      "Address": "709 Larkin St",
    },
    {
      "City": "San Francisco",
      "Name": "Quickly",
      "Address": "2800 Leavenworth St",
    },
    {
      "City": "San Francisco",
      "Name": "Rockit Swirl",
      "Address": "2810 Diamond St",
    },
    {
      "City": "San Francisco",
      "Name": "Sharetea",
      "Address": "135 4th St",
    },
    {
      "City": "San Francisco",
      "Name": "Sharetea",
      "Address": "Westfield San Francisco Centre",
    },
    {
      "City": "San Francisco",
      "Name": "Steap Tea Bar",
      "Address": "827 Sacramento St",
    },
    {
      "City": "San Francisco",
      "Name": "Steep",
      "Address": "240 Ritch St",
    },
    {
      "City": "San Francisco",
      "Name": "Super Cue Cafe",
      "Address": "1139 Taraval St",
    },
    {
      "City": "San Francisco",
      "Name": "Super Cue Cafe",
      "Address": "1330 Ocean Ave",
    },
    {
      "City": "San Francisco",
      "Name": "Sweet A Little",
      "Address": "460 Brannan St",
    },
    {
      "City": "San Francisco",
      "Name": "Sweetheart Cafe",
      "Address": "909 Grant Ave",
    },
    {
      "City": "San Francisco",
      "Name": "Sweethut",
      "Address": "519 Clement",
    },
    {
      "City": "San Francisco",
      "Name": "T & T Cafe",
      "Address": "601 Broadway St",
    },
    {
      "City": "San Francisco",
      "Name": "Tancca",
      "Address": "776 Broadway",
    },
    {
      "City": "San Francisco",
      "Name": "Tapioca Express",
      "Address": "740 Villa St",
    },
    {
      "City": "San Francisco",
      "Name": "Tea Annie",
      "Address": "1712 Miramonte Ave",
    },
    {
      "City": "San Francisco",
      "Name": "Tea FM",
      "Address": "1353 Taraval St",
    },
    {
      "City": "San Francisco",
      "Name": "Tea FM",
      "Address": "Stonestown Mall",
    },
    {
      "City": "San Francisco",
      "Name": "Tea One",
      "Address": "5336 Geary Blvd",
    },
    {
      "City": "San Francisco",
      "Name": "Tea Plus",
      "Address": "2541 San Bruno Ave",
    },
    {
      "City": "San Francisco",
      "Name": "Teaspoon",
      "Address": "2125 Polk St",
    },
    {
      "City": "San Francisco",
      "Name": "Teaspoon",
      "Address": "236 Castro St",
    },
    {
      "City": "San Francisco",
      "Name": "Teaway",
      "Address": "2250 Irving St",
    },
    {
      "City": "San Francisco",
      "Name": "Ten Ren Teahouse",
      "Address": "550 Grant Ave",
    },
    {
      "City": "San Francisco",
      "Name": "Ten Ren Teahouse",
      "Address": "949 Grant Ave",
    },
    {
      "City": "San Francisco",
      "Name": "The Boba Shop",
      "Address": "2071 3rd St",
    },
    {
      "City": "San Francisco",
      "Name": "TJ Cups",
      "Address": "2437 Noriega St",
    },
    {
      "City": "San Francisco",
      "Name": "Tpumps",
      "Address": "1916 Irving St",
    },
    {
      "City": "San Francisco",
      "Name": "Verde Tea Cafe",
      "Address": "852 Villa St",
    },
    {
      "City": "San Francisco",
      "Name": "Verde Tea Kitchen",
      "Address": "210 Hope St",
    },
    {
      "City": "San Francisco",
      "Name": "Wonderful Dessert & Cafe",
      "Address": "2035 Irving St",
    },
    {
      "City": "San Jose",
      "Name": "85C Bakery Cafe",
      "Address": "1183 S De Anza Blvd",
    },
    {
      "City": "San Jose",
      "Name": "85C Bakery Cafe",
      "Address": "541 W Capitol Expy",
    },
    {
      "City": "San Jose",
      "Name": "Amor Cafe & Tea",
      "Address": "110 E San Fernando St",
    },
    {
      "City": "San Jose",
      "Name": "Amor Cafe & Tea",
      "Address": "925 Blossom Hill Rd",
    },
    {
      "City": "San Jose",
      "Name": "Bambu",
      "Address": "1688 Hostetter Rd",
    },
    {
      "City": "San Jose",
      "Name": "Bambu",
      "Address": "1908 Aborn Rd",
    },
    {
      "City": "San Jose",
      "Name": "Bambu",
      "Address": "949 McLaughlin Ave",
    },
    {
      "City": "San Jose",
      "Name": "BFresh",
      "Address": "3005 Silver Creek Rd",
    },
    {
      "City": "San Jose",
      "Name": "Black Pearl",
      "Address": "1055 E Brokaw Rd",
    },
    {
      "City": "San Jose",
      "Name": "Black Pearl",
      "Address": "3245 Sierra Rd",
    },
    {
      "City": "San Jose",
      "Name": "Boba Bar",
      "Address": "310 S 3rd St",
    },
    {
      "City": "San Jose",
      "Name": "Boba Pub",
      "Address": "1576 Branham Ln",
    },
    {
      "City": "San Jose",
      "Name": "Boiling Point",
      "Address": "1698 Hostetter Rd",
    },
    {
      "City": "San Jose",
      "Name": "Bubbly",
      "Address": "1816 Tully Rd",
    },
    {
      "City": "San Jose",
      "Name": "Cha Time",
      "Address": "311 N Capitol Ave",
    },
    {
      "City": "San Jose",
      "Name": "Chatime",
      "Address": "311 N Capitol Ave",
    },
    {
      "City": "San Jose",
      "Name": "Comebuy",
      "Address": "Oakridge Mall",
    },
    {
      "City": "San Jose",
      "Name": "Cool Tea Bar",
      "Address": "3005 Silver Creek Rd",
    },
    {
      "City": "San Jose",
      "Name": "Createave Cafe by Hello Dessert",
      "Address": "1698 Hostetter Rd, Ste I",
    },
    {
      "City": "San Jose",
      "Name": "Cutea",
      "Address": "3126 Senter Rd",
    },
    {
      "City": "San Jose",
      "Name": "Ding Tea",
      "Address": "3151 Senter Rd",
    },
    {
      "City": "San Jose",
      "Name": "Fantasia",
      "Address": "378 Santana Row",
    },
    {
      "City": "San Jose",
      "Name": "Gong Cha",
      "Address": "1600 Saratoga Ave Ste 115",
    },
    {
      "City": "San Jose",
      "Name": "Gong Cha",
      "Address": "1701 Lundy Ave",
    },
    {
      "City": "San Jose",
      "Name": "Gong Cha",
      "Address": "Eastridge Mall",
    },
    {
      "City": "San Jose",
      "Name": "Happy Lemon",
      "Address": "3005 Silver Creek Rd",
    },
    {
      "City": "San Jose",
      "Name": "i-Tea",
      "Address": "2936 Aborn Square",
    },
    {
      "City": "San Jose",
      "Name": "Jazen Tea",
      "Address": "1834 Tully Rd",
    },
    {
      "City": "San Jose",
      "Name": "Jazen Tea",
      "Address": "1089 S De Anza Blvd",
    },
    {
      "City": "San Jose",
      "Name": "Jazen Tea",
      "Address": "925 Blossom Hill Dr",
    },
    {
      "City": "San Jose",
      "Name": "Jazen Tea",
      "Address": "3065 McKee Rd",
    },
    {
      "City": "San Jose",
      "Name": "KTV Cafe & Karaoke",
      "Address": "1132 S De Anza Blvd",
    },
    {
      "City": "San Jose",
      "Name": "Meow Tea",
      "Address": "2857 Senter Rd",
    },
    {
      "City": "San Jose",
      "Name": "One Tea",
      "Address": "231 E Santa Clara St",
    },
    {
      "City": "San Jose",
      "Name": "Oooh",
      "Address": "1783 E Capitol Expwy",
    },
    {
      "City": "San Jose",
      "Name": "Passion T",
      "Address": "2266 Senter Rd, Ste 128",
    },
    {
      "City": "San Jose",
      "Name": "Pekoe",
      "Address": "3276 S White Rd",
    },
    {
      "City": "San Jose",
      "Name": "Pop Up Tea",
      "Address": "185 Branham Ln",
    },
    {
      "City": "San Jose",
      "Name": "Pure Tea Bar",
      "Address": "6195 Santa Teresa Blvd",
    },
    {
      "City": "San Jose",
      "Name": "Purple Kow",
      "Address": "2435 S King Rd",
    },
    {
      "City": "San Jose",
      "Name": "QQQ Tea",
      "Address": "1600 S De Anza Blvd",
    },
    {
      "City": "San Jose",
      "Name": "Quickly",
      "Address": "Eastridge Mall, 2200 Eastridge Loop",
    },
    {
      "City": "San Jose",
      "Name": "Quickly",
      "Address": "199 S 4th St",
    },
    {
      "City": "San Jose",
      "Name": "Shake Tea",
      "Address": "925 Blossom Hill Rd",
    },
    {
      "City": "San Jose",
      "Name": "Sharetea",
      "Address": "1728 Hostetter Rd",
    },
    {
      "City": "San Jose",
      "Name": "Sharetea",
      "Address": "5627 Cottle Rd",
    },
    {
      "City": "San Jose",
      "Name": "Shincha Tea",
      "Address": "2487 Alvin Ave",
    },
    {
      "City": "San Jose",
      "Name": "Shincha Tea",
      "Address": "2487 Alvin Ave",
    },
    {
      "City": "San Jose",
      "Name": "Simply Boba",
      "Address": "3005 Silver Creek Rd",
    },
    {
      "City": "San Jose",
      "Name": "Sno-Crave Teahouse",
      "Address": "2569 S King St",
    },
    {
      "City": "San Jose",
      "Name": "Soyful Desserts",
      "Address": "999 Story Rd",
    },
    {
      "City": "San Jose",
      "Name": "Soyful Desserts",
      "Address": "3005 Silver Creek Rd",
    },
    {
      "City": "San Jose",
      "Name": "Soyful Desserts",
      "Address": "2569 King Rd",
    },
    {
      "City": "San Jose",
      "Name": "Square Bar Cafe",
      "Address": "1154 Story Rd",
    },
    {
      "City": "San Jose",
      "Name": "Sweet Gelato Tea Lounge",
      "Address": "979 Story Rd",
    },
    {
      "City": "San Jose",
      "Name": "T Spot",
      "Address": "2520 Berryessa Rd",
    },
    {
      "City": "San Jose",
      "Name": "T4",
      "Address": "1671 N Capitol Ave",
    },
    {
      "City": "San Jose",
      "Name": "T4",
      "Address": "969 Story Rd",
    },
    {
      "City": "San Jose",
      "Name": "Tapioca Express",
      "Address": "81 Curtner Ave",
    },
    {
      "City": "San Jose",
      "Name": "Tapioca Express",
      "Address": "5861 Snell Ave",
    },
    {
      "City": "San Jose",
      "Name": "Tapioca Express",
      "Address": "3005 Silver Creek Rd",
    },
    {
      "City": "San Jose",
      "Name": "Tapioca Express",
      "Address": "2285 McKee Rd",
    },
    {
      "City": "San Jose",
      "Name": "Tapioca Express",
      "Address": "457 Saratoga Ave",
    },
    {
      "City": "San Jose",
      "Name": "Tapioca Island",
      "Address": "5815 Cottle Rd",
    },
    {
      "City": "San Jose",
      "Name": "Tastea",
      "Address": "1160 N Capitol Ave",
    },
    {
      "City": "San Jose",
      "Name": "Tasty Pot",
      "Address": "1143 Story Rd",
    },
    {
      "City": "San Jose",
      "Name": "Tasty Pot",
      "Address": "1183 S De Anza Blvd",
    },
    {
      "City": "San Jose",
      "Name": "Tea Bella",
      "Address": "3005 Silver Creek Rd",
    },
    {
      "City": "San Jose",
      "Name": "Tea FM",
      "Address": "1783 E Capitol Expy",
    },
    {
      "City": "San Jose",
      "Name": "Tea Lyfe",
      "Address": "989 Story Rd",
    },
    {
      "City": "San Jose",
      "Name": "Tea Top",
      "Address": "6158 Bollinger Rd",
    },
    {
      "City": "San Jose",
      "Name": "Teasociety",
      "Address": "1658 E Capitol Expy",
    },
    {
      "City": "San Jose",
      "Name": "Teaspoon",
      "Address": "4328 Moorpark Ave",
    },
    {
      "City": "San Jose",
      "Name": "TeaZer",
      "Address": "22 N White Rd",
    },
    {
      "City": "San Jose",
      "Name": "The Pennywort",
      "Address": "2056 N Capitol Ave",
    },
    {
      "City": "San Jose",
      "Name": "The Sweet Corner",
      "Address": "989 Story Rd, Ste 8039",
    },
    {
      "City": "San Jose",
      "Name": "The Tea Zone",
      "Address": "980 S Winchester Blvd",
    },
    {
      "City": "San Jose",
      "Name": "The Tea Zone",
      "Address": "4750 Almaden Expy",
    },
    {
      "City": "San Jose",
      "Name": "The Tea Zone Lounge",
      "Address": "403 N Capitol Ave",
    },
    {
      "City": "San Jose",
      "Name": "Thirst Tea",
      "Address": "150 S 1st St",
    },
    {
      "City": "San Jose",
      "Name": "Tleaf Teapresso",
      "Address": "860 Blossom Hill Rd",
    },
    {
      "City": "San Jose",
      "Name": "Vampire Penguin Jastea",
      "Address": "2671 Cropley Ave",
    },
    {
      "City": "San Jose",
      "Name": "Vanitea Snow Lounge",
      "Address": "1195 Branham Ln",
    },
    {
      "City": "San Leandro",
      "Name": "T4",
      "Address": "1443 E 14th St",
    },
    {
      "City": "San Leandro",
      "Name": "8-Twelve Oriental Market",
      "Address": "596 E 14th St",
    },
    {
      "City": "San Leandro",
      "Name": "D T Dim Sum & Tea",
      "Address": "1970 Lewelling Blvd",
    },
    {
      "City": "San Leandro",
      "Name": "East 14th Bakery & Cafe",
      "Address": "1780 East 14th Street",
    },
    {
      "City": "San Leandro",
      "Name": "i-Tea",
      "Address": "177 Pelton Ctr Way",
    },
    {
      "City": "San Leandro",
      "Name": "N Tea",
      "Address": "699 Lewelling Blvd",
    },
    {
      "City": "San Leandro",
      "Name": "Quickly",
      "Address": "15251 Hesperian Blvd",
    },
    {
      "City": "San Leandro",
      "Name": "Sharetea",
      "Address": "699 Lewelling Blvd",
    },
    {
      "City": "San Leandro",
      "Name": "Sweethoney Dessert",
      "Address": "1423 E 14th St",
    },
    {
      "City": "San Leandro",
      "Name": "Tapioca Express",
      "Address": "129 W San Joaquin Ave",
    },
    {
      "City": "San Mateo",
      "Name": "Bambu",
      "Address": "153 South B St",
    },
    {
      "City": "San Mateo",
      "Name": "Bobabia",
      "Address": "217 - 273 Baldwin Ave",
    },
    {
      "City": "San Mateo",
      "Name": "Cha Express",
      "Address": "212 E 3rd Ave",
    },
    {
      "City": "San Mateo",
      "Name": "Chatime",
      "Address": "165 E 4th Ave",
    },
    {
      "City": "San Mateo",
      "Name": "Dessert Republic",
      "Address": "138 Main St",
    },
    {
      "City": "San Mateo",
      "Name": "Eggettes",
      "Address": "47 S B St",
    },
    {
      "City": "San Mateo",
      "Name": "Fresh Nation Desserts",
      "Address": "30 E 3rd Ave",
    },
    {
      "City": "San Mateo",
      "Name": "Gong Cha",
      "Address": "110 S B St",
    },
    {
      "City": "San Mateo",
      "Name": "Ocha Tea Cafe",
      "Address": "2986 S Norfolk St",
    },
    {
      "City": "San Mateo",
      "Name": "Quickly",
      "Address": "142 E 3rd Ave",
    },
    {
      "City": "San Mateo",
      "Name": "Sharetea",
      "Address": "204B E 2nd Ave",
    },
    {
      "City": "San Mateo",
      "Name": "Super Cue Cafe",
      "Address": "2986 S Norfolk St",
    },
    {
      "City": "San Mateo",
      "Name": "Teaspoon",
      "Address": "128 E 3rd Ave",
    },
    {
      "City": "San Rafael",
      "Name": "Quickly",
      "Address": "1128 4th St",
    },
    {
      "City": "San Rafael",
      "Name": "TPartea Boba Drinks & Banh Mi",
      "Address": "5800 Northgate Dr",
    },
    {
      "City": "San Ramon",
      "Name": "Sharetea",
      "Address": "2441 San Ramon Valley Blvd",
    },
    {
      "City": "San Ramon",
      "Name": "T4",
      "Address": "9140 Alcosta Blvd",
    },
    {
      "City": "San Ramon",
      "Name": "T4",
      "Address": "11020 Bollinger Canyon Rd",
    },
    {
      "City": "Santa Clara",
      "Name": "Bubble Bay Tea",
      "Address": "4300 Great America Pkwy",
    },
    {
      "City": "Santa Clara",
      "Name": "Butterfly",
      "Address": "1000Lafayette St",
    },
    {
      "City": "Santa Clara",
      "Name": "Comebuy",
      "Address": "2712 Augustine Dr, St 110",
    },
    {
      "City": "Santa Clara",
      "Name": "Fantasia",
      "Address": "3969 Rivermark Plz",
    },
    {
      "City": "Santa Clara",
      "Name": "Jazen Tea",
      "Address": "3147 Mission College Blvd",
    },
    {
      "City": "Santa Clara",
      "Name": "Sharetea",
      "Address": "1171 Homestead Rd",
    },
    {
      "City": "Santa Clara",
      "Name": "The Moo Bar",
      "Address": "1080 Kiely Blvd",
    },
    {
      "City": "Santa Cruz",
      "Name": "BubbleCups",
      "Address": "1940 Piner Rd",
    },
    {
      "City": "Santa Cruz",
      "Name": "Quickly",
      "Address": "1010 Pacific Ave",
    },
    {
      "City": "Santa Rosa",
      "Name": "Quickly",
      "Address": "1880 Mendocino Ave",
    },
    {
      "City": "Santa Rosa",
      "Name": "Sunny's Boba & More",
      "Address": "519 4th St",
    },
    {
      "City": "Santa Rosa",
      "Name": "T4 & Poke",
      "Address": "2280 Mendocino Ave",
    },
    {
      "City": "Santa Rosa",
      "Name": "Tea World",
      "Address": "1620 Mendocino Ave",
    },
    {
      "City": "Santa Rosa",
      "Name": "Tea Zone & Fruit Bar",
      "Address": "1717 Mission St",
    },
    {
      "City": "South San Francisco",
      "Name": "Bambu",
      "Address": "2223 Gellert Blvd",
    },
    {
      "City": "South San Francisco",
      "Name": "Cool Tea Bar",
      "Address": "630 El Camino Real",
    },
    {
      "City": "South San Francisco",
      "Name": "Eggettes",
      "Address": "639 El Camino Real",
    },
    {
      "City": "South San Francisco",
      "Name": "Quickly",
      "Address": "375 Grand Ave",
    },
    {
      "City": "Stockton",
      "Name": "Bambu",
      "Address": "1304 E Hammer Ln",
    },
    {
      "City": "Stockton",
      "Name": "Bon Mange",
      "Address": "2819 W March Ln",
    },
    {
      "City": "Stockton",
      "Name": "Lollicup",
      "Address": "2233 Grand Canal Blvd",
    },
    {
      "City": "Stockton",
      "Name": "Manila Express",
      "Address": "7840 West Ln",
    },
    {
      "City": "Stockton",
      "Name": "New York Donut House",
      "Address": "1864 Country Club Blvd",
    },
    {
      "City": "Stockton",
      "Name": "Quickly",
      "Address": "960 W Robinhood Dr",
    },
    {
      "City": "Stockton",
      "Name": "T4",
      "Address": "1215 W March Ln",
    },
    {
      "City": "Sunnyvale",
      "Name": "Bambu",
      "Address": "189 W Washington Ave",
    },
    {
      "City": "Sunnyvale",
      "Name": "Bobo Drinks",
      "Address": "520 Lawrence Expy",
    },
    {
      "City": "Sunnyvale",
      "Name": "Happy Lemon",
      "Address": "605 E El Camino Real",
    },
    {
      "City": "Sunnyvale",
      "Name": "Quickly",
      "Address": "415 N Mary Ave",
    },
    {
      "City": "Sunnyvale",
      "Name": "Sharetea",
      "Address": "568 E El Camino Real",
    },
    {
      "City": "Sunnyvale",
      "Name": "Tea Fans",
      "Address": "927 E Arques Ave",
    },
    {
      "City": "Sunnyvale",
      "Name": "Teanado",
      "Address": "550 Lakeside Dr",
    },
    {
      "City": "Tracy",
      "Name": "T4",
      "Address": "110 W 10th St",
    },
    {
      "City": "Tracy",
      "Name": "Cafe Dazzling",
      "Address": "1876 W 11th St",
    },
    {
      "City": "Tracy",
      "Name": "Pop",
      "Address": "563 W Clover Rd",
    },
    {
      "City": "Tracy",
      "Name": "Quickly",
      "Address": "2251 W Grant Line Rd",
    },
    {
      "City": "Tracy",
      "Name": "Quickly",
      "Address": "3200 Naglee Rd",
    },
    {
      "City": "Tracy",
      "Name": "Sno-Crave Teahouse",
      "Address": "1876 W 11th St",
    },
    {
      "City": "Union City",
      "Name": "Bambu",
      "Address": "31812-31822 Alvarado Blvd",
    },
    {
      "City": "Union City",
      "Name": "Joy 4 Tea",
      "Address": "32148 Alvardo Blvd",
    },
    {
      "City": "Union City",
      "Name": "Mr Green Bubble",
      "Address": "1644 Decoto Rd",
    },
    {
      "City": "Union City",
      "Name": "Sharetea",
      "Address": "34391 Alvarado-Niles Rd",
    },
    {
      "City": "Union City",
      "Name": "Sno-Crave Teahouse",
      "Address": "1788 Decoto Rd",
    },
    {
      "City": "Union City",
      "Name": "Tapioca Express",
      "Address": "1707 Decoto Rd",
    },
    {
      "City": "Vacaville",
      "Name": "Peace Love Boba",
      "Address": "3083 Alamo Dr",
    },
    {
      "City": "Vacaville",
      "Name": "Quickly",
      "Address": "1661 E Monte Vista Ave",
    },
    {
      "City": "Vallejo",
      "Name": "Quickly",
      "Address": "145 Plaza Dr",
    },
    {
      "City": "Vallejo",
      "Name": "Tapioca Express",
      "Address": "3720 Sonoma Blvd",
    },
    {
      "City": "Walnut Creek",
      "Name": "Chalogy",
      "Address": "1349 Locust St",
    },
    {
      "City": "Walnut Creek",
      "Name": "Forever Yogurt Bee & Tea",
      "Address": "2905 N Main St",
    },
    {
      "City": "Walnut Creek",
      "Name": "i-Tea",
      "Address": "1245 N Broadway",
    },
    {
      "City": "Walnut Creek",
      "Name": "Ice Monster",
      "Address": "2230 Oak Grove Rd",
    },
    {
      "City": "Walnut Creek",
      "Name": "Mr Green Bubble",
      "Address": "1529 Locust St",
    }
  ]
);