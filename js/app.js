let placesInfo = [];

// Position of user
const getPosition = (position) => {
    let pose = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    infoWindow.setPosition(pose);
    infoWindow.setContent('Estas aquí');
    infoWindow.open(map);
    // map.setCenter(pose);
}

// Function error
const error = () => {
    swal({
        type: 'error',
        text: `Habilita tu geolocalización para usar correctamente Melp`
    });
};

// Initialize map
initMap = () => {
    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 19.438419, lng: -99.128377},
        zoom: 15
    });
    infoWindow = new google.maps.InfoWindow;

    //Geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition, error);
    } else {
        // Browser is not compatible
        swal({
            type: 'error',
            text: `Tu navegador no es compatible con la geolocalización`
        });
    }
    // const image = {
    //     url: 'assets/pin.png',
    //     size: new google.maps.Size(20, 32),
    //     origin: new google.maps.Point(0, 0),
    //     anchor: new google.maps.Point(0, 32)
    // };
    let markers = placesInfo.map(place =>{
        return new google.maps.Marker({
            position : place.position,
            animation: google.maps.Animation.DROP,
            title: place.name,
            map: map
            // icon: image
        })
    });

    // markers.addListener('click', function() {
    //     map.setZoom(28);

    // });
};

const printInfo = (places) => {
    places.forEach(place => {
        let placeInfo = {
            position: {
                lat: place.address.location.lat,
                lng: place.address.location.lng
            },
            name: place.name
        }
        console.log(place)
        placesInfo.push(placeInfo);
    });
};