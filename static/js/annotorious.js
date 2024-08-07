document.addEventListener("viewerInitialized", function(event) {
    const viewer = event.detail.viewer;

    // Initialize Annotorious
    const anno = OpenSeadragon.Annotorious(viewer, {
        disableEditor: true,
        allowEmpty: true
    });

    // Function to convert annotations if needed
    function convertFromAnnotorious(annotation, imageDimensions) {
        const coordinates = annotation.target.selector.value.split(':')[1].split(',').map(value => parseInt(value));
        const x = Math.max(coordinates[0], 0);
        const y = Math.max(coordinates[1], 0);
        const w = Math.min(coordinates[2], imageDimensions.width - x);
        const h = Math.min(coordinates[3], imageDimensions.height - y);

        if (w <= 0 || h <= 0) return null;

        return {
            id: annotation.id.replace('#', ''),
            coordinates: { x, y, w, h }
        };
    }

    // Event listeners for annotation buttons
    document.getElementById("create-annotation").addEventListener("click", function() {
        const annotation = anno.addAnnotation({
            "@context": "http://www.w3.org/ns/anno.jsonld",
            "id": "example-annotation",
            "type": "Annotation",
            "body": { "type": "TextualBody", "value": "Example Annotation", "format": "text/plain" },
            "target": { "selector": { "type": "FragmentSelector", "conformsTo": "http://www.w3.org/TR/media-frags/", "value": "xywh=pixel:100,100,300,300" } }
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
