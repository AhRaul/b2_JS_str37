/**
//Оператор распространение  [... ]
//Можно обьединить несколько массивов в один
const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood"];
const tahoe = [...peaks, ...canyons];

console.log(tahoe.join(", ")); //Tallac, Ralson, Rose, Ward, Blackwood
**/

//-----
/**
//Получение последнего элемента массива. а не первого.
//для этого, можно использовать деструктуризацию, плюс Array.Revers
const peaks = ["Tallac", "Ralston", "Rose"];
const [last] = peaks.reverse(); 	//взяли один- последний элемент из массива
									//записали его в переменную last
console.log(last); 	//Rose
console.log(peaks.join(", ")); 	//Rose, Ralston, Tallac
**/

//-----
/**
//чтобы сделать то-же самое, и не перезаписывать исходный массив
//можно использовать оператор распространения
const peaks = ["Tallac", "Ralston", "Rose"];
const [last] = [...peaks].reverse();	//создали измененную копию массива, 
										//не затронув оригинальный массив

console.log(last); //Rose
console.log(peaks.join(", ")); //Tallac, Ralston, Rose
**/
//-----
/**
//можно получить оставшиеся элементы массива, исключив первый
const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
const [first, ...others] = lakes; //разбили массив на 1 и остальные элементы
console.log(others.join(", ")); //Marlette, Fallen Leaf, Cascade
**/
//-----
/**
//перенос аргументов цункции в массив
function directions(...args) {
	let [start, ...remaining] = args;
	let [finish, ...stops] = remaining.reverse();
	
	console.log(`drive through ${args.length} towns`);
	console.log(`start in ${start}`);
	console.log(`the destination is ${finish}`);
	console.log(`stopping ${stops.length} times in between`);
}

directions("Turkee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");
**/
//-----
/**
//объединение обьектов, при помощи оператора распространения
const morning = {
	breakfast: "oatmeal",
	lunch: "peanut butter and jelly"
};

const dinner = "mac and cheese";

const backpackingMeals = {
	...morning,
	dinner
};

console.log(backpackingMeals);

//На выходе долен получиться обьект:
//{
//breakfast: "oatmeal",
//lunch: "peanut butter and jelly",
//dinner: "mac and cheese"
//}
//В итоге, получился такой обьект, но вдругом порядке.

**/
//-----
