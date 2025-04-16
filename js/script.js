let map;

function initMap() {
  const center = { lat: 41.8781, lng: -87.6298 }; // Near Chicago

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: center,
    mapTypeControl: false,
    streetViewControl: false,
    zoomControl: true
  });

  const locations = [
    {
      title: "University of Oregon",
      position: { lat: 44.0450, lng: -123.0664 },
      info: "Eugene, Oregon<br>I have a lot of friends that go there.",
      image: "Images/uoregon-icon.png"
    },
    {
      title: "University of Utah",
      position: { lat: 40.7608, lng: -111.8910 },
      info: "Salt Lake City, Utah<br>I have visited a couple times and have a lot of friends there.",
      image: "Images/uofu-icon.png"
    },
    {
      title: "Illinois Institute of Technology",
      position: { lat: 41.8349, lng: -87.6270 },
      info: "Chicago, Illinois<br>This is where I go to school now!",
      image: "Images/iit-icon.png"
    },
    {
      title: "St. Thomas Aquinas College",
      position: { lat: 41.0614, lng: -73.9474 },
      info: "Sparkill, New York<br>I went here for my first year of college.",
      image: "Images/stac-icon.png"
    }
  ];

  locations.forEach(loc => {
    const marker = new google.maps.Marker({
      position: loc.position,
      map: map,
      title: loc.title,
      icon: {
        url: loc.image,
        scaledSize: new google.maps.Size(50, 50)
      }
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="text-align:center; color: #000;">
          <strong>${loc.title}</strong><br>
          ${loc.info}
        </div>
      `
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });
}
