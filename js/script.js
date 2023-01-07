// --------------1------------

// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber () {
    let num;
    do {
        num = prompt('Number?');
    } while (!isFinite(num));
    if (num === null || num === '') {
        return null;
    } 
    return +num;
}

// --------------2------------

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. 

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst('kirill'));

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// function checkSpam(str) {
//     return str.toLowerCase().includes('viagra' || 'XXX');
// }
function checkSpam(str) {
     let loweStr = str.toLowerCase();
     return loweStr.includes('viagra') || includes('xxx');
}

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 1) + '...' : str; 
}


// --------------3------------

// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.

let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');

styles.splice(Math.round(styles.length/2), 1, 'Классика');

console.log(styles);


console.log(styles.shift());

styles.unshift('Реп', 'Регги');

console.log(styles);

// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
    let arr = [];

    while (true) {
        let num = prompt('Number?', 0);
        if (!isFinite(num) || num === '' || num === null) {
            break;
        }
        arr.push(+num);
    }

    return arr.reduce((total, a) => total + a, 0);
}


// --------------4------------

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
    return str.split('-')
    .map((item, index) => index !== 0? item[0].toUpperCase() + item.slice(1): item)
    .join('');
}

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

function filterRange(arr, a, b) {
    return arr.filter(item => (item >= a && item <= b));
}

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

function filterRangeInPlace(arr, a, b) {
   for (let i = 0; i < arr.length; i++) {
        let item = arr[i];

        if (item <= a || item >= b) {
            arr.splice(i, 1);
            i--;
        }
   }
}

// Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию
arr.sort((a, b) => b > a? 1: -1);

console.log( arr ); // 8, 5, 2, 1, -10

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

function copySorted(arr) {
    return arr.slice().sort();
}

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

console.log( names ); // Вася, Петя, Маша

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => ({
    fullName: `${item.name} ${item.surname}`,
    id: item.id,
}));


// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.


function sortByAge(users) {
    return users.sort((a, b) => a.age > b.age ? 1: -1);
}


// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

function getAverageAge(users) {
    return users.reduce((sum, item) => sum + item.age, 0)/users.length;
}

// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) {
    /* ваш код */
    let set = new Set();
    for (let item of arr) {
        set.add(item);
    }
    return Array.from(set);
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  console.log( unique(strings) ); // кришна, харе, :-O


//   Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

function groupById(arr) {
    return arr.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
    },{});
}

// --------------5------------


// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

function aclean(arr) {
    let map = new Map();
    for (let str of arr) {
        let sort = str.toLowerCase().split('').sort().join('');
        map.set(sort, str);
    }

    return Array.from(map.values());
}


// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

function unique(arr) {
    return Array.from(new Set(arr));
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) );


// --------------6------------

// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

function sumSalaries(salaries) {
    let sum = 0;

    for (let salar of Object.values(salaries)) {
        sum += salar;
    }

    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  console.log( sumSalaries(salaries) );


//   Напишите функцию count(obj), которая возвращает количество свойств объекта:

function count(obj) {
    return Object.keys(obj).length;
}


// --------------7------------

// У нас есть объект:

let user = {
  name: "John",
  years: 30
};

// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)


let {name, years: age, isAdmin = false} = user;

console.log(age);

// У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.


function topSalary(salaries) {
    let topSalar = 0,
        topName = null;
    
    for (let [name, salar] of Object.entries(salaries)) {
        if (topSalar < salar) {
            topSalar = salar;
            topName = name;
        }
    }
    return topName;
}



// --------------8------------

// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

let date = new Date(2012, 1, 20, 3, 12);

console.log(date);

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

function getWeekDay(date) {
    let weekDay = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return weekDay[date.getDay()];
}

console.log(getWeekDay(new Date()));


// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

function getLocalDay(date) {
    return date.getDay() == 0? 7: date.getDay();
}

console.log(getLocalDay(new Date(2023, 1, 1, 15)));

// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

function getDateAgo(date, days) {
    let newDate = date;
    newDate.setDate(date.getDate() - days);
    return newDate.getDate();
}

// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));


// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

function getSecondsToday() {
    let now = new Date(),
        today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.round((now - today)/1000);
}

console.log(getSecondsToday());

// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

function getSecondsToTomorrow() {
    let now = new Date(),
        tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    return Math.round((tomorrow - now)/1000);
}

console.log(getSecondsToTomorrow());

// --------------9------------


// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};

let newUser = JSON.parse(JSON.stringify(user));



// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

 let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != '' && value == meetup)? undefined: value;
}));