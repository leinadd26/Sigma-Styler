from flask import Flask, render_template, request, jsonify
from ai_model import predict_clothing

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    file.save('uploaded_image.jpg')

    prediction = predict_clothing('uploaded_image.jpg')
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True)
