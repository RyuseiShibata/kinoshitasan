$(function () {
    // 送信
    $('form').submit(function () {
        var weight = $('input[name="weight"]').val();
        var height = $('input[name="height"]').val();
        var age = $('input[name="age"]').val();
        var sex = $('input[name="sex"]:checked').val();
        var strength = document.getElementById("strength").value;
      
        var basal_metabolism;
        
        if(sex=='men'){
          basal_metabolism = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
        }else{
          basal_metabolism = 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
        }
       
        var maintenance_cal = basal_metabolism * strength;
        var diet_cal = maintenance_cal - 500;
        
        var protein = diet_cal * 0.4 / 4 ;
        var fat = diet_cal * 0.2 / 9 ;
        var carbohydrate = diet_cal * 0.4 / 4 ;
            
        var msg = `【基礎代謝】\n ${basal_metabolism.toPrecision(4)}kcal\n\n 【メンテナンスカロリー】\n ${maintenance_cal.toPrecision(4)}kcal\n\n 【ダイエットカロリー】\n ${diet_cal.toPrecision(4)}kcal\n\n 【ダイエット時の栄養素】\n タンパク質：${protein.toPrecision(3)}g\n 脂質：${fat.toPrecision(2)}g\n 炭水化物：${carbohydrate.toPrecision(3)}g\n\n※ハリス・ベネディクト方程式(改良版)を使って基礎代謝量を計算しています。\n※カロリー比でP:F:C=2:1:2で計算しています。`;
        sendText(msg);

        return false;
    });
});

