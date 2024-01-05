from app import create_app, db
from models import Product, Location, ProductMovement

# Create the Flask app with the 'development' configuration
app = create_app('development')

# Context manager to ensure proper database cleanup
with app.app_context():
    # Create the database tables
    db.create_all()

    # Example: Add products
    product1 = Product(name='Headset', description='Sometimes called earphones, headphones are a hardware output device that connect to a computer line out or speakers port or wirelessly with Bluetooth. Headphones allow you to listen to audio or watch a movie without disturbing people around you. The picture shows a HyperX USB (universal serial bus) headset from HyperX that includes a microphone (an input device), a popular solution for computer gaming')
    product2 = Product(name='Phone', description='Description B')
    product3 = Product(name='Laptop', description='Description C')

    db.session.add_all([product1, product2, product3])
    db.session.commit()

    # Example: Add locations
    location1 = Location(name='Ooty', description='Description X')
    location2 = Location(name='cbe', description='Description Y')
    location3 = Location(name='Chennai', description='Description Z')

    db.session.add_all([location1, location2, location3])
    db.session.commit()

    # Example: Perform product movements
    movement1 = ProductMovement(product_id=product1.id, from_location_id=location1.id, to_location_id=location2.id, quantity=5)
    movement2 = ProductMovement(product_id=product2.id, from_location_id=location1.id, to_location_id=location2.id, quantity=10)
    movement3 = ProductMovement(product_id=product1.id, from_location_id=location2.id, to_location_id=location3.id, quantity=3)

    db.session.add_all([movement1, movement2, movement3])
    db.session.commit()

print('Database initialized successfully!')
