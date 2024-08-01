from flask import Flask
from blueprints.main_blueprint import main_views
from blueprints.auth_blueprint import auth_views

# create an instance of the flask application
app = Flask(__name__)

app.register_blueprint(main_views)
app.register_blueprint(auth_views)

# Create a route on your app
@app.route("/", strict_slashes=False, methods=["GET"])
def index():
    return "<h1>This is the Home Page</h1>"

if __name__ == '__main__':
    app.run(debug=True)