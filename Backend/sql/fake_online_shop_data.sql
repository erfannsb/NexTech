USE onlineshop;

INSERT INTO Admins (AdminID, FirstName, LastName, EmailAddress, PasswordHash, PasswordSalt, CreatedAt, Permission, LastLogin, PhoneNumber)
        VALUES (1, 'Megan', 'Chang', 'gwilliams@example.com',
        'faa5be1206846743dec0c4d3e5afc2d48a023011fdb6eabcc842f2b47eca8a00', '8e36506d1af0f8133ec6c833feb77689049fec2a0f7a49b8218fd49f41fde9d9', '2022-07-31 08:38:08',
        'Order Management',
        '2025-04-03 13:06:10', '(493)682-4219x48');
INSERT INTO Admins (AdminID, FirstName, LastName, EmailAddress, PasswordHash, PasswordSalt, CreatedAt, Permission, LastLogin, PhoneNumber)
        VALUES (2, 'Corey', 'Jones', 'thomas15@example.com',
        '962393f2184a0e1125c4d9c7f2d3dcbe210beb39161d895c9df4b26f8e1f0b5a', 'abceb130911365b01c660d2bb1cc972b1a266e982892cf6bbeb2638ecd2a7beb', '2021-09-27 06:57:56',
        'Order Management',
        '2025-04-18 06:56:49', '578.740.8016x097');
INSERT INTO Admins (AdminID, FirstName, LastName, EmailAddress, PasswordHash, PasswordSalt, CreatedAt, Permission, LastLogin, PhoneNumber)
        VALUES (3, 'Jane', 'Brown', 'johnponce@example.net',
        'f6cbaa62389a732d53a306a07b09fe1327a0ec2ccb959d7cdfd22cbd085701e2', 'c770ff35bda18e19d7d4442eb9964779db8dbac9e79f4f94900b2bcf543924bf', '2022-09-21 09:00:02',
        'Full Access',
        '2025-04-09 15:10:29', '614.984.1858x398');
INSERT INTO Admins (AdminID, FirstName, LastName, EmailAddress, PasswordHash, PasswordSalt, CreatedAt, Permission, LastLogin, PhoneNumber)
        VALUES (4, 'Christopher', 'Yates', 'barbara42@example.org',
        'b5302b82833313421af755a93b9e0179e222003c594546439e1fc7737c1ab323', 'f815a67cae407f2c5ec485b7b4174f75940076b219fc7b31a7dec9459c8d5155', '2022-03-18 23:11:47',
        'User Management',
        '2025-04-03 12:47:43', '612-520-1868');
INSERT INTO Admins (AdminID, FirstName, LastName, EmailAddress, PasswordHash, PasswordSalt, CreatedAt, Permission, LastLogin, PhoneNumber)
        VALUES (5, 'Melissa', 'Jacobson', 'criley@example.com',
        '4475d42b45f7da21d1f30db64c716d04789be7209b3f721437b402e2ed634b3f', '4af2c51499f4cc0717be3558ac77fa83194b4c49e81645d5511f18fd97725950', '2023-01-15 07:15:21',
        'Reporting Only',
        '2025-01-16 23:53:09', '791-879-5330x413');
INSERT INTO Admins (AdminID, FirstName, LastName, EmailAddress, PasswordHash, PasswordSalt, CreatedAt, Permission, LastLogin, PhoneNumber)
        VALUES (6, 'Lisa', 'Garcia', 'melissarobinson@example.net',
        '3559c2ac5c57fbe3767535a60f57e2dc12dbd0387d84a5d3bb7dbf432372fcbd', '78a2688fedc3acc9249aac80bb0b2d41f837a0c150974189a3d4bdb6a412c518', '2025-02-13 21:05:09',
        'Order Management',
        '2025-05-13 03:46:30', '701-339-9161');
INSERT INTO Admins (AdminID, FirstName, LastName, EmailAddress, PasswordHash, PasswordSalt, CreatedAt, Permission, LastLogin, PhoneNumber)
        VALUES (7, 'Benjamin', 'Smith', 'jennifermendoza@example.net',
        'e9a204b1cd9f0b46406acee5d662aacf3611af649acbb7e88eabc122734a7553', '7de29c27b238a6ed0f83248dee4da5ee4b56094b64ecb37b0d0ea42bc823e463', '2020-03-11 18:47:31',
        'Order Management',
        '2025-04-16 16:19:15', '(291)341-3145x62');
INSERT INTO Admins (AdminID, FirstName, LastName, EmailAddress, PasswordHash, PasswordSalt, CreatedAt, Permission, LastLogin, PhoneNumber)
        VALUES (8, 'Holly', 'Myers', 'michael79@example.org',
        'd9a2babfe35728435d6d744fa03174fc6840ca49606ee48f7188054e900498da', '190bcce670978ced75b349d83d44e0ffbee979c7e6faf5de4cdf1fd80b5820c4', '2020-06-29 08:35:30',
        'User Management',
        '2025-06-03 03:22:02', '+1-622-758-4197x');
INSERT INTO Admins (AdminID, FirstName, LastName, EmailAddress, PasswordHash, PasswordSalt, CreatedAt, Permission, LastLogin, PhoneNumber)
        VALUES (9, 'Paul', 'Sandoval', 'annsmith@example.net',
        '0dba5800f7f538a4346f710605ebb48d921d345257af0d6d9aeb078044f86df2', '8aced111d05664b78a31f4668bcd7e2438c1a7339e50f5a7f361141c8794b8bf', '2024-08-18 03:24:12',
        'Order Management',
        '2025-02-24 13:00:37', '(437)659-4599');
INSERT INTO Admins (AdminID, FirstName, LastName, EmailAddress, PasswordHash, PasswordSalt, CreatedAt, Permission, LastLogin, PhoneNumber)
        VALUES (10, 'Paul', 'Perry', 'smithjames@example.com',
        'd287e0effc9fa5ff91134f50a1d00fe729709037d8a7c87808313f0e1ec8295e', 'cb27ad325d4785a0fa46208bcfe4911515e6b10499104bc0cf399a8f54531914', '2023-10-24 07:23:31',
        'User Management',
        '2025-03-15 12:37:40', '001-496-906-9602');
INSERT INTO Category (CategoryID, CategoryName, Description, ParentCategory) VALUES (1, 'CPUs', 'Those traditional page a although for study.', NULL);
INSERT INTO Category (CategoryID, CategoryName, Description, ParentCategory) VALUES (2, 'GPUs', 'Speak themselves speech.', 1);
INSERT INTO Category (CategoryID, CategoryName, Description, ParentCategory) VALUES (3, 'Motherboards', 'Nature white without study candidate.', 1);
INSERT INTO Category (CategoryID, CategoryName, Description, ParentCategory) VALUES (4, 'RAM', 'I question first.', 2);
INSERT INTO Category (CategoryID, CategoryName, Description, ParentCategory) VALUES (5, 'Storage', 'Add senior woman put partner.', 2);
INSERT INTO Category (CategoryID, CategoryName, Description, ParentCategory) VALUES (6, 'Power Supplies', 'Budget power them evidence without.', 1);
INSERT INTO Category (CategoryID, CategoryName, Description, ParentCategory) VALUES (7, 'Cases', 'Little type physical against.', 5);
INSERT INTO Category (CategoryID, CategoryName, Description, ParentCategory) VALUES (8, 'Cooling', 'Son break either president stage population boy.', 7);
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (1, 'Eric', 'York', '9039485590',
        'iwatson@example.org', '2f97510c6450f5c40866bd5b47b5f536071498f20ebf0969f932cabefae18030', 'e621d27cd810740977bca786bc4fa96b4cef165d9df6df222247187d4e6aa598', '01667',
        '2025-01-27 21:15:22', 'Georgia', 'Mathewstad',
        '9004 Edward Prairie', 'House nature fall long dream answer. Tax rock few structure.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (2, 'Jessica', 'Kline', '(896)211-1330',
        'longapril@example.com', '3d19c10090bf5d73d347a0f0c01616bbd0b5c75d6749e7a5db1703c547905e22', '04df3cb0fdb932f42bf50ec9329c3eac5b5529ffd8b3626ee298d99c6ea10abf', '94139',
        '2025-05-12 21:46:45', 'Indiana', 'Millerbury',
        '263 Wilson View Apt. 873', 'Huge debate among way democratic chair cup. Gun still bit other maintain nor.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (3, 'Benjamin', 'Perez', '8402752275',
        'gregorylinda@example.net', 'd0b86b19d9ee2dd8cf4c9f1c54195c9d017e60ef04c347eaa70c25f92db88b7c', '950a3fae13ada424bb04d343fc6780ee539931c70d84a9b92e7816e591ad7817', '99410',
        '2025-02-10 00:31:05', 'Maine', 'Petersenfort',
        '930 Joy Hollow Suite 517', 'Significant his himself clearly very. Expert stop area along individual.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (4, 'Tanner', 'Chen', '519-942-6418x306',
        'kristine10@example.org', '7ddd5181ad2d9ce052343c756f8452d4d52a6d773cc15c3bb7c4be6aa2fea27a', 'ff7b09173bf0e1ae03e6ebccf8d698ef47242f761e47169ac8039a1f4d97cf01', '68666',
        '2025-05-10 10:10:01', 'Oregon', 'East Clayton',
        '412 Snow Manors Apt. 161', 'Similar safe air land rather air. Reveal bad audience grow ahead girl.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (5, 'Emily', 'Mays', '904-350-9322',
        'qcooper@example.org', '3b7fab83ddb32873ffe299e1455687b966d9d0dae4389f9afea65c3251b3a4cb', '8ddcbecd55b7c79ec20b532380b2df7def31e5652eac3ebd1b9a885fabdcec6d', '44411',
        '2025-04-02 22:03:57', 'Maine', 'Sharonside',
        '91189 Moore Drive Apt. 358', 'Senior fact information animal car. Hour reduce car.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (6, 'Thomas', 'Clements', '841-889-2762',
        'johnchavez@example.net', '04ad849351e753087ae90abcd67880591439ad3f5290ba88b11b62d8eb8e2f78', '40862ffbe9ad5ac7525372ac33cd4233adaf42023b930ea1374fba087292aa77', '84033',
        '2025-01-17 19:06:59', 'New Mexico', 'West Aaron',
        '703 Wilson Roads Suite 892', 'Audience energy move. Morning eat turn clear.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (7, 'Michael', 'Kennedy', '(537)278-5707x42',
        'thomas08@example.org', '6cdb29ef0954a881edc7d2020c5a54862397d828d82f253453da57318d14aa1b', '28d74bc584fd81451135b32342f898802a83560f40d5a3b33edb3cebd6f32021', '97750',
        '2025-05-10 21:48:04', 'Montana', 'West Blaketown',
        '432 Lee Mews Suite 562', 'Plan that hair sea quality.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (8, 'Thomas', 'Rogers', '3008250402',
        'tarasanders@example.org', '76d6403034d62068a761aea99968c696861648e09e9912a329d4d3097130c314', '4380cc8fbc1b65f7599bd712f6e7312ba9f27b867d862e5cf041c66ec95053a7', '13914',
        '2025-04-28 17:49:00', 'Colorado', 'Marcusmouth',
        '0803 Miller Ways Suite 334', 'Might his lot the drive. Various authority leave right answer.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (9, 'Ryan', 'Hawkins', '298-334-7897x844',
        'thompsonrobert@example.org', '48ddbc7a0d956f85c15664ad434afc8393e9718b7168834db4bd8075e10d95ca', '8020537d31ea461b439b25e93c6b1ba6d73e07f92a4ef4e10ce9a085ba468b54', '86958',
        '2025-01-02 06:00:32', 'West Virginia', 'Trevinoville',
        '419 Hall Stravenue Suite 331', 'Push do pick expert commercial. Network foreign one. Speech theory choice.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (10, 'Cristina', 'Lester', '290-589-5774',
        'donnasimpson@example.net', '2b56c0c1433c7fd250b848b7c09ee09539b6122a29cbcee4bfca3a5609c936d1', '674e4d417d972fd8ca812a2ed0d7064e7ca6a6d98d186e4fbb95757d8f72d621', '10825',
        '2025-02-20 07:45:54', 'Florida', 'Warnermouth',
        '0305 Matthew Mill Apt. 452', 'Ground much run. Government make article drop.
Watch force start general professional.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (11, 'Steven', 'Williams', '466-320-8298',
        'john23@example.org', '1f547fb7db7c2b41d8b22f061d04049df0f087c0b364525c0c3c233a77f73ee3', '27cb6bcf5760118f552fb6e9e19852d4fe37ee8dd85187f27c417d506a4a5d76', '97862',
        '2025-06-02 22:51:40', 'Utah', 'Lake Christian',
        '729 Johnny Valley', 'Personal threat many. Fall character door green save identify. Sound war address morning explain.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (12, 'Wanda', 'Gill', '001-488-456-4319',
        'meghan09@example.org', 'c517bd660f8e032c4d200daad6457ef439518a9503839f9a1d5948dae49ec19c', '740a647020065a8398f557be01485e242b093abae9361cbbaa0619cbb11631f6', '48105',
        '2025-02-26 13:02:47', 'South Dakota', 'Marcusfurt',
        '02907 Matthew Branch Suite 493', 'Very everything store morning as police often. Place myself his itself find add sing.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (13, 'Sandra', 'Elliott', '(770)986-9305x82',
        'simonjohn@example.org', '5033320795e3c2a418c0e02296e5ffd7784f4bbda731e41c0aad42fc7fd83258', '550b45fc793c35ea3c5a41172c87bb9c01e6ab1e3e3ecc48e377a51f1d70c4ce', '55548',
        '2025-01-16 03:09:16', 'Oregon', 'Youngmouth',
        '27166 King Throughway', 'Guess attorney response provide likely fire. Fire town worker. Image central challenge term memory.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (14, 'Hayley', 'Terry', '(625)991-1824x34',
        'katherinecole@example.org', '5d9b374ccc5235387d04190590705d408da6d9492d588f5b8d8f889fe9501c7b', '4d4596bde13ac3dac51a64818a41ae33cfec95e2575dbd535d3ba459b7b9d073', '84590',
        '2025-04-10 11:07:46', 'Arizona', 'Lisaland',
        '793 Boyd Station', 'Full parent analysis. Recognize someone treatment over.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (15, 'Leah', 'Lee', '(915)911-0502x69',
        'dmiller@example.net', 'e6fe6f175bb8ee3fa83896d281555bc48570867b0ffd5866c4819cf34fa57c65', '746891c97fe350f58aa6b8a5865c438462c9d39afdbceadd74b21c9c7a90be2e', '34873',
        '2025-01-06 09:32:29', 'Tennessee', 'Port Margaretmouth',
        '70284 Aaron Junction Apt. 822', 'Policy drug these person. Lot thousand question.
Drive example color draw difficult.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (16, 'Dylan', 'Hernandez', '(306)469-5325x83',
        'wknight@example.org', '02f54400ed1ba09279f746f6c60db17e079ef6fa5abfe19be0fb199d1ad0c860', '3ff26746b389e36ec17bd16da222bc9830b2e312dac16677dad4ead1b1c907cd', '62253',
        '2025-03-16 03:07:38', 'Iowa', 'Allenfort',
        '144 Daniels Rapids Suite 340', 'Rich foot herself among. Issue radio especially road get car party.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (17, 'Jared', 'Perez', '427.859.4516x425',
        'jimmy65@example.com', '365a5214b545d4634129d6d2962d9d378c776ff975129d8fbb9ad9cba4db54e1', '8a142460b9a052ae69015a25abbf0a45414a171e9cb78cb3f7ab7a0030a23ffb', '54253',
        '2025-03-20 21:29:19', 'Connecticut', 'East Adam',
        '399 Joseph Street', 'Next according television next sense make real use. Girl sister their rate drop marriage worker.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (18, 'Jesse', 'Boyle', '001-775-746-9216',
        'zramirez@example.net', '0e7d9e6f4ad49ee8cf314b06c328032cc2eb6304a4c45b445af424796fd78fcc', '28660d5d9d982556190d5e587dd89dc2963ae5d969d92e850bf392c07f158ea3', '63379',
        '2025-02-26 13:49:58', 'Delaware', 'Moorebury',
        '7316 Marshall Mountain', 'Account movement can. Paper tree bank letter summer minute perform indeed.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (19, 'Johnathan', 'Garcia', '740-529-2639',
        'hromero@example.net', '10500c0d378fece696c281f26cca43e03897a831d5dc834e03a3771ab7258ac4', '53794b965d01ab5e173db609e8d95c8d6182138a323cf4faecdbb89fd5a11538', '16825',
        '2025-04-09 20:05:50', 'New Hampshire', 'Whiteside',
        '64619 Wilkins Wall Apt. 735', 'Agency rich accept if share land. Drop local cell kid growth main. Why mission because feel.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (20, 'Jennifer', 'Wheeler', '(529)279-3970x37',
        'brownjohn@example.net', '225cc22f478eb8e771106bb5360d84d52b5fdcf8573279c1d4c8a5bbfec9214e', '904b4b1bd673bc2ad98b2c884843dbec827f414cf6b3b8e7d2ec48dd13504403', '14794',
        '2025-05-28 00:59:57', 'North Dakota', 'Middletonport',
        '3258 Robbins Lock Suite 571', 'Senior seem west hour less. Decide happy another image because include now.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (21, 'Anthony', 'Boyer', '552.674.1974x366',
        'williamsleslie@example.net', '1d86e1f4cb1036fbfb49506b8c7cabceca8e770eacac034049277c96a59dbe39', '2496406bac0ec66531fcb587b3bc74d7d6d35520e2b08620b29a77760bd77dd4', '69617',
        '2025-04-04 02:21:19', 'Nevada', 'Paultown',
        '9220 Janice Gateway', 'Evening his gas health sort couple station my.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (22, 'Colin', 'Huff', '623.763.9752',
        'jasonclayton@example.org', '6f5be356cfffb11525c7f2ee79191fe30f456d84235e89b22f86ddfeee8213e2', 'b4fe44a7e9fa874d2c096434cab1314653e30d8f679c1baf86f45a4a55bf3c9c', '00560',
        '2025-01-17 04:07:20', 'Texas', 'Kylemouth',
        '90412 Werner Passage', 'Situation eat thousand. Cause others skill industry old effect fine.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (23, 'David', 'Wright', '646-467-0285x332',
        'andreawright@example.org', '861236120051519f05fc1b33e778fe1a6b1dfd90f2aa06d37e4a3335a31d261a', '4c8620c84ca6dba166750e56b6b2641a2dda00cd9a74ba507fb169503d26f9b6', '95104',
        '2025-03-23 01:05:10', 'Virginia', 'East Katherine',
        '238 Lindsey Walks', 'So suggest artist cold measure defense mouth.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (24, 'Kathleen', 'Willis', '001-230-408-1737',
        'elizabeth54@example.net', '8959f47323c1f2e1e90837f2c1f157d1e5bf7feb84758b43c5be32e0f906abc9', 'e509ff56efff8722b2290f30dd11173b0c5cc20cca0557fef95e66b3322bf7bf', '03450',
        '2025-04-04 02:23:30', 'Washington', 'New Randy',
        '7274 Bailey Route Suite 696', 'Reality adult others talk without wall stay. Vote continue community whole growth.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (25, 'Vincent', 'Cox', '(519)861-0209x84',
        'luisflynn@example.com', 'b2729bc62fb0ec18df49b79a76b60ad9400e41297142ed1f0b00a564d4a71eb0', '3ef6b32974764d33e629fbdeff60a01a895c688b5cc73b1e58c7054d6e8ae236', '66775',
        '2025-03-21 03:57:52', 'Pennsylvania', 'North Brian',
        '281 Collins Roads', 'Range international everybody book. Meeting movie avoid American address simply.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (26, 'Anthony', 'George', '(528)446-6807x82',
        'raykeith@example.com', 'cb43deb37e48cad2dbcc6d86ea068622277fcc4ecfb6b3bb21b5da13d6664991', '948ca891ea234c58fa5f062a3f1d50fc55e6822d775fa535586a6b234965afde', '83909',
        '2025-01-11 00:14:27', 'North Dakota', 'North Danielleberg',
        '215 Joy Islands', 'Official artist health effect forward magazine. Money ball keep since my necessary million.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (27, 'Carlos', 'Adams', '857-769-5978x538',
        'laura03@example.net', '7de9071a542cde9b37a5a5b149ddfea3657a7f9dbc2faefe208baaa759b540b7', 'c6a7d88fe4d2d0a90156a76b752d0ea3ee9ee139ee09dcba277514b4ed83e574', '57544',
        '2025-05-29 20:32:43', 'South Carolina', 'New Andrew',
        '95052 Adams Orchard', 'Your outside wish community kid official within.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (28, 'Timothy', 'Holt', '+1-559-731-8734x',
        'bstewart@example.org', '190659c7aafce0fd47ab200b6718c2cc4c99605b3d4ea4be02fd84b7758c437e', '4e2690adc242e317b7f79eb2e76ee2f10fc39ffe979a040d0cb8db8d7acca595', '21938',
        '2025-04-19 04:49:39', 'New Jersey', 'West Walterfort',
        '6010 Bird Track Suite 987', 'Tonight table loss detail put risk yet. Before wrong take old former run others believe.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (29, 'Jeremy', 'Crawford', '929-443-1262x390',
        'christopher94@example.net', 'a085d3877dfbd9754bbc7b599e1a51c04b4af064ac9d4fa89ebfbb30b8d0fd9e', '1845fde6a0edc0d4a3a38275f9e83cd09d580f5167d1bdaab952e438009abd30', '19300',
        '2025-02-10 05:18:18', 'West Virginia', 'South Davidfort',
        '532 Stewart Mills', 'Push country glass evening much. Design need assume heart west.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (30, 'Brett', 'Whitaker', '(868)528-9204x97',
        'fharris@example.org', 'e421251afeedf9ef6a36efa6a516f9c0e0759aeb851423c8673475f6a8066fc7', 'cee670f6ce32f85db12e43b560d31193efddc3bcef6d93d0f941f4bd9264004b', '88776',
        '2025-04-01 14:20:58', 'West Virginia', 'North James',
        '96618 Alicia Forge', 'Stay century law before everybody. Hot scene view today father. Pass step have perform.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (31, 'William', 'Flores', '001-315-633-4866',
        'alisongreer@example.com', '0345e7bbd225afd4be55da56e13b378c080f5b5b20b3b1a7c75ddaa4494de34a', 'b188ce12651e48f460fea3861192dcaf3d1ba76678cffcbcbe8ced9a2896e7c6', '75555',
        '2025-03-25 09:06:34', 'Kentucky', 'North Shelly',
        '8620 Brady Ports', 'Positive better management minute air represent. Beat start say either none heavy down business.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (32, 'Dana', 'Myers', '5439319238',
        'terri04@example.com', 'f91668ce08203d9127182ab30376fc28095fa85a3f336ab1138caf927b6d7c9f', 'db5c10d3281f44accf51e33a48254a71784dfc469ed9d2765fdd8627b7ebff3e', '17431',
        '2025-05-19 00:35:51', 'Michigan', 'Bradshawport',
        '4344 Micheal Mission', 'Whom language place side member sign.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (33, 'Christy', 'Knapp', '362-313-5772x566',
        'aanderson@example.net', 'e82ad3cfb168883d8d950a377a5e0c5c0dcfdff85c4a491b3b46e59905c44c74', '170f6439185458e2e1de1fc9bd2f4c09964d55bce051e656db6480405a14acf2', '63416',
        '2025-02-16 02:34:01', 'Montana', 'South Brianport',
        '4818 Smith Divide', 'Fund front suggest drug.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (34, 'Maria', 'Jackson', '001-690-886-0114',
        'stevenwheeler@example.net', 'f71efc61159207d2ef3ebae1c93df520118fbdb89c6a9c23318482f9a93cde40', '2ba1640c4470d741830e23d55a9f537e928475bc8af6c446400398a5bd31383d', '84360',
        '2025-01-02 14:59:59', 'Pennsylvania', 'Wallerbury',
        '8577 Cooper Trail Apt. 237', 'Head perform walk. Put again big role stand. Cup home record forward.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (35, 'April', 'Powers', '+1-969-743-1608',
        'gonzalezkenneth@example.com', '45f6ed1464daeb73465204570b36d1373c89babb3abdee2e7d63d860b04607a2', '62e012e9ccf94e04927f34b270fa29319fce88ba43fdd6aff3696979fd37478a', '37666',
        '2025-01-13 11:12:34', 'Arizona', 'West Nicholaschester',
        '347 Spencer Road Suite 472', 'Theory simply concern page director writer act. Would truth join issue face key when.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (36, 'Lisa', 'Campbell', '646-509-4571x043',
        'bliu@example.org', 'be8568cd4a4fc07d44f988cd0f09409786e0914bad6132757d649f1f2b297944', 'e2ec11fe7168027f168d08cca2055481d3e8127a77c6a996d88df20e72ec0ce5', '48846',
        '2025-01-02 08:57:35', 'Maine', 'Brianton',
        '92719 Andrew Summit', 'Measure again ability election race decide. Control stock same project.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (37, 'Cynthia', 'Williamson', '001-835-261-4685',
        'xmedina@example.org', '49471219ba63f22c5c08e63d7345143b0aa09c79fadb19de79b87f0f46985a42', '3aa0a049602f87aba5a2d146016049138111da71be0c19f57be7e19d0a9509a7', '35588',
        '2025-05-21 07:56:12', 'Colorado', 'Deborahtown',
        '24581 Tyler Well Apt. 640', 'Air parent forget. Doctor nature cup whom poor send.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (38, 'Jeremy', 'Becker', '+1-969-503-9766x',
        'bryan29@example.org', '739b2172ffd2c268817844754a7f4b730746b49ce2739c28081a808e5ebf7b7f', 'a39b7986321ddd95b68061495c0fd77d796ab3cb9ccaab75a96359819eb8a5f1', '24694',
        '2025-01-20 04:11:11', 'Georgia', 'Gregoryview',
        '8677 John Island Suite 446', 'Practice organization fill can cause as future. Agree likely off. Cause letter career.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (39, 'Daniel', 'Sandoval', '001-852-607-6631',
        'freynolds@example.com', 'e37b43d434d7d091326bc0825f1fd5f7c939def287978d4856991e01c713c700', 'd54219fa0110b6e01780d307076990b4f0dfd8e78fc4a5ba74ef8ef45aa3bcbb', '56086',
        '2025-05-02 23:00:57', 'Wyoming', 'West Charles',
        '5547 Sanchez Mountain', 'Sound market best only know fish. Produce clear various production.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (40, 'Geoffrey', 'Grant', '431.284.1061x677',
        'hernandezdavid@example.com', '882688ae138d40dfd4efd39216539c410a0f177ce8f0b32f2bb5b033be581b3b', 'd6695c5645f7aa68f61e3d8ae63f01640e0b492e8b2752af7ee01223b976705e', '11227',
        '2025-04-22 23:40:21', 'Pennsylvania', 'East Melissaport',
        '87452 Green Fall Apt. 138', 'Care door natural produce team operation. Top worry there similar adult range true.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (41, 'Laura', 'Perez', '772-680-7201x802',
        'katieleonard@example.org', '6fd33003b1aa8020b55b726e592a9e900e3f15aac1bdae0c6c1add16fa6df72d', 'e966fa569f1fa753ce1207aee3c966c40bdb18ebc10283cc3ee8c74c477a1e5b', '47666',
        '2025-03-16 08:02:26', 'Tennessee', 'Paulaborough',
        '093 Norma Street Apt. 623', 'Player use through first exactly far though garden. Make speak might fight social forward.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (42, 'James', 'Booth', '388-229-2717x362',
        'warnervirginia@example.net', '1e817f3d6be97b184ef408d392ba5efc847b3e7f5c02c8130211603bf3e7dcea', 'ae158043a831bf3b508b5099e0a7c2f9428738b29dfd076564a918938634088d', '78001',
        '2025-01-27 16:03:36', 'Georgia', 'Lake Michael',
        '67259 Catherine Track', 'Assume part father himself research general. Within night want according.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (43, 'Becky', 'Cain', '768-478-2652',
        'davisdaniel@example.com', '309a4a6745361a124342ac393c6681b7dbfe511278e96c21a8179feb9b036f9e', 'f8818222687f82284e44751c1e0b29153ebc1cf932d0fa5cb91dce6bff3b6915', '86261',
        '2025-02-07 04:22:15', 'Alaska', 'Riverastad',
        '8047 Barr Fork Suite 089', 'Unit in baby notice. Attack food laugh newspaper part better college.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (44, 'Amy', 'Gibbs', '+1-754-683-9409x',
        'lori49@example.org', 'c31b386f389fe73c8c8d9f040a09a8a95e7f1ad0220afc65ea8f877fdbc49764', '877cb958459dad66038048879a39cc2fc951fbc7e64c0dfeebe21ef5e88e232b', '84637',
        '2025-04-26 22:07:07', 'Montana', 'South Jesuschester',
        '0297 Deborah Bridge Apt. 126', 'Leader contain culture along budget serious. Run some Congress result every war.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (45, 'William', 'Tucker', '001-318-412-2405',
        'amyscott@example.com', '83e646fd3ca9c8ae3855dd81fc574391bcf5ca77e8d65524b2bf90cc40e1c988', '1c2fbaf454a716e1b6da82cfbc5dbc7a3b64ebb11be5c7f8db9004d579db650d', '94256',
        '2025-03-28 08:40:39', 'Texas', 'Kimberlyton',
        '435 Heather Grove', 'Its body source cut feel beat why.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (46, 'Valerie', 'Ford', '+1-658-221-7675x',
        'evaughn@example.com', '3bc6786b3f5f770daed1abdc92a4690a42edb78d84366f00f03ceea811a4eb0f', '35c656227fbe1cd7a14a23fc40a05444a65a6742b2b2e845d9f744d2beba2f7a', '15299',
        '2025-03-18 11:40:46', 'Iowa', 'Conniechester',
        '090 Andersen Loop Suite 332', 'Movement certainly group member. Since use out cost game set.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (47, 'Tara', 'Garcia', '+1-778-597-4591x',
        'jorge17@example.org', '278e541ce7e6ee904f1638edd037aecadd165e192185253e3a88188149e9a566', 'f29d849a9d6b79523dfc58f85e5aaac261104fd25682c6493afa5488acbc1d78', '93405',
        '2025-02-24 13:36:16', 'Wisconsin', 'Jonathantown',
        '535 Rowland Stravenue Suite 306', 'Occur quite anyone have.
Ten many fine so say.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (48, 'Jessica', 'Mendez', '676.809.8583x294',
        'ellisashley@example.com', 'f72a075c9376c3282a27e68a515270bb29384736085b4374d4cf799d571b6448', '7ee055f31018e68aa431f6f1dbbe67e1529f39fa67b9ed581dccbbda92441517', '97224',
        '2025-01-24 11:46:10', 'Massachusetts', 'Sydneyhaven',
        '7194 Watts Stravenue Suite 501', 'Simply wait similar blood really child lead.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (49, 'William', 'Flores', '695-915-0792x594',
        'griffinjohn@example.org', '85f8689ba4e690d1d2de6128d373c59844f40ed687b51027dc5a40811f6c4025', '448bff2236dc27ddfe2a0bf0d2b597f90010dc616972f3a5e7e89e582b75220b', '50312',
        '2025-03-28 10:40:08', 'Missouri', 'West Anthonytown',
        '3271 Hoffman Greens Apt. 200', 'Modern simple ok soon four once. Free another mind kind religious.');
INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (50, 'Matthew', 'Hill', '(400)312-9592x00',
        'edwardlopez@example.com', '5c0c9a61d23a0579d626a92d98c057cdfc59082582b1cbbe13fbd6f95ad62f08', 'd99f80bc56b572f488f31ae7ddedf05512e159ec67ea66a77180fcf6c61f007b', '74360',
        '2025-05-29 09:37:59', 'Alaska', 'New Samantha',
        '5195 Brown Field Suite 942', 'Control career state six born old nice. Benefit close eight energy continue industry best change.');
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (1, 'NVIDIA Score 9725', 'Half air important. Speak behind appear home person current able.', 983.64,
        '2025-01-27 16:23:26', 77, 4.61, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (2, 'Intel Experience 2208', 'Administration expert it run travel determine. Hit team reveal player soon current by write.', 903.89,
        '2025-05-29 01:20:07', 87, 2.32, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (3, 'NVIDIA Year 8113', 'Say story improve. Factor tell billion establish character decide candidate. Decide officer sometimes art call various.', 350.38,
        '2025-04-25 01:18:27', 81, 4.65, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (4, 'Corsair Suddenly 9541', 'Interesting wear base worry. That nation thousand southern change.
Hit half agreement special.
Wish street space human want require bit network. Follow never certain theory bar. Pm debate in.', 297.46,
        '2025-01-03 05:09:30', 70, 4.66, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (5, 'Corsair Nearly 1018', 'Resource Democrat meeting speech pattern surface. Young meeting material deep anything town.
It big also foreign boy. Whose better themselves field number.', 631.29,
        '2025-02-27 08:29:49', 42, 1.98, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (6, 'Intel Blue 4130', 'Dark power energy look source protect owner. Identify involve hospital capital others majority something. Tough radio not account land why thought how.', 921.16,
        '2025-03-06 09:25:42', 28, 1.95, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (7, 'Seagate Quickly 8339', 'High inside somebody analysis fund artist president.
Ready the theory moment better of music defense. In evidence board business choice dream low painting.', 136.65,
        '2025-04-29 04:06:00', 40, 4.5, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (8, 'Intel Task 5938', 'Already yet professional choice manage of catch. Hit look lay score inside.
Success federal movement down under. Dream memory evening small focus. Worker store successful field crime drug.', 573.69,
        '2025-02-21 10:45:21', 90, 1.5, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (9, 'Seagate Across 4329', 'Current page skill indeed four interview. American under product occur add beat. Which worry door tonight.', 965.64,
        '2025-01-06 01:40:45', 77, 3.19, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (10, 'Corsair Resource 2501', 'Discussion would arrive teacher where close democratic. Team middle model pick. Type focus discuss our five purpose everything.', 616.46,
        '2025-04-28 12:27:42', 49, 2.27, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (11, 'NVIDIA Night 4012', 'Area agency shoulder. Speech lawyer west particularly everything former. Woman at kid box run would. Full describe economy goal.', 229.91,
        '2025-03-21 07:21:28', 23, 1.13, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (12, 'Corsair Trip 2131', 'General everything center. Kitchen try trial other night somebody process. Street know rich.
Carry music rest until new enter. Hand room himself already person strategy large. Among job reality.', 135.32,
        '2025-05-30 08:34:27', 96, 1.52, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (13, 'Intel Interest 2314', 'Not rich foreign professor will themselves. Everything writer mean series nothing nothing. Six day claim contain discuss bad discussion.', 903.25,
        '2025-03-02 05:55:27', 69, 3.73, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (14, 'Seagate Figure 4858', 'Attention provide itself. Manager major newspaper rock mind.
Writer modern available include. Well condition not who future people.', 857.0,
        '2025-06-01 02:59:55', 86, 3.36, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (15, 'Seagate Road 5509', 'Ask possible decide career professor experience. Concern above next role. Wear southern lot consider stay throughout itself.', 478.02,
        '2025-01-04 16:19:59', 84, 3.56, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (16, 'Intel Enter 6313', 'Seven woman throughout describe political traditional. Article last forward.
Themselves other today PM. Should enough act end value new.', 632.13,
        '2025-03-24 05:07:20', 62, 3.35, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (17, 'AMD Movie 4981', 'Check head huge standard turn spring impact. All evening process of run firm sell.
Against some foreign. Same wall wife before eight arm seven interest.', 65.39,
        '2025-03-12 23:52:11', 34, 1.47, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (18, 'NVIDIA Arm 3793', 'Fact year gun test according majority. Daughter interest move authority compare.', 365.9,
        '2025-03-14 14:44:51', 7, 1.4, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (19, 'AMD Edge 1741', 'Very well religious those report reason. Society attention heavy debate cover.
Practice town billion painting peace half. Group indeed feel should. Into color later case less important.', 826.25,
        '2025-03-11 03:29:30', 81, 4.64, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (20, 'Intel Hot 3038', 'Reason sure act pay general.
Run its near really. Little Mr population add age letter religious. Money purpose TV between camera.', 653.24,
        '2025-05-07 18:29:49', 77, 4.32, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (21, 'Corsair Property 2499', 'Offer present pretty language. Environment different some another run wall force.', 401.62,
        '2025-05-12 06:45:17', 14, 1.15, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (22, 'AMD Yourself 4030', 'Majority bit instead smile happen successful human. Public according understand happen begin actually. Data interesting eat practice throw receive.', 732.2,
        '2025-05-05 12:05:56', 61, 1.84, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (23, 'Intel Pretty 9916', 'Film kitchen environment. Watch wrong pick structure wrong figure continue.
Whom fast late surface concern law. Share present spend make garden. Gas any manager political keep attack behavior.', 454.33,
        '2025-04-02 07:57:39', 12, 4.34, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (24, 'AMD You 2179', 'International range arrive figure son crime Mrs design. Measure brother approach five. Later role change.', 664.57,
        '2025-04-30 04:16:41', 44, 2.74, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (25, 'Seagate Pm 8653', 'Term main feeling bag season short. Despite approach beautiful late find.', 87.4,
        '2025-01-09 16:26:49', 12, 3.8, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (26, 'AMD Role 5262', 'Under rock next week scientist recognize so. Risk agent dark sound again professor operation next.
Team front mother possible. Left piece time on expert must small.', 390.62,
        '2025-05-14 05:31:50', 93, 2.88, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (27, 'AMD See 1951', 'Also space good from glass type structure. Rest page message become of Republican life.
Game look probably. Rest term tree pass he training one.', 799.21,
        '2025-05-24 19:46:55', 20, 4.38, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (28, 'Seagate Station 5107', 'Issue long civil anything court many. City clear deep. Rather summer country toward.
Civil inside friend service push arrive. Current black wide walk.', 161.34,
        '2025-05-23 03:26:32', 56, 3.66, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (29, 'Corsair Public 7715', 'Forget truth current camera. True listen art consider social example state into. Deep travel baby cover.', 905.08,
        '2025-05-21 02:24:12', 65, 4.67, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (30, 'Corsair Move 5111', 'Water happen debate. Firm person black because song.', 195.73,
        '2025-04-07 22:35:28', 88, 1.05, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (31, 'NVIDIA Use 1748', 'Base service stand measure. Capital culture their perhaps bill.
Name ability population number campaign or. Recent type rest name. Unit difficult matter police anyone.', 567.09,
        '2025-05-19 08:04:28', 17, 1.96, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (32, 'NVIDIA Describe 5716', 'Operation walk according party establish. Address agent life true. Change area either.
Start wonder space particular. Walk four stop part agency stock window safe.', 689.72,
        '2025-02-20 01:01:40', 75, 4.79, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (33, 'NVIDIA End 7357', 'Partner seek up.
Stuff rock foreign pressure maybe. Mention detail enough suddenly.
Without some effort red forward. Event help born baby culture. Range statement step ever.', 761.05,
        '2025-05-16 19:07:42', 83, 1.32, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (34, 'NVIDIA Still 3622', 'Institution wait maybe before far many thing. Finally pretty well list.', 277.44,
        '2025-02-16 04:21:46', 81, 2.79, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (35, 'Intel Beat 7590', 'Weight main fly conference. Bit data guy think condition source discuss. Tell method together purpose either.
Base arm upon one start. Thousand a rich open person. Tv common once vote wrong.', 878.09,
        '2025-03-17 13:39:13', 72, 2.67, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (36, 'AMD Factor 8296', 'Possible left car it large rock. Anything notice season probably office another perform view.
Others throughout attention.
Forward against federal hot here.', 110.68,
        '2025-05-07 19:31:19', 89, 1.63, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (37, 'Seagate Month 1001', 'Use friend attack guy address chair. Everybody camera treatment class game. Develop west dog animal suddenly property name.', 889.67,
        '2025-02-04 22:20:04', 63, 2.3, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (38, 'Intel Artist 7801', 'Money lose ago cost. All glass loss when forget from be player. Ready majority peace fish.', 228.59,
        '2025-03-05 09:33:34', 81, 4.91, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (39, 'Intel Arrive 7583', 'Worker finish now care. Thing few similar.
Pressure son time Democrat deal. Language help yeah report ball seat vote wish. Such quickly fall third former watch. Pick admit serious sound interest.', 952.06,
        '2025-03-05 12:52:41', 53, 2.26, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (40, 'Intel Only 1038', 'Stay again partner. Despite director speech sure.
Them whatever service well project science understand wall. About once whether power court child from month. Bank operation fire some but for.', 981.22,
        '2025-03-24 17:16:56', 86, 3.11, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (41, 'AMD Somebody 2948', 'Behavior indeed marriage why law. Reason training several research water behind lose.
Number beat mission sound employee international. Reason run yourself until federal part.', 627.93,
        '2025-05-25 12:43:59', 25, 4.49, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (42, 'AMD Page 2641', 'Data strong relationship hand coach. Almost itself impact fund can. Can former anyone pressure.', 501.82,
        '2025-04-27 05:18:49', 50, 3.51, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (43, 'NVIDIA Increase 8421', 'Cold nearly listen act. Father budget election. Total type especially question new too few.', 809.82,
        '2025-03-26 00:55:39', 14, 4.45, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (44, 'Seagate Turn 6686', 'Hope part everything often pick. Attention among than.
Level job soon husband ground question himself. Yet outside now store over book community. Player need ok much.', 159.34,
        '2025-05-12 03:43:44', 19, 2.11, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (45, 'Intel Myself 1666', 'Image seem rule until. Risk him decision walk account bill mean point.
Increase physical future why. Hard fine base garden soon stop. Pm think include how participant.', 245.44,
        '2025-05-02 13:02:40', 33, 3.23, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (46, 'Seagate But 1688', 'Event wait describe four. Enjoy life inside see. Myself before bring idea beat myself remember face.
Region list wonder early. Truth thing store forget else. Fact hit fund room.', 854.03,
        '2025-05-08 14:05:27', 89, 3.43, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (47, 'Corsair Administration 8134', 'Clear key thousand build join. Should along public join every option long. Possible yeah recently increase. Finally list finish unit bar blood away.', 403.82,
        '2025-02-02 21:28:11', 68, 1.71, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (48, 'Seagate Bill 5768', 'Lay week charge since. Federal specific truth one. Hotel require after plan why.
Father music high far. Recent eye again space body friend central. Bill social sure.', 58.44,
        '2025-01-13 17:01:19', 19, 2.09, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (49, 'NVIDIA Part 2535', 'You entire prepare into build either relate. Our week still true ability. Right anyone until before.
Green together interview tend drive region unit. Ok coach his who approach share peace.', 371.33,
        '2025-01-02 23:52:01', 79, 1.14, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (50, 'AMD Reveal 3448', 'Money foot since training food low respond. Several test morning article attack. Still thousand season program behind. Couple field eight member want affect can.', 982.81,
        '2025-04-12 11:56:32', 37, 2.44, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (51, 'NVIDIA Dog 2882', 'Themselves leader hear cause figure though program. Too design stay law. Situation star although skill.
Movement hand since become black. Home deal important current. Require likely improve good.', 504.15,
        '2025-02-02 17:39:14', 30, 4.74, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (52, 'AMD Those 9569', 'Professor together painting value alone could.
Position animal close subject. Leave interest more she statement lot. Young century again always car strategy television put.', 742.22,
        '2025-01-17 01:04:05', 38, 2.61, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (53, 'NVIDIA Yes 7794', 'Debate front free long hot. Discuss stay machine strong just. Culture final might.
Series hotel community two back better our. Day fly area parent.', 153.21,
        '2025-02-02 00:51:24', 71, 4.63, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (54, 'NVIDIA Technology 6630', 'Story case establish cost buy develop. Especially like practice century.
Analysis affect task trip already. Within threat black president heart. Husband heavy stuff cover training product.', 168.1,
        '2025-01-04 15:38:25', 14, 3.8, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (55, 'Intel She 5946', 'Nor range statement religious. Region over return their down adult. Fire minute decade enough.
General must their form job fall. Positive record wide suddenly game.', 368.32,
        '2025-02-21 08:35:17', 87, 4.58, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (56, 'Seagate Approach 7153', 'Stay much think environmental floor air medical thus.
Hold leave provide story factor camera agree.
Service ask behavior financial front relate. Boy defense company cover customer movement.', 815.8,
        '2025-05-16 06:28:17', 81, 1.35, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (57, 'AMD Throw 4621', 'Audience generation set onto figure. Tough adult possible six. Sister relationship plan your participant sit I.
Happen society meet many decade gun see individual. School about television power.', 108.09,
        '2025-04-05 11:38:04', 1, 1.39, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (58, 'Corsair State 9005', 'Tend any home employee month. Step forget building ground establish go.
Once style measure use education too. Argue create behavior ten effort kitchen into.', 798.86,
        '2025-04-12 20:31:07', 91, 3.72, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (59, 'Intel Interesting 7034', 'Various century energy reduce old with left spring.', 259.12,
        '2025-01-25 21:22:14', 33, 3.34, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (60, 'Corsair Still 4144', 'Consumer positive kind development impact plant conference. Work more fact. Some man interview three.
Amount national war sense often from reach. Whether every also will because could.', 390.58,
        '2025-05-28 20:40:32', 8, 4.29, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (61, 'Seagate Pick 8399', 'Certainly worker receive production maintain. Result nothing college thought time peace.
Image him soldier suddenly myself imagine kitchen. Prepare fight crime water.', 764.81,
        '2025-01-12 12:25:27', 25, 1.48, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (62, 'NVIDIA Style 4395', 'Free baby opportunity environmental certain size oil. Order join future second reach.
Money kind quickly grow. Voice threat house her move a in. Generation almost score city condition who.', 658.94,
        '2025-03-01 19:01:41', 27, 3.49, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (63, 'AMD Conference 8510', 'Skin past head leader often image.
Produce general parent heart over situation responsibility. Information since both very along son make time.', 409.12,
        '2025-03-14 21:25:32', 69, 4.31, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (64, 'Seagate Company 8993', 'That American life picture surface TV it. Whatever light fight adult. Part language travel option writer.', 190.97,
        '2025-02-22 02:03:49', 51, 3.55, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (65, 'Seagate Act 9116', 'Go produce five forget poor bed him vote. Explain call newspaper get newspaper ready country. Include positive join plant ever such able. Everybody think American several theory.', 695.34,
        '2025-02-22 16:02:05', 41, 4.33, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (66, 'AMD Myself 9893', 'Body a senior them general family. Though another consumer better. Mind weight sell nature door difference.
Area third truth matter. Ready marriage grow another car behavior game including.', 629.27,
        '2025-05-01 20:18:29', 28, 1.04, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (67, 'NVIDIA You 1581', 'Detail spring away thing bed concern worker.
Wrong provide blue manage player. Through realize season.
Create chair they always. Nice resource decade attack. Mrs above husband point.', 548.84,
        '2025-03-24 03:13:38', 32, 3.41, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (68, 'Corsair Forget 5823', 'Necessary treat model build skin stuff. Glass PM since loss.
Kid many space live measure agree guy. Film these issue everyone camera. Career marriage no need professional.', 732.22,
        '2025-06-04 16:49:07', 60, 1.27, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (69, 'Seagate This 1645', 'Family challenge effort natural indicate early quality. Single test operation development trip song sure. Model report manage.', 113.03,
        '2025-03-10 18:26:03', 16, 1.16, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (70, 'Corsair Value 6416', 'Situation reflect new choose adult opportunity style. Third situation customer every. Reveal difficult article certain director good toward street. Work low plan education which important visit.', 868.8,
        '2025-02-12 21:01:58', 19, 4.47, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (71, 'NVIDIA Military 9273', 'Attention agreement able. Would professional gun describe nature often smile.
Ahead when value point set. Will your approach subject possible first.', 413.11,
        '2025-05-19 23:08:14', 67, 3.01, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (72, 'Seagate Show 2251', 'Involve of service drive attack safe low. Eye remain ten page. Defense tax discuss.
Structure follow attention act.', 759.61,
        '2025-03-25 10:24:30', 96, 1.82, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (73, 'Corsair Like 7366', 'Important word effect six too trip. Most new oil special success fish hundred. Require along speech food seat actually actually.', 627.05,
        '2025-04-13 04:06:26', 29, 4.41, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (74, 'Intel Paper 3981', 'Require parent nor make. Happen try gun national minute. Water exist page school another sell.', 337.31,
        '2025-04-07 11:39:01', 72, 2.02, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (75, 'Corsair Short 5292', 'Others beautiful adult effort support. Down teach with food.
Society should think stay special behavior the. Take body suggest ten.', 945.79,
        '2025-05-26 17:31:33', 38, 4.09, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (76, 'Corsair Half 2020', 'Phone long scientist. During subject fall.
Edge apply spring blood response heavy movement. Unit charge lead music see business.', 205.6,
        '2025-04-07 07:08:50', 16, 1.96, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (77, 'Intel Travel 1588', 'Least sort rise actually born. Democrat one could usually beyond.
War address guy month not. Hospital also billion. Land happen whose worry.', 507.25,
        '2025-03-21 12:28:59', 18, 2.97, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (78, 'AMD Wish 6779', 'Tend sea development view seat eye anyone physical. Hot work southern sometimes bill both.
Analysis while want whatever no.
Behind successful of why day door sit. Believe save simply some.', 440.57,
        '2025-02-10 15:21:00', 78, 2.87, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (79, 'Intel Interest 2662', 'Season similar she professional. Must and speech country admit follow break. Season treat push first crime.', 497.33,
        '2025-01-19 07:00:49', 19, 1.08, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (80, 'NVIDIA House 2725', 'Picture agency wrong every key every up. Movie organization want build.
Each argue no from technology away cell. Stock story glass employee listen require each.', 715.07,
        '2025-04-08 00:18:15', 83, 2.39, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (81, 'Corsair Green 2818', 'Source project family always. Agree bad else. International industry possible particularly month box. Last feeling live though really table.', 887.2,
        '2025-02-27 20:07:12', 78, 3.8, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (82, 'Intel Strong 5855', 'Man maybe among everyone involve never only. Year affect reveal bad experience.
Town wonder until operation difference. Enjoy best high represent. Language address social clear.', 799.13,
        '2025-02-23 20:33:39', 16, 4.83, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (83, 'NVIDIA Out 2991', 'Up material country continue. Its game follow. Tonight yet most walk. Career including control reason amount figure customer.', 543.05,
        '2025-04-12 11:10:44', 100, 4.98, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (84, 'Corsair Religious 8283', 'Become assume police sister positive base that. Reason television indicate gas sort manage. Maybe figure off reason watch argue.', 402.99,
        '2025-06-02 04:12:48', 24, 2.82, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (85, 'Intel Must 1655', 'Tree suddenly information least imagine including. Deep accept old. Congress help cut threat. Suggest wish travel admit allow reduce everybody especially.', 511.85,
        '2025-04-04 05:07:52', 3, 4.78, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (86, 'AMD Design 2531', 'Above radio debate situation one bed.
Them imagine religious course would. Yourself near receive hear.
Huge wall house himself. Art director herself true common.', 787.52,
        '2025-04-13 02:43:58', 80, 4.12, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (87, 'Seagate Could 6002', 'Record car fear measure south. Yet would magazine author. Off tough difference impact management practice.
Audience just really sport. Cell writer avoid affect read. Fire space usually detail image.', 948.2,
        '2025-03-22 11:47:07', 18, 2.7, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (88, 'Intel Serve 2716', 'Scene set although identify only hope about movie. Likely area economy social fast eat. Wife despite work year third. Language indeed bring account candidate.', 444.85,
        '2025-04-13 07:34:46', 12, 2.66, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (89, 'Intel Option 8319', 'Pay quality likely report nearly help them. Seat strategy success list.
Happen what record right conference tonight. One arm fill character court.', 459.52,
        '2025-05-19 20:03:36', 53, 1.12, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (90, 'NVIDIA Year 2286', 'Agent record structure one prepare organization. Leave world science reflect. Network language suffer land lot final safe pull.', 384.87,
        '2025-03-14 04:46:29', 15, 2.44, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (91, 'NVIDIA Race 6699', 'Rate discussion determine reflect onto prepare. Admit how fall stuff if guess owner on.
Set four free behind condition themselves couple. Red about perhaps green score science door.', 219.0,
        '2025-04-23 02:47:26', 29, 4.28, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (92, 'Seagate Happen 3347', 'Off special drop even program run ability picture. Wonder accept measure three avoid population leave.', 247.57,
        '2025-01-22 21:06:59', 26, 3.64, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (93, 'Intel Owner 5804', 'Church nothing by it garden he. Pass bill cover thank concern action individual.
Pick room cause water range idea buy movement. Others boy such bar always.', 400.66,
        '2025-03-07 21:59:04', 3, 4.73, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (94, 'AMD Election 4063', 'Including position fish admit price live family smile. Crime administration majority final when.
Beyond road east. Possible dream cover since various computer effort between. Nice care scene lay.', 481.34,
        '2025-03-02 16:55:33', 61, 2.38, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (95, 'AMD Floor 1457', 'Back offer subject particular bit economic fast. Beyond hit every single address. Yard age star member entire.
Data experience as term develop. Age series series the.', 968.18,
        '2025-05-12 18:23:28', 46, 2.34, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (96, 'NVIDIA Image 6357', 'Economic specific apply staff from race. Perform drop recent prevent.
Tv direction job television off. Poor list TV subject product popular.', 224.83,
        '2025-02-01 19:10:16', 10, 1.41, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (97, 'AMD Message 7170', 'Person administration reflect history talk system effect. Sign memory name become government society. Within allow eat position.', 902.78,
        '2025-01-14 08:22:11', 16, 4.22, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (98, 'Seagate Cup 4978', 'Next often discover hour. Even environmental score increase. Pick very southern thus.', 274.81,
        '2025-04-05 11:45:48', 23, 2.16, 1);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (99, 'Intel End 3166', 'Away war word if light alone.
Suddenly music resource position do. Accept popular line stage democratic sing.', 621.14,
        '2025-05-07 01:58:13', 50, 1.31, 0);
INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES (100, 'AMD People 7885', 'Fine here let party explain big list. Some after stuff her once.
To such true entire season sign. Item never eight court. Child half plant visit.', 334.41,
        '2025-05-25 14:27:01', 53, 3.96, 0);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (1, 7);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (2, 5);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (3, 6);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (4, 2);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (5, 4);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (6, 8);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (7, 6);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (8, 1);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (9, 7);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (10, 7);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (11, 1);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (12, 7);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (13, 6);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (14, 8);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (15, 4);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (16, 6);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (17, 5);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (18, 8);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (19, 2);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (20, 3);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (21, 2);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (22, 5);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (23, 2);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (24, 3);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (25, 8);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (26, 7);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (27, 3);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (28, 7);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (29, 7);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (30, 3);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (31, 4);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (32, 8);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (33, 6);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (34, 3);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (35, 6);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (36, 8);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (37, 2);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (38, 8);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (39, 4);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (40, 5);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (41, 1);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (42, 8);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (43, 8);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (44, 1);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (45, 4);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (46, 5);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (47, 2);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (48, 5);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (49, 3);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (50, 7);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (51, 8);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (52, 2);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (53, 8);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (54, 4);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (55, 7);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (56, 5);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (57, 1);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (58, 2);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (59, 5);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (60, 1);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (61, 1);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (62, 5);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (63, 7);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (64, 7);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (65, 8);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (66, 2);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (67, 5);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (68, 6);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (69, 5);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (70, 4);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (71, 2);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (72, 1);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (73, 2);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (74, 5);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (75, 5);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (76, 6);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (77, 2);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (78, 4);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (79, 3);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (80, 2);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (81, 7);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (82, 5);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (83, 5);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (84, 3);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (85, 4);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (86, 2);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (87, 7);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (88, 7);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (89, 5);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (90, 5);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (91, 8);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (92, 6);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (93, 3);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (94, 3);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (95, 2);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (96, 2);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (97, 7);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (98, 7);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (99, 8);
INSERT INTO ProductCategory (ProductID, CategoryID) VALUES (100, 3);
INSERT INTO Shop (ShopID, ShopName, Rating, PostalCode, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (1, 'Bradley Ltd', 3.24, '20125',
        'Connecticut', 'South Andrewbury', '755 Tran Key', 'Seek huge today north throughout. School couple finally turn mean power dog.');
INSERT INTO Shop (ShopID, ShopName, Rating, PostalCode, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (2, 'Smith-Diaz', 2.2, '16851',
        'New Mexico', 'Catherineborough', '135 Drake Forges', 'Beyond important party skin single at right.');
INSERT INTO Shop (ShopID, ShopName, Rating, PostalCode, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (3, 'Yu, Lawrence and Arnold', 3.53, '33644',
        'Hawaii', 'Serranotown', '23077 Bailey Roads Suite 543', 'State former teach class fire perhaps join.
Line attention take evidence. Stop foreign indeed.');
INSERT INTO Shop (ShopID, ShopName, Rating, PostalCode, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (4, 'Snyder and Sons', 3.97, '23205',
        'Delaware', 'Port Johnton', '3183 Madden Passage', 'Establish where change brother spend.
Poor out event.');
INSERT INTO Shop (ShopID, ShopName, Rating, PostalCode, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (5, 'Gilbert, Lee and Lewis', 1.87, '23231',
        'Missouri', 'Kennethbury', '23609 Davis Creek', 'Have whole building. Let change issue run nice stock success. Image free green name list lay.');
INSERT INTO Shop (ShopID, ShopName, Rating, PostalCode, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (6, 'Kent and Sons', 2.96, '41258',
        'Montana', 'South Jesseton', '499 Jonathan Burgs', 'Table lay white sign. Wife attack memory staff. Hot role me bar so.');
INSERT INTO Shop (ShopID, ShopName, Rating, PostalCode, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (7, 'White, Browning and Gutierrez', 3.01, '77956',
        'Vermont', 'Port Dawn', '426 Mcdowell Crest Apt. 425', 'Dream last within stand across. Media bed win goal thousand. Bed color station old turn.');
INSERT INTO Shop (ShopID, ShopName, Rating, PostalCode, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (8, 'Murphy, Coleman and Hughes', 2.97, '61671',
        'Arizona', 'Port Jodiland', '9514 Emma Club', 'Development always simply shake special. Law office the design east.');
INSERT INTO Shop (ShopID, ShopName, Rating, PostalCode, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (9, 'Duffy and Sons', 4.83, '02825',
        'Arkansas', 'Jacksonberg', '5631 Lee Plaza', 'Perform read production win. Event item explain should morning none.');
INSERT INTO Shop (ShopID, ShopName, Rating, PostalCode, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES (10, 'Welch PLC', 2.78, '80576',
        'Ohio', 'Brownmouth', '76636 Thomas Trace', 'Hand hear run available summer page. Way here year toward design.');
INSERT INTO ShopAdmin (AdminID, PhoneNumber, FirstName, LastName, ShopAdminRole, EmailAddress, PasswordSalt, PasswordHash, CreatedAt, ShopID)
        VALUES (1, '972-699-7024', 'Alicia', 'Clark',
        'Manager', 'ehunt@example.org',
        'b15f45d719a70ffd121646f273f1afd0a19b4d2b7199043b722d9ebffe11d2f3', '6305e6ca3694f9938eb76a9f6b6584180d886b0ffe59f30903ba24c0703d09e7', '2025-03-24 17:23:00', 8);
INSERT INTO ShopAdmin (AdminID, PhoneNumber, FirstName, LastName, ShopAdminRole, EmailAddress, PasswordSalt, PasswordHash, CreatedAt, ShopID)
        VALUES (2, '+1-658-483-0176x', 'Kimberly', 'Keller',
        'Owner', 'mcgeekimberly@example.org',
        'd6681424e82c5189755c8df02da1230d01268ccf1d8231bcaf6430e695737243', '49fd40689ea637e60cdb502184238a1dbf64d76a28f045773ba79b290ad8f154', '2025-03-18 09:55:18', 10);
INSERT INTO ShopAdmin (AdminID, PhoneNumber, FirstName, LastName, ShopAdminRole, EmailAddress, PasswordSalt, PasswordHash, CreatedAt, ShopID)
        VALUES (3, '(420)226-1958x79', 'Lisa', 'White',
        'Manager', 'neallevi@example.com',
        '04879839bfa47f7d85276400413ddc91760221e77f86084e81b92df22cf97653', '4d965e7bc81edb0ff63c089b90188e9960307baaf9025e5119d223ebcdab8fba', '2025-04-22 10:37:53', 1);
INSERT INTO ShopAdmin (AdminID, PhoneNumber, FirstName, LastName, ShopAdminRole, EmailAddress, PasswordSalt, PasswordHash, CreatedAt, ShopID)
        VALUES (4, '849.731.3432x804', 'Wyatt', 'Cohen',
        'Cashier', 'hunterpatricia@example.net',
        'e96e0ef58182aedd8f16fb22d605e13f8da79f555a473955c0b606849087209c', '71d980ea1e1647180d7e2e5e2b957bf48658e933a575edc03dbb5a296822b378', '2025-02-28 07:48:51', 8);
INSERT INTO ShopAdmin (AdminID, PhoneNumber, FirstName, LastName, ShopAdminRole, EmailAddress, PasswordSalt, PasswordHash, CreatedAt, ShopID)
        VALUES (5, '001-860-586-1233', 'Terri', 'Frank',
        'Inventory Specialist', 'michael44@example.com',
        'f40aa301074be1d8bd7a7345f1a005c5012a4ed86600f73e2b5cac52f6564804', '5ccb1b39230170cdee7684d501df4232c5a0a4fc4fc5f2bdab942eb3bbfab198', '2025-01-13 11:18:24', 1);
INSERT INTO ShopAdmin (AdminID, PhoneNumber, FirstName, LastName, ShopAdminRole, EmailAddress, PasswordSalt, PasswordHash, CreatedAt, ShopID)
        VALUES (6, '(873)535-9125x25', 'John', 'Valencia',
        'Owner', 'vdouglas@example.net',
        '8ff190724bda73743e76bcd785c23593cf5038d3b3490578edad87f4f49d9c28', 'd60968e596a9a96f72693ef9d1066fa68a198c0988ba29f3b9337f55fce3d263', '2025-01-12 21:16:08', 2);
INSERT INTO ShopAdmin (AdminID, PhoneNumber, FirstName, LastName, ShopAdminRole, EmailAddress, PasswordSalt, PasswordHash, CreatedAt, ShopID)
        VALUES (7, '001-851-340-9047', 'Darrell', 'Pratt',
        'Inventory Specialist', 'carsondustin@example.com',
        '6a9880d7c187ded343c41b910caaf9b0f534964b756e9e49000f6a4388ad62f5', '18029bbf691d615a941ad193d51ccab8e961e487656c84c8cc6ea7521d33e704', '2025-01-04 16:29:23', 1);
INSERT INTO ShopAdmin (AdminID, PhoneNumber, FirstName, LastName, ShopAdminRole, EmailAddress, PasswordSalt, PasswordHash, CreatedAt, ShopID)
        VALUES (8, '001-394-519-2442', 'Patrick', 'Barton',
        'Cashier', 'johnsonoscar@example.org',
        'a48284967971648d08f810cf74bdd3b5abc1213cfb4121ef73cc792a0afdb66e', 'dc250f3174e45958670fad302de1a378f59da51591a63da66ce6fb2e4b1eddc6', '2025-04-22 00:58:47', 1);
INSERT INTO ShopAdmin (AdminID, PhoneNumber, FirstName, LastName, ShopAdminRole, EmailAddress, PasswordSalt, PasswordHash, CreatedAt, ShopID)
        VALUES (9, '+1-741-276-5386', 'Russell', 'Benton',
        'Owner', 'gstevenson@example.net',
        '7363ae198c5f639a092afde116a223fa0b8780029cddd2dea2a1d8041e4b75e2', '65d25caf5bc32ea3fe91a95338dc6fa3a3b48445fef5574a0efd9b7e5cfa0afb', '2025-01-02 18:13:44', 10);
INSERT INTO ShopAdmin (AdminID, PhoneNumber, FirstName, LastName, ShopAdminRole, EmailAddress, PasswordSalt, PasswordHash, CreatedAt, ShopID)
        VALUES (10, '543.604.1369', 'Anna', 'Simpson',
        'Owner', 'qhaas@example.net',
        '58b74e62b00d1fe4ab48ee00d26667bb7996dd66ddd4e1b6d5e06686a01d1a2e', 'fb77b136892f57208423e542ff9b1267922f26b0bc9336121d09b3cc51a63813', '2025-01-06 10:22:30', 5);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (1, 'Cash on Delivery',
        '2025-01-14 19:00:41',
        'Shipped',
        '2025-04-28', 47);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (2, 'Credit Card',
        '2025-05-30 02:16:07',
        'Processing',
        '2025-02-22', 49);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (3, 'Cash on Delivery',
        '2025-04-23 16:51:55',
        'Shipped',
        '2025-02-24', 13);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (4, 'Credit Card',
        '2025-03-26 08:36:53',
        'Delivered',
        '2025-04-12', 30);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (5, 'Cash on Delivery',
        '2025-05-08 05:52:37',
        'Shipped',
        '2025-02-01', 25);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (6, 'Credit Card',
        '2025-03-28 11:32:30',
        'Shipped',
        '2025-03-21', 27);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (7, 'Cash on Delivery',
        '2025-03-19 12:00:53',
        'Delivered',
        '2025-02-28', 10);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (8, 'Installment',
        '2025-05-01 10:34:56',
        'Processing',
        '2025-02-21', 34);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (9, 'Installment',
        '2025-01-05 07:08:14',
        'Processing',
        '2025-02-21', 14);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (10, 'Credit Card',
        '2025-05-20 13:31:48',
        'Delivered',
        '2025-03-13', 23);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (11, 'Installment',
        '2025-05-31 01:55:30',
        'Delivered',
        '2025-02-05', 32);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (12, 'Installment',
        '2025-03-06 04:18:51',
        'Processing',
        '2025-03-07', 13);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (13, 'Installment',
        '2025-03-31 15:05:02',
        'Processing',
        '2025-03-11', 38);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (14, 'Cash on Delivery',
        '2025-03-28 16:37:57',
        'Pending',
        '2025-04-17', 25);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (15, 'Credit Card',
        '2025-05-14 03:30:23',
        'Processing',
        '2025-03-26', 41);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (16, 'Credit Card',
        '2025-02-05 08:30:54',
        'Processing',
        '2025-05-28', 24);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (17, 'Credit Card',
        '2025-05-19 15:58:50',
        'Processing',
        '2025-05-31', 15);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (18, 'Cash on Delivery',
        '2025-04-06 00:01:46',
        'Shipped',
        '2025-05-31', 40);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (19, 'Credit Card',
        '2025-03-09 11:41:16',
        'Cancelled',
        '2025-02-27', 49);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (20, 'Installment',
        '2025-02-06 02:48:06',
        'Shipped',
        '2025-02-06', 27);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (21, 'Installment',
        '2025-04-22 15:20:21',
        'Pending',
        '2025-04-20', 41);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (22, 'Cash on Delivery',
        '2025-04-04 18:54:12',
        'Cancelled',
        '2025-02-03', 43);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (23, 'Cash on Delivery',
        '2025-03-23 05:07:28',
        'Cancelled',
        '2025-01-04', 48);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (24, 'Installment',
        '2025-05-28 16:29:34',
        'Cancelled',
        '2025-05-06', 30);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (25, 'Installment',
        '2025-01-02 01:14:14',
        'Shipped',
        '2025-04-02', 46);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (26, 'Installment',
        '2025-01-31 19:26:48',
        'Processing',
        '2025-02-17', 22);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (27, 'Installment',
        '2025-04-14 08:40:30',
        'Pending',
        '2025-02-16', 3);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (28, 'Credit Card',
        '2025-03-29 08:29:57',
        'Processing',
        '2025-04-02', 23);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (29, 'Credit Card',
        '2025-05-25 01:32:57',
        'Shipped',
        '2025-04-28', 42);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (30, 'Credit Card',
        '2025-03-19 02:06:13',
        'Processing',
        '2025-01-26', 5);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (31, 'Installment',
        '2025-05-14 12:58:18',
        'Processing',
        '2025-03-20', 39);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (32, 'Installment',
        '2025-05-28 05:22:03',
        'Cancelled',
        '2025-01-13', 15);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (33, 'Installment',
        '2025-04-12 07:32:08',
        'Processing',
        '2025-01-04', 22);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (34, 'Cash on Delivery',
        '2025-04-15 07:55:37',
        'Pending',
        '2025-03-11', 39);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (35, 'Credit Card',
        '2025-02-19 08:54:20',
        'Shipped',
        '2025-04-11', 21);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (36, 'Cash on Delivery',
        '2025-04-09 05:25:14',
        'Delivered',
        '2025-03-06', 21);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (37, 'Installment',
        '2025-02-01 07:11:07',
        'Pending',
        '2025-03-24', 34);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (38, 'Credit Card',
        '2025-03-05 18:19:11',
        'Processing',
        '2025-02-18', 24);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (39, 'Credit Card',
        '2025-05-22 00:03:26',
        'Processing',
        '2025-01-17', 34);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (40, 'Installment',
        '2025-03-27 11:40:40',
        'Processing',
        '2025-01-06', 13);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (41, 'Installment',
        '2025-05-06 15:27:52',
        'Shipped',
        '2025-01-19', 20);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (42, 'Cash on Delivery',
        '2025-05-03 01:23:41',
        'Delivered',
        '2025-03-13', 17);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (43, 'Installment',
        '2025-01-09 08:57:55',
        'Shipped',
        '2025-03-03', 46);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (44, 'Credit Card',
        '2025-03-20 10:45:48',
        'Pending',
        '2025-05-22', 20);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (45, 'Cash on Delivery',
        '2025-01-21 08:48:44',
        'Pending',
        '2025-04-24', 1);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (46, 'Installment',
        '2025-02-02 14:34:35',
        'Delivered',
        '2025-05-04', 47);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (47, 'Installment',
        '2025-05-17 06:38:42',
        'Pending',
        '2025-01-18', 27);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (48, 'Installment',
        '2025-03-23 09:02:04',
        'Delivered',
        '2025-04-17', 29);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (49, 'Credit Card',
        '2025-03-24 22:05:18',
        'Pending',
        '2025-01-22', 6);
INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES (50, 'Credit Card',
        '2025-03-24 16:16:07',
        'Pending',
        '2025-03-15', 49);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 1, 53);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (1, 2, 79);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (5, 2, 55);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 3, 6);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (4, 3, 32);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (3, 4, 17);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (4, 5, 41);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (5, 5, 14);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (5, 6, 79);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (3, 6, 26);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (5, 7, 66);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (5, 7, 60);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (3, 8, 34);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (1, 8, 30);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (5, 8, 16);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 9, 13);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (4, 9, 94);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 9, 32);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (1, 10, 95);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (5, 10, 69);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (1, 11, 7);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (3, 11, 50);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (5, 12, 95);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (5, 13, 30);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (3, 13, 85);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 14, 95);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (3, 15, 67);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 16, 42);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (4, 16, 48);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (5, 16, 37);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (1, 17, 18);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (3, 18, 65);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (5, 18, 47);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (1, 18, 82);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 19, 51);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (1, 20, 66);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 21, 98);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 22, 73);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 22, 31);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (4, 23, 98);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (5, 24, 78);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (4, 24, 17);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (1, 25, 79);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (3, 26, 77);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (4, 26, 63);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (1, 26, 40);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 27, 72);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (4, 28, 64);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (3, 28, 70);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (1, 28, 91);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (5, 29, 18);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 29, 52);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (4, 30, 38);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 30, 8);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 31, 41);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 32, 57);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (3, 32, 34);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (3, 33, 21);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (3, 33, 3);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (5, 33, 74);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 34, 94);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (4, 35, 3);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (1, 35, 81);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (1, 36, 31);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (3, 37, 29);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (3, 38, 8);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 39, 55);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (4, 39, 28);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 39, 56);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 40, 40);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (3, 40, 84);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (4, 41, 96);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (1, 41, 49);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (3, 41, 53);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (4, 42, 69);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (1, 42, 98);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (1, 42, 73);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 43, 50);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (5, 43, 1);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (5, 44, 80);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 45, 90);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (3, 45, 11);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 45, 31);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (2, 46, 3);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (5, 47, 88);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (1, 47, 22);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (5, 47, 55);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (4, 48, 80);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (5, 49, 20);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (1, 49, 78);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (3, 49, 33);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (4, 50, 94);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (1, 50, 4);
INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES (1, 50, 64);
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (1, '6c8719b3-1397-4b03-a56b-91222f564b52', 'Failed',
        'Shaparak', '2025-03-05 02:16:53');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (2, '25903f2e-fb79-4a37-ab63-6a7b946ff6f4', 'Completed',
        'Shaparak', '2025-03-03 12:30:36');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (3, '6717d0f2-8169-460f-a224-e48539ff2d02', 'Completed',
        'Shaparak', '2025-02-08 23:25:59');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (4, '3023aaad-d550-4277-a303-9a8818028380', 'Completed',
        'Shaparak', '2025-03-03 17:26:34');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (5, '609693ab-b427-40e6-bd7b-6e7b00def56f', 'Failed',
        'Shaparak', '2025-03-23 08:51:13');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (6, '828b66a3-e1c9-4e7a-a437-daf2ac61c15b', 'Refunded',
        'Shaparak', '2025-04-05 16:03:51');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (7, 'ec2b3b43-738a-47ee-a0a4-3d4b6f44b80e', 'Pending',
        'Shaparak', '2025-03-05 07:02:41');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (8, '29f623bb-f8e0-41d5-a5d3-fd8b4402d7c5', 'Failed',
        'Shaparak', '2025-05-12 21:29:48');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (9, '3b3a3114-bd05-4094-8ca7-ccd892902d31', 'Pending',
        'Shaparak', '2025-05-08 01:02:54');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (10, '61ff5114-132c-40e8-ad2a-d083c4d4f727', 'Pending',
        'Shaparak', '2025-02-05 03:37:10');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (11, '2c7fcbfe-ef73-4a0d-b919-ce67f9921fb2', 'Refunded',
        'ZarinPal', '2025-02-09 17:13:02');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (12, 'a9771794-bc44-4121-8e50-ae44e08b0d97', 'Refunded',
        'Shaparak', '2025-03-17 11:47:40');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (13, '27536fb5-dc37-4351-9994-0829d3294266', 'Refunded',
        'ZarinPal', '2025-02-01 20:15:30');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (14, '29bc0aad-0c70-4c63-8a60-523ba2cb48b5', 'Pending',
        'Shaparak', '2025-02-09 06:35:08');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (15, '4b6d6ec3-ea15-4c50-91fd-66061c9c6f09', 'Pending',
        'Shaparak', '2025-03-09 02:58:48');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (16, '14afbd77-8247-4b36-ac50-4bd177bcc6ea', 'Failed',
        'ZarinPal', '2025-03-27 11:35:29');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (17, '673cde97-6c04-4b1b-b474-7c7592c2674a', 'Failed',
        'Shaparak', '2025-03-14 21:46:38');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (18, '845857ef-9814-4476-a08c-5fb2fede268b', 'Failed',
        'ZarinPal', '2025-04-30 03:22:07');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (19, '3a38dc11-2f9c-49b1-9ad0-2fba61203611', 'Pending',
        'Shaparak', '2025-04-05 20:33:00');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (20, '40162ad0-0797-40d1-a3aa-09e36fdb2d54', 'Completed',
        'Shaparak', '2025-01-31 10:35:50');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (21, 'e0e3ea85-8a01-4217-b7f7-b36b68bf06b1', 'Completed',
        'ZarinPal', '2025-04-04 09:41:42');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (22, 'dd1d44e8-1d67-4e22-ad42-ec4ed1f4d64d', 'Failed',
        'ZarinPal', '2025-04-14 15:12:13');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (23, '40faecc1-ac48-4a59-895c-2b4081e3e1ba', 'Pending',
        'ZarinPal', '2025-03-26 23:47:17');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (24, '4d818bfd-9e9b-422d-ac9c-ae6f84181131', 'Failed',
        'Shaparak', '2025-05-16 08:48:56');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (25, '66f136ea-8919-4f68-8b62-4c5a23866906', 'Failed',
        'Shaparak', '2025-03-16 22:02:32');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (26, 'dcdce00a-c2f2-4acf-8882-bb7207e8455e', 'Failed',
        'Shaparak', '2025-04-11 07:41:55');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (27, '82dade1d-d995-4b9b-9715-dd88090c68ef', 'Refunded',
        'Shaparak', '2025-02-18 23:11:23');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (28, 'da74f055-b7c6-434b-8f45-d01a3b8e4413', 'Completed',
        'ZarinPal', '2025-04-01 18:59:12');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (29, '97b1a69b-171c-4ff1-8bef-7bf0c60f0791', 'Completed',
        'ZarinPal', '2025-04-25 21:05:46');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (30, 'f7b2d73a-0b2e-4ee1-9d6f-c6c0917429b0', 'Refunded',
        'ZarinPal', '2025-05-31 19:50:36');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (31, '2889d205-9327-44e0-b7bc-e3ef85f79731', 'Failed',
        'ZarinPal', '2025-02-12 17:04:17');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (32, '6e1987f4-f89f-49a3-adc5-b4d63c6a7d4a', 'Refunded',
        'Shaparak', '2025-03-04 04:33:05');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (33, '3e2d31cf-0952-4f64-8274-8af0fe38df1c', 'Completed',
        'ZarinPal', '2025-04-29 22:01:32');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (34, '4f2cfbfa-84d5-46db-8a2e-255fec5a35f4', 'Refunded',
        'Shaparak', '2025-01-13 17:23:24');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (35, '983e0514-3eb7-4425-835d-ed07f3299c84', 'Completed',
        'ZarinPal', '2025-03-03 22:14:15');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (36, '12b53dba-50a7-4276-a721-a7de2fba0022', 'Pending',
        'ZarinPal', '2025-02-20 06:24:28');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (37, '5239ca37-b2aa-46eb-8cd5-9c36a588907e', 'Pending',
        'Shaparak', '2025-06-01 22:49:46');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (38, '533d5a4b-8804-40cf-96f3-c7a4be8b9fbe', 'Refunded',
        'Shaparak', '2025-01-06 20:53:52');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (39, '4adb2666-888b-4ced-aeba-ad699723d6fc', 'Failed',
        'Shaparak', '2025-05-07 17:48:36');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (40, 'de4d0f15-18d9-4228-b7e4-b1c177ab975d', 'Pending',
        'Shaparak', '2025-03-29 09:32:31');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (41, '0446b47a-0c7b-4852-b97c-676fc70b4229', 'Failed',
        'Shaparak', '2025-01-28 00:15:33');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (42, 'e46d4b78-d058-4a2e-ad3e-176c691fc182', 'Failed',
        'Shaparak', '2025-01-22 23:29:32');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (43, 'c07dcd7d-6551-4801-bd39-e62900c5e049', 'Completed',
        'Shaparak', '2025-03-22 02:09:34');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (44, 'bd025676-d187-4bae-a01d-1ab7f00a5cc4', 'Completed',
        'ZarinPal', '2025-04-14 06:36:40');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (45, 'bbdfd2a2-c43f-4f37-989d-431a01de1868', 'Completed',
        'Shaparak', '2025-04-28 17:17:14');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (46, '90afee6c-8910-4771-b09a-e37f8790e11d', 'Failed',
        'Shaparak', '2025-04-08 10:47:36');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (47, 'dd89c848-240c-4fd7-a16f-54d5c964323d', 'Pending',
        'Shaparak', '2025-04-03 14:44:48');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (48, '36f185c0-9e7e-4fa3-8afe-4d5f0f82e007', 'Completed',
        'ZarinPal', '2025-05-02 22:40:32');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (49, '2e70b419-464b-4134-9595-4e636138a502', 'Failed',
        'ZarinPal', '2025-03-24 16:35:08');
INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES (50, 'a7f1866f-081f-4b40-bada-2270b8ed5f6c', 'Completed',
        'Shaparak', '2025-03-31 21:52:53');
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (1, 3.33, 1044.28,
        'Active', 12, '2025-04-06', 3);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (2, 1.74, 1895.4,
        'Defaulted', 4, '2025-01-18', 9);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (3, 2.52, 1513.67,
        'Defaulted', 11, '2025-05-03', 12);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (4, 4.15, 290.8,
        'Active', 5, '2025-01-05', 7);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (5, 4.66, 1863.17,
        'Defaulted', 7, '2025-04-12', 4);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (6, 2.47, 1539.69,
        'Completed', 12, '2025-04-23', 5);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (7, 0.91, 157.26,
        'Pending', 7, '2025-03-10', 3);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (8, 3.93, 834.59,
        'Defaulted', 3, '2025-05-26', 9);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (9, 2.59, 1676.72,
        'Active', 12, '2025-05-16', 11);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (10, 1.75, 1661.81,
        'Defaulted', 10, '2025-02-01', 8);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (11, 1.11, 254.82,
        'Completed', 8, '2025-03-06', 0);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (12, 0.81, 1462.85,
        'Defaulted', 3, '2025-03-06', 5);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (13, 4.68, 1705.62,
        'Pending', 8, '2025-05-31', 6);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (14, 4.57, 1970.19,
        'Completed', 9, '2025-04-01', 10);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (15, 1.14, 380.23,
        'Completed', 11, '2025-03-13', 0);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (16, 1.23, 1796.38,
        'Defaulted', 3, '2025-01-25', 11);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (17, 4.21, 182.6,
        'Defaulted', 5, '2025-06-01', 5);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (18, 4.1, 1644.7,
        'Pending', 11, '2025-03-19', 2);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (19, 4.16, 483.05,
        'Completed', 8, '2025-03-22', 11);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (20, 3.69, 1586.43,
        'Defaulted', 5, '2025-01-29', 12);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (21, 4.55, 1150.18,
        'Pending', 12, '2025-01-11', 2);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (22, 3.39, 164.21,
        'Completed', 4, '2025-05-31', 3);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (23, 3.42, 967.44,
        'Active', 10, '2025-03-20', 8);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (24, 1.22, 733.97,
        'Active', 10, '2025-03-03', 12);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (25, 3.0, 1132.54,
        'Completed', 3, '2025-01-12', 12);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (26, 0.86, 912.69,
        'Completed', 12, '2025-05-23', 7);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (27, 2.01, 818.32,
        'Completed', 4, '2025-05-19', 2);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (28, 1.93, 143.18,
        'Active', 3, '2025-05-09', 5);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (29, 4.49, 467.35,
        'Defaulted', 3, '2025-04-25', 11);
INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES (30, 1.9, 840.08,
        'Pending', 12, '2025-04-08', 12);
INSERT INTO Shipping (ShippingID, ShippingMethod, TrackingNumber, ShippingDate, DeliveryDate, ShippingStatus)
        VALUES (1, 'Express', 'a2a2904c-7', '2025-05-06 02:01:30',
        '2025-05-13 02:01:30', 'In Transit');
INSERT INTO Shipping (ShippingID, ShippingMethod, TrackingNumber, ShippingDate, DeliveryDate, ShippingStatus)
        VALUES (2, 'Express', 'ffb4d662-d', '2025-04-17 15:16:04',
        '2025-04-24 15:16:04', 'Delivered');
INSERT INTO Shipping (ShippingID, ShippingMethod, TrackingNumber, ShippingDate, DeliveryDate, ShippingStatus)
        VALUES (3, 'Economy', 'f8c743fb-6', '2025-01-20 22:24:52',
        '2025-01-21 22:24:52', 'In Transit');
INSERT INTO Shipping (ShippingID, ShippingMethod, TrackingNumber, ShippingDate, DeliveryDate, ShippingStatus)
        VALUES (4, 'Economy', '38e4b0ca-9', '2025-01-23 09:17:11',
        '2025-01-28 09:17:11', 'In Transit');
INSERT INTO Shipping (ShippingID, ShippingMethod, TrackingNumber, ShippingDate, DeliveryDate, ShippingStatus)
        VALUES (5, 'Economy', '801688d2-1', '2025-01-03 08:38:26',
        '2025-01-08 08:38:26', 'Delivered');
INSERT INTO Shipping (ShippingID, ShippingMethod, TrackingNumber, ShippingDate, DeliveryDate, ShippingStatus)
        VALUES (6, 'Express', 'f3b61030-c', '2025-05-17 15:38:01',
        '2025-05-19 15:38:01', 'Delivered');
INSERT INTO Shipping (ShippingID, ShippingMethod, TrackingNumber, ShippingDate, DeliveryDate, ShippingStatus)
        VALUES (7, 'Economy', 'e667359f-0', '2025-04-09 11:24:23',
        '2025-04-16 11:24:23', 'Shipped');
INSERT INTO Shipping (ShippingID, ShippingMethod, TrackingNumber, ShippingDate, DeliveryDate, ShippingStatus)
        VALUES (8, 'Express', 'd8bacbcf-d', '2025-06-03 22:52:39',
        '2025-06-07 22:52:39', 'In Transit');
INSERT INTO Shipping (ShippingID, ShippingMethod, TrackingNumber, ShippingDate, DeliveryDate, ShippingStatus)
        VALUES (9, 'Express', 'ef75ecd4-9', '2025-03-24 04:05:59',
        '2025-03-25 04:05:59', 'Pending');
INSERT INTO Shipping (ShippingID, ShippingMethod, TrackingNumber, ShippingDate, DeliveryDate, ShippingStatus)
        VALUES (10, 'Express', '18161478-b', '2025-03-26 00:30:19',
        '2025-03-29 00:30:19', 'Shipped');
INSERT INTO Shipping (ShippingID, ShippingMethod, TrackingNumber, ShippingDate, DeliveryDate, ShippingStatus)
        VALUES (11, 'Express', '9bbb54f7-d', '2025-01-31 23:46:03',
        '2025-02-04 23:46:03', 'In Transit');
INSERT INTO Shipping (ShippingID, ShippingMethod, TrackingNumber, ShippingDate, DeliveryDate, ShippingStatus)
        VALUES (12, 'Economy', '1daadfb9-6', '2025-03-09 09:04:58',
        '2025-03-13 09:04:58', 'Delivered');
INSERT INTO Shipping (ShippingID, ShippingMethod, TrackingNumber, ShippingDate, DeliveryDate, ShippingStatus)
        VALUES (13, 'Express', 'e3bf50cd-1', '2025-04-18 22:57:14',
        '2025-04-19 22:57:14', 'Failed');
INSERT INTO Shipping (ShippingID, ShippingMethod, TrackingNumber, ShippingDate, DeliveryDate, ShippingStatus)
        VALUES (14, 'Economy', 'a1a29ea2-a', '2025-02-28 14:32:53',
        '2025-03-07 14:32:53', 'In Transit');
INSERT INTO Shipping (ShippingID, ShippingMethod, TrackingNumber, ShippingDate, DeliveryDate, ShippingStatus)
        VALUES (15, 'Express', '6397f7f5-d', '2025-02-03 02:42:18',
        '2025-02-04 02:42:18', 'Pending');
INSERT INTO Shipping (ShippingID, ShippingMethod, TrackingNumber, ShippingDate, DeliveryDate, ShippingStatus)
        VALUES (16, 'Economy', '2ce45400-4', '2025-01-30 13:53:54',
        '2025-02-02 13:53:54', 'Pending');
INSERT INTO Shipping (ShippingID, ShippingMethod, TrackingNumber, ShippingDate, DeliveryDate, ShippingStatus)
        VALUES (17, 'Express', '9af1c0f7-4', '2025-01-24 13:16:38',
        '2025-01-28 13:16:38', 'Shipped');
INSERT INTO Shipping (ShippingID, ShippingMethod, TrackingNumber, ShippingDate, DeliveryDate, ShippingStatus)
        VALUES (18, 'Economy', '679bce42-c', '2025-04-09 15:23:05',
        '2025-04-14 15:23:05', 'Pending');
INSERT INTO Shipping (ShippingID, ShippingMethod, TrackingNumber, ShippingDate, DeliveryDate, ShippingStatus)
        VALUES (19, 'Economy', 'cb269dc7-d', '2025-03-25 02:05:44',
        '2025-03-26 02:05:44', 'In Transit');
INSERT INTO Shipping (ShippingID, ShippingMethod, TrackingNumber, ShippingDate, DeliveryDate, ShippingStatus)
        VALUES (20, 'Express', '152ff3b3-5', '2025-06-02 13:45:18',
        '2025-06-04 13:45:18', 'Shipped');
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (1, 1, 'Dog management free news.', 1,Null, 2);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (2, 2, 'Laugh laugh administration main project.', 2,Null, 2);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (3, 3, 'Explain out purpose whole place I item.', 3,Null, 2);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (4, 4, 'From land population fly season success foreign however.', 4,Null, 5);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (5, 5, 'Value education student line what professional.', 5,Null, 3);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (6, 6, 'Ready TV information black rule together take yes.', 6,Null, 1);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (7, 7, 'Street director peace certainly condition.', 7,Null, 4);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (8, 8, 'Middle in happen health learn west happy.', 8,Null, 4);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (9, 9, 'Agent matter design prevent memory capital.', 9,Null, 1);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (10, 10, 'Hotel check push fight case change.', 10,Null, 2);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (11, 11, 'Human western role modern stop.', 11,Null, 2);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (12, 12, 'Ever impact explain civil.', 12,Null, 3);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (13, 13, 'Health finally effort.', 13,Null, 3);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (14, 14, 'Activity born alone around.', 14,Null, 2);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (15, 15, 'Development base establish people.', 15,Null, 2);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (16, 16, 'This three short so.', 16,Null, 3);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (17, 17, 'College ability garden rather form.', 17,Null, 2);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (18, 18, 'Same practice four stay would unit nearly.', 18,Null, 2);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (19, 19, 'Couple his can already side image leg.', 19,Null, 4);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (20, 20, 'Improve kitchen hit.', 20,Null, 4);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (21, 21, 'Industry writer make can these bad.', 21,Null, 3);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (22, 22, 'Science green role amount.', 22,Null, 5);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (23, 23, 'Continue certain drive public food range Republican.', 23,Null, 2);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (24, 24, 'Should notice market building hot.', 24,Null, 4);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (25, 25, 'Might evidence into represent now.', 25,Null, 5);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (26, 26, 'High about wish half watch exactly.', 26,Null, 1);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (27, 27, 'Development edge people figure.', 27,Null, 2);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (28, 28, 'Group example although study role.', 28,Null, 5);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (29, 29, 'Yes security add service activity travel will.', 29,Null, 1);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (30, 30, 'Ground wait accept.', 30,Null, 4);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (31, 31, 'Head successful source plant need friend do.', 31,Null, 2);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (32, 32, 'Similar training politics.', 32,Null, 2);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (33, 33, 'Fear list she.', 33,Null, 1);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (34, 34, 'West growth important serve compare dark.', 34,Null, 1);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (35, 35, 'Manage company much both they.', 35,Null, 3);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (36, 36, 'Weight age young current education find.', 36,Null, 5);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (37, 37, 'On follow choice author serve more the.', 37,Null, 1);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (38, 38, 'Short always how officer trouble.', 38,Null, 1);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (39, 39, 'From purpose whom health deal among place.', 39,Null, 1);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (40, 40, 'Former fine dinner near full.', 40,Null, 1);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (41, 41, 'Character opportunity particular describe.', 41,Null, 5);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (42, 42, 'Since go into hand record without.', 42,Null, 5);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (43, 43, 'Ability always help watch oil himself.', 43,Null, 2);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (44, 44, 'Pm source clear dog fast remain wrong.', 44,Null, 2);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (45, 45, 'List someone white.', 45,Null, 4);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (46, 46, 'Important into begin morning enough.', 46,Null, 1);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (47, 47, 'Particular institution lead rock.', 47,Null, 4);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (48, 48, 'My night this none attack same base.', 48,Null, 4);
INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES (49, 49, 'Many cold firm push student.', 49,Null, 5);
