SET FOREIGN_KEY_CHECKS = 0;

DELETE FROM OrderItem;
DELETE FROM OrderPayment;
DELETE FROM Ordering;
DELETE FROM OderShipping;
DELETE FROM InstallmentPayment;
DELETE FROM Installment;
DELETE FROM ImageURL_Product;
DELETE FROM DiscountProduct;
DELETE FROM Discount;
DELETE FROM Details;
DELETE FROM Comment;
DELETE FROM Customer;
DELETE FROM Shop_Product;
DELETE FROM ShopAdmin;
DELETE FROM Shop;
DELETE FROM Shipping;
DELETE FROM ProductCategory;
DELETE FROM Product;
DELETE FROM Payment;
DELETE FROM Category;
DELETE FROM Admins;

SET FOREIGN_KEY_CHECKS = 1;
