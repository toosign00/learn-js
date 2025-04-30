"use strict";
// 내장 객체 - Math
(() => {
    // FIXME 주사위를 던져서 1부터 6까지의 숫자 중 하나를 랜덤으로 반환하는 함수
    function rollDice() {
        // Math.random()은 0 이상 1 미만의 난수를 반환합니다.
        // 1부터 6까지의 숫자를 얻으려면 Math.random()에 6을 곱하고 1을 더한 후, Math.floor()로 내림을 하면 됩니다.
        return Math.floor(Math.random() * 6) + 1;
    }
    console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
    console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
    console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
})();
