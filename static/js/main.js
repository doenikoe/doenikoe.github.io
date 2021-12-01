window.onload = function() {
    const imgContainer = document.getElementsByClassName('split-image')[0];
    if(!document.body.className.match('false')) {
        fetch('/data/content.json')
        .then(response => response.json())
        .then(data => { 
                const item = data[Math.floor(Math.random()*data.length)];                
                const introContainer = document.getElementsByClassName('split-intro')[0];
                const bioContainer = document.getElementsByClassName('split-bio')[0];
                imgContainer.style.backgroundImage = "url('"+item.img+"')";
                introContainer.innerHTML = '<h1>'+item.title+'</h1><h2>'+item.tagline + '</h2>';
                bioContainer.innerHTML = '<p>'+item.desc+'</p>'
            }
        );
    } else {
        imgContainer.style.backgroundImage = "url('/images/profile.jpeg')";
    }
}
