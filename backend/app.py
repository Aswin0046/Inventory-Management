from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from models import db, Product, Location, ProductMovement

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:Aswin@20@localhost:3306/inventory_management'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    @app.route('/api/products', methods=['GET'])
    def get_products():
        products = Product.query.all()
        return jsonify([{'id': product.id, 'name': product.name} for product in products])

    @app.route('/api/locations', methods=['GET'])
    def get_locations():
        locations = Location.query.all()
        return jsonify([{'id': location.id, 'name': location.name} for location in locations])

    @app.route('/api/movements', methods=['GET'])
    def get_movements():
        movements = ProductMovement.query.all()
        return jsonify([{
            'id': movement.id,
            'product_id': movement.product_id,
            'from_location_id': movement.from_location_id,
            'to_location_id': movement.to_location_id,
            'quantity': movement.quantity
        } for movement in movements])

    @app.route('/api/products', methods=['POST'])
    def add_product():
        data = request.get_json()

        if 'name' not in data:
            return jsonify({'error': 'Name is required'}), 400

        new_product = Product(name=data['name'])

        db.session.add(new_product)
        db.session.commit()

        return jsonify({'message': 'Product added successfully', 'product': {'id': new_product.id, 'name': new_product.name}})

    @app.route('/api/locations', methods=['POST'])
    def add_location():
        data = request.get_json()

        if 'name' not in data:
            return jsonify({'error': 'Name is required'}), 400

        new_location = Location(name=data['name'])

        db.session.add(new_location)
        db.session.commit()

        return jsonify({'message': 'Location added successfully', 'location': {'id': new_location.id, 'name': new_location.name}})

    @app.route('/api/movements', methods=['POST'])
    def add_movement():
        data = request.get_json()

        if 'product_id' not in data or 'from_location_id' not in data or 'to_location_id' not in data or 'quantity' not in data:
            return jsonify({'error': 'Product ID, From Location ID, To Location ID, and Quantity are required'}), 400

        new_movement = ProductMovement(
            product_id=data['product_id'],
            from_location_id=data['from_location_id'],
            to_location_id=data['to_location_id'],
            quantity=data['quantity']
        )

        db.session.add(new_movement)
        db.session.commit()

        return jsonify({'message': 'Movement added successfully', 'movement': {
            'id': new_movement.id,
            'product_id': new_movement.product_id,
            'from_location_id': new_movement.from_location_id,
            'to_location_id': new_movement.to_location_id,
            'quantity': new_movement.quantity
        }})

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
