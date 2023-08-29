//   Clicks            mouse wheel      drags        drops
//   double click      copying          hovers       pasting
//   scrolls           form submission  audio start  Key Presses
//   screen resize     focus/blur       printing     mouse enter

// ADDEVENTLISTENER  - Specify the event type and the call back to run

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    alert("CLICKED");
});

btn.addEventListener('mouseover', function(){
    btn.innerText = 'STOP TOUCHING ME'
});

btn.addEventListener('mouseout', function(){
    btn.innerText = 'Click Me!';
});

window.addEventListener('scroll', function(){
    console.log('STOP SCROLLING');
})