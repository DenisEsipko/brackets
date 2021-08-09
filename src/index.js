module.exports =
function check(str, bracketsConfig) {

    const STACK = [];
    // создаем Map ключь  открывающая скобка значение закрывающая
    const brackets = {};
    bracketsConfig.forEach((x) => (brackets[x[0]] = x[1]));
    //

    for (const strElement of str) {
        if (brackets[STACK[STACK.length - 1]] === strElement) {
            STACK.pop();
        } else if (brackets.hasOwnProperty(strElement)) {
            STACK.push(strElement);
        } else {
            return false;
        }
    }

    if (STACK.length === 0) {
        return true;
    }
    return false;
}





