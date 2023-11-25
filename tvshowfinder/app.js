const img = document.createElement('IMG');
const form = document.querySelector('#searchform');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    console.log("SUBMITTED!!!");
    img.remove();
    const searchterm = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchterm}`);
    makeimages(res.data);
    
})

const makeimages = (shows) => {
    for(let result of shows) {
        if(result.show.image) {
            img.src = result.show.image.medium;
            document.body.append(img);
        }
        
    }
}