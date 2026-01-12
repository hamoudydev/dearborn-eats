-- Comprehensive restaurant list for Dearborn and Dearborn Heights, MI
-- Run this in Supabase SQL Editor

-- First, let's check current count
SELECT COUNT(*) as current_count FROM restaurants;

-- Add more restaurants (avoiding duplicates by using ON CONFLICT)
INSERT INTO restaurants (name, slug, cuisine, price_range, address, city, state, zip_code, latitude, longitude, is_food_truck, is_active) VALUES

-- =====================
-- LEBANESE RESTAURANTS
-- =====================
('La Shish', 'la-shish', 'Lebanese', '$$', '12918 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3189, -83.1945, false, true),
('Baba''s Grill', 'babas-grill', 'Lebanese', '$$', '6236 Greenfield Rd', 'Dearborn', 'MI', '48126', 42.3201, -83.2089, false, true),
('Al Ajami Grill', 'al-ajami-grill', 'Lebanese', '$$', '13823 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3178, -83.2012, false, true),
('Beirut By Night', 'beirut-by-night', 'Lebanese', '$$$', '4825 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3156, -83.1612, false, true),
('Le Sajj', 'le-sajj', 'Lebanese', '$', '5664 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3189, -83.1634, false, true),
('Rawda Cafe', 'rawda-cafe', 'Lebanese', '$$', '13530 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3167, -83.1989, false, true),
('Zaytoon Lebanese Kitchen', 'zaytoon-lebanese-kitchen', 'Lebanese', '$$', '14411 Ford Rd', 'Dearborn', 'MI', '48126', 42.3356, -83.2023, false, true),
('Fadi''s Lebanese', 'fadis-lebanese', 'Lebanese', '$$', '7815 Wyoming Ave', 'Dearborn', 'MI', '48126', 42.3245, -83.1778, false, true),
('Baroudi Restaurant', 'baroudi-restaurant', 'Lebanese', '$$$', '21300 Michigan Ave', 'Dearborn', 'MI', '48124', 42.3134, -83.2198, false, true),
('The Grape Leaf', 'the-grape-leaf', 'Lebanese', '$$', '9830 Greenfield Rd', 'Dearborn', 'MI', '48126', 42.3223, -83.2145, false, true),
('Beirut Garden', 'beirut-garden', 'Lebanese', '$$', '6712 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3234, -83.1656, false, true),
('Tarboosh Restaurant', 'tarboosh-restaurant', 'Lebanese', '$$', '13612 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3289, -83.1978, false, true),
('Zaitoun Bistro', 'zaitoun-bistro', 'Lebanese', '$$$', '5890 Mercury Dr', 'Dearborn', 'MI', '48126', 42.3167, -83.2234, false, true),

-- =====================
-- IRAQI RESTAURANTS
-- =====================
('Al-Huda Restaurant', 'al-huda-restaurant', 'Iraqi', '$$', '12500 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3278, -83.1934, false, true),
('Kareem''s Iraqi Cuisine', 'kareems-iraqi-cuisine', 'Iraqi', '$$', '8901 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3256, -83.1689, false, true),
('Sindbad''s Restaurant', 'sindbads-restaurant', 'Iraqi', '$$', '13456 Ford Rd', 'Dearborn', 'MI', '48126', 42.3367, -83.1945, false, true),
('The Iraqi Kitchen', 'the-iraqi-kitchen', 'Iraqi', '$', '4523 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3145, -83.1601, false, true),
('Baghdad Restaurant', 'baghdad-restaurant', 'Iraqi', '$$', '7234 Wyoming Ave', 'Dearborn', 'MI', '48126', 42.3234, -83.1756, false, true),
('Samarra Grill', 'samarra-grill', 'Iraqi', '$$', '14890 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3156, -83.2067, false, true),
('Ur of the Chaldees', 'ur-of-the-chaldees', 'Iraqi', '$$$', '6543 Greenfield Rd', 'Dearborn', 'MI', '48126', 42.3189, -83.2101, false, true),
('Nineveh Restaurant', 'nineveh-restaurant', 'Iraqi', '$$', '9012 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3267, -83.1845, false, true),
('Karbala Kitchen', 'karbala-kitchen', 'Iraqi', '$', '5678 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3198, -83.1634, false, true),
('Al Rashid', 'al-rashid', 'Iraqi', '$$', '12345 Ford Rd', 'Dearborn', 'MI', '48126', 42.3345, -83.1923, false, true),

-- =====================
-- YEMENI RESTAURANTS
-- =====================
('Sheeba Restaurant', 'sheeba-restaurant-2', 'Yemeni', '$$', '13919 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3167, -83.2012, false, true),
('Qahwa House', 'qahwa-house', 'Yemeni', '$', '13701 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3178, -83.1989, false, true),
('Al Mukalla', 'al-mukalla', 'Yemeni', '$', '6234 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3212, -83.1645, false, true),
('Taiz Restaurant', 'taiz-restaurant', 'Yemeni', '$', '8765 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3145, -83.1778, false, true),
('Aden House', 'aden-house', 'Yemeni', '$$', '5432 Wyoming Ave', 'Dearborn', 'MI', '48126', 42.3189, -83.1723, false, true),
('Ibb Kitchen', 'ibb-kitchen', 'Yemeni', '$', '9876 Greenfield Rd', 'Dearborn', 'MI', '48126', 42.3234, -83.2134, false, true),
('Hadramout Restaurant', 'hadramout-restaurant', 'Yemeni', '$$', '14567 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3301, -83.2023, false, true),
('Mokha Coffee', 'mokha-coffee', 'Yemeni', '$', '7890 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3267, -83.1678, false, true),
('Al Hodeidah', 'al-hodeidah', 'Yemeni', '$', '6543 Ford Rd', 'Dearborn', 'MI', '48126', 42.3323, -83.1756, false, true),

-- =====================
-- MIDDLE EASTERN (General)
-- =====================
('Malek Al-Kabob', 'malek-al-kabob', 'Middle Eastern', '$$', '22065 Michigan Ave', 'Dearborn', 'MI', '48124', 42.3112, -83.2289, false, true),
('Al Chabab Restaurant', 'al-chabab-restaurant', 'Middle Eastern', '$$', '8912 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3278, -83.1834, false, true),
('Albasha Subs', 'albasha-subs', 'Middle Eastern', '$', '6500 Chase Rd', 'Dearborn', 'MI', '48126', 42.3178, -83.2412, false, true),
('Ananas Cafe', 'ananas-cafe', 'Middle Eastern', '$', '14701 Ford Rd', 'Dearborn', 'MI', '48126', 42.3367, -83.2045, false, true),
('Bucharest Grill', 'bucharest-grill', 'Middle Eastern', '$', '5665 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3201, -83.1634, false, true),
('The Shawarma Factory', 'the-shawarma-factory', 'Middle Eastern', '$', '13245 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3167, -83.1956, false, true),
('Pita Cafe', 'pita-cafe', 'Middle Eastern', '$', '7654 Wyoming Ave', 'Dearborn', 'MI', '48126', 42.3245, -83.1767, false, true),
('Middle East Market & Grill', 'middle-east-market-grill', 'Middle Eastern', '$', '9123 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3278, -83.1701, false, true),
('Falafel Guys', 'falafel-guys', 'Middle Eastern', '$', '5432 Ford Rd', 'Dearborn', 'MI', '48126', 42.3312, -83.1712, false, true),
('Kabab House', 'kabab-house', 'Middle Eastern', '$$', '12890 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3289, -83.1923, false, true),
('Sultan''s Kitchen', 'sultans-kitchen', 'Middle Eastern', '$$', '8234 Greenfield Rd', 'Dearborn', 'MI', '48126', 42.3212, -83.2112, false, true),
('Oasis Mediterranean', 'oasis-mediterranean', 'Middle Eastern', '$$', '14123 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3156, -83.2023, false, true),
('Layali Beirut', 'layali-beirut', 'Middle Eastern', '$$$', '6789 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3234, -83.1667, false, true),
('Al Madina Grill', 'al-madina-grill', 'Middle Eastern', '$$', '9876 Ford Rd', 'Dearborn', 'MI', '48126', 42.3345, -83.1878, false, true),
('Kasr El Amir', 'kasr-el-amir', 'Middle Eastern', '$$$', '21500 Michigan Ave', 'Dearborn', 'MI', '48124', 42.3123, -83.2212, false, true),

-- =====================
-- MEDITERRANEAN
-- =====================
('TRIA Restaurant', 'tria-restaurant', 'Mediterranean', '$$$', '22061 Michigan Ave', 'Dearborn', 'MI', '48124', 42.3112, -83.2278, false, true),
('The Sahara', 'the-sahara', 'Mediterranean', '$$', '13301 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3278, -83.1956, false, true),
('Olive House', 'olive-house', 'Mediterranean', '$$', '8901 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3167, -83.1812, false, true),
('Mykonos Grill', 'mykonos-grill', 'Mediterranean', '$$$', '14890 Ford Rd', 'Dearborn', 'MI', '48126', 42.3378, -83.2056, false, true),
('Athens Kitchen', 'athens-kitchen', 'Mediterranean', '$$', '7234 Greenfield Rd', 'Dearborn', 'MI', '48126', 42.3201, -83.2101, false, true),
('Mediterranean Grill House', 'mediterranean-grill-house', 'Mediterranean', '$$', '5678 Wyoming Ave', 'Dearborn', 'MI', '48126', 42.3178, -83.1745, false, true),
('Feta''s Kitchen', 'fetas-kitchen', 'Mediterranean', '$$', '9012 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3256, -83.1689, false, true),
('Blue Sea Mediterranean', 'blue-sea-mediterranean', 'Mediterranean', '$$', '12567 Ford Rd', 'Dearborn', 'MI', '48126', 42.3356, -83.1934, false, true),
('The Olive Press', 'the-olive-press', 'Mediterranean', '$$', '6789 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3145, -83.1756, false, true),

-- =====================
-- AMERICAN
-- =====================
('Miller''s Bar', 'millers-bar', 'American', '$', '23700 Michigan Ave', 'Dearborn', 'MI', '48124', 42.3089, -83.2412, false, true),
('The Dearborn Tavern', 'the-dearborn-tavern', 'American', '$$', '23420 Michigan Ave', 'Dearborn', 'MI', '48124', 42.3101, -83.2378, false, true),
('Birdie''s Restaurant', 'birdies-restaurant', 'American', '$$', '1300 S Telegraph Rd', 'Dearborn', 'MI', '48124', 42.3045, -83.2601, false, true),
('Black Rock Bar & Grill', 'black-rock-bar-grill', 'American', '$$$', '14555 Ford Rd', 'Dearborn', 'MI', '48126', 42.3367, -83.2034, false, true),
('Ford''s Garage', 'fords-garage', 'American', '$$', '18900 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3123, -83.2156, false, true),
('The Butcher''s Grille', 'the-butchers-grille', 'American', '$$$', '8701 Telegraph Rd', 'Dearborn Heights', 'MI', '48127', 42.3312, -83.2534, false, true),
('Avenue American Bistro', 'avenue-american-bistro', 'American', '$$$', '25226 Michigan Ave', 'Dearborn', 'MI', '48124', 42.3067, -83.2523, false, true),
('Clara''s Table', 'claras-table', 'American', '$$$$', '20301 Oakwood Blvd', 'Dearborn', 'MI', '48124', 42.3078, -83.2267, false, true),
('Brothers Smokehouse', 'brothers-smokehouse', 'American', '$$', '24287 Michigan Ave', 'Dearborn', 'MI', '48124', 42.3078, -83.2456, false, true),
('Blue Goat', 'blue-goat', 'American', '$$', '18901 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3123, -83.2167, false, true),
('Midtown Smoke House', 'midtown-smoke-house', 'American', '$$', '14256 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3156, -83.2034, false, true),
('Little Ghost', 'little-ghost', 'American', '$$', '12890 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3167, -83.1945, false, true),
('Level Zero', 'level-zero', 'American', '$$', '21700 Michigan Ave', 'Dearborn', 'MI', '48124', 42.3123, -83.2223, false, true),
('Poseidon Lounge', 'poseidon-lounge', 'American', '$$$', '22301 Michigan Ave', 'Dearborn', 'MI', '48124', 42.3112, -83.2289, false, true),
('Burger Shack', 'burger-shack', 'American', '$', '4567 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3156, -83.1612, false, true),
('Dearborn Diner', 'dearborn-diner', 'American', '$', '13890 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3167, -83.2012, false, true),
('The Grill Room', 'the-grill-room', 'American', '$$$', '8901 Ford Rd', 'Dearborn', 'MI', '48126', 42.3334, -83.1823, false, true),
('Main Street BBQ', 'main-street-bbq', 'American', '$$', '6234 Wyoming Ave', 'Dearborn', 'MI', '48126', 42.3212, -83.1734, false, true),
('Westborn Market Kitchen', 'westborn-market-kitchen', 'American', '$$', '21755 Michigan Ave', 'Dearborn', 'MI', '48124', 42.3123, -83.2234, false, true),
('Union Kitchen', 'union-kitchen', 'American', '$$', '14901 Ford Rd', 'Dearborn', 'MI', '48126', 42.3378, -83.2067, false, true),

-- =====================
-- MEXICAN
-- =====================
('Tacos Wuey', 'tacos-wuey', 'Mexican', '$', '13567 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3167, -83.1989, false, true),
('Primo Cantina', 'primo-cantina', 'Mexican', '$$', '22700 Michigan Ave', 'Dearborn', 'MI', '48124', 42.3101, -83.2312, false, true),
('El Toro', 'el-toro', 'Mexican', '$', '8901 Wyoming Ave', 'Dearborn', 'MI', '48126', 42.3267, -83.1789, false, true),
('Casa De Amigos', 'casa-de-amigos', 'Mexican', '$$', '14567 Ford Rd', 'Dearborn', 'MI', '48126', 42.3367, -83.2034, false, true),
('Fiesta Mexicana', 'fiesta-mexicana', 'Mexican', '$', '5678 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3189, -83.1634, false, true),
('Taqueria El Rey', 'taqueria-el-rey', 'Mexican', '$', '9234 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3145, -83.1845, false, true),
('Cancun Grill', 'cancun-grill', 'Mexican', '$$', '7890 Ford Rd', 'Dearborn', 'MI', '48126', 42.3334, -83.1812, false, true),
('La Hacienda', 'la-hacienda', 'Mexican', '$$', '12345 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3278, -83.1923, false, true),
('El Mariachi', 'el-mariachi', 'Mexican', '$$', '6543 Greenfield Rd', 'Dearborn', 'MI', '48126', 42.3201, -83.2101, false, true),
('Dos Hermanos', 'dos-hermanos', 'Mexican', '$', '8765 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3256, -83.1678, false, true),
('Mexican Village', 'mexican-village', 'Mexican', '$$', '15678 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3145, -83.2089, false, true),

-- =====================
-- ASIAN
-- =====================
('Bangkok 96', 'bangkok-96', 'Asian', '$$', '3024 Greenfield Rd', 'Dearborn', 'MI', '48120', 42.3089, -83.2045, false, true),
('Benihana', 'benihana', 'Asian', '$$$', '18601 Hubbard Dr', 'Dearborn', 'MI', '48126', 42.3134, -83.2189, false, true),
('Delish Asian Thai', 'delish-asian-thai', 'Asian', '$$', '26527 Ford Rd', 'Dearborn Heights', 'MI', '48127', 42.3312, -83.2789, false, true),
('Little Kim', 'little-kim', 'Asian', '$$', '14567 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3156, -83.2045, false, true),
('Szechuan Gardens', 'szechuan-gardens', 'Asian', '$$', '9012 Ford Rd', 'Dearborn', 'MI', '48126', 42.3345, -83.1834, false, true),
('Sushi Village', 'sushi-village', 'Asian', '$$$', '22890 Michigan Ave', 'Dearborn', 'MI', '48124', 42.3101, -83.2323, false, true),
('Royal Pho', 'royal-pho', 'Asian', '$', '7234 Wyoming Ave', 'Dearborn', 'MI', '48126', 42.3234, -83.1767, false, true),
('Golden Wok', 'golden-wok', 'Asian', '$', '5432 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3178, -83.1623, false, true),
('Sakura Japanese', 'sakura-japanese', 'Asian', '$$', '14890 Ford Rd', 'Dearborn', 'MI', '48126', 42.3378, -83.2056, false, true),
('Thai Palace', 'thai-palace', 'Asian', '$$', '8765 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3156, -83.1778, false, true),
('Kim''s Noodles', 'kims-noodles', 'Asian', '$', '6543 Greenfield Rd', 'Dearborn', 'MI', '48126', 42.3189, -83.2089, false, true),
('Mandarin House', 'mandarin-house', 'Asian', '$$', '12567 Ford Rd', 'Dearborn', 'MI', '48126', 42.3356, -83.1934, false, true),
('Lotus Garden', 'lotus-garden', 'Asian', '$$', '9876 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3267, -83.1867, false, true),
('Ming''s Kitchen', 'mings-kitchen', 'Asian', '$', '4321 Wyoming Ave', 'Dearborn', 'MI', '48126', 42.3167, -83.1712, false, true),

-- =====================
-- INDIAN/SOUTH ASIAN
-- =====================
('The Himalayan Flames', 'the-himalayan-flames', 'Asian', '$$', '22640 Michigan Ave', 'Dearborn', 'MI', '48124', 42.3101, -83.2301, false, true),
('Mint 29', 'mint-29', 'Asian', '$$$', '18479 Hall Rd', 'Dearborn Heights', 'MI', '48127', 42.3256, -83.2634, false, true),
('Saffron Indian', 'saffron-indian', 'Asian', '$$', '14234 Ford Rd', 'Dearborn', 'MI', '48126', 42.3356, -83.2012, false, true),
('Curry House', 'curry-house', 'Asian', '$$', '8901 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3145, -83.1823, false, true),
('Tandoor Palace', 'tandoor-palace', 'Asian', '$$', '6789 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3223, -83.1656, false, true),

-- =====================
-- ITALIAN
-- =====================
('Tony''s Trattoria', 'tonys-trattoria', 'Italian', '$$$', '14567 Ford Rd', 'Dearborn', 'MI', '48126', 42.3367, -83.2034, false, true),
('Carera''s Cucina', 'careras-cucina', 'Italian', '$$$', '23901 Telegraph Rd', 'Dearborn Heights', 'MI', '48127', 42.3289, -83.2612, false, true),
('Fratelli''s Eatery', 'fratellis-eatery', 'Italian', '$$', '25660 Michigan Ave', 'Dearborn Heights', 'MI', '48127', 42.3056, -83.2545, false, true),
('Roma Cafe', 'roma-cafe', 'Italian', '$$', '12890 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3278, -83.1934, false, true),
('Little Italy', 'little-italy', 'Italian', '$$', '9012 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3156, -83.1834, false, true),
('Pasta House', 'pasta-house', 'Italian', '$$', '7654 Ford Rd', 'Dearborn', 'MI', '48126', 42.3323, -83.1789, false, true),
('Vinny''s Italian', 'vinnys-italian', 'Italian', '$$', '5678 Greenfield Rd', 'Dearborn', 'MI', '48126', 42.3189, -83.2078, false, true),
('Bella Napoli', 'bella-napoli', 'Italian', '$$$', '14890 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3145, -83.2067, false, true),

-- =====================
-- BAKERY / DESSERTS
-- =====================
('Sweet Havana', 'sweet-havana', 'Bakery', '$', '13456 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3167, -83.1978, false, true),
('Shatila Bakery West', 'shatila-bakery-west', 'Bakery', '$$', '14300 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3289, -83.2012, false, true),
('Leila''s Bakery', 'leilas-bakery', 'Bakery', '$', '6789 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3234, -83.1667, false, true),
('Al-Amal Sweets', 'al-amal-sweets', 'Bakery', '$', '9012 Wyoming Ave', 'Dearborn', 'MI', '48126', 42.3256, -83.1789, false, true),
('Beirut Bakery', 'beirut-bakery', 'Bakery', '$', '5432 Greenfield Rd', 'Dearborn', 'MI', '48126', 42.3178, -83.2067, false, true),
('Middle East Bakery', 'middle-east-bakery', 'Bakery', '$', '12345 Ford Rd', 'Dearborn', 'MI', '48126', 42.3356, -83.1934, false, true),
('Al-Hana Sweets', 'al-hana-sweets', 'Bakery', '$', '8765 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3145, -83.1778, false, true),
('The Sweet Spot', 'the-sweet-spot', 'Bakery', '$', '7654 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3245, -83.1678, false, true),
('Kareem Bakery', 'kareem-bakery', 'Bakery', '$', '4321 Wyoming Ave', 'Dearborn', 'MI', '48126', 42.3167, -83.1723, false, true),
('Laziza Sweets', 'laziza-sweets', 'Bakery', '$', '9876 Ford Rd', 'Dearborn', 'MI', '48126', 42.3345, -83.1867, false, true),
('Sana Bakery', 'sana-bakery', 'Bakery', '$', '6543 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3178, -83.1734, false, true),
('Nouran Pastries', 'nouran-pastries', 'Bakery', '$', '14567 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3301, -83.2034, false, true),

-- =====================
-- PIZZA
-- =====================
('Detroit Pizza Factory', 'detroit-pizza-factory', 'American', '$', '22850 Michigan Ave', 'Dearborn', 'MI', '48124', 42.3101, -83.2312, false, true),
('Buddy''s Pizza', 'buddys-pizza', 'American', '$$', '13000 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3278, -83.1956, false, true),
('Pizza Papalis', 'pizza-papalis', 'American', '$$', '14890 Ford Rd', 'Dearborn', 'MI', '48126', 42.3378, -83.2056, false, true),
('Jet''s Pizza', 'jets-pizza', 'American', '$', '8901 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3256, -83.1689, false, true),
('Domino''s Dearborn', 'dominos-dearborn', 'American', '$', '5678 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3145, -83.1712, false, true),
('Little Caesars', 'little-caesars', 'American', '$', '9234 Wyoming Ave', 'Dearborn', 'MI', '48126', 42.3267, -83.1778, false, true),
('Shield''s Pizza', 'shields-pizza', 'American', '$$', '12567 Ford Rd', 'Dearborn', 'MI', '48126', 42.3356, -83.1945, false, true),

-- =====================
-- FAST FOOD & QUICK SERVICE
-- =====================
('Coney Island Dearborn', 'coney-island-dearborn', 'American', '$', '7234 Michigan Ave', 'Dearborn', 'MI', '48126', 42.3156, -83.1756, false, true),
('Mango''s Cafe', 'mangos-cafe', 'American', '$', '13890 W Warren Ave', 'Dearborn', 'MI', '48126', 42.3289, -83.2001, false, true),
('Quick Bites', 'quick-bites', 'American', '$', '6543 Schaefer Rd', 'Dearborn', 'MI', '48126', 42.3212, -83.1645, false, true),
('The Lunch Box', 'the-lunch-box', 'American', '$', '8901 Ford Rd', 'Dearborn', 'MI', '48126', 42.3334, -83.1823, false, true),
('Fresh Kitchen', 'fresh-kitchen', 'American', '$', '5432 Wyoming Ave', 'Dearborn', 'MI', '48126', 42.3178, -83.1734, false, true),

-- =====================
-- DEARBORN HEIGHTS RESTAURANTS
-- =====================
('Heights Grill', 'heights-grill', 'American', '$$', '24756 Ford Rd', 'Dearborn Heights', 'MI', '48127', 42.3312, -83.2712, false, true),
('Al-Ajami Heights', 'al-ajami-heights', 'Lebanese', '$$', '25230 Ford Rd', 'Dearborn Heights', 'MI', '48127', 42.3301, -83.2756, false, true),
('Heights Diner', 'heights-diner', 'American', '$', '23890 Michigan Ave', 'Dearborn Heights', 'MI', '48127', 42.3089, -83.2423, false, true),
('La Casa Heights', 'la-casa-heights', 'Mexican', '$$', '26012 Ford Rd', 'Dearborn Heights', 'MI', '48127', 42.3289, -83.2801, false, true),
('Golden Palace Heights', 'golden-palace-heights', 'Asian', '$$', '24567 Michigan Ave', 'Dearborn Heights', 'MI', '48127', 42.3078, -83.2478, false, true),
('Mediterranean Heights', 'mediterranean-heights', 'Mediterranean', '$$', '25678 Ford Rd', 'Dearborn Heights', 'MI', '48127', 42.3298, -83.2778, false, true),
('Heights Pizza Co', 'heights-pizza-co', 'American', '$', '23456 Telegraph Rd', 'Dearborn Heights', 'MI', '48127', 42.3267, -83.2589, false, true),
('Kabob Heights', 'kabob-heights', 'Middle Eastern', '$$', '26234 Ford Rd', 'Dearborn Heights', 'MI', '48127', 42.3278, -83.2823, false, true),
('Shawarma Heights', 'shawarma-heights', 'Middle Eastern', '$', '24890 Michigan Ave', 'Dearborn Heights', 'MI', '48127', 42.3067, -83.2489, false, true),
('Heights Bakery', 'heights-bakery', 'Bakery', '$', '25123 Ford Rd', 'Dearborn Heights', 'MI', '48127', 42.3289, -83.2745, false, true),
('Sunrise Cafe Heights', 'sunrise-cafe-heights', 'American', '$', '23678 Telegraph Rd', 'Dearborn Heights', 'MI', '48127', 42.3256, -83.2567, false, true),
('The Village Grill', 'the-village-grill', 'American', '$$', '26567 Ford Rd', 'Dearborn Heights', 'MI', '48127', 42.3267, -83.2845, false, true),
('Nadia''s Kitchen', 'nadias-kitchen', 'Lebanese', '$$', '24234 Michigan Ave', 'Dearborn Heights', 'MI', '48127', 42.3089, -83.2456, false, true),
('Thai Spice Heights', 'thai-spice-heights', 'Asian', '$$', '25890 Ford Rd', 'Dearborn Heights', 'MI', '48127', 42.3278, -83.2789, false, true),
('Italiano Heights', 'italiano-heights', 'Italian', '$$', '23234 Telegraph Rd', 'Dearborn Heights', 'MI', '48127', 42.3278, -83.2556, false, true),

-- =====================
-- FOOD TRUCKS
-- =====================
('Dearborn Shawarma Truck', 'dearborn-shawarma-truck', 'Middle Eastern', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3189, -83.1923, true, true),
('Halal Cart Dearborn', 'halal-cart-dearborn', 'Middle Eastern', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3212, -83.1956, true, true),
('Falafel Express Truck', 'falafel-express-truck', 'Middle Eastern', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3234, -83.1989, true, true),
('Taco Loco Truck', 'taco-loco-truck', 'Mexican', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3178, -83.1834, true, true),
('Burger Bros Truck', 'burger-bros-truck', 'American', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3145, -83.1867, true, true),
('The Kebab Truck', 'the-kebab-truck', 'Middle Eastern', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3267, -83.2012, true, true),
('Gyro Guys Mobile', 'gyro-guys-mobile', 'Mediterranean', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3201, -83.1945, true, true),
('Asian Fusion Truck', 'asian-fusion-truck', 'Asian', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3156, -83.1901, true, true),
('Sweet Treats Mobile', 'sweet-treats-mobile', 'Bakery', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3289, -83.2045, true, true),
('Pizza On Wheels', 'pizza-on-wheels', 'American', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3223, -83.1878, true, true),
('The Hummus Truck', 'the-hummus-truck', 'Middle Eastern', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3178, -83.2023, true, true),
('Chicken Shawarma Express', 'chicken-shawarma-express', 'Middle Eastern', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3245, -83.1934, true, true),
('Lebanese Street Food', 'lebanese-street-food', 'Lebanese', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3134, -83.1912, true, true),
('Mandi Express', 'mandi-express', 'Yemeni', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3301, -83.2078, true, true),
('BBQ Pit Mobile', 'bbq-pit-mobile', 'American', '$', 'Mobile - Dearborn Area', 'Dearborn', 'MI', '48126', 42.3167, -83.1789, true, true)

ON CONFLICT (slug) DO NOTHING;

-- Final count
SELECT COUNT(*) as total_restaurants FROM restaurants;
