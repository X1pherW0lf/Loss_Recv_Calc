# app.py
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate_recovery():
    loss = float(request.form['loss'])
    if loss >= 100:
        return render_template('index.html', result="Recovery impossible!")
    gain = (100 / (100 - loss)) - 1
    return render_template('index.html', result=f"You need a {round(gain * 100, 2)}% gain to recover.")

if __name__ == '__main__':
    app.run(debug=True)
