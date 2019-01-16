// Position of user
const getPosition = (position) => {
    let pose = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    infoWindow.setPosition(pose);
    infoWindow.setContent('Estas aquí');
    infoWindow.open(map);
    map.setCenter(pose);
};

// Function error
const error = () => {
    swal({
        type: 'error',
        text: `Habilita tu geolocalización para usar correctamente Melp`
    });
};

// Initialize map
initMap = () => {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 19.4045352, lng: -99.1662097 },
        zoom: 15
    });
    infoWindow = new google.maps.InfoWindow;

    // Geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition, error);
    } else {
        // Browser is not compatible
        swal({
            type: 'error',
            text: `Tu navegador no es compatible con la geolocalización`
        });
    }
}

const printInfo = (places) => {
    console.log(places)
}

