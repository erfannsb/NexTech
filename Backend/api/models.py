# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Admins(models.Model):
    adminid = models.AutoField(db_column='AdminID', primary_key=True)  # Field name made lowercase.
    firstname = models.CharField(db_column='FirstName', max_length=100)  # Field name made lowercase.
    lastname = models.CharField(db_column='LastName', max_length=100)  # Field name made lowercase.
    emailaddress = models.CharField(db_column='EmailAddress', unique=True, max_length=255)  # Field name made lowercase.
    passwordhash = models.CharField(db_column='PasswordHash', max_length=255)  # Field name made lowercase.
    passwordsalt = models.CharField(db_column='PasswordSalt', max_length=64)  # Field name made lowercase.
    createdat = models.DateTimeField(db_column='CreatedAt')  # Field name made lowercase.
    permission = models.CharField(db_column='Permission', max_length=18)  # Field name made lowercase.
    lastlogin = models.DateTimeField(db_column='LastLogin', blank=True, null=True)  # Field name made lowercase.
    phonenumber = models.CharField(db_column='PhoneNumber', unique=True, max_length=16)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'admins'


class Category(models.Model):
    categoryid = models.AutoField(db_column='CategoryID', primary_key=True)  # Field name made lowercase.
    categoryname = models.CharField(db_column='CategoryName', max_length=100)  # Field name made lowercase.
    description = models.TextField(db_column='Description')  # Field name made lowercase.
    parentcategory = models.ForeignKey('self', models.DO_NOTHING, db_column='ParentCategory', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'category'


class Comment(models.Model):
    pk = models.CompositePrimaryKey('CommentNum', 'ProductID')
    productid = models.ForeignKey('Product', models.DO_NOTHING, db_column='ProductID')  # Field name made lowercase.
    commentnum = models.BigAutoField(db_column='CommentNum')  # Field name made lowercase.
    commentdate = models.DateTimeField(db_column='CommentDate')  # Field name made lowercase.
    commenttext = models.TextField(db_column='CommentText')  # Field name made lowercase.
    customerid = models.ForeignKey('Customer', models.DO_NOTHING, db_column='CustomerID')  # Field name made lowercase.
    parentcommentnum = models.ForeignKey('self', models.DO_NOTHING, db_column='ParentCommentNum', blank=True, null=True)  # Field name made lowercase.
    updated_at = models.DateTimeField()
    rating = models.PositiveIntegerField(db_column='Rating', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'comment'


class Customer(models.Model):
    customerid = models.AutoField(db_column='CustomerID', primary_key=True)  # Field name made lowercase.
    firstname = models.CharField(db_column='FirstName', max_length=100)  # Field name made lowercase.
    lastname = models.CharField(db_column='LastName', max_length=100)  # Field name made lowercase.
    phonenumber = models.CharField(db_column='PhoneNumber', unique=True, max_length=16)  # Field name made lowercase.
    emailaddress = models.CharField(db_column='EmailAddress', unique=True, max_length=255, blank=True, null=True)  # Field name made lowercase.
    passwordsalt = models.CharField(db_column='PasswordSalt', max_length=64)  # Field name made lowercase.
    passwordhash = models.CharField(db_column='PasswordHash', max_length=255)  # Field name made lowercase.
    postalcode = models.CharField(db_column='PostalCode', max_length=10, blank=True, null=True)  # Field name made lowercase.
    createdat = models.DateTimeField(db_column='CreatedAt')  # Field name made lowercase.
    addressprovince = models.CharField(db_column='AddressProvince', max_length=265, blank=True, null=True)  # Field name made lowercase.
    addresscity = models.CharField(db_column='AddressCity', max_length=256, blank=True, null=True)  # Field name made lowercase.
    addressstreet = models.CharField(db_column='AddressStreet', max_length=256, blank=True, null=True)  # Field name made lowercase.
    addressdetails = models.TextField(db_column='AddressDetails', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'customer'


class Details(models.Model):
    pk = models.CompositePrimaryKey('AttributeNum', 'ProductID')
    attributenum = models.IntegerField(db_column='AttributeNum')  # Field name made lowercase.
    attributename = models.CharField(db_column='AttributeName', max_length=512)  # Field name made lowercase.
    attributevalue = models.CharField(db_column='AttributeValue', max_length=512)  # Field name made lowercase.
    productid = models.ForeignKey('Product', models.DO_NOTHING, db_column='ProductID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'details'


class Discount(models.Model):
    discountid = models.AutoField(db_column='DiscountID', primary_key=True)  # Field name made lowercase.
    discountcode = models.CharField(db_column='DiscountCode', max_length=10)  # Field name made lowercase.
    discountvalue = models.DecimalField(db_column='discountValue', max_digits=5, decimal_places=2)  # Field name made lowercase.
    discountstarttime = models.DateTimeField(db_column='DiscountStartTime')  # Field name made lowercase.
    discountendtime = models.DateTimeField(db_column='DiscountEndTime')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'discount'


class Discountproduct(models.Model):
    pk = models.CompositePrimaryKey('ProductID', 'DiscountID')
    productid = models.ForeignKey('Product', models.DO_NOTHING, db_column='ProductID')  # Field name made lowercase.
    discountid = models.ForeignKey(Discount, models.DO_NOTHING, db_column='DiscountID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'discountproduct'


class ImageurlProduct(models.Model):
    pk = models.CompositePrimaryKey('Image_URL', 'ProductID')
    image_url = models.CharField(db_column='Image_URL', max_length=512)  # Field name made lowercase.
    productid = models.ForeignKey('Product', models.DO_NOTHING, db_column='ProductID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'imageurl_product'


class Installment(models.Model):
    installmentid = models.AutoField(db_column='InstallmentID', primary_key=True)  # Field name made lowercase.
    interestrate = models.DecimalField(db_column='InterestRate', max_digits=5, decimal_places=2)  # Field name made lowercase.
    totalprice = models.DecimalField(db_column='TotalPrice', max_digits=10, decimal_places=2)  # Field name made lowercase.
    installmentstatus = models.CharField(db_column='InstallmentStatus', max_length=9)  # Field name made lowercase.
    installmentmonths = models.PositiveIntegerField(db_column='InstallmentMonths')  # Field name made lowercase.
    startdate = models.DateField(db_column='StartDate')  # Field name made lowercase.
    monthspaid = models.PositiveIntegerField(db_column='MonthsPaid')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'installment'


class Installmentpayment(models.Model):
    pk = models.CompositePrimaryKey('InstallmentID', 'InstallmentNumber')
    installmentid = models.ForeignKey(Installment, models.DO_NOTHING, db_column='InstallmentID')  # Field name made lowercase.
    installmentnumber = models.IntegerField(db_column='InstallmentNumber')  # Field name made lowercase.
    paymentid = models.ForeignKey('Payment', models.DO_NOTHING, db_column='PaymentID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'installmentpayment'


class Odershipping(models.Model):
    orderid = models.OneToOneField('Ordering', models.DO_NOTHING, db_column='OrderID', primary_key=True)  # Field name made lowercase.
    shippingid = models.ForeignKey('Shipping', models.DO_NOTHING, db_column='ShippingID', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'odershipping'


class Ordering(models.Model):
    orderid = models.AutoField(db_column='OrderID', primary_key=True)  # Field name made lowercase.
    paymentmethod = models.CharField(db_column='PaymentMethod', max_length=16)  # Field name made lowercase.
    createdat = models.DateTimeField(db_column='CreatedAt')  # Field name made lowercase.
    orderstatus = models.CharField(db_column='OrderStatus', max_length=10)  # Field name made lowercase.
    orderdate = models.DateField(db_column='OrderDate')  # Field name made lowercase.
    customerid = models.ForeignKey(Customer, models.DO_NOTHING, db_column='CustomerID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'ordering'


class Orderitem(models.Model):
    pk = models.CompositePrimaryKey('OrderID', 'ProductID')
    quantity = models.PositiveIntegerField(db_column='Quantity')  # Field name made lowercase.
    orderid = models.ForeignKey(Ordering, models.DO_NOTHING, db_column='OrderID')  # Field name made lowercase.
    productid = models.ForeignKey('Product', models.DO_NOTHING, db_column='ProductID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'orderitem'


class Orderpayment(models.Model):
    pk = models.CompositePrimaryKey('OrderID', 'PaymentID')
    orderid = models.ForeignKey(Ordering, models.DO_NOTHING, db_column='OrderID')  # Field name made lowercase.
    paymentid = models.ForeignKey('Payment', models.DO_NOTHING, db_column='PaymentID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'orderpayment'


class Payment(models.Model):
    paymentid = models.AutoField(db_column='PaymentID', primary_key=True)  # Field name made lowercase.
    transactionid = models.CharField(db_column='TransactionID', unique=True, max_length=50)  # Field name made lowercase.
    paymentstatus = models.CharField(db_column='PaymentStatus', max_length=9)  # Field name made lowercase.
    paymentgateway = models.CharField(db_column='PaymentGateway', max_length=8)  # Field name made lowercase.
    paymentdate = models.DateTimeField(db_column='PaymentDate')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'payment'


class Product(models.Model):
    productid = models.AutoField(db_column='ProductID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=512)  # Field name made lowercase.
    description = models.TextField(db_column='Description', blank=True, null=True)  # Field name made lowercase.
    price = models.DecimalField(db_column='Price', max_digits=20, decimal_places=2)  # Field name made lowercase.
    createdat = models.DateTimeField(db_column='CreatedAt')  # Field name made lowercase.
    stockquantity = models.PositiveIntegerField(db_column='StockQuantity')  # Field name made lowercase.
    rating = models.DecimalField(db_column='Rating', max_digits=3, decimal_places=2, blank=True, null=True)  # Field name made lowercase.
    installmentpolicy = models.IntegerField(db_column='InstallmentPolicy')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'product'


class Productcategory(models.Model):
    pk = models.CompositePrimaryKey('ProductID', 'CategoryID')
    productid = models.ForeignKey(Product, models.DO_NOTHING, db_column='ProductID')  # Field name made lowercase.
    categoryid = models.ForeignKey(Category, models.DO_NOTHING, db_column='CategoryID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'productcategory'


class Shipping(models.Model):
    shippingid = models.AutoField(db_column='ShippingID', primary_key=True)  # Field name made lowercase.
    shippingmethod = models.CharField(db_column='ShippingMethod', max_length=7)  # Field name made lowercase.
    trackingnumber = models.CharField(db_column='TrackingNumber', unique=True, max_length=100)  # Field name made lowercase.
    shippingdate = models.DateTimeField(db_column='ShippingDate')  # Field name made lowercase.
    deliverydate = models.DateTimeField(db_column='DeliveryDate')  # Field name made lowercase.
    shippingstatus = models.CharField(db_column='ShippingStatus', max_length=10)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'shipping'


class Shop(models.Model):
    shopname = models.CharField(db_column='ShopName', unique=True, max_length=512)  # Field name made lowercase.
    shopid = models.AutoField(db_column='ShopID', primary_key=True)  # Field name made lowercase.
    rating = models.DecimalField(db_column='Rating', max_digits=3, decimal_places=2)  # Field name made lowercase.
    postalcode = models.CharField(db_column='PostalCode', max_length=10)  # Field name made lowercase.
    addressprovince = models.CharField(db_column='AddressProvince', max_length=256, blank=True, null=True)  # Field name made lowercase.
    addresscity = models.CharField(db_column='AddressCity', max_length=256, blank=True, null=True)  # Field name made lowercase.
    addressstreet = models.CharField(db_column='AddressStreet', max_length=256, blank=True, null=True)  # Field name made lowercase.
    addressdetails = models.TextField(db_column='AddressDetails', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'shop'


class ShopProduct(models.Model):
    pk = models.CompositePrimaryKey('ShopID', 'ProductID')
    shopid = models.ForeignKey(Shop, models.DO_NOTHING, db_column='ShopID')  # Field name made lowercase.
    productid = models.ForeignKey(Product, models.DO_NOTHING, db_column='ProductID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'shop_product'


class Shopadmin(models.Model):
    adminid = models.AutoField(db_column='AdminID', primary_key=True)  # Field name made lowercase.
    phonenumber = models.CharField(db_column='PhoneNumber', unique=True, max_length=20)  # Field name made lowercase.
    firstname = models.CharField(db_column='FirstName', max_length=50)  # Field name made lowercase.
    lastname = models.CharField(db_column='LastName', max_length=50)  # Field name made lowercase.
    shopadminrole = models.CharField(db_column='ShopAdminRole', max_length=20)  # Field name made lowercase.
    emailaddress = models.CharField(db_column='EmailAddress', unique=True, max_length=255)  # Field name made lowercase.
    passwordsalt = models.CharField(db_column='PasswordSalt', max_length=64)  # Field name made lowercase.
    passwordhash = models.CharField(db_column='PasswordHash', max_length=64)  # Field name made lowercase.
    createdat = models.DateTimeField(db_column='CreatedAt')  # Field name made lowercase.
    shopid = models.ForeignKey(Shop, models.DO_NOTHING, db_column='ShopID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'shopadmin'
