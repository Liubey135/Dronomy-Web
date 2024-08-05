document.addEventListener("DOMContentLoaded", function() {
    // Initialize the OpenSeadragon viewer
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

    // Initialize Annotorious
    const anno = OpenSeadragon.Annotorious(viewer);

    // Event listeners for annotation buttons
    document.getElementById("create-annotation").addEventListener("click", function() {
        const annotation = anno.addAnnotation({
            "@context": "http://www.w3.org/ns/anno.jsonld",
            "id": "example-annotation",
            "type": "Annotation",
            "body": {
                "type": "TextualBody",
                "value": "Example Annotation",
                "format": "text/plain"
            },
            "target": {
                "selector": {
                    "type": "FragmentSelector",
                    "conformsTo": "http://www.w3.org/TR/media-frags/",
                    "value": "xywh=pixel:100,100,300,300"
                }
            }
        });
        console.log("Annotation created:", annotation);
    });

    document.getElementById("update-annotation").addEventListener("click", function() {
        const annotations = anno.getAnnotations();
        const annotation = annotations.find(a => a.id === "example-annotation");

        if (annotation) {
            annotation.body.value = "Updated Annotation";
            anno.updateAnnotation(annotation);
            console.log("Annotation updated:", annotation);
        } else {
            console.log("No annotation found with the specified ID.");
        }
    });

    document.getElementById("delete-annotation").addEventListener("click", function() {
        const annotations = anno.getAnnotations();
        const annotation = annotations.find(a => a.id === "example-annotation");

        if (annotation) {
            anno.removeAnnotation(annotation);
            console.log("Annotation deleted:", annotation);
        } else {
            console.log("No annotation found with the specified ID.");
        }
    });
});
