import axios from "axios";

export const getLocationFromCoordinates = async (latitude, longitude) => {
    try {

        const response = await axios.get(
            "https://nominatim.openstreetmap.org/reverse",
            {
                params: {
                    lat: latitude,
                    lon: longitude,
                    format: "json"
                },
                headers: {
                    "User-Agent": "QR Visitor Tracker/1.0"
                }
            }
        );

        const address = response.data.address;

        return {
            city:
                address.city ||
                address.town ||
                address.village ||
                "Unknown",

            state: address.state || "Unknown",

            country: address.country || "Unknown"
        };

    } catch (error) {

        console.log("Reverse Geocoding Error:", error.message);

        return {
            city: "Unknown",
            state: "Unknown",
            country: "Unknown"
        };

    }
};