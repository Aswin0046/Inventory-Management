from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    price = db.Column(db.Float)
    quantity_in_stock = db.Column(db.Integer, default=0)
    manufacturer = db.Column(db.String(255))
    production_date = db.Column(db.Date)
    expiration_date = db.Column(db.Date)

class Location(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(255))
    capacity = db.Column(db.Integer)
    manager_name = db.Column(db.String(255))
    contact_number = db.Column(db.String(15))

class ProductMovement(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime, nullable=False, default=db.func.now())
    from_location = db.Column(db.Integer, db.ForeignKey('location.id'))
    to_location = db.Column(db.Integer, db.ForeignKey('location.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'))
    qty = db.Column(db.Integer, nullable=False)
    notes = db.Column(db.Text)
    delivery_status = db.Column(db.String(20))

    from_location_rel = db.relationship('Location', foreign_keys=[from_location])
    to_location_rel = db.relationship('Location', foreign_keys=[to_location])
    product = db.relationship('Product')

