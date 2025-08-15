from django.db import models
from users.models import Customer
from products.models import Product
from payments.models import Payment
from shops.models import ShopProduct

class Ordering(models.Model):
    class PaymentMethodChoices(models.TextChoices):
        CREDIT_CARD = "Credit Card", "Credit Card"
        INSTALLMENT = "Installment", "Installment"
        CASH_ON_DELIVERY = "Cash on Delivery", "Cash on Delivery"

    class OrderStatusChoices(models.TextChoices):
        PENDING = "Pending", "Pending"
        PROCESSING = "Processing", "Processing"
        SHIPPED = "Shipped", "Shipped"
        DELIVERED = "Delivered", "Delivered"
        CANCELLED = "Cancelled", "Cancelled"

    orderid = models.AutoField(db_column="OrderID", primary_key=True)
    paymentmethod = models.CharField(
        db_column="PaymentMethod",
        max_length=20,  # long enough for 'Cash on Delivery'
        choices=PaymentMethodChoices.choices,
        blank=True,
        null=True,
    )
    createdat = models.DateTimeField(
        db_column="CreatedAt",
        auto_now_add=True,
        blank=True,
        null=True,
    )
    orderstatus = models.CharField(
        db_column="OrderStatus",
        max_length=10,  # long enough for 'Processing'
        choices=OrderStatusChoices.choices,
        default=OrderStatusChoices.PENDING,
    )
    orderdate = models.DateTimeField(
        db_column="OrderDate",
        auto_now_add=True,
        blank=True,
        null=True,
    )
    customerid = models.ForeignKey(
        Customer,
        db_column="CustomerID",
        on_delete=models.DO_NOTHING,
    )
    is_confirmed = models.BooleanField(
        db_column="is_confirmed",
        default=False,
    )

    class Meta:
        managed = False  # your table already exists
        db_table = "ordering"

    def __str__(self):
        return f"Order {self.orderid} - {self.orderstatus}"


class Orderitem(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)  # Field name made lowercase.
    quantity = models.PositiveIntegerField(db_column='Quantity')  # Field name made lowercase.
    orderid = models.ForeignKey(Ordering, models.DO_NOTHING, db_column='OrderID')  # Field name made lowercase.
    shopproductid = models.ForeignKey(ShopProduct, models.DO_NOTHING, db_column='ShopProductID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'orderitem'


class Orderpayment(models.Model):
    pk = models.CompositePrimaryKey("orderid", "paymentid")
    orderid = models.ForeignKey(Ordering, models.DO_NOTHING, db_column='OrderID')  # Field name made lowercase.
    paymentid = models.ForeignKey(Payment, models.DO_NOTHING, db_column='PaymentID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'orderpayment'


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



class OrderShipping(models.Model):
    orderid = models.OneToOneField(Ordering, models.DO_NOTHING, db_column='OrderID', primary_key=True)  # Field name made lowercase.
    shippingid = models.ForeignKey(Shipping, models.DO_NOTHING, db_column='ShippingID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'odershipping'

