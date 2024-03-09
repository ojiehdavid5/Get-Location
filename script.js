
AOS.init();
const locationResult = document.querySelector('#locationResult');
  document.querySelector('#getLocation').addEventListener('click', () => {
    locationResult.textContent = 'Retrieving User Location...'

    function success(position) {
      let { coords } = position;
      locationResult.textContent = 'See your location on a map';
      locationResult.href = `https://www.openstreetmap.org?mlat=${coords.latitude}&mlon=${coords.longitude}`;
    }

    navigator.geolocation.getCurrentPosition(success);
  });