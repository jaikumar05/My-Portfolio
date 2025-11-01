window.onload = function() {
    var today = new Date();
    var day = today.getDate();
    var year = today.getFullYear();
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var month = months[today.getMonth()];
    
    var locationElement = document.getElementById('location-date');
    if (locationElement) {
        locationElement.innerHTML = 'Jaipur, ' + day + ' ' + month + ' ' + year;
    }
};
