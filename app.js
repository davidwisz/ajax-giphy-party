$(function(){
    $('#search-form').on('submit', function(e){
        e.preventDefault();
        let $searchVal = $('#search').val();
        requestImage($searchVal);
        //SEPARATE Function: assign event listener onclick to reomve button: container.empty();
    });

    $('#remove-button').on('click', function() {
        $('#img-container').empty();
    });
})
async function requestImage(term) {
    let giphyURL = `http://api.giphy.com/v1/gifs/search?q=${term}&limit=1&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
    let response = await axios.get(giphyURL);
    let imgSrc = response.data.data[0].images.downsized_large.url; //WHY????????????????????????????
    let newImg = $('<img>').attr({'src': imgSrc, 'class': 'ajaxedImg'});
    $('#img-container').append(newImg);
}
