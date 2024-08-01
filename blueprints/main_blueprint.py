from flask import Blueprint, request

main_views = Blueprint("main", __name__)

# Create routes on this blueprint instance
@main_views.get("/", strict_slashes=False)
def index():
    # Define application logic for homepage
    return "<h1>This is the Home Page</h1>"


@main_views.get("/profile/<string:username>", strict_slashes=False)
def profile(username):
    # Define application logic for profile page
    return f"<h1>Welcome {username}! This is your profile</h1>"