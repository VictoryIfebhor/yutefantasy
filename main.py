from flask import Flask, render_template

app = Flask(__name__)


@app.route('/yutefantasy')
def get_manager_of_the_week():
    return render_template('index.html')
