from flask import Flask, jsonify, request
from flask_cors import CORS
app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {"key": "value"}
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
