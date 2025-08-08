from django.db import models
from users.models import Customer

class Category(models.Model):
    categoryid = models.AutoField(db_column='CategoryID', primary_key=True)  # Field name made lowercase.
    categoryname = models.CharField(db_column='CategoryName', max_length=100)  # Field name made lowercase.
    description = models.TextField(db_column='Description')  # Field name made lowercase.
    parentcategory = models.ForeignKey('self', models.DO_NOTHING, db_column='ParentCategory', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'category'


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


class ProductCategory(models.Model):
    pk = models.CompositePrimaryKey("productid", "categoryid")
    productid = models.ForeignKey(Product, models.DO_NOTHING, db_column='ProductID')  # Field name made lowercase.
    categoryid = models.ForeignKey(Category, models.DO_NOTHING, db_column='CategoryID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'productcategory'
        unique_together = ('productid', 'categoryid')

class Details(models.Model):
    pk = models.CompositePrimaryKey("attributenum", "productid")
    attributenum = models.IntegerField(db_column='AttributeNum')  # Field name made lowercase.
    attributename = models.CharField(db_column='AttributeName', max_length=512)  # Field name made lowercase.
    attributevalue = models.CharField(db_column='AttributeValue', max_length=512)  # Field name made lowercase.
    productid = models.ForeignKey(Product, models.DO_NOTHING, db_column='ProductID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'details'
        unique_together = ('attributenum', 'productid')

class ImageurlProduct(models.Model):
    pk = models.CompositePrimaryKey("image_url", "productid")
    image_url = models.CharField(db_column='Image_URL', max_length=512)  # Field name made lowercase.
    productid = models.ForeignKey(Product, models.DO_NOTHING, db_column='ProductID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'imageurl_product'
        unique_together = ('image_url', 'productid')


class Comment(models.Model):
    commentnum = models.BigAutoField(
        db_column='CommentNum',
        primary_key=True
    )
    productid = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        db_column='ProductID'
    )
    commentdate = models.DateTimeField(
        db_column='CommentDate',
        auto_now_add=True
    )
    commenttext = models.TextField(
        db_column='CommentText'
    )
    customerid = models.ForeignKey(
        Customer,
        on_delete=models.CASCADE,
        db_column='CustomerID'
    )
    parentcommentnum = models.ForeignKey(
        'self',
        on_delete=models.CASCADE,
        db_column='ParentCommentNum',
        null=True,
        blank=True
    )
    updated_at = models.DateTimeField(
        auto_now=True
    )
    rating = models.PositiveSmallIntegerField(
        db_column='Rating',
        null=True,
        blank=True
    )

    class Meta:
        db_table = 'comment'
        constraints = [
            models.CheckConstraint(
                check=models.Q(rating__gte=1) & models.Q(rating__lte=5),
                name='comment_chk_1'
            )
        ]
