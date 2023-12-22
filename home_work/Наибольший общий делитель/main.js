function findGCD(a, b) {
  
    if (typeof(Number(a)) !== typeof(1) || 
        typeof(Number(b)) !== typeof(1) || 
        a, b === null || b === null || 
        isNaN(Number(a))|| isNaN(Number(b))) {
        return NaN;
    }
    a = Math.abs(parseInt(a));
    b = Math.abs(parseInt(b));
    let t;
	while (b != 0) {
		t = b;
		b = a % b;
		a = t;
	}
	return a;
     
};

/*console.log(findGCD(0, 15));*/
//let arr = [2, 2, 2, 4, 4, 8, 8];
//let arr = [2];


/*function foo(arr) {
    let new_arr = []
    for (let i = 0; i < arr.length; i++) {
        if (!new_arr.includes(arr[i])) {
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}
console.log(foo([2, 2, 2, 4, 4, 8, 8]));
console.log(foo([2]));
console.log(foo([2, 2, 2]));
console.log(foo(["z", "a", "b", "a", "foo", "bar", "foo", "z", "a"]));*/


/*function findPrimeNums(amount) {
    
    let arr = []
    let width = amount
    let j = 0
    let i = 0
    for (let i = 0; i <= amount; i++) {
        arr.push(i);
        if (i % 2 !== 0 || i % 3 !== 0) {
            amount = amount + 1;
        }
    }
    arr[1] = 0;

    while (i <= amount) {
        if (arr[i] != 0) {
            j = i + i;
            while (j <= amount) {
                arr[j] = 0;
                j = j + i;
                
            }
        }
        i += 1;
    }
    arr = arr.filter(function(number) {
        return number > 0;
    });
    return arr.slice(0, width);
};

console.log(findPrimeNums(50))*/


/*function createPerson(name, age, gender, mail) {
    /*
     * Необходимо реализовать логику функции, которая будет создвать объект person.
     * Создаваемый объект должен содержать в себе следующие свойства:
     *   - name (имя человека, как строка)
     *   - age (возраст человека, как число)
     *   - gender (пол человека, как строка)
     *   - e-mail (электронный почтовый ящик, как строка)
     * 
     * Еще необходимо добавить один метод в создаваемый объект –
     *   sayHi – функцию, которая должна возвращать строку вида
     *   "Привет! Меня зовут name. Буду рад(а) пообщаться по почте. Пиши мне на e-mail"
     *   Например:
     *     - Привет! Меня зовут Родион. Буду рад пообщаться по почте. Пиши мне на somebox@mail.ru
     *     - Привет! Меня зовут Анастасия. Буду рада пообщаться по почте. Пиши мне на cutebox@ya.ru
     * 
     * В качестве результата необходимо вернуть созданный объект.
     
    const person = {
        name: name,
        age: age,
        gender: gender,
        "e-mail": mail,
        sayHi: function() {
            return `Привет! Меня зовут ${this.name}. Буду ${this.gender === "жен" ? "рада" : "рад"} пообщаться по почте. Пиши мне на ${this["e-mail"]}`;
        }
    }
    return person
  };

  let person = createPerson("Родион", 27, "муж", "somebox@mail.ru");
  console.log(person.sayHi());
  
  person = createPerson("Анастасия", 21, "жен", "cutebox@ya.ru");
  console.log(person.sayHi());
  
  person = createPerson("Анастасия", 21, "", "cutebox@ya.ru");
  console.log(person.sayHi());*/


 /*function calcSummaryRate(dailyRation = {}) {
    /*
     * Необходимо посчитать сумму всех потреблённых калорий за день,
     * используя данные пользователя - калории, потреблённые на завтрак,
     * обед, ужин, полдник, перекус. Причём мы не можем гарантировать, что
     * все пользователи нашего приложения производят приём пищи абсолютно
     * одинаково. Кто-то может обедать и ужинать, но не завтракать.
     * А кто-то может завтракать, осуществлять перекусы, обедать,
     * но не ужинать. А кто-то вообще по-другому выстраивает график
     * приёма пищи на день для себя.
     * 
     * Результат подсчёта суммы необходимо присвоить в этот же объект свойству
     * summary.
    
    let summary = 0
    for (let key in dailyRation) {
        if (dailyRation[key] !== 'summary') {
            summary += dailyRation[key]
        }
    }
    dailyRation.summary = summary;
    return dailyRation
  };

let mondayRation = {
    breakfast: 1240,
    lunch: 765,
    dinner: 564,
};
  
mondayRation = calcSummaryRate(mondayRation);

console.log(mondayRation.summary());

let mondayRation = {
    breakfast: 1240,
    lunch: 765,
    dinner: 564,
};

mondayRation = calcSummaryRate(mondayRation);

console.log(mondayRation.summary);

const tuesdayRation = {
    breakfast: 780,
    "coffee-break": 115,
    lunch: 975,
    "afternoon-tea": 230,
    dinner: 441,
    summary: 0,
};

calcSummaryRate(tuesdayRation);

console.log(tuesdayRation.summary);*/

/*
function pow(num, exp) {
    let result = num;
    while (exp > 1) {
        if (exp % 2 === 0) {
            result *= num;
        }
        num *= num;
        exp /= 2;
    }
    return result
};

console.log(pow(3, 3))
*/

const phoneBook = [
    { name: "Сантехник", phone: 71234567890 },
    { name: "Бассейн для детей", phone: 74567890123 },
    { name: "Оля", phone: 77890123456 },
    { name: "Саня", phone: 71111002030 },
    { name: "Брат", phone: 73211020304 },
    { name: "Мама", phone: 75555050102 },
    { name: "Танцы", phone: 73752224896 },
    { name: "Доставка", phone: 74786263190 },
    { name: "Служба спасения", phone: 78183754321 },
    { name: "Школа Арта", phone: 78171000001 },
    { name: "Классный руководитель", phone: 75559095737 },
    { name: "Анастасия", phone: 75555050103 },
    { name: "Санта (Дед Мороз)", phone: 76549876543 },
    { name: "Володя", phone: 75555050110 },
    { name: "Английский", phone: 73752456513 },
    { name: "СТОшка", phone: 71231234567 },
    { name: "Работа", phone: 72223334455 },
    { name: "Заказ тортов", phone: 75158087060 },
    { name: "Санаторий", phone: 74241598426 },
  ];

const n = 71234567890;

function deleteContact(phoneBook, deleteContact) {
    const index = phoneBook.findIndex((item) => item.phone === deleteContact);
    if (index !== -1) {
        phoneBook.splice(index, 1);
        return phoneBook;
    }
    return "ergger"
};

console.log(deleteContact(phoneBook, n))