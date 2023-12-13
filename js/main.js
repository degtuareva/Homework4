// 1) Вам необходимо создать функцию getSumOfSequence, которая будет создавать
// массив из чисел и высчитывать сумму первого и последнего элементов массива.
// Функция принимает в себя один параметр number. Используя этот параметр,
// нужно создать массив из чисел от 1 до number. Для заполнения массива
// элементами используйте цикл for. (Например, если был передан number равный 5,
// то массив должен выглядеть следующим образом: [1, 2, 3, 4, 5])
// Функция getSumOfSequence должна возвращать сумму первого и последнего
// элементов итогового массива.
// Пример:
// getSumOfSequence(5) = 6 // [1, 2, 3, 4, 5], 1+5=6
function getSumOfSequence(number){
    let arr=[];
    for (let i=1; i<=number; i++){
        arr.push(i);
    }
    return arr[0]+arr[arr.length-1];
}
console.log(getSumOfSequence(5));

// function getSumOfSequence(number) {
//     const array = Array.from({ length: number + 1 }, (_, index) => index);
//     return array[0] + array[array.length - 1];
// }
// console.log(getSumOfSequence(5));


// 2) Вам необходимо создать функцию getDivisorsCount, которая будет
// высчитывать количество делителей для переданного числа. Она принимает в себя
// единственный параметр number. По умолчанию он должен быть равен 1.
// Если number меньше нуля либо является не целым (можно проверить при помощи
// функции Number.isInteger(number)), то выводите в модальное окно при помощи
// alert сообщение 'number должен быть целым числом и больше нуля!'.
// Примеры:
// getDivisorsCount(4) // Вернет 3 (делители - 1, 2, 4)
// getDivisorsCount(5) // Вернет 2 (делители - 1, 5)
// getDivisorsCount(12) // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
function getDivisorsCount(number = 1) {
    if (!Number.isInteger(number) || number <= 0) {
    alert('number должен быть целым числом и больше нуля!');
    return;
    }
    let count = 0;
    for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        count++;
    }
    }
    return count;
    }
  console.log(getDivisorsCount(4));  // Вывод: 3
  console.log(getDivisorsCount(5));  // Вывод: 2
  console.log(getDivisorsCount(12)); // Вывод: 6
  console.log(getDivisorsCount(-1.2)); // Вывод: alert

function getDivisorsCount(number) {
    if (Number.isInteger(number) && number > 0) {
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
        count++;
        }
    }
    return count;
    } else {
    alert('number должен быть целым числом и больше нуля!');
    }
    }
  console.log(getDivisorsCount(4));  // Вывод: 3
  console.log(getDivisorsCount(5));  // Вывод: 2
    console.log(getDivisorsCount(12));// Вывод: 6
  console.log(getDivisorsCount(1.2)); //Вывод: alert

//   3) Дан объект person. Необходимо написать метод getInfo(), который будет
// возвращать информацию о человеке в виде сообщения: "Меня зовут name. Мне
// age лет. Я - prefession.". Вместо name нужно подставить имя человека, вместо age -
// возраст, а вместо prefession - профессию.
// Информацию (name, age, profession) необходимо брать из объекта person.
// const person = {
// name: 'Максим',
// age: 25,
// profession: 'Frontend-developer'
// };
// person.getInfo(); // => Меня зовут Максим. Мне 25 лет. Я - Frontend-developer.

const person = {
    name: 'Максим',
    age: 25,
    profession: 'Frontend-developer',
    getInfo: function() {
    return `Меня зовут ${this.name}. Мне ${this.age} лет. Я - ${this.profession}.`;
    }
    };
    
console.log(person.getInfo()); // Вывод: Меня зовут Максим. Мне 25 лет. Я - Frontend-developer
