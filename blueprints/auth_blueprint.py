from flask import Blueprint, request, render_template
from flask import redirect, url_for

auth_views = Blueprint("auth", __name__)

@auth_views.route("/login", strict_slashes=False, methods=["GET", "POST"])
def login():
    # Define application logic for profile page
    if request.method == "POST":
        # Enter logic for processing login
        return "<h1>After Login</h1>"

    return "<h1>Here goes the Login Page</h1>"

@auth_views.route("/register", strict_slashes=False, methods=["GET", "POST"])
def register():
    if request.method == "POST":
        # Logic to handle form data and register the user
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']

        
        # Save the user data to the database and handle file upload

        return redirect(url_for('auth.login'))  # Redirect to login after successful registration

    return render_template("register.html")

