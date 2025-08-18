from django.db import models
from products.models import Product
from users.models import Customer

class Shop(models.Model):
    shopname = models.CharField(db_column='ShopName', unique=True, max_length=512)  # Field name made lowercase.
    shopid = models.AutoField(db_column='ShopID', primary_key=True)  # Field name made lowercase.
    rating = models.DecimalField(db_column='Rating', max_digits=3, decimal_places=2,null=False, default=0.00)  # Field name made lowercase.
    postalcode = models.CharField(db_column='PostalCode', max_length=10)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'shop'


class ShopProduct(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)  # Field name made lowercase.
    shopid = models.ForeignKey(Shop, models.DO_NOTHING, db_column='ShopID')  # Field name made lowercase.
    productid = models.ForeignKey(Product, models.DO_NOTHING, db_column='ProductID')  # Field name made lowercase.
    stockquantity = models.PositiveIntegerField(db_column='StockQuantity')  # Field name made lowercase.
    installmentpolicy = models.IntegerField(db_column='InstallmentPolicy')  # Field name made lowercase.
    sells = models.IntegerField(db_column="Sells")
    price = models.DecimalField(db_column='Price', max_digits=20, decimal_places=2)  # Field name made lowercase.
    
    class Meta:
        managed = False
        db_table = 'shop_product'
        unique_together = ('shopid', 'productid')

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
    pk = models.CompositePrimaryKey("productid", "discountid")
    productid = models.ForeignKey(Product, models.DO_NOTHING, db_column='ProductID')  # Field name made lowercase.
    discountid = models.ForeignKey(Discount, models.DO_NOTHING, db_column='DiscountID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'discountproduct'


class ShopAdmin(models.Model):
    id = models.AutoField(db_column="id", primary_key=True)
    adminid = models.ForeignKey(Customer,models.DO_NOTHING, db_column='AdminID') 
    shopid = models.ForeignKey(Shop, models.CASCADE, db_column='ShopID')

    class Meta:
        managed = False
        db_table = 'shopadmin'