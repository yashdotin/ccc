from flask import Flask, render_template, request
import joblib
import pandas as pd

app = Flask(__name__)

# -------- LOAD ARTIFACTS --------
model = joblib.load("model.pkl")
scaler = joblib.load("scaler.pkl")
expected_features = joblib.load("columns.pkl")

@app.route("/", methods=["GET", "POST"])
def home():
    prediction = None
    probability = None

    if request.method == "POST":

        # -------- GET FORM DATA --------
        Age = int(request.form["Age"])
        RestingBP = int(request.form["RestingBP"])
        Cholesterol = int(request.form["Cholesterol"])
        FastingBS = int(request.form["FastingBS"])
        MaxHR = int(request.form["MaxHR"])
        Oldpeak = float(request.form["Oldpeak"])

        Sex = request.form["Sex"]
        ChestPainType = request.form["ChestPainType"]
        RestingECG = request.form["RestingECG"]
        ExerciseAngina = request.form["ExerciseAngina"]
        ST_Slope = request.form["ST_Slope"]

        # -------- BUILD INPUT VECTOR --------
        input_df = pd.DataFrame(
            0.0, index=[0], columns=expected_features, dtype=float
        )

        # Numeric features
        input_df.loc[0, [
            "Age", "RestingBP", "Cholesterol",
            "FastingBS", "MaxHR", "Oldpeak"
        ]] = [
            Age, RestingBP, Cholesterol,
            FastingBS, MaxHR, Oldpeak
        ]

        # -------- ONE-HOT ENCODING --------
        categorical_features = {
            f"Sex_{Sex}": 1,
            f"ChestPainType_{ChestPainType}": 1,
            f"RestingECG_{RestingECG}": 1,
            f"ExerciseAngina_{ExerciseAngina}": 1,
            f"ST_Slope_{ST_Slope}": 1
        }

        for col, val in categorical_features.items():
            if col in input_df.columns:
                input_df[col] = val

        # -------- SCALE + PREDICT --------
        scaled_input = scaler.transform(input_df)
        prob = model.predict_proba(scaled_input)[0][1]

        probability = round(prob * 100, 2)
        prediction = "High Risk" if prob >= 0.5 else "Low Risk"

    return render_template(
        "index.html",
        prediction=prediction,
        probability=probability
    )

if __name__ == "__main__":
    app.run(debug=True)
