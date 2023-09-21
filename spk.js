document.addEventListener("DOMContentLoaded", function() {

    // 生成随机16进制颜色代码的函数
    function getRandomHexColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // 获取所有的方块
    var squares = document.querySelectorAll(".square");

    squares.forEach(function(square) {
        square.addEventListener("click", function() {
            // 设置随机颜色
            square.style.backgroundColor = getRandomHexColor();
        });
    });

});
