from django.db import models
from users.models import Customer
from products.models import Product
from payments.models import Payment

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
    quantity = models.PositiveIntegerField(db_column='Quantity')  # Field name made lowercase.
    orderid = models.ForeignKey(Ordering, models.DO_NOTHING, db_column='OrderID')  # Field name made lowercase.
    productid = models.ForeignKey(Product, models.DO_NOTHING, db_column='ProductID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'orderitem'
        unique_together = ('orderid', 'productid')


class Orderpayment(models.Model):
    orderid = models.ForeignKey(Ordering, models.DO_NOTHING, db_column='OrderID')  # Field name made lowercase.
    paymentid = models.ForeignKey(Payment, models.DO_NOTHING, db_column='PaymentID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'orderpayment'
        unique_together = ('orderid', 'paymentid')


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



class Odershipping(models.Model):
    orderid = models.OneToOneField(Ordering, models.DO_NOTHING, db_column='OrderID', primary_key=True)  # Field name made lowercase.
    shippingid = models.ForeignKey(Shipping, models.DO_NOTHING, db_column='ShippingID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'odershipping'

