from tokenize import blank_re
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
class Customer(AbstractBaseUser, PermissionsMixin):
    customerid = models.AutoField(db_column='CustomerID', primary_key=True)  # Field name made lowercase.
    firstname = models.CharField(db_column='FirstName', max_length=100)  # Field name made lowercase.
    lastname = models.CharField(db_column='LastName', max_length=100)  # Field name made lowercase.
    phonenumber = models.CharField(db_column='PhoneNumber', unique=True, max_length=16, blank=True, null=True)  # Field name made lowercase.
    emailaddress = models.CharField(db_column='EmailAddress', unique=True, max_length=255)  # Field name made lowercase.
    password = models.CharField(db_column='Password', max_length=255)  # Field name made lowercase.
    postalcode = models.CharField(db_column='PostalCode', max_length=10, blank=True, null=True)  # Field name made lowercase.
    createdat = models.DateTimeField(db_column='CreatedAt', blank=True)  # Field name made lowercase.
    addressprovince = models.CharField(db_column='AddressProvince', max_length=265, blank=True, null=True)  # Field name made lowercase.
    addresscity = models.CharField(db_column='AddressCity', max_length=256, blank=True, null=True)  # Field name made lowercase.
    addressstreet = models.CharField(db_column='AddressStreet', max_length=256, blank=True, null=True)  # Field name made lowercase.
    addressdetails = models.TextField(db_column='AddressDetails', blank=True, null=True)  # Field name made lowercase.
    isshopadmin = models.BooleanField(db_column="isShopAdmin")

    USERNAME_FIELD = "emailaddress"
    REQUIRED_FIELDS = ["firstname"]


    # required by AbstractBaseUser
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    @property
    def is_authenticated(self):
        return True

    class Meta:
        managed = False
        db_table = 'customer'

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


