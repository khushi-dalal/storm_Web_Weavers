from flask import Flask, render_template, jsonify, request
import pickle
app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))

@app.route('/')
def main():
    return render_template('index.html')

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json  # Assuming you send JSON data from React

        # Preprocess data if necessary (e.g., tokenization, feature engineering)
        input_data = data["input"]

        # Perform inference using your model
        # You might need to adjust this based on your model type
        result = model.predict(input_data)

        # Return the result as JSON
        return jsonify({"result": result})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)