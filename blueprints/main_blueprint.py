from flask import Blueprint, request, render_template, send_from_directory

main_views = Blueprint("main", __name__)

# Create routes on this blueprint instance
@main_views.get("/", strict_slashes=False)
def index():
    # Define application logic for homepage
    return render_template('index.html')


@main_views.get("/profile/<string:username>", strict_slashes=False)
def profile(username):
    # Define application logic for profile page
    return f"<h1>Welcome {username}! This is your profile</h1>"


@main_views.route('/viewer', strict_slashes=False)
def main_page():
    # Render the openseadraogn viewer
    return render_template('openseadragon.html')