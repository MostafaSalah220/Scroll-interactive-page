let stars = document.getElementById('star');
let moon = document.getElementById('moon');
let mountains2 = document.getElementById('mount2');
let mountains1 = document.getElementById('mount1');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let MOKOPA = document.querySelector('.MOKOPA');
window.onscroll = function () {
    let value = scrollY;
    console.log(value);
    stars.style.left=value +'px';
    moon.style.top=value * 3 + 'px';
    mountains1.style.top=value * 2 + 'px';
    mountains2.style.top=value * 1.5 + 'px';
    river.style.top=value + 'px';
    boat.style.top=value + 'px';
    boat.style.left=value * 3 + 'px';
    MOKOPA.style.fontSize=value + 'px';
    if(scrollY >= 70)
    {
        MOKOPA.style.fontSize=70 + 'px';
        MOKOPA.style.position='fixed';
        if(scrollY >= 450)
        {
            MOKOPA.style.display='none';
        }
        else
        {
            MOKOPA.style.display='block';
        }

    }
    if(scrollY>= 172)
    {
        document.querySelector('.main').style.background = 'linear-gradient(#4B53AD,#10001f';
    }
    else
    {
        document.querySelector('.main').style.background = 'linear-gradient(#200011,#10001f';    
    }
} 