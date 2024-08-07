document.addEventListener("DOMContentLoaded", function() {
    const viewer = OpenSeadragon({
        id: "openSeaDragon",
        tileSources: {
            Image: {
                xmlns: "http://schemas.microsoft.com/deepzoom/2008",
                Url: "{{ url_for('static', filename='test_images/dzi/testpattern_files/') }}",
                Format: "jpg",
                Overlap: "1",
                TileSize: "254",
                Size: {
                    Height: "1000",
                    Width: "1000"
                }
            }
        },
        prefixUrl: "{{ url_for('static', filename='images/') }}",
        showNavigator: true,
        animationTime: 0.5,
        blendTime: 0.1,
        constrainDuringPan: true,
        maxZoomPixelRatio: 2,
        minZoomLevel: 1,
        visibilityRatio: 1,
        zoomPerScroll: 1.2,
        gestureSettingsMouse: { clickToZoom: false }
    });

    // Event listeners for viewer buttons
    document.getElementById("zoom-in").addEventListener("click", function() {
        viewer.viewport.zoomBy(1.2);
        viewer.viewport.applyConstraints();
    });

    document.getElementById("zoom-out").addEventListener("click", function() {
        viewer.viewport.zoomBy(0.8);
        viewer.viewport.applyConstraints();
    });

    document.getElementById("home").addEventListener("click", function() {
        viewer.viewport.goHome();
    });

    document.getElementById("full-page").addEventListener("click", function() {
        viewer.setFullPage(!viewer.isFullPage());
    });

    // Make viewer globally accessible for annotorious.js
    window.viewer = viewer;
});
