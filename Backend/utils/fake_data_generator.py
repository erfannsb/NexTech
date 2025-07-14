import random
from faker import Faker
from datetime import datetime, timedelta

fake = Faker()

# Set seeds for reproducibility
Faker.seed(0)
random.seed(0)

def sql_escape(value):
    return str(value).replace("'", "''")

def generate_admins(n):
    statements = []
    for i in range(1, n + 1):
        stmt = f"""
        INSERT INTO Admins (AdminID, FirstName, LastName, EmailAddress, PasswordHash, PasswordSalt, CreatedAt, Permission, LastLogin, PhoneNumber)
        VALUES ({i}, '{sql_escape(fake.first_name())}', '{sql_escape(fake.last_name())}', '{sql_escape(fake.unique.email())}',
        '{fake.sha256()}', '{fake.sha256()[:64]}', '{fake.date_time_this_decade().strftime('%Y-%m-%d %H:%M:%S')}',
        '{random.choice(['Full Access', 'Content Management', 'User Management', 'Order Management', 'Reporting Only'])}',
        '{fake.date_time_this_year().strftime('%Y-%m-%d %H:%M:%S')}', '{fake.unique.phone_number()[:16]}');
        """
        statements.append(stmt.strip())
    return statements

def generate_categories(category_list):
    statements = []
    for i, name in enumerate(category_list, start=1):
        desc = sql_escape(fake.sentence())
        parent = 'NULL' if i == 1 else random.randint(1, i - 1)
        stmt = f"INSERT INTO Category (CategoryID, CategoryName, Description, ParentCategory) VALUES ({i}, '{sql_escape(name)}', '{desc}', {parent});"
        statements.append(stmt)
    return statements

def generate_customers(n):
    statements = []
    for i in range(1, n + 1):
        stmt = f"""
        INSERT INTO Customer (CustomerID, FirstName, LastName, PhoneNumber, EmailAddress, PasswordSalt, PasswordHash, PostalCode,
        CreatedAt, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES ({i}, '{sql_escape(fake.first_name())}', '{sql_escape(fake.last_name())}', '{fake.unique.phone_number()[:16]}',
        '{fake.email()}', '{fake.sha256()[:64]}', '{fake.sha256()}', '{fake.postcode()}',
        '{fake.date_time_this_year().strftime('%Y-%m-%d %H:%M:%S')}', '{sql_escape(fake.state())}', '{sql_escape(fake.city())}',
        '{sql_escape(fake.street_address())}', '{sql_escape(fake.text(max_nb_chars=100))}');
        """
        statements.append(stmt.strip())
    return statements

def generate_products(n, start_id=1):
    statements = []
    for i in range(start_id, start_id + n):
        name = f"{random.choice(['Intel', 'AMD', 'NVIDIA', 'Corsair', 'Seagate'])} {fake.word().capitalize()} {random.randint(1000, 9999)}"
        stmt = f"""
        INSERT INTO Product (ProductID, Name, Description, Price, CreatedAt, StockQuantity, Rating, InstallmentPolicy)
        VALUES ({i}, '{sql_escape(name)}', '{sql_escape(fake.text(max_nb_chars=200))}', {round(random.uniform(49.99, 999.99), 2)},
        '{fake.date_time_this_year().strftime('%Y-%m-%d %H:%M:%S')}', {random.randint(0, 100)}, {round(random.uniform(1, 5), 2)}, {random.randint(0, 1)});
        """
        statements.append(stmt.strip())
    return statements

def generate_product_category_relations(product_count, category_count):
    statements = []
    for i in range(1, product_count + 1):
        category_id = random.randint(1, category_count)
        stmt = f"INSERT INTO ProductCategory (ProductID, CategoryID) VALUES ({i}, {category_id});"
        statements.append(stmt)
    return statements

def generate_shops(n):
    statements = []
    for i in range(1, n + 1):
        stmt = f"""
        INSERT INTO Shop (ShopID, ShopName, Rating, PostalCode, AddressProvince, AddressCity, AddressStreet, AddressDetails)
        VALUES ({i}, '{sql_escape(fake.company())}', {round(random.uniform(1, 5), 2)}, '{fake.postcode()}',
        '{sql_escape(fake.state())}', '{sql_escape(fake.city())}', '{sql_escape(fake.street_address())}', '{sql_escape(fake.text(max_nb_chars=100))}');
        """
        statements.append(stmt.strip())
    return statements

def generate_shop_admins(n, shop_count):
    statements = []
    for i in range(1, n + 1):
        stmt = f"""
        INSERT INTO ShopAdmin (AdminID, PhoneNumber, FirstName, LastName, ShopAdminRole, EmailAddress, PasswordSalt, PasswordHash, CreatedAt, ShopID)
        VALUES ({i}, '{fake.unique.phone_number()[:16]}', '{sql_escape(fake.first_name())}', '{sql_escape(fake.last_name())}',
        '{random.choice(['Owner','Manager','Cashier','Inventory Specialist'])}', '{fake.unique.email()}',
        '{fake.sha256()[:64]}', '{fake.sha256()[:64]}', '{fake.date_time_this_year().strftime('%Y-%m-%d %H:%M:%S')}', {random.randint(1, shop_count)});
        """
        statements.append(stmt.strip())
    return statements

def generate_orders(n, customer_count):
    statements = []
    for i in range(1, n + 1):
        stmt = f"""
        INSERT INTO Ordering (OrderID, PaymentMethod, CreatedAt, OrderStatus, OrderDate, CustomerID)
        VALUES ({i}, '{random.choice(['Credit Card','Installment','Cash on Delivery'])}',
        '{fake.date_time_this_year().strftime('%Y-%m-%d %H:%M:%S')}',
        '{random.choice(['Pending','Processing','Shipped','Delivered','Cancelled'])}',
        '{fake.date_this_year()}', {random.randint(1, customer_count)});
        """
        statements.append(stmt.strip())
    return statements

def generate_order_items(order_count, product_count):
    statements = []
    for i in range(1, order_count + 1):
        used_products = set()
        for _ in range(random.randint(1, 3)):
            pid = random.randint(1, product_count)
            while pid in used_products:
                pid = random.randint(1, product_count)
            used_products.add(pid)
            stmt = f"INSERT INTO OrderItem (Quantity, OrderID, ProductID) VALUES ({random.randint(1, 5)}, {i}, {pid});"
            statements.append(stmt)
    return statements

def generate_payments(n):
    statements = []
    for i in range(1, n + 1):
        stmt = f"""
        INSERT INTO Payment (PaymentID, TransactionID, PaymentStatus, PaymentGateway, PaymentDate)
        VALUES ({i}, '{fake.uuid4()}', '{random.choice(['Pending','Completed','Failed','Refunded'])}',
        '{random.choice(['ZarinPal','Shaparak'])}', '{fake.date_time_this_year().strftime('%Y-%m-%d %H:%M:%S')}');
        """
        statements.append(stmt.strip())
    return statements

def generate_installments(n):
    statements = []
    for i in range(1, n + 1):
        start_date = fake.date_this_year()
        stmt = f"""
        INSERT INTO Installment (InstallmentID, InterestRate, TotalPrice, InstallmentStatus, InstallmentMonths, StartDate, MonthsPaid)
        VALUES ({i}, {round(random.uniform(0.5, 5.0), 2)}, {round(random.uniform(100.0, 2000.0), 2)},
        '{random.choice(['Pending','Active','Completed','Defaulted'])}', {random.randint(3, 12)}, '{start_date}', {random.randint(0, 12)});
        """
        statements.append(stmt.strip())
    return statements

def generate_shipping(n):
    statements = []
    for i in range(1, n + 1):
        shipping_date = fake.date_time_this_year()
        delivery_date = shipping_date + timedelta(days=random.randint(1, 7))
        stmt = f"""
        INSERT INTO Shipping (ShippingID, ShippingMethod, TrackingNumber, ShippingDate, DeliveryDate, ShippingStatus)
        VALUES ({i}, '{random.choice(['Express','Economy'])}', '{fake.uuid4()[:10]}', '{shipping_date.strftime('%Y-%m-%d %H:%M:%S')}',
        '{delivery_date.strftime('%Y-%m-%d %H:%M:%S')}', '{random.choice(['Pending','Shipped','In Transit','Delivered','Failed'])}');
        """
        statements.append(stmt.strip())
    return statements

def generate_comments(num_comments):                                    
    statements = []
    for i in range(1, num_comments):
        stmt = f"""
        INSERT INTO comment (ProductID , CommentNum, CommentText, CustomerID , ParentCommentNum,Rating)
        VALUES ({i}, {i}, '{fake.sentence()}', {i},Null, {random.randint(1,5)});
        """
        statements.append(stmt.strip())
    return statements


if __name__ == '__main__':
    with open('fake_online_shop_data.sql', 'w', encoding='utf-8') as f:
        f.write('\n'.join(generate_admins(10)) + '\n')
        f.write('\n'.join(generate_categories(['CPUs', 'GPUs', 'Motherboards', 'RAM', 'Storage', 'Power Supplies', 'Cases', 'Cooling'])) + '\n')
        f.write('\n'.join(generate_customers(50)) + '\n')
        f.write('\n'.join(generate_products(100)) + '\n')
        f.write('\n'.join(generate_product_category_relations(100, 8)) + '\n')
        f.write('\n'.join(generate_shops(10)) + '\n')
        f.write('\n'.join(generate_shop_admins(10, 10)) + '\n')
        f.write('\n'.join(generate_orders(50, 50)) + '\n')
        f.write('\n'.join(generate_order_items(50, 100)) + '\n')
        f.write('\n'.join(generate_payments(50)) + '\n')
        f.write('\n'.join(generate_installments(30)) + '\n')
        f.write('\n'.join(generate_shipping(20)) + '\n')
        f.write('\n'.join(generate_comments(50)) + '\n')