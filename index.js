/*$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });
});
*/

$(function () {
    // 送信
    $('form').submit(function () {
        var item = document.getElementById("item").value;
        var num = $('input[name="num"]').val();
        var date = $('input[name="date"]').val();
            
        var msg = `【注文内容】\n 商品名：${item}\n 個数：${num}\n 納期： ${date}`;
        sendText(msg);

        return false;
    });
});

