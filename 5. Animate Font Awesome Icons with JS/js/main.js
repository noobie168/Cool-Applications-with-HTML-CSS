// Brake Chain Animation
function brakeChain() {
    let chain = document.getElementById('chain');
    chain.innerHTML = "&#xf0c1;";

    setTimeout(function() {
        chain.innerHTML = "&#xf127;";
    }, 1000);

    setTimeout(function() {
        brakeChain();
    }, 2000);
}

// Call Animation
brakeChain();

// Animate Every 2 Seconds

// Battery Charge Animation
function chargeBattery() {
    let battery = document.getElementById('battery');
    battery.innerHTML = "&#xf244;";
    setTimeout(function() {
        battery.innerHTML = "&#xf243;";
    }, 1000);
    setTimeout(function() {
        battery.innerHTML = "&#xf242;";
    }, 2000);
    setTimeout(function() {
        battery.innerHTML = "&#xf241;";
    }, 3000);
    setTimeout(function() {
        battery.innerHTML = "&#xf240;";
    }, 4000);
    setTimeout(function() {
        chargeBattery();
    }, 5000);
}

// Run Animation
chargeBattery();

// Run Animation Every 5 Seconds

// Hourglass Tip Animation
function hourglassTip() {
    let hourglass = document.getElementById('hourglass');
    hourglass.innerHTML = "&#xf251;";
    setTimeout(function() {
        hourglass.innerHTML = "&#xf252;";
    }, 1000);
    setTimeout(function() {
        hourglass.innerHTML = "&#xf253;";
    }, 2000);

    setTimeout(function() {
        hourglassTip();
    }, 3000);

}

// Run Animation
hourglassTip();

// Run Animation Every 3 Seconds