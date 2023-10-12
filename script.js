
const setClock = ()=>{
    const hourHand = document.querySelector('.hour-hand');
    const minHand = document.querySelector('.min-hand');
    const secHand = document.querySelector('.sec-hand');

    const now = new Date()
    const hour = now.getHours()
    const min = now.getMinutes()
    const sec = now.getSeconds();

    console.log(hour,min,sec)

    const hourDeg = (360 / 12) * (hour % 12) + (360 / 12) * (min / 60);
    const minuteDeg = (360 / 60) * min + (360 / 60) * (sec / 60);
    const secondDeg = (360 / 60) * sec;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minHand.style.transform = `rotate(${minuteDeg}deg)`;
    secHand.style.transform = `rotate(${secondDeg}deg)`;

}

setInterval(() => {
    setClock()
}, 1000);

