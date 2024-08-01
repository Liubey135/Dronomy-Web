from flask import Blueprint, request

auth_views = Blueprint("auth", __name__)

# Create routes on this blueprint instance
@auth_views.route("/register", strict_slashes=False, methods=["GET", "POST"])
def register():
    # Define application logic for homepage
    if request.method == "POST":
        # Enter logic for processing registration
        return "<h1>After Registration</h1>"

    return "<h1>This is the Register Page</h1>"


@auth_views.route("/login", strict_slashes=False, methods=["GET", "POST"])
def login():
    # Define application logic for profile page
    if request.method == "POST":
        # Enter logic for processing login
        return "<h1>After Login</h1>"

    return "<h1>Here goes the Login Page</h1>"

