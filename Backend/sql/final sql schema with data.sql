-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: onlineshop
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `AdminID` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `LastName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `EmailAddress` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `PasswordHash` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `PasswordSalt` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Permission` enum('Full Access','Content Management','User Management','Order Management','Reporting Only') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Reporting Only',
  `LastLogin` datetime DEFAULT NULL,
  `PhoneNumber` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`AdminID`),
  UNIQUE KEY `uq_admins_email` (`EmailAddress`),
  UNIQUE KEY `un_admin_pn` (`PhoneNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'Megan','Chang','gwilliams@example.com','faa5be1206846743dec0c4d3e5afc2d48a023011fdb6eabcc842f2b47eca8a00','8e36506d1af0f8133ec6c833feb77689049fec2a0f7a49b8218fd49f41fde9d9','2022-07-31 05:08:08','Order Management','2025-04-03 13:06:10','(493)682-4219x48'),(2,'Corey','Jones','thomas15@example.com','962393f2184a0e1125c4d9c7f2d3dcbe210beb39161d895c9df4b26f8e1f0b5a','abceb130911365b01c660d2bb1cc972b1a266e982892cf6bbeb2638ecd2a7beb','2021-09-27 03:27:56','Order Management','2025-04-18 06:56:49','578.740.8016x097'),(3,'Jane','Brown','johnponce@example.net','f6cbaa62389a732d53a306a07b09fe1327a0ec2ccb959d7cdfd22cbd085701e2','c770ff35bda18e19d7d4442eb9964779db8dbac9e79f4f94900b2bcf543924bf','2022-09-21 05:30:02','Full Access','2025-04-09 15:10:29','614.984.1858x398'),(4,'Christopher','Yates','barbara42@example.org','b5302b82833313421af755a93b9e0179e222003c594546439e1fc7737c1ab323','f815a67cae407f2c5ec485b7b4174f75940076b219fc7b31a7dec9459c8d5155','2022-03-18 19:41:47','User Management','2025-04-03 12:47:43','612-520-1868'),(5,'Melissa','Jacobson','criley@example.com','4475d42b45f7da21d1f30db64c716d04789be7209b3f721437b402e2ed634b3f','4af2c51499f4cc0717be3558ac77fa83194b4c49e81645d5511f18fd97725950','2023-01-15 03:45:21','Reporting Only','2025-01-16 23:53:09','791-879-5330x413'),(6,'Lisa','Garcia','melissarobinson@example.net','3559c2ac5c57fbe3767535a60f57e2dc12dbd0387d84a5d3bb7dbf432372fcbd','78a2688fedc3acc9249aac80bb0b2d41f837a0c150974189a3d4bdb6a412c518','2025-02-13 17:35:09','Order Management','2025-05-13 03:46:30','701-339-9161'),(7,'Benjamin','Smith','jennifermendoza@example.net','e9a204b1cd9f0b46406acee5d662aacf3611af649acbb7e88eabc122734a7553','7de29c27b238a6ed0f83248dee4da5ee4b56094b64ecb37b0d0ea42bc823e463','2020-03-11 15:17:31','Order Management','2025-04-16 16:19:15','(291)341-3145x62'),(8,'Holly','Myers','michael79@example.org','d9a2babfe35728435d6d744fa03174fc6840ca49606ee48f7188054e900498da','190bcce670978ced75b349d83d44e0ffbee979c7e6faf5de4cdf1fd80b5820c4','2020-06-29 05:05:30','User Management','2025-06-03 03:22:02','+1-622-758-4197x'),(9,'Paul','Sandoval','annsmith@example.net','0dba5800f7f538a4346f710605ebb48d921d345257af0d6d9aeb078044f86df2','8aced111d05664b78a31f4668bcd7e2438c1a7339e50f5a7f361141c8794b8bf','2024-08-17 23:54:12','Order Management','2025-02-24 13:00:37','(437)659-4599'),(10,'Paul','Perry','smithjames@example.com','d287e0effc9fa5ff91134f50a1d00fe729709037d8a7c87808313f0e1ec8295e','cb27ad325d4785a0fa46208bcfe4911515e6b10499104bc0cf399a8f54531914','2023-10-24 03:53:31','User Management','2025-03-15 12:37:40','001-496-906-9602');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `CategoryID` int NOT NULL AUTO_INCREMENT,
  `CategoryName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ParentCategory` int DEFAULT NULL,
  PRIMARY KEY (`CategoryID`),
  KEY `fk_category_parent` (`ParentCategory`),
  CONSTRAINT `fk_category_parent` FOREIGN KEY (`ParentCategory`) REFERENCES `category` (`CategoryID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'CPU','-',NULL),(2,'GPU','-',NULL),(3,'Motherboard','-',NULL),(4,'RAM','-',NULL),(5,'Storage Device','-',NULL),(6,'Power Supply','-',NULL),(7,'Cooling System','-',NULL),(8,'Dual-Core','-',1),(9,'Quad-Core','-',1),(10,'With iGPU','-',1),(11,'12th Gen','-',1),(12,'Single Fan','-',2),(13,'Full-size','-',2),(14,'Mini ITX','-',2),(15,'DDR4','-',3),(16,'DDR5','-',3),(17,'PCIe x16','-',3),(18,'4GB','-',4),(19,'16GB','-',4),(20,'2666 MHz','-',4),(21,'6000 MHz','-',4),(22,'HDD','-',5),(23,'SATA SSD','-',5),(24,'NVMe SSD','-',5),(25,'500W-650W','-',6),(26,'Non-Modular','-',6),(27,'Fully Modular','-',6),(28,'Air Cooler','-',7),(29,'AIO Liquid Cooler','-',7);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `ProductID` int NOT NULL,
  `CommentNum` bigint unsigned NOT NULL AUTO_INCREMENT,
  `CommentDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CommentText` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `CustomerID` int NOT NULL,
  `ParentCommentNum` bigint unsigned DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Rating` tinyint unsigned DEFAULT NULL,
  PRIMARY KEY (`CommentNum`),
  KEY `idx_customer_id` (`CustomerID`),
  KEY `idx_product_id` (`ProductID`),
  KEY `fk_comment_parent` (`ParentCommentNum`),
  CONSTRAINT `fk_comment_customer` FOREIGN KEY (`CustomerID`) REFERENCES `customer` (`CustomerID`),
  CONSTRAINT `fk_comment_parent` FOREIGN KEY (`ParentCommentNum`) REFERENCES `comment` (`CommentNum`) ON DELETE CASCADE,
  CONSTRAINT `fk_comment_product` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`) ON DELETE CASCADE,
  CONSTRAINT `comment_chk_1` CHECK (((`Rating` >= 1) and (`Rating` <= 5)))
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (15,15,'2025-08-08 16:56:43','Development base establish people.',15,NULL,'2025-08-08 16:56:43',2),(16,16,'2025-08-08 16:56:43','This three short so.',16,NULL,'2025-08-08 16:56:43',3),(17,17,'2025-08-08 16:56:43','College ability garden rather form.',17,NULL,'2025-08-08 16:56:43',2),(18,18,'2025-08-08 16:56:43','Same practice four stay would unit nearly.',18,NULL,'2025-08-08 16:56:43',2),(19,19,'2025-08-08 16:56:43','Couple his can already side image leg.',19,NULL,'2025-08-08 16:56:43',4),(20,20,'2025-08-08 16:56:43','Improve kitchen hit.',20,NULL,'2025-08-08 16:56:43',4),(21,21,'2025-08-08 16:56:43','Industry writer make can these bad.',21,NULL,'2025-08-08 16:56:43',3),(22,22,'2025-08-08 16:56:43','Science green role amount.',22,NULL,'2025-08-08 16:56:43',5),(23,23,'2025-08-08 16:56:43','Continue certain drive public food range Republican.',23,NULL,'2025-08-08 16:56:43',2),(24,24,'2025-08-08 16:56:43','Should notice market building hot.',24,NULL,'2025-08-08 16:56:43',4),(25,25,'2025-08-08 16:56:43','Might evidence into represent now.',25,NULL,'2025-08-08 16:56:43',5),(26,26,'2025-08-08 16:56:43','High about wish half watch exactly.',26,NULL,'2025-08-08 16:56:43',1),(27,27,'2025-08-08 16:56:43','Development edge people figure.',27,NULL,'2025-08-08 16:56:43',2),(28,28,'2025-08-08 16:56:43','Group example although study role.',28,NULL,'2025-08-08 16:56:43',5),(29,29,'2025-08-08 16:56:43','Yes security add service activity travel will.',29,NULL,'2025-08-08 16:56:43',1),(30,30,'2025-08-08 16:56:43','Ground wait accept.',30,NULL,'2025-08-08 16:56:43',4),(31,31,'2025-08-08 16:56:43','Head successful source plant need friend do.',31,NULL,'2025-08-08 16:56:43',2),(32,32,'2025-08-08 16:56:43','Similar training politics.',32,NULL,'2025-08-08 16:56:43',2),(33,33,'2025-08-08 16:56:43','Fear list she.',33,NULL,'2025-08-08 16:56:43',1),(34,34,'2025-08-08 16:56:43','West growth important serve compare dark.',34,NULL,'2025-08-08 16:56:43',1),(35,35,'2025-08-08 16:56:43','Manage company much both they.',35,NULL,'2025-08-08 16:56:43',3),(36,36,'2025-08-08 16:56:43','Weight age young current education find.',36,NULL,'2025-08-08 16:56:43',5),(37,37,'2025-08-08 16:56:43','On follow choice author serve more the.',37,NULL,'2025-08-08 16:56:43',1),(38,38,'2025-08-08 16:56:43','Short always how officer trouble.',38,NULL,'2025-08-08 16:56:43',1),(39,39,'2025-08-08 16:56:43','From purpose whom health deal among place.',39,NULL,'2025-08-08 16:56:43',1),(40,40,'2025-08-08 16:56:43','Former fine dinner near full.',40,NULL,'2025-08-08 16:56:43',1),(41,41,'2025-08-08 16:56:43','Character opportunity particular describe.',41,NULL,'2025-08-08 16:56:43',5),(42,42,'2025-08-08 16:56:43','Since go into hand record without.',42,NULL,'2025-08-08 16:56:43',5),(43,43,'2025-08-08 16:56:43','Ability always help watch oil himself.',43,NULL,'2025-08-08 16:56:43',2),(44,44,'2025-08-08 16:56:43','Pm source clear dog fast remain wrong.',44,NULL,'2025-08-08 16:56:43',2),(45,45,'2025-08-08 16:56:43','List someone white.',45,NULL,'2025-08-08 16:56:43',4),(46,46,'2025-08-08 16:56:43','Important into begin morning enough.',46,NULL,'2025-08-08 16:56:43',1),(47,47,'2025-08-08 16:56:43','Particular institution lead rock.',47,NULL,'2025-08-08 16:56:43',4),(48,48,'2025-08-08 16:56:43','My night this none attack same base.',48,NULL,'2025-08-08 16:56:43',4),(49,49,'2025-08-08 16:56:43','Many cold firm push student.',49,NULL,'2025-08-08 16:56:43',5);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `CustomerID` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `LastName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `PhoneNumber` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `EmailAddress` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `PostalCode` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `CreatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `AddressProvince` varchar(265) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `AddressCity` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `AddressStreet` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `AddressDetails` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `last_login` datetime DEFAULT NULL,
  `is_active` tinyint DEFAULT '1',
  `is_staff` tinyint DEFAULT '0',
  `is_superuser` tinyint DEFAULT '0',
  `isShopAdmin` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`CustomerID`),
  UNIQUE KEY `uq_customer_pn` (`PhoneNumber`),
  UNIQUE KEY `un_customer_em` (`EmailAddress`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'Eric','York','9039485590','iwatson@example.org','e621d27cd810740977bca786bc4fa96b4cef165d9df6df222247187d4e6aa598','01667','2025-01-27 17:45:22','Georgia','Mathewstad','9004 Edward Prairie','House nature fall long dream answer. Tax rock few structure.',NULL,1,0,0,0),(2,'Jessica','Kline','(896)211-1330','longapril@example.com','04df3cb0fdb932f42bf50ec9329c3eac5b5529ffd8b3626ee298d99c6ea10abf','94139','2025-05-12 18:16:45','Indiana','Millerbury','263 Wilson View Apt. 873','Huge debate among way democratic chair cup. Gun still bit other maintain nor.',NULL,1,0,0,0),(3,'Benjamin','Perez','8402752275','gregorylinda@example.net','950a3fae13ada424bb04d343fc6780ee539931c70d84a9b92e7816e591ad7817','99410','2025-02-09 21:01:05','Maine','Petersenfort','930 Joy Hollow Suite 517','Significant his himself clearly very. Expert stop area along individual.',NULL,1,0,0,0),(4,'Tanner','Chen','519-942-6418x306','kristine10@example.org','ff7b09173bf0e1ae03e6ebccf8d698ef47242f761e47169ac8039a1f4d97cf01','68666','2025-05-10 06:40:01','Oregon','East Clayton','412 Snow Manors Apt. 161','Similar safe air land rather air. Reveal bad audience grow ahead girl.',NULL,1,0,0,0),(5,'Emily','Mays','904-350-9322','qcooper@example.org','8ddcbecd55b7c79ec20b532380b2df7def31e5652eac3ebd1b9a885fabdcec6d','44411','2025-04-02 18:33:57','Maine','Sharonside','91189 Moore Drive Apt. 358','Senior fact information animal car. Hour reduce car.',NULL,1,0,0,0),(6,'Thomas','Clements','841-889-2762','johnchavez@example.net','40862ffbe9ad5ac7525372ac33cd4233adaf42023b930ea1374fba087292aa77','84033','2025-01-17 15:36:59','New Mexico','West Aaron','703 Wilson Roads Suite 892','Audience energy move. Morning eat turn clear.',NULL,1,0,0,0),(7,'Michael','Kennedy','(537)278-5707x42','thomas08@example.org','28d74bc584fd81451135b32342f898802a83560f40d5a3b33edb3cebd6f32021','97750','2025-05-10 18:18:04','Montana','West Blaketown','432 Lee Mews Suite 562','Plan that hair sea quality.',NULL,1,0,0,0),(8,'Thomas','Rogers','3008250402','tarasanders@example.org','4380cc8fbc1b65f7599bd712f6e7312ba9f27b867d862e5cf041c66ec95053a7','13914','2025-04-28 14:19:00','Colorado','Marcusmouth','0803 Miller Ways Suite 334','Might his lot the drive. Various authority leave right answer.',NULL,1,0,0,0),(9,'Ryan','Hawkins','298-334-7897x844','thompsonrobert@example.org','8020537d31ea461b439b25e93c6b1ba6d73e07f92a4ef4e10ce9a085ba468b54','86958','2025-01-02 02:30:32','West Virginia','Trevinoville','419 Hall Stravenue Suite 331','Push do pick expert commercial. Network foreign one. Speech theory choice.',NULL,1,0,0,0),(10,'Cristina','Lester','290-589-5774','donnasimpson@example.net','674e4d417d972fd8ca812a2ed0d7064e7ca6a6d98d186e4fbb95757d8f72d621','10825','2025-02-20 04:15:54','Florida','Warnermouth','0305 Matthew Mill Apt. 452','Ground much run. Government make article drop.\nWatch force start general professional.',NULL,1,0,0,0),(11,'Steven','Williams','466-320-8298','john23@example.org','27cb6bcf5760118f552fb6e9e19852d4fe37ee8dd85187f27c417d506a4a5d76','97862','2025-06-02 19:21:40','Utah','Lake Christian','729 Johnny Valley','Personal threat many. Fall character door green save identify. Sound war address morning explain.',NULL,1,0,0,0),(12,'Wanda','Gill','001-488-456-4319','meghan09@example.org','740a647020065a8398f557be01485e242b093abae9361cbbaa0619cbb11631f6','48105','2025-02-26 09:32:47','South Dakota','Marcusfurt','02907 Matthew Branch Suite 493','Very everything store morning as police often. Place myself his itself find add sing.',NULL,1,0,0,0),(13,'Sandra','Elliott','(770)986-9305x82','simonjohn@example.org','550b45fc793c35ea3c5a41172c87bb9c01e6ab1e3e3ecc48e377a51f1d70c4ce','55548','2025-01-15 23:39:16','Oregon','Youngmouth','27166 King Throughway','Guess attorney response provide likely fire. Fire town worker. Image central challenge term memory.',NULL,1,0,0,0),(14,'Hayley','Terry','(625)991-1824x34','katherinecole@example.org','4d4596bde13ac3dac51a64818a41ae33cfec95e2575dbd535d3ba459b7b9d073','84590','2025-04-10 07:37:46','Arizona','Lisaland','793 Boyd Station','Full parent analysis. Recognize someone treatment over.',NULL,1,0,0,0),(15,'Leah','Lee','(915)911-0502x69','dmiller@example.net','746891c97fe350f58aa6b8a5865c438462c9d39afdbceadd74b21c9c7a90be2e','34873','2025-01-06 06:02:29','Tennessee','Port Margaretmouth','70284 Aaron Junction Apt. 822','Policy drug these person. Lot thousand question.\nDrive example color draw difficult.',NULL,1,0,0,0),(16,'Dylan','Hernandez','(306)469-5325x83','wknight@example.org','3ff26746b389e36ec17bd16da222bc9830b2e312dac16677dad4ead1b1c907cd','62253','2025-03-15 23:37:38','Iowa','Allenfort','144 Daniels Rapids Suite 340','Rich foot herself among. Issue radio especially road get car party.',NULL,1,0,0,0),(17,'Jared','Perez','427.859.4516x425','jimmy65@example.com','8a142460b9a052ae69015a25abbf0a45414a171e9cb78cb3f7ab7a0030a23ffb','54253','2025-03-20 17:59:19','Connecticut','East Adam','399 Joseph Street','Next according television next sense make real use. Girl sister their rate drop marriage worker.',NULL,1,0,0,0),(18,'Jesse','Boyle','001-775-746-9216','zramirez@example.net','28660d5d9d982556190d5e587dd89dc2963ae5d969d92e850bf392c07f158ea3','63379','2025-02-26 10:19:58','Delaware','Moorebury','7316 Marshall Mountain','Account movement can. Paper tree bank letter summer minute perform indeed.',NULL,1,0,0,0),(19,'Johnathan','Garcia','740-529-2639','hromero@example.net','53794b965d01ab5e173db609e8d95c8d6182138a323cf4faecdbb89fd5a11538','16825','2025-04-09 16:35:50','New Hampshire','Whiteside','64619 Wilkins Wall Apt. 735','Agency rich accept if share land. Drop local cell kid growth main. Why mission because feel.',NULL,1,0,0,0),(20,'Jennifer','Wheeler','(529)279-3970x37','brownjohn@example.net','904b4b1bd673bc2ad98b2c884843dbec827f414cf6b3b8e7d2ec48dd13504403','14794','2025-05-27 21:29:57','North Dakota','Middletonport','3258 Robbins Lock Suite 571','Senior seem west hour less. Decide happy another image because include now.',NULL,1,0,0,0),(21,'Anthony','Boyer','552.674.1974x366','williamsleslie@example.net','2496406bac0ec66531fcb587b3bc74d7d6d35520e2b08620b29a77760bd77dd4','69617','2025-04-03 22:51:19','Nevada','Paultown','9220 Janice Gateway','Evening his gas health sort couple station my.',NULL,1,0,0,0),(22,'Colin','Huff','623.763.9752','jasonclayton@example.org','b4fe44a7e9fa874d2c096434cab1314653e30d8f679c1baf86f45a4a55bf3c9c','00560','2025-01-17 00:37:20','Texas','Kylemouth','90412 Werner Passage','Situation eat thousand. Cause others skill industry old effect fine.',NULL,1,0,0,0),(23,'David','Wright','646-467-0285x332','andreawright@example.org','4c8620c84ca6dba166750e56b6b2641a2dda00cd9a74ba507fb169503d26f9b6','95104','2025-03-22 21:35:10','Virginia','East Katherine','238 Lindsey Walks','So suggest artist cold measure defense mouth.',NULL,1,0,0,0),(24,'Kathleen','Willis','001-230-408-1737','elizabeth54@example.net','e509ff56efff8722b2290f30dd11173b0c5cc20cca0557fef95e66b3322bf7bf','03450','2025-04-03 22:53:30','Washington','New Randy','7274 Bailey Route Suite 696','Reality adult others talk without wall stay. Vote continue community whole growth.',NULL,1,0,0,0),(25,'Vincent','Cox','(519)861-0209x84','luisflynn@example.com','3ef6b32974764d33e629fbdeff60a01a895c688b5cc73b1e58c7054d6e8ae236','66775','2025-03-21 00:27:52','Pennsylvania','North Brian','281 Collins Roads','Range international everybody book. Meeting movie avoid American address simply.',NULL,1,0,0,0),(26,'Anthony','George','(528)446-6807x82','raykeith@example.com','948ca891ea234c58fa5f062a3f1d50fc55e6822d775fa535586a6b234965afde','83909','2025-01-10 20:44:27','North Dakota','North Danielleberg','215 Joy Islands','Official artist health effect forward magazine. Money ball keep since my necessary million.',NULL,1,0,0,0),(27,'Carlos','Adams','857-769-5978x538','laura03@example.net','c6a7d88fe4d2d0a90156a76b752d0ea3ee9ee139ee09dcba277514b4ed83e574','57544','2025-05-29 17:02:43','South Carolina','New Andrew','95052 Adams Orchard','Your outside wish community kid official within.',NULL,1,0,0,0),(28,'Timothy','Holt','+1-559-731-8734x','bstewart@example.org','4e2690adc242e317b7f79eb2e76ee2f10fc39ffe979a040d0cb8db8d7acca595','21938','2025-04-19 01:19:39','New Jersey','West Walterfort','6010 Bird Track Suite 987','Tonight table loss detail put risk yet. Before wrong take old former run others believe.',NULL,1,0,0,0),(29,'Jeremy','Crawford','929-443-1262x390','christopher94@example.net','1845fde6a0edc0d4a3a38275f9e83cd09d580f5167d1bdaab952e438009abd30','19300','2025-02-10 01:48:18','West Virginia','South Davidfort','532 Stewart Mills','Push country glass evening much. Design need assume heart west.',NULL,1,0,0,0),(30,'Brett','Whitaker','(868)528-9204x97','fharris@example.org','cee670f6ce32f85db12e43b560d31193efddc3bcef6d93d0f941f4bd9264004b','88776','2025-04-01 10:50:58','West Virginia','North James','96618 Alicia Forge','Stay century law before everybody. Hot scene view today father. Pass step have perform.',NULL,1,0,0,0),(31,'William','Flores','001-315-633-4866','alisongreer@example.com','b188ce12651e48f460fea3861192dcaf3d1ba76678cffcbcbe8ced9a2896e7c6','75555','2025-03-25 05:36:34','Kentucky','North Shelly','8620 Brady Ports','Positive better management minute air represent. Beat start say either none heavy down business.',NULL,1,0,0,0),(32,'Dana','Myers','5439319238','terri04@example.com','db5c10d3281f44accf51e33a48254a71784dfc469ed9d2765fdd8627b7ebff3e','17431','2025-05-18 21:05:51','Michigan','Bradshawport','4344 Micheal Mission','Whom language place side member sign.',NULL,1,0,0,0),(33,'Christy','Knapp','362-313-5772x566','aanderson@example.net','170f6439185458e2e1de1fc9bd2f4c09964d55bce051e656db6480405a14acf2','63416','2025-02-15 23:04:01','Montana','South Brianport','4818 Smith Divide','Fund front suggest drug.',NULL,1,0,0,0),(34,'Maria','Jackson','001-690-886-0114','stevenwheeler@example.net','2ba1640c4470d741830e23d55a9f537e928475bc8af6c446400398a5bd31383d','84360','2025-01-02 11:29:59','Pennsylvania','Wallerbury','8577 Cooper Trail Apt. 237','Head perform walk. Put again big role stand. Cup home record forward.',NULL,1,0,0,0),(35,'April','Powers','+1-969-743-1608','gonzalezkenneth@example.com','62e012e9ccf94e04927f34b270fa29319fce88ba43fdd6aff3696979fd37478a','37666','2025-01-13 07:42:34','Arizona','West Nicholaschester','347 Spencer Road Suite 472','Theory simply concern page director writer act. Would truth join issue face key when.',NULL,1,0,0,0),(36,'Lisa','Campbell','646-509-4571x043','bliu@example.org','e2ec11fe7168027f168d08cca2055481d3e8127a77c6a996d88df20e72ec0ce5','48846','2025-01-02 05:27:35','Maine','Brianton','92719 Andrew Summit','Measure again ability election race decide. Control stock same project.',NULL,1,0,0,0),(37,'Cynthia','Williamson','001-835-261-4685','xmedina@example.org','3aa0a049602f87aba5a2d146016049138111da71be0c19f57be7e19d0a9509a7','35588','2025-05-21 04:26:12','Colorado','Deborahtown','24581 Tyler Well Apt. 640','Air parent forget. Doctor nature cup whom poor send.',NULL,1,0,0,0),(38,'Jeremy','Becker','+1-969-503-9766x','bryan29@example.org','a39b7986321ddd95b68061495c0fd77d796ab3cb9ccaab75a96359819eb8a5f1','24694','2025-01-20 00:41:11','Georgia','Gregoryview','8677 John Island Suite 446','Practice organization fill can cause as future. Agree likely off. Cause letter career.',NULL,1,0,0,0),(39,'Daniel','Sandoval','001-852-607-6631','freynolds@example.com','d54219fa0110b6e01780d307076990b4f0dfd8e78fc4a5ba74ef8ef45aa3bcbb','56086','2025-05-02 19:30:57','Wyoming','West Charles','5547 Sanchez Mountain','Sound market best only know fish. Produce clear various production.',NULL,1,0,0,0),(40,'Geoffrey','Grant','431.284.1061x677','hernandezdavid@example.com','d6695c5645f7aa68f61e3d8ae63f01640e0b492e8b2752af7ee01223b976705e','11227','2025-04-22 20:10:21','Pennsylvania','East Melissaport','87452 Green Fall Apt. 138','Care door natural produce team operation. Top worry there similar adult range true.',NULL,1,0,0,0),(41,'Laura','Perez','772-680-7201x802','katieleonard@example.org','e966fa569f1fa753ce1207aee3c966c40bdb18ebc10283cc3ee8c74c477a1e5b','47666','2025-03-16 04:32:26','Tennessee','Paulaborough','093 Norma Street Apt. 623','Player use through first exactly far though garden. Make speak might fight social forward.',NULL,1,0,0,0),(42,'James','Booth','388-229-2717x362','warnervirginia@example.net','ae158043a831bf3b508b5099e0a7c2f9428738b29dfd076564a918938634088d','78001','2025-01-27 12:33:36','Georgia','Lake Michael','67259 Catherine Track','Assume part father himself research general. Within night want according.',NULL,1,0,0,0),(43,'Becky','Cain','768-478-2652','davisdaniel@example.com','f8818222687f82284e44751c1e0b29153ebc1cf932d0fa5cb91dce6bff3b6915','86261','2025-02-07 00:52:15','Alaska','Riverastad','8047 Barr Fork Suite 089','Unit in baby notice. Attack food laugh newspaper part better college.',NULL,1,0,0,0),(44,'Amy','Gibbs','+1-754-683-9409x','lori49@example.org','877cb958459dad66038048879a39cc2fc951fbc7e64c0dfeebe21ef5e88e232b','84637','2025-04-26 18:37:07','Montana','South Jesuschester','0297 Deborah Bridge Apt. 126','Leader contain culture along budget serious. Run some Congress result every war.',NULL,1,0,0,0),(45,'William','Tucker','001-318-412-2405','amyscott@example.com','1c2fbaf454a716e1b6da82cfbc5dbc7a3b64ebb11be5c7f8db9004d579db650d','94256','2025-03-28 05:10:39','Texas','Kimberlyton','435 Heather Grove','Its body source cut feel beat why.',NULL,1,0,0,0),(46,'Valerie','Ford','+1-658-221-7675x','evaughn@example.com','35c656227fbe1cd7a14a23fc40a05444a65a6742b2b2e845d9f744d2beba2f7a','15299','2025-03-18 08:10:46','Iowa','Conniechester','090 Andersen Loop Suite 332','Movement certainly group member. Since use out cost game set.',NULL,1,0,0,0),(47,'Tara','Garcia','+1-778-597-4591x','jorge17@example.org','f29d849a9d6b79523dfc58f85e5aaac261104fd25682c6493afa5488acbc1d78','93405','2025-02-24 10:06:16','Wisconsin','Jonathantown','535 Rowland Stravenue Suite 306','Occur quite anyone have.\nTen many fine so say.',NULL,1,0,0,0),(48,'Jessica','Mendez','676.809.8583x294','ellisashley@example.com','7ee055f31018e68aa431f6f1dbbe67e1529f39fa67b9ed581dccbbda92441517','97224','2025-01-24 08:16:10','Massachusetts','Sydneyhaven','7194 Watts Stravenue Suite 501','Simply wait similar blood really child lead.',NULL,1,0,0,0),(49,'William','Flores','695-915-0792x594','griffinjohn@example.org','448bff2236dc27ddfe2a0bf0d2b597f90010dc616972f3a5e7e89e582b75220b','50312','2025-03-28 07:10:08','Missouri','West Anthonytown','3271 Hoffman Greens Apt. 200','Modern simple ok soon four once. Free another mind kind religious.',NULL,1,0,0,0),(50,'Matthew','Hill','(400)312-9592x00','edwardlopez@example.com','d99f80bc56b572f488f31ae7ddedf05512e159ec67ea66a77180fcf6c61f007b','74360','2025-05-29 06:07:59','Alaska','New Samantha','5195 Brown Field Suite 942','Control career state six born old nice. Benefit close eight energy continue industry best change.',NULL,1,0,0,0),(51,'erfan','nasbi',NULL,'erfan@gamil.com','pbkdf2_sha256$1000000$ND62CsGea3xjv0WxUMqasy$ltuo0dT7omwH5LQbu6zczOS7oKjjQaW+aG8QqmO/F7c=',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,0,0,0),(52,'erfan','nasbi','989012315700','erfannsb@gmail.com','pbkdf2_sha256$1000000$JNbj8EUZ6vU51v77idx8uQ$YUBu9G261G3lEmn1hfWNqpFhqg5kPCLNf+l3CkA+4fo=','74360',NULL,'Wisconsin','Conniechester','535 Rowland Stravenue Suite 306','Simply wait similar blood really child lead.',NULL,1,0,0,0),(55,'Mehrnoosh','Yaghoubi',NULL,'mehrnoosh@gmail.com','pbkdf2_sha256$1000000$yBzVz1BtMsUkqJYImgJDzF$QMWgMCp17s7dKA22uQdEWL8Qco2a08YR/pCVaUDtPDI=',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,0,0,1),(61,'Erfan','Nasibi',NULL,'erfannasibi@gmail.com','pbkdf2_sha256$1000000$5MAkV7VY9pQIoXCVGr335l$kxKZKBs2fLmM6ktMO+syotTvHArlPpABxDpi9ATHeHE=',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,0,0,0),(62,'Parsa','Azar',NULL,'parsa@gmail.com','pbkdf2_sha256$1000000$x0HaH7YyU5EOB6cBJ5eAcI$fEvWHr6viyNA7Yg/xf50YdjZbi+lZm45byAkIjOQdic=',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,0,0,1),(63,'Antonio','Montana',NULL,'antonio@gmail.com','pbkdf2_sha256$1000000$OTZ9mOCy3rk4K8Q2QmjSHn$CHU+l7sG3L+9rJd4/fAOOsCE1M2HBlk7UPS5pVxvaRA=',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,0,0,1),(64,'Amir','nasibi',NULL,'amir@gmail.com','pbkdf2_sha256$1000000$BvjsKv6uX8EEyXnYFFUWT7$EsvzNXDPromW1xAi4Kc0rtnGQUAtDGOlduZQ0uD6YR0=',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,0,0,0);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_groups`
--

DROP TABLE IF EXISTS `customer_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_groups` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_groups`
--

LOCK TABLES `customer_groups` WRITE;
/*!40000 ALTER TABLE `customer_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_user_permissions`
--

DROP TABLE IF EXISTS `customer_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_user_permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_user_permissions`
--

LOCK TABLES `customer_user_permissions` WRITE;
/*!40000 ALTER TABLE `customer_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `details`
--

DROP TABLE IF EXISTS `details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `details` (
  `AttributeNum` int NOT NULL,
  `AttributeName` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `AttributeValue` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ProductID` int NOT NULL,
  PRIMARY KEY (`AttributeNum`,`ProductID`),
  KEY `ProductID` (`ProductID`),
  CONSTRAINT `Details_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `details`
--

LOCK TABLES `details` WRITE;
/*!40000 ALTER TABLE `details` DISABLE KEYS */;
/*!40000 ALTER TABLE `details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discount`
--

DROP TABLE IF EXISTS `discount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discount` (
  `DiscountID` int NOT NULL AUTO_INCREMENT,
  `DiscountCode` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `discountValue` decimal(5,2) unsigned NOT NULL,
  `DiscountStartTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `DiscountEndTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ShopID` int NOT NULL,
  `discountName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`DiscountID`),
  KEY `fk_shop_idx` (`ShopID`),
  CONSTRAINT `fk_discount` FOREIGN KEY (`ShopID`) REFERENCES `shop` (`ShopID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discount`
--

LOCK TABLES `discount` WRITE;
/*!40000 ALTER TABLE `discount` DISABLE KEYS */;
/*!40000 ALTER TABLE `discount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_customer_CustomerID` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_customer_CustomerID` FOREIGN KEY (`user_id`) REFERENCES `customer` (`CustomerID`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'users','0001_initial','2025-08-15 07:32:17.765723'),(2,'contenttypes','0001_initial','2025-08-15 07:32:17.793005'),(3,'admin','0001_initial','2025-08-15 07:32:17.869785'),(4,'admin','0002_logentry_remove_auto_add','2025-08-15 07:32:17.872608'),(5,'admin','0003_logentry_add_action_flag_choices','2025-08-15 07:32:17.875210'),(6,'contenttypes','0002_remove_content_type_name','2025-08-15 07:32:17.937491'),(7,'auth','0001_initial','2025-08-15 07:32:18.079813'),(8,'auth','0002_alter_permission_name_max_length','2025-08-15 07:32:18.116371'),(9,'auth','0003_alter_user_email_max_length','2025-08-15 07:32:18.120094'),(10,'auth','0004_alter_user_username_opts','2025-08-15 07:32:18.123413'),(11,'auth','0005_alter_user_last_login_null','2025-08-15 07:32:18.126548'),(12,'auth','0006_require_contenttypes_0002','2025-08-15 07:32:18.128415'),(13,'auth','0007_alter_validators_add_error_messages','2025-08-15 07:32:18.131978'),(14,'auth','0008_alter_user_username_max_length','2025-08-15 07:32:18.135985'),(15,'auth','0009_alter_user_last_name_max_length','2025-08-15 07:32:18.139033'),(16,'auth','0010_alter_group_name_max_length','2025-08-15 07:32:18.147802'),(17,'auth','0011_update_proxy_permissions','2025-08-15 07:32:18.152462'),(18,'auth','0012_alter_user_first_name_max_length','2025-08-15 07:32:18.155552'),(19,'orders','0001_initial','2025-08-15 07:32:18.161745'),(20,'orders','0002_ordershipping_delete_odershipping','2025-08-15 07:32:18.164278'),(21,'payments','0001_initial','2025-08-15 07:32:18.167178');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imageurl_product`
--

DROP TABLE IF EXISTS `imageurl_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imageurl_product` (
  `Image_URL` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ProductID` int NOT NULL,
  PRIMARY KEY (`Image_URL`,`ProductID`),
  KEY `ProductID` (`ProductID`),
  CONSTRAINT `ImageURL_Product_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imageurl_product`
--

LOCK TABLES `imageurl_product` WRITE;
/*!40000 ALTER TABLE `imageurl_product` DISABLE KEYS */;
INSERT INTO `imageurl_product` VALUES ('products/thumbnails/61My4F2-XUL.jpg',132),('products/thumbnails/5116zdA9uyL._AC_SL1200_.jpg',133),('products/thumbnails/51c1zFDNVmL._AC_SL1003_.jpg',134),('products/thumbnails/61KGHBtbp2L._AC_SL1002_.jpg',134),('products/thumbnails/81cQQqzPcSL._AC_SL1500_.jpg',135),('products/thumbnails/61XsKRKsGoL._AC_SL1500_.jpg',136),('products/thumbnails/71OWtcxKgvL._AC_SL1500_.jpg',137),('products/thumbnails/71ZNqv54H4L._AC_SL1500_.jpg',138),('products/thumbnails/81X1hRKY6ML._AC_SL1500_.jpg',139);
/*!40000 ALTER TABLE `imageurl_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `installment`
--

DROP TABLE IF EXISTS `installment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `installment` (
  `InstallmentID` int NOT NULL AUTO_INCREMENT,
  `InterestRate` decimal(5,2) unsigned NOT NULL,
  `TotalPrice` decimal(10,2) NOT NULL,
  `InstallmentStatus` enum('Pending','Active','Paid','Overdue') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'Pending',
  `InstallmentMonths` int unsigned NOT NULL,
  `StartDate` date NOT NULL,
  `MonthsPaid` tinyint unsigned NOT NULL DEFAULT '0',
  `OrderID` int NOT NULL,
  PRIMARY KEY (`InstallmentID`),
  UNIQUE KEY `OrderID_UNIQUE` (`OrderID`),
  CONSTRAINT `fk_installment_order_id` FOREIGN KEY (`OrderID`) REFERENCES `ordering` (`OrderID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `installment`
--

LOCK TABLES `installment` WRITE;
/*!40000 ALTER TABLE `installment` DISABLE KEYS */;
/*!40000 ALTER TABLE `installment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `installmentpayment`
--

DROP TABLE IF EXISTS `installmentpayment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `installmentpayment` (
  `InstallmentID` int NOT NULL,
  `InstallmentNumber` int NOT NULL,
  `PaymentID` int NOT NULL,
  PRIMARY KEY (`InstallmentID`,`InstallmentNumber`),
  KEY `fk_installment_payment_payment` (`PaymentID`),
  CONSTRAINT `fk_installment_payment_installment` FOREIGN KEY (`InstallmentID`) REFERENCES `installment` (`InstallmentID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_installment_payment_payment` FOREIGN KEY (`PaymentID`) REFERENCES `payment` (`PaymentID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `installmentpayment`
--

LOCK TABLES `installmentpayment` WRITE;
/*!40000 ALTER TABLE `installmentpayment` DISABLE KEYS */;
/*!40000 ALTER TABLE `installmentpayment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordering`
--

DROP TABLE IF EXISTS `ordering`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordering` (
  `OrderID` int NOT NULL AUTO_INCREMENT,
  `PaymentMethod` enum('Credit Card','Installment','Cash on Delivery') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `CreatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `OrderStatus` enum('Pending','Processing','Shipped','Delivered','Cancelled') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'Pending',
  `OrderDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `CustomerID` int NOT NULL,
  `is_confirmed` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`OrderID`),
  KEY `fk_customer` (`CustomerID`),
  CONSTRAINT `fk_customer` FOREIGN KEY (`CustomerID`) REFERENCES `customer` (`CustomerID`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordering`
--

LOCK TABLES `ordering` WRITE;
/*!40000 ALTER TABLE `ordering` DISABLE KEYS */;
INSERT INTO `ordering` VALUES (1,'Cash on Delivery','2025-01-14 15:30:41','Shipped','2025-04-27 20:30:00',47,0),(2,'Credit Card','2025-05-29 22:46:07','Processing','2025-02-21 20:30:00',49,0),(3,'Cash on Delivery','2025-04-23 13:21:55','Shipped','2025-02-23 20:30:00',13,0),(4,'Credit Card','2025-03-26 05:06:53','Delivered','2025-04-11 20:30:00',30,0),(5,'Cash on Delivery','2025-05-08 02:22:37','Shipped','2025-01-31 20:30:00',25,0),(6,'Credit Card','2025-03-28 08:02:30','Shipped','2025-03-20 20:30:00',27,0),(7,'Cash on Delivery','2025-03-19 08:30:53','Delivered','2025-02-27 20:30:00',10,0),(8,'Installment','2025-05-01 07:04:56','Processing','2025-02-20 20:30:00',34,0),(9,'Installment','2025-01-05 03:38:14','Processing','2025-02-20 20:30:00',14,0),(10,'Credit Card','2025-05-20 10:01:48','Delivered','2025-03-12 20:30:00',23,0),(11,'Installment','2025-05-30 22:25:30','Delivered','2025-02-04 20:30:00',32,0),(12,'Installment','2025-03-06 00:48:51','Processing','2025-03-06 20:30:00',13,0),(13,'Installment','2025-03-31 11:35:02','Processing','2025-03-10 20:30:00',38,0),(14,'Cash on Delivery','2025-03-28 13:07:57','Pending','2025-04-16 20:30:00',25,0),(15,'Credit Card','2025-05-14 00:00:23','Processing','2025-03-25 20:30:00',41,0),(16,'Credit Card','2025-02-05 05:00:54','Processing','2025-05-27 20:30:00',24,0),(17,'Credit Card','2025-05-19 12:28:50','Processing','2025-05-30 20:30:00',15,0),(18,'Cash on Delivery','2025-04-05 20:31:46','Shipped','2025-05-30 20:30:00',40,0),(19,'Credit Card','2025-03-09 08:11:16','Cancelled','2025-02-26 20:30:00',49,0),(20,'Installment','2025-02-05 23:18:06','Shipped','2025-02-05 20:30:00',27,0),(21,'Installment','2025-04-22 11:50:21','Pending','2025-04-19 20:30:00',41,0),(22,'Cash on Delivery','2025-04-04 15:24:12','Cancelled','2025-02-02 20:30:00',43,0),(23,'Cash on Delivery','2025-03-23 01:37:28','Cancelled','2025-01-03 20:30:00',48,0),(24,'Installment','2025-05-28 12:59:34','Cancelled','2025-05-05 20:30:00',30,0),(25,'Installment','2025-01-01 21:44:14','Shipped','2025-04-01 20:30:00',46,0),(26,'Installment','2025-01-31 15:56:48','Processing','2025-02-16 20:30:00',22,0),(27,'Installment','2025-04-14 05:10:30','Pending','2025-02-15 20:30:00',3,0),(28,'Credit Card','2025-03-29 04:59:57','Processing','2025-04-01 20:30:00',23,0),(29,'Credit Card','2025-05-24 22:02:57','Shipped','2025-04-27 20:30:00',42,0),(30,'Credit Card','2025-03-18 22:36:13','Processing','2025-01-25 20:30:00',5,0),(31,'Installment','2025-05-14 09:28:18','Processing','2025-03-19 20:30:00',39,0),(32,'Installment','2025-05-28 01:52:03','Cancelled','2025-01-12 20:30:00',15,0),(33,'Installment','2025-04-12 04:02:08','Processing','2025-01-03 20:30:00',22,0),(34,'Cash on Delivery','2025-04-15 04:25:37','Pending','2025-03-10 20:30:00',39,0),(35,'Credit Card','2025-02-19 05:24:20','Shipped','2025-04-10 20:30:00',21,0),(36,'Cash on Delivery','2025-04-09 01:55:14','Delivered','2025-03-05 20:30:00',21,0),(37,'Installment','2025-02-01 03:41:07','Pending','2025-03-23 20:30:00',34,0),(38,'Credit Card','2025-03-05 14:49:11','Processing','2025-02-17 20:30:00',24,0),(39,'Credit Card','2025-05-21 20:33:26','Processing','2025-01-16 20:30:00',34,0),(40,'Installment','2025-03-27 08:10:40','Processing','2025-01-05 20:30:00',13,0),(41,'Installment','2025-05-06 11:57:52','Shipped','2025-01-18 20:30:00',20,0),(42,'Cash on Delivery','2025-05-02 21:53:41','Delivered','2025-03-12 20:30:00',17,0),(43,'Installment','2025-01-09 05:27:55','Shipped','2025-03-02 20:30:00',46,0),(44,'Credit Card','2025-03-20 07:15:48','Pending','2025-05-21 20:30:00',20,0),(45,'Cash on Delivery','2025-01-21 05:18:44','Pending','2025-04-23 20:30:00',1,0),(46,'Installment','2025-02-02 11:04:35','Delivered','2025-05-03 20:30:00',47,0),(47,'Installment','2025-05-17 03:08:42','Pending','2025-01-17 20:30:00',27,0),(48,'Installment','2025-03-23 05:32:04','Delivered','2025-04-16 20:30:00',29,0),(49,'Credit Card','2025-03-24 18:35:18','Pending','2025-01-21 20:30:00',6,0),(50,'Credit Card','2025-03-24 12:46:07','Pending','2025-03-14 20:30:00',49,0),(58,'Installment','2025-08-16 09:24:03','Delivered','2025-08-16 09:24:03',52,1),(60,'Credit Card','2025-08-16 14:42:33','Delivered','2025-08-16 14:42:33',52,1),(62,'Installment','2025-08-17 04:32:22','Cancelled','2025-08-17 04:32:22',52,1),(63,'Installment','2025-08-18 16:01:12','Shipped','2025-08-18 16:01:12',52,1),(64,NULL,'2025-09-11 11:29:17','Pending','2025-09-11 11:29:17',64,0);
/*!40000 ALTER TABLE `ordering` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderitem`
--

DROP TABLE IF EXISTS `orderitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderitem` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Quantity` int unsigned NOT NULL DEFAULT '1',
  `OrderID` int NOT NULL,
  `ShopProductID` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_order_id` (`OrderID`),
  KEY `fk_shop_product` (`ShopProductID`),
  CONSTRAINT `fk_order_id` FOREIGN KEY (`OrderID`) REFERENCES `ordering` (`OrderID`) ON DELETE CASCADE,
  CONSTRAINT `fk_shop_product` FOREIGN KEY (`ShopProductID`) REFERENCES `shop_product` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderitem`
--

LOCK TABLES `orderitem` WRITE;
/*!40000 ALTER TABLE `orderitem` DISABLE KEYS */;
INSERT INTO `orderitem` VALUES (40,1,64,9),(41,1,64,10);
/*!40000 ALTER TABLE `orderitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `PaymentID` int NOT NULL AUTO_INCREMENT,
  `TransactionID` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `PaymentStatus` enum('Pending','Completed','Failed','Refunded') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Pending',
  `PaymentGateway` enum('ZarinPal','Shaparak') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `PaymentDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `orderid` int DEFAULT NULL,
  PRIMARY KEY (`PaymentID`),
  UNIQUE KEY `uq_payment_tnx_id` (`TransactionID`),
  KEY `fk_payment_order_idx` (`orderid`),
  CONSTRAINT `fk_payment_order` FOREIGN KEY (`orderid`) REFERENCES `ordering` (`OrderID`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `ProductID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Rating` decimal(3,2) unsigned DEFAULT NULL,
  `Brand` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Thumbnail` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Views` int NOT NULL DEFAULT '0',
  `CountedRates` int DEFAULT '0',
  PRIMARY KEY (`ProductID`)
) ENGINE=InnoDB AUTO_INCREMENT=142 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (132,'Intel Core i9-13900K Processor','13th Gen Intel Core i9-13900K, 24 cores, 32 threads, base clock 3.0GHz, boost up to 5.8GHz.','2025-09-11 08:25:24',4.85,'Intel','products/thumbnails/61My4F2-XUL.jpg',2450,620),(133,'AMD Ryzen 9 7950X Processor','AMD Ryzen 9 7950X, 16 cores, 32 threads, base clock 4.5GHz, boost up to 5.7GHz.','2025-09-11 08:25:24',4.80,'AMD','products/thumbnails/5116zdA9uyL._AC_SL1200_.jpg',2100,540),(134,'NVIDIA GeForce RTX 4090 GPU','NVIDIA GeForce RTX 4090 graphics card, 24GB GDDR6X, DLSS 3.0, and ray tracing support.','2025-09-11 08:25:24',4.90,'NVIDIA','products/thumbnails/51c1zFDNVmL._AC_SL1003_.jpg',3820,960),(135,'ASUS ROG Strix Z790-E Motherboard','ATX motherboard with Intel Z790 chipset, DDR5 support, PCIe 5.0, and Wi-Fi 6E.','2025-09-11 08:25:24',4.70,'ASUS','products/thumbnails/81cQQqzPcSL._AC_SL1500_.jpg',1150,310),(136,'Corsair Vengeance DDR5 32GB RAM','Dual-channel kit with 32GB (2x16GB) DDR5 6000MHz CL36 memory modules.','2025-09-11 08:25:24',4.65,'Corsair','products/thumbnails/61XsKRKsGoL._AC_SL1500_.jpg',970,280),(137,'Samsung 990 PRO 2TB NVMe SSD','High-performance PCIe 4.0 NVMe SSD with read speeds up to 7450MB/s and write speeds up to 6900MB/s.','2025-09-11 08:25:24',4.75,'Samsung','products/thumbnails/71OWtcxKgvL._AC_SL1500_.jpg',1680,400),(138,'Seagate IronWolf 12TB HDD','12TB NAS hard drive with 7200RPM, CMR technology, and 256MB cache.','2025-09-11 08:25:24',4.50,'Seagate','products/thumbnails/71ZNqv54H4L._AC_SL1500_.jpg',840,190),(139,'Cooler Master V1000 Platinum PSU','1000W fully modular power supply, 80+ Platinum efficiency, and silent fan mode.','2025-09-11 08:25:24',4.55,'Cooler Master','products/thumbnails/81X1hRKY6ML._AC_SL1500_.jpg',620,175);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productcategory`
--

DROP TABLE IF EXISTS `productcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productcategory` (
  `ProductID` int NOT NULL,
  `CategoryID` int NOT NULL,
  PRIMARY KEY (`ProductID`,`CategoryID`),
  KEY `CategoryID` (`CategoryID`),
  CONSTRAINT `ProductCategory_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`) ON DELETE CASCADE,
  CONSTRAINT `ProductCategory_ibfk_2` FOREIGN KEY (`CategoryID`) REFERENCES `category` (`CategoryID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productcategory`
--

LOCK TABLES `productcategory` WRITE;
/*!40000 ALTER TABLE `productcategory` DISABLE KEYS */;
INSERT INTO `productcategory` VALUES (132,1),(133,1),(134,2),(135,3),(136,4),(137,5),(138,5),(139,6);
/*!40000 ALTER TABLE `productcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shipping`
--

DROP TABLE IF EXISTS `shipping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shipping` (
  `ShippingID` int NOT NULL AUTO_INCREMENT,
  `ShippingMethod` enum('Express','Economy') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ShippingDate` datetime NOT NULL,
  `DeliveryDate` datetime NOT NULL,
  `ShippingStatus` enum('Pending','Shipped','In Transit','Delivered','Failed') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Pending',
  `orderID` int NOT NULL,
  PRIMARY KEY (`ShippingID`),
  KEY `orderID_idx` (`orderID`),
  CONSTRAINT `fk_order_shipping` FOREIGN KEY (`orderID`) REFERENCES `ordering` (`OrderID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipping`
--

LOCK TABLES `shipping` WRITE;
/*!40000 ALTER TABLE `shipping` DISABLE KEYS */;
/*!40000 ALTER TABLE `shipping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop`
--

DROP TABLE IF EXISTS `shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shop` (
  `ShopName` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ShopID` int NOT NULL AUTO_INCREMENT,
  `Rating` decimal(3,2) NOT NULL DEFAULT '0.00',
  `PostalCode` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ShopID`),
  UNIQUE KEY `uq_shop_name` (`ShopName`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop`
--

LOCK TABLES `shop` WRITE;
/*!40000 ALTER TABLE `shop` DISABLE KEYS */;
INSERT INTO `shop` VALUES ('Bradley Ltd',1,3.24,'20125'),('Smith-Diaz',2,2.20,'16851'),('Yu, Lawrence and Arnold',3,3.53,'33644'),('Snyder and Sons',4,3.97,'23205'),('Gilbert, Lee and Lewis',5,1.87,'23231'),('Kent and Sons',6,2.96,'41258'),('White, Browning and Gutierrez',7,3.01,'77956'),('Murphy, Coleman and Hughes',8,2.97,'61671'),('Duffy and Sons',9,4.83,'02825'),('Welch PLC',10,2.78,'80576'),('Mehr',21,5.00,'123456'),('Persia',22,3.00,'210321'),('Tony',23,0.00,'21413132');
/*!40000 ALTER TABLE `shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop_product`
--

DROP TABLE IF EXISTS `shop_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shop_product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ShopID` int NOT NULL,
  `ProductID` int NOT NULL,
  `StockQuantity` int NOT NULL DEFAULT '0',
  `Sells` int NOT NULL DEFAULT '0',
  `Price` decimal(20,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_shop_product` (`ShopID`,`ProductID`),
  KEY `idx_product_id` (`ProductID`),
  CONSTRAINT `fk_product_id` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`) ON DELETE CASCADE,
  CONSTRAINT `fk_shop_id` FOREIGN KEY (`ShopID`) REFERENCES `shop` (`ShopID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_product`
--

LOCK TABLES `shop_product` WRITE;
/*!40000 ALTER TABLE `shop_product` DISABLE KEYS */;
INSERT INTO `shop_product` VALUES (1,21,132,100,100,1000.00),(2,21,133,200,120,1500.00),(3,21,134,2034,1230,3000.00),(4,21,135,210,120,1230.00),(5,21,136,213,348,2030.00),(6,21,137,213,2103,2103.00),(7,21,138,239,843,643.00),(8,21,139,210,218,213.00),(9,22,133,21,21,1400.00),(10,22,134,20,213,2700.00);
/*!40000 ALTER TABLE `shop_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopadmin`
--

DROP TABLE IF EXISTS `shopadmin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopadmin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ShopID` int NOT NULL,
  `AdminID` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_shop` (`ShopID`),
  KEY `fk_admin_idx` (`AdminID`),
  CONSTRAINT `fk_admin` FOREIGN KEY (`AdminID`) REFERENCES `customer` (`CustomerID`),
  CONSTRAINT `fk_shop` FOREIGN KEY (`ShopID`) REFERENCES `shop` (`ShopID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopadmin`
--

LOCK TABLES `shopadmin` WRITE;
/*!40000 ALTER TABLE `shopadmin` DISABLE KEYS */;
INSERT INTO `shopadmin` VALUES (1,8,1),(2,10,2),(3,1,3),(4,8,4),(5,1,5),(6,2,6),(7,1,7),(8,1,8),(9,10,9),(10,5,10),(12,21,55),(13,22,62),(14,23,63),(15,23,52);
/*!40000 ALTER TABLE `shopadmin` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-11 18:35:51
