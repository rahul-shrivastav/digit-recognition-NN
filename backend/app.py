from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        model = joblib.load('model.pkl')
        data = request.get_json()
        if not data:
            return jsonify(error="Invalid JSON"), 400

        prediction = model.predict(np.array([data['dataArray']]))
        value = np.argmax(prediction)
        return jsonify({'prediction': int(value)})
    except Exception as e:
        return jsonify({'error': e}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
