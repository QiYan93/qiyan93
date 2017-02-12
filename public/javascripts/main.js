const host = location.origin
function load(){
    var $input = document.getElementById('input');
    var city = $input.value;
    fetch(host+'/bus?city='+city+'&bus=22',{
        method:'POST'
    }).then(function(res){
        return res.json()
    }).then(function(data){
        $('#bus').find('p').remove();
        for(var i=0;i<data.result.length;i++){
            $('#bus').append('<p>'+data.result[i].name+'</p>')
        }
    })
}

$('.nav-item').on('click',function(){
    var type = $(this).attr('data-type');
    $('.block').find('li').remove();
    $('.loading').show();
    fetch(host+'/news?type='+type+'&key=ee46dcc6f129ccd3acb0e12c46428aee',{
        method:'GET'
    }).then(function(res){
        return res.json()
    }).then(function(data){
        for(var i=0;i<data.result.data.length;i++){
            $('.block ul').append('<li class="li"><img class="img" src="'+data.result.data[i].thumbnail_pic_s+'" /><a href="'+data.result.data[i].url+'">'+data.result.data[i].title+'</a></li>')
            $('.loading').hide();
        }
    })
})