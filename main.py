from flask import Flask, render_template

app = Flask(__name__)


@app.route("/yutefantasy")
def get_info():
    return render_template("base.html")


@app.route("/yutefantasy/gw/<int:gw>")
def get_highest_for_specific_gw(gw):
    return render_template("gameweek.html", gw=gw)


@app.route("/yutefantasy/gw/latest")
def get_manager_of_the_week():
    return render_template("index.html")
