$(function () {
    $('.selector').on('change', function() {
        let section = $(this).val();
        let link, imglink, abstract,html;
        $('header').addClass("second-header");
        $('.content').before('<div class="loading"><img src="assets/images/ajax-loader.gif"></div>');

        $.ajax({
            method: 'GET',
            url: 'https://api.nytimes.com/svc/topstories/v2/' + section + '.json?api-key=VsdoBq4dhdB6ezdvVKAkPpWGzWXMKG35',
            datatype: 'json'
        }).done(function(data) {
            let results = data.results.slice(0,12)
            
            $.each(results,function(key,value){
                link=value.url;
                abstract=value.abstract;
                if(value.multimedia[4]!==undefined){
                imglink=value.multimedia[4].url;
                html='<li class="items"><div><a target="_blank" href='+link+'><img src='+imglink+'><p>'+abstract+'</p></div></a></li>';
                $(".newslist").append(html);}
               
            });
    
        }).fail(function(data){
            alert('Please Select Another Section');

        }).always(function(data){
            $('.loading').remove()
        });
    });
});
