from django.db import models

# Create your models here.


class Payment(models.Model):
    paymentid = models.AutoField(db_column='PaymentID', primary_key=True)  # Field name made lowercase.
    transactionid = models.CharField(db_column='TransactionID', unique=True, max_length=50)  # Field name made lowercase.
    paymentstatus = models.CharField(db_column='PaymentStatus', max_length=9)  # Field name made lowercase.
    paymentgateway = models.CharField(db_column='PaymentGateway', max_length=8)  # Field name made lowercase.
    paymentdate = models.DateTimeField(db_column='PaymentDate')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'payment'



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
    installmentid = models.ForeignKey(Installment, models.DO_NOTHING, db_column='InstallmentID')  # Field name made lowercase.
    installmentnumber = models.IntegerField(db_column='InstallmentNumber')  # Field name made lowercase.
    paymentid = models.ForeignKey(Payment, models.DO_NOTHING, db_column='PaymentID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'installmentpayment'
        unique_together = ('installmentid', 'installmentnumber')






