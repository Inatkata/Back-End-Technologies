function parseTable(input) {
    const objects = [];

    for (let row of input) {
        const [town, latitudeStr, longitudeStr] = row.split(" | ");
        const latitude = parseFloat(latitudeStr).toFixed(2);
        const longitude = parseFloat(longitudeStr).toFixed(2);

        const object = {
            town: town.trim(),
            latitude: latitude,
            longitude: longitude
        };

        objects.push(object);
    }

    return objects;
}