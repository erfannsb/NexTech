--
-- Database: `OnlineShop`
-- Made By 
-- @ Abolfazl (Erfan) Nasibi
-- @ Mehrnoosh Yaghoubi
--

--
-- Important! 
-- This SQL File Consists Of Four Parts
-- 1. General Table Structure
-- 2. Table Indexes
-- 3. AUTO_Increments
-- 4. Table Constraints
--

-- [General Table Structure]
-- -------------------------------------------------------- 

--
-- Table structure for table `Admins`
--

CREATE TABLE `Admins` (
  `AdminID` int(11) NOT NULL,
  `FirstName` varchar(100) NOT NULL,
  `LastName` varchar(100) NOT NULL,
  `EmailAddress` varchar(255) NOT NULL,
  `PasswordHash` varchar(255) NOT NULL,
  `PasswordSalt` varchar(64) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `Permission` enum('Full Access','Content Management','User Management','Order Management','Reporting Only') NOT NULL DEFAULT 'Reporting Only',
  `LastLogin` datetime DEFAULT NULL,
  `PhoneNumber` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Category`
--

CREATE TABLE `Category` (
  `CategoryID` int(11) NOT NULL,
  `CategoryName` varchar(100) NOT NULL,
  `Description` text NOT NULL,
  `ParentCategory` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Comment`
--

CREATE TABLE `Comment` (
  `ProductID` int(11) NOT NULL,
  `CommentNum` bigint(20) UNSIGNED NOT NULL,
  `CommentDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `CommentText` text NOT NULL,
  `CustomerID` int(11) NOT NULL,
  `ParentCommentNum` bigint(20) UNSIGNED DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Rating` tinyint(3) UNSIGNED DEFAULT NULL CHECK (`Rating` >= 1 and `Rating` <= 5)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Customer`
--

CREATE TABLE `Customer` (
  `CustomerID` int(11) NOT NULL,
  `FirstName` varchar(100) NOT NULL,
  `LastName` varchar(100) NOT NULL,
  `PhoneNumber` varchar(16) NOT NULL,
  `EmailAddress` varchar(255) DEFAULT NULL,
  `PasswordSalt` varchar(64) NOT NULL,
  `PasswordHash` varchar(255) NOT NULL,
  `PostalCode` varchar(10) DEFAULT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `AddressProvince` varchar(265) DEFAULT NULL,
  `AddressCity` varchar(256) DEFAULT NULL,
  `AddressStreet` varchar(256) DEFAULT NULL,
  `AddressDetails` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Details`
--

CREATE TABLE `Details` (
  `AttributeNum` int(11) NOT NULL,
  `AttributeName` varchar(512) NOT NULL,
  `AttributeValue` varchar(512) NOT NULL,
  `ProductID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Discount`
--

CREATE TABLE `Discount` (
  `DiscountID` int(11) NOT NULL,
  `DiscountCode` varchar(10) NOT NULL,
  `discountValue` decimal(5,2) UNSIGNED NOT NULL,
  `DiscountStartTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `DiscountEndTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `DiscountProduct`
--

CREATE TABLE `DiscountProduct` (
  `ProductID` int(11) NOT NULL,
  `DiscountID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ImageURL_Product`
--

CREATE TABLE `ImageURL_Product` (
  `Image_URL` varchar(512) NOT NULL,
  `ProductID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Installment`
--

CREATE TABLE `Installment` (
  `InstallmentID` int(11) NOT NULL,
  `InterestRate` decimal(5,2) UNSIGNED NOT NULL,
  `TotalPrice` decimal(10,2) NOT NULL,
  `InstallmentStatus` enum('Pending','Active','Completed','Defaulted') NOT NULL DEFAULT 'Pending',
  `InstallmentMonths` tinyint(3) UNSIGNED NOT NULL,
  `StartDate` date NOT NULL,
  `MonthsPaid` tinyint(3) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `InstallmentPayment`
--

CREATE TABLE `InstallmentPayment` (
  `InstallmentID` int(11) NOT NULL,
  `InstallmentNumber` int(11) NOT NULL,
  `PaymentID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `OderShipping`
--

CREATE TABLE `OderShipping` (
  `OrderID` int(11) NOT NULL,
  `ShippingID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Ordering`
--

CREATE TABLE `Ordering` (
  `OrderID` int(11) NOT NULL,
  `PaymentMethod` enum('Credit Card','Installment','Cash on Delivery') NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `OrderStatus` enum('Pending','Processing','Shipped','Delivered','Cancelled') NOT NULL DEFAULT 'Pending',
  `OrderDate` date NOT NULL,
  `CustomerID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `OrderItem`
--

CREATE TABLE `OrderItem` (
  `Quantity` int(11) UNSIGNED NOT NULL DEFAULT 1,
  `OrderID` int(11) NOT NULL,
  `ProductID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `OrderPayment`
--

CREATE TABLE `OrderPayment` (
  `OrderID` int(11) NOT NULL,
  `PaymentID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Payment`
--

CREATE TABLE `Payment` (
  `PaymentID` int(11) NOT NULL,
  `TransactionID` varchar(50) NOT NULL,
  `PaymentStatus` enum('Pending','Completed','Failed','Refunded') NOT NULL DEFAULT 'Pending',
  `PaymentGateway` enum('ZarinPal','Shaparak') NOT NULL,
  `PaymentDate` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Product`
--

CREATE TABLE `Product` (
  `ProductID` int(11) NOT NULL,
  `Name` varchar(512) NOT NULL,
  `Description` text DEFAULT NULL,
  `Price` decimal(20,2) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `StockQuantity` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `Rating` decimal(3,2) UNSIGNED DEFAULT NULL,
  `InstallmentPolicy` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ProductCategory`
--

CREATE TABLE `ProductCategory` (
  `ProductID` int(11) NOT NULL,
  `CategoryID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Shipping`
--

CREATE TABLE `Shipping` (
  `ShippingID` int(11) NOT NULL,
  `ShippingMethod` enum('Express','Economy') NOT NULL,
  `TrackingNumber` varchar(100) NOT NULL,
  `ShippingDate` datetime NOT NULL,
  `DeliveryDate` datetime NOT NULL,
  `ShippingStatus` enum('Pending','Shipped','In Transit','Delivered','Failed') NOT NULL DEFAULT 'Pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Shop`
--

CREATE TABLE `Shop` (
  `ShopName` varchar(512) NOT NULL,
  `ShopID` int(11) NOT NULL,
  `Rating` decimal(3,2) NOT NULL,
  `PostalCode` varchar(10) NOT NULL,
  `AddressProvince` varchar(256) DEFAULT NULL,
  `AddressCity` varchar(256) DEFAULT NULL,
  `AddressStreet` varchar(256) DEFAULT NULL,
  `AddressDetails` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ShopAdmin`
--

CREATE TABLE `ShopAdmin` (
  `AdminID` int(11) NOT NULL,
  `PhoneNumber` varchar(20) NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `ShopAdminRole` enum('Owner','Manager','Cashier','Inventory Specialist') NOT NULL,
  `EmailAddress` varchar(255) NOT NULL,
  `PasswordSalt` char(64) NOT NULL,
  `PasswordHash` char(64) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `ShopID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Shop_Product`
--

CREATE TABLE `Shop_Product` (
  `ShopID` int(11) NOT NULL,
  `ProductID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- [Table Indexes]
-- ---------------------------------------------------------

--
-- Indexes for table `Admins`
--
ALTER TABLE `Admins`
  ADD PRIMARY KEY (`AdminID`),
  ADD UNIQUE KEY `uq_admins_email` (`EmailAddress`),
  ADD UNIQUE KEY `un_admin_pn` (`PhoneNumber`);

--
-- Indexes for table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`CategoryID`),
  ADD KEY `fk_category_parent` (`ParentCategory`);

--
-- Indexes for table `Comment`
--
ALTER TABLE `Comment`
  ADD PRIMARY KEY (`CommentNum`,`ProductID`),
  ADD KEY `idx_customer_id` (`CustomerID`),
  ADD KEY `idx_product_id` (`ProductID`);

--
-- Indexes for table `Customer`
--
ALTER TABLE `Customer`
  ADD PRIMARY KEY (`CustomerID`),
  ADD UNIQUE KEY `uq_customer_pn` (`PhoneNumber`),
  ADD UNIQUE KEY `un_customer_em` (`EmailAddress`);

--
-- Indexes for table `Details`
--
ALTER TABLE `Details`
  ADD PRIMARY KEY (`AttributeNum`,`ProductID`),
  ADD KEY `ProductID` (`ProductID`);

--
-- Indexes for table `Discount`
--
ALTER TABLE `Discount`
  ADD PRIMARY KEY (`DiscountID`);

--
-- Indexes for table `DiscountProduct`
--
ALTER TABLE `DiscountProduct`
  ADD PRIMARY KEY (`ProductID`,`DiscountID`),
  ADD KEY `DiscountID` (`DiscountID`);

--
-- Indexes for table `ImageURL_Product`
--
ALTER TABLE `ImageURL_Product`
  ADD PRIMARY KEY (`Image_URL`,`ProductID`),
  ADD KEY `ProductID` (`ProductID`);

--
-- Indexes for table `Installment`
--
ALTER TABLE `Installment`
  ADD PRIMARY KEY (`InstallmentID`);

--
-- Indexes for table `InstallmentPayment`
--
ALTER TABLE `InstallmentPayment`
  ADD PRIMARY KEY (`InstallmentID`,`InstallmentNumber`),
  ADD KEY `fk_installment_payment_payment` (`PaymentID`);

--
-- Indexes for table `OderShipping`
--
ALTER TABLE `OderShipping`
  ADD PRIMARY KEY (`OrderID`),
  ADD KEY `ShippingID` (`ShippingID`);

--
-- Indexes for table `Ordering`
--
ALTER TABLE `Ordering`
  ADD PRIMARY KEY (`OrderID`),
  ADD KEY `fk_customer` (`CustomerID`);

--
-- Indexes for table `OrderItem`
--
ALTER TABLE `OrderItem`
  ADD PRIMARY KEY (`OrderID`,`ProductID`),
  ADD KEY `ProductID` (`ProductID`);

--
-- Indexes for table `OrderPayment`
--
ALTER TABLE `OrderPayment`
  ADD PRIMARY KEY (`OrderID`,`PaymentID`),
  ADD KEY `PaymentID` (`PaymentID`);

--
-- Indexes for table `Payment`
--
ALTER TABLE `Payment`
  ADD PRIMARY KEY (`PaymentID`),
  ADD UNIQUE KEY `uq_payment_tnx_id` (`TransactionID`);

--
-- Indexes for table `Product`
--
ALTER TABLE `Product`
  ADD PRIMARY KEY (`ProductID`);

--
-- Indexes for table `ProductCategory`
--
ALTER TABLE `ProductCategory`
  ADD PRIMARY KEY (`ProductID`,`CategoryID`),
  ADD KEY `CategoryID` (`CategoryID`);

--
-- Indexes for table `Shipping`
--
ALTER TABLE `Shipping`
  ADD PRIMARY KEY (`ShippingID`),
  ADD UNIQUE KEY `TrackingNumber` (`TrackingNumber`);

--
-- Indexes for table `Shop`
--
ALTER TABLE `Shop`
  ADD PRIMARY KEY (`ShopID`),
  ADD UNIQUE KEY `uq_shop_name` (`ShopName`);

--
-- Indexes for table `ShopAdmin`
--
ALTER TABLE `ShopAdmin`
  ADD PRIMARY KEY (`AdminID`),
  ADD UNIQUE KEY `uq_shadmin_ph` (`PhoneNumber`),
  ADD UNIQUE KEY `uq_shadmin_email` (`EmailAddress`),
  ADD KEY `fk_shop` (`ShopID`);

--
-- Indexes for table `Shop_Product`
--
ALTER TABLE `Shop_Product`
  ADD PRIMARY KEY (`ShopID`,`ProductID`),
  ADD KEY `ProductID` (`ProductID`);


-- [AUTO_INCREMENTS]
-- ---------------------------------------------------------------
--
-- AUTO_INCREMENT for table `Admins`
--
ALTER TABLE `Admins`
  MODIFY `AdminID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Category`
--
ALTER TABLE `Category`
  MODIFY `CategoryID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Comment`
--
ALTER TABLE `Comment`
  MODIFY `CommentNum` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Customer`
--
ALTER TABLE `Customer`
  MODIFY `CustomerID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Discount`
--
ALTER TABLE `Discount`
  MODIFY `DiscountID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Installment`
--
ALTER TABLE `Installment`
  MODIFY `InstallmentID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Ordering`
--
ALTER TABLE `Ordering`
  MODIFY `OrderID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Payment`
--
ALTER TABLE `Payment`
  MODIFY `PaymentID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Product`
--
ALTER TABLE `Product`
  MODIFY `ProductID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Shipping`
--
ALTER TABLE `Shipping`
  MODIFY `ShippingID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Shop`
--
ALTER TABLE `Shop`
  MODIFY `ShopID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ShopAdmin`
--
ALTER TABLE `ShopAdmin`
  MODIFY `AdminID` int(11) NOT NULL AUTO_INCREMENT;

-- [Table Constraints]
-- -------------------------------------------------------------------------------

--
-- Constraints for table `Category`
--
ALTER TABLE `Category`
  ADD CONSTRAINT `fk_category_parent` FOREIGN KEY (`ParentCategory`) REFERENCES `Category` (`CategoryID`) ON DELETE CASCADE;

--
-- Constraints for table `Comment`
--
ALTER TABLE `Comment`
  ADD CONSTRAINT `fk_comment_customer` FOREIGN KEY (`CustomerID`) REFERENCES `Customer` (`CustomerID`),
  ADD CONSTRAINT `fk_comment_parent` FOREIGN KEY (`ParentCommentNum`) REFERENCES `Comment` (`CommentNum`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_comment_product` FOREIGN KEY (`ProductID`) REFERENCES `Product` (`ProductID`) ON DELETE CASCADE;

--
-- Constraints for table `Details`
--
ALTER TABLE `Details`
  ADD CONSTRAINT `Details_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `Product` (`ProductID`);

--
-- Constraints for table `DiscountProduct`
--
ALTER TABLE `DiscountProduct`
  ADD CONSTRAINT `DiscountProduct_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `Product` (`ProductID`),
  ADD CONSTRAINT `DiscountProduct_ibfk_2` FOREIGN KEY (`DiscountID`) REFERENCES `Discount` (`DiscountID`);

--
-- Constraints for table `ImageURL_Product`
--
ALTER TABLE `ImageURL_Product`
  ADD CONSTRAINT `ImageURL_Product_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `Product` (`ProductID`);

--
-- Constraints for table `InstallmentPayment`
--
ALTER TABLE `InstallmentPayment`
  ADD CONSTRAINT `fk_installment_payment_installment` FOREIGN KEY (`InstallmentID`) REFERENCES `Installment` (`InstallmentID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_installment_payment_payment` FOREIGN KEY (`PaymentID`) REFERENCES `Payment` (`PaymentID`) ON UPDATE CASCADE;

--
-- Constraints for table `OderShipping`
--
ALTER TABLE `OderShipping`
  ADD CONSTRAINT `OderShipping_ibfk_1` FOREIGN KEY (`OrderID`) REFERENCES `Ordering` (`OrderID`),
  ADD CONSTRAINT `OderShipping_ibfk_2` FOREIGN KEY (`ShippingID`) REFERENCES `Shipping` (`ShippingID`);

--
-- Constraints for table `Ordering`
--
ALTER TABLE `Ordering`
  ADD CONSTRAINT `fk_customer` FOREIGN KEY (`CustomerID`) REFERENCES `Customer` (`CustomerID`);

--
-- Constraints for table `OrderItem`
--
ALTER TABLE `OrderItem`
  ADD CONSTRAINT `OrderItem_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `Product` (`ProductID`),
  ADD CONSTRAINT `fk_order_id` FOREIGN KEY (`OrderID`) REFERENCES `Ordering` (`OrderID`);

--
-- Constraints for table `OrderPayment`
--
ALTER TABLE `OrderPayment`
  ADD CONSTRAINT `OrderPayment_ibfk_1` FOREIGN KEY (`OrderID`) REFERENCES `Ordering` (`OrderID`),
  ADD CONSTRAINT `OrderPayment_ibfk_2` FOREIGN KEY (`PaymentID`) REFERENCES `Payment` (`PaymentID`);

--
-- Constraints for table `ProductCategory`
--
ALTER TABLE `ProductCategory`
  ADD CONSTRAINT `ProductCategory_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `Product` (`ProductID`) ON DELETE CASCADE,
  ADD CONSTRAINT `ProductCategory_ibfk_2` FOREIGN KEY (`CategoryID`) REFERENCES `Category` (`CategoryID`) ON DELETE CASCADE;

--
-- Constraints for table `ShopAdmin`
--
ALTER TABLE `ShopAdmin`
  ADD CONSTRAINT `fk_shop` FOREIGN KEY (`ShopID`) REFERENCES `Shop` (`ShopID`);

--
-- Constraints for table `Shop_Product`
--
ALTER TABLE `Shop_Product`
  ADD CONSTRAINT `Shop_Product_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `Product` (`ProductID`),
  ADD CONSTRAINT `fk_shop_id` FOREIGN KEY (`ShopID`) REFERENCES `Shop` (`ShopID`);
COMMIT;
