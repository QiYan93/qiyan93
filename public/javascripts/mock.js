function mockJson(text){
    textJson = JSON.parse(text)
    var data = Mock.mock(textJson);
    dataStr = JSON.stringify(data,null,4);
    return dataStr
}

$('#start').on('click',function(){
    var text = $('#json').val();
    if(text){
        var dataStr = mockJson(text);
        $('#data').text(dataStr);
    }else{
        alert('请输入json生成规则')
    }
})

$('#clear').on('click',function(){
    $('#json').val('');
    $('#data').text('');
})