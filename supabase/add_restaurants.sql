-- Run this in Supabase SQL Editor to add 87 more restaurants

INSERT INTO restaurants (name, slug, cuisine, price_range, address, city, state, zip_code, latitude, longitude, is_food_truck, is_active) VALUES
-- Middle Eastern
('Sahara Restaurant', 'sahara-restaurant', 'Middle Eastern', '$$', '7235 Chase Rd', 'Dearborn', 'MI', '48126', 42.3156, -83.2456, false, true),
('Al Tayeb Restaurant', 'al-tayeb-restaurant', 'Middle Eastern', '$$', '14300 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3312, -83.2012, false, true),
('The Kabob House', 'the-kabob-house', 'Middle Eastern', '$$', '5912 Chase Rd', 'Dearborn', 'MI', '48126', 42.3167, -83.2389, false, true),
('Beirut Bistro', 'beirut-bistro', 'Middle Eastern', '$$$', '22301 Michigan Ave', 'Dearborn', 'MI', '48124', 42.3134, -83.2267, false, true),
('Damascus Kitchen', 'damascus-kitchen', 'Middle Eastern', '$$', '6721 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3234, -83.1634, false, true),
('Oasis Grill', 'oasis-grill', 'Middle Eastern', '$$', '13456 Ford Rd', 'Dearborn', 'MI', '48126', 42.3356, -83.1923, false, true),
('Petra Mediterranean', 'petra-mediterranean', 'Middle Eastern', '$$$', '5678 Greenfield Rd', 'Dearborn', 'MI', '48126', 42.3198, -83.2112, false, true),
('Sultan Palace', 'sultan-palace', 'Middle Eastern', '$$', '8901 Wyoming Ave', 'Dearborn', 'MI', '48126', 42.3267, -83.1789, false, true),
('Falafel King', 'falafel-king', 'Middle Eastern', '$', '4532 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3145, -83.1601, false, true),
('Mediterranean Flame', 'mediterranean-flame', 'Middle Eastern', '$$', '15678 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3289, -83.2156, false, true),

-- Lebanese
('Hamido Restaurant', 'hamido-restaurant', 'Lebanese', '$$', '12855 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3189, -83.1956, false, true),
('Lebnani House', 'lebnani-house', 'Lebanese', '$$', '22039 Michigan Ave', 'Dearborn', 'MI', '48124', 42.3145, -83.2234, false, true),
('Zaatar W Zeit', 'zaatar-w-zeit', 'Lebanese', '$$', '15401 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3298, -83.2089, false, true),
('Cedar Garden', 'cedar-garden', 'Lebanese', '$$', '7890 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3256, -83.1678, false, true),
('Tannourine', 'tannourine', 'Lebanese', '$$$', '18234 Ford Rd', 'Dearborn', 'MI', '48126', 42.3378, -83.2345, false, true),
('Tripoli Restaurant', 'tripoli-restaurant', 'Lebanese', '$$', '9012 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3167, -83.1823, false, true),
('Beirut Express', 'beirut-express', 'Lebanese', '$', '5432 Chase Rd', 'Dearborn', 'MI', '48126', 42.3178, -83.2367, false, true),
('Phoenicia', 'phoenicia', 'Lebanese', '$$$', '21098 Michigan Ave', 'Dearborn', 'MI', '48124', 42.3123, -83.2198, false, true),
('Maroush', 'maroush', 'Lebanese', '$$', '8765 Greenfield Rd', 'Dearborn', 'MI', '48126', 42.3212, -83.2134, false, true),
('Tabouleh Cafe', 'tabouleh-cafe', 'Lebanese', '$', '6543 Wyoming Ave', 'Dearborn', 'MI', '48126', 42.3234, -83.1756, false, true),

-- Iraqi
('Baghdad Cafe', 'baghdad-cafe', 'Iraqi', '$', '13890 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3167, -83.2012, false, true),
('Tigris Grill', 'tigris-grill', 'Iraqi', '$$', '7654 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3245, -83.1656, false, true),
('Mesopotamia Kitchen', 'mesopotamia-kitchen', 'Iraqi', '$$', '9876 Ford Rd', 'Dearborn', 'MI', '48126', 42.3345, -83.1867, false, true),
('Babylon Restaurant', 'babylon-restaurant', 'Iraqi', '$$', '4321 Chase Rd', 'Dearborn', 'MI', '48126', 42.3156, -83.2312, false, true),
('Iraqi Palace', 'iraqi-palace', 'Iraqi', '$$$', '16789 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3278, -83.2189, false, true),
('Basra Grill', 'basra-grill', 'Iraqi', '$$', '8234 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3178, -83.1789, false, true),
('Mosul Kitchen', 'mosul-kitchen', 'Iraqi', '$', '5678 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3212, -83.1623, false, true),

-- Yemeni
('Yemeni Village', 'yemeni-village', 'Yemeni', '$', '4869 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3198, -83.1612, false, true),
('Saba Restaurant', 'saba-restaurant', 'Yemeni', '$', '12345 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3156, -83.1934, false, true),
('Yemen Cafe', 'yemen-cafe', 'Yemeni', '$', '7890 Ford Rd', 'Dearborn', 'MI', '48126', 42.3323, -83.1812, false, true),
('Sanaa Kitchen', 'sanaa-kitchen', 'Yemeni', '$', '6543 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3223, -83.1645, false, true),
('Aden Grill', 'aden-grill', 'Yemeni', '$$', '9012 Wyoming Ave', 'Dearborn', 'MI', '48126', 42.3256, -83.1778, false, true),

-- Mediterranean
('Olive Branch', 'olive-branch', 'Mediterranean', '$$', '14567 Ford Rd', 'Dearborn', 'MI', '48126', 42.3367, -83.2045, false, true),
('Mediterranean Breeze', 'mediterranean-breeze', 'Mediterranean', '$$', '8901 Greenfield Rd', 'Dearborn', 'MI', '48126', 42.3189, -83.2123, false, true),
('Aegean Grill', 'aegean-grill', 'Mediterranean', '$$$', '21567 Michigan Ave', 'Dearborn', 'MI', '48124', 42.3134, -83.2212, false, true),
('Caspian Kitchen', 'caspian-kitchen', 'Mediterranean', '$$', '5678 Chase Rd', 'Dearborn', 'MI', '48126', 42.3167, -83.2378, false, true),
('Greek Islands', 'greek-islands', 'Mediterranean', '$$', '10234 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3312, -83.1923, false, true),
('Santorini Grill', 'santorini-grill', 'Mediterranean', '$$$', '7890 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3178, -83.1756, false, true),

-- Bakery
('Palace Sweets', 'palace-sweets', 'Bakery', '$', '9543 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3289, -83.1834, false, true),
('Golden Bakery', 'golden-bakery', 'Bakery', '$', '6845 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3245, -83.1623, false, true),
('Masri Sweets', 'masri-sweets', 'Bakery', '$', '13567 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3167, -83.2001, false, true),
('Damascus Sweets', 'damascus-sweets', 'Bakery', '$', '8765 Ford Rd', 'Dearborn', 'MI', '48126', 42.3334, -83.1856, false, true),
('Al Nour Bakery', 'al-nour-bakery', 'Bakery', '$', '5432 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3201, -83.1612, false, true),
('Sweet Arabia', 'sweet-arabia', 'Bakery', '$', '10987 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3301, -83.1945, false, true),
('Baklava House', 'baklava-house', 'Bakery', '$', '7654 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3189, -83.1734, false, true),
('Knafeh Palace', 'knafeh-palace', 'Bakery', '$', '4321 Greenfield Rd', 'Dearborn', 'MI', '48126', 42.3167, -83.2078, false, true),

-- American
('Miller Burger', 'miller-burger', 'American', '$', '15678 Ford Rd', 'Dearborn', 'MI', '48126', 42.3378, -83.2134, false, true),
('Classic Diner', 'classic-diner', 'American', '$', '9012 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3156, -83.1834, false, true),
('Americana Kitchen', 'americana-kitchen', 'American', '$$', '6789 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3278, -83.1756, false, true),
('BBQ Pit', 'bbq-pit', 'American', '$$', '12345 Ford Rd', 'Dearborn', 'MI', '48126', 42.3356, -83.1945, false, true),
('Wingz n Things', 'wingz-n-things', 'American', '$', '8901 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3267, -83.1689, false, true),
('The Burger Joint', 'the-burger-joint', 'American', '$', '5678 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3167, -83.1712, false, true),
('Smokehouse BBQ', 'smokehouse-bbq', 'American', '$$', '14321 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3312, -83.2023, false, true),
('Philly Steaks', 'philly-steaks', 'American', '$', '7890 Greenfield Rd', 'Dearborn', 'MI', '48126', 42.3198, -83.2112, false, true),

-- Mexican
('El Rincon', 'el-rincon', 'Mexican', '$', '13456 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3156, -83.1989, false, true),
('Taqueria Lupita', 'taqueria-lupita', 'Mexican', '$', '8765 Ford Rd', 'Dearborn', 'MI', '48126', 42.3345, -83.1867, false, true),
('Casa Mexico', 'casa-mexico', 'Mexican', '$$', '5432 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3267, -83.1712, false, true),
('Los Amigos', 'los-amigos', 'Mexican', '$', '9876 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3278, -83.1701, false, true),
('El Azteca', 'el-azteca', 'Mexican', '$$', '7654 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3178, -83.1745, false, true),
('Jalisco Grill', 'jalisco-grill', 'Mexican', '$', '12098 Ford Rd', 'Dearborn', 'MI', '48126', 42.3367, -83.1923, false, true),

-- Asian
('Pho Dearborn', 'pho-dearborn', 'Asian', '$', '10234 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3145, -83.1878, false, true),
('Golden Dragon', 'golden-dragon', 'Asian', '$$', '7890 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3289, -83.1789, false, true),
('Tokyo Kitchen', 'tokyo-kitchen', 'Asian', '$$', '5678 Ford Rd', 'Dearborn', 'MI', '48126', 42.3323, -83.1756, false, true),
('Thai Orchid', 'thai-orchid', 'Asian', '$$', '14567 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3167, -83.2034, false, true),
('Korea House', 'korea-house', 'Asian', '$$', '9012 Greenfield Rd', 'Dearborn', 'MI', '48126', 42.3212, -83.2145, false, true),
('Saigon Kitchen', 'saigon-kitchen', 'Asian', '$', '6543 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3234, -83.1656, false, true),
('Wok Express', 'wok-express', 'Asian', '$', '8901 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3301, -83.1823, false, true),

-- Food Trucks
('Mama Fatima Kitchen', 'mama-fatima-kitchen', 'Iraqi', '$', '13030 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3178, -83.1989, true, true),
('Shawarma Express', 'shawarma-express', 'Middle Eastern', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3223, -83.1834, true, true),
('Falafel on Wheels', 'falafel-on-wheels', 'Middle Eastern', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3189, -83.1923, true, true),
('Taco Truck Amigos', 'taco-truck-amigos', 'Mexican', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3256, -83.1756, true, true),
('Kabob Karavan', 'kabob-karavan', 'Middle Eastern', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3167, -83.2045, true, true),
('Gyro King Truck', 'gyro-king-truck', 'Mediterranean', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3198, -83.1867, true, true),
('The Hummus Wagon', 'the-hummus-wagon', 'Middle Eastern', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3212, -83.2001, true, true),
('Manakish Mobile', 'manakish-mobile', 'Lebanese', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3145, -83.1945, true, true),
('BBQ Brothers', 'bbq-brothers', 'American', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3278, -83.1789, true, true),
('Pita Pit Stop', 'pita-pit-stop', 'Middle Eastern', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3234, -83.2078, true, true),
('Banh Mi Express', 'banh-mi-express', 'Asian', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3189, -83.1712, true, true),
('Sweet Treats Truck', 'sweet-treats-truck', 'Bakery', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3156, -83.1878, true, true),

-- More variety
('Olive Garden Express', 'olive-garden-express', 'Mediterranean', '$', '11234 Ford Rd', 'Dearborn', 'MI', '48126', 42.3356, -83.1912, false, true),
('Spice Route', 'spice-route', 'Middle Eastern', '$$', '8765 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3167, -83.1778, false, true),
('The Pita Pit', 'the-pita-pit', 'Middle Eastern', '$', '5432 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3278, -83.1723, false, true),
('Lavash Cafe', 'lavash-cafe', 'Middle Eastern', '$$', '9876 Greenfield Rd', 'Dearborn', 'MI', '48126', 42.3201, -83.2134, false, true),
('Samosas & More', 'samosas-and-more', 'Asian', '$', '7654 Ford Rd', 'Dearborn', 'MI', '48126', 42.3334, -83.1823, false, true),
('Fattoush Grill', 'fattoush-grill', 'Lebanese', '$$', '12567 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3156, -83.1945, false, true),
('Saj House', 'saj-house', 'Lebanese', '$', '4321 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3189, -83.1601, false, true);

-- Verify count
SELECT COUNT(*) as total_restaurants FROM restaurants;
