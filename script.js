/*
1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
найти минимальное число в массиве, решение задание должно состоять из одной
строки кода.
*/

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

/*
2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
с двумя методами: increment и decrement. Метод increment должен увеличивать
значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
на 1. Значение счетчика должно быть доступно только через методы объекта,
а не напрямую.
*/

function createCounter(count) {
    function increment() { return ++count; }
    function decrement() { return --count; }
    function value() { return count; }
    return { increment, decrement, value }
}

const x = createCounter(8);
console.log(x.increment());
console.log(x.increment());
console.log(x.increment());
console.log(x.decrement());
console.log(x.decrement());

/*
3) Дополнительное задание, выполняем только если проходили работу с DOM.
Напишите рекурсивную функцию findElementByClass, которая принимает корневой
элемент дерева DOM и название класса в качестве аргументов и возвращает первый
найденный элемент с указанным классом в этом дереве.
Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
*/


const innerCount = createCounter(0);
function createNestedDiv (root, count) {
    const div = document.createElement("div");
    div.classList.add(`class-name-${innerCount.increment()}`);
    root.appendChild(div);
    count--;
    if(count == 0) return root;
    else createNestedDiv(div, count);
}

const body = document.querySelector("body");
createNestedDiv(body, 5);

const r1 = document.querySelector(".class-name-2");
createNestedDiv(r1, 4);
createNestedDiv(r1, 4);
createNestedDiv(r1, 4);

const r2 = document.querySelector(".class-name-8");
createNestedDiv(r2, 3);

const r3 = document.querySelector(".class-name-19");
createNestedDiv(r3, 3);

const r4 = document.querySelector(".class-name-6");
createNestedDiv(r4, 3);


function findElementByClass(root, classNm) {

    if(root.className == classNm) return root;
    
    let result = null;
    function search(node) {
        
        if(node.childNodes.length > 0) {
            node = node.childNodes;
            for(let i = 0; i < node.length; i++) {
                //console.log(node[i]);
                if(node[i].className == classNm) {
                    result = node[i];
                    break;
                }
                search(node[i]);
            }
        }
    }
    search(root);

    return result;
}

let rootElement = document.querySelector(".class-name-6");
console.log(findElementByClass(rootElement,"class-name-25"));