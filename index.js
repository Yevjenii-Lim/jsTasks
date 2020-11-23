// let num1 = +prompt('enter 1', '1')
// let num2 = +prompt('enter 2', '2')
// alert((num1 + num2) / 2)


// let oneSide = +prompt('side', '10')
// alert(Math.pow(oneSide, 2))


// const mile = 0.621371;
// let kilo = +prompt('enter km', '10')
// alert(kilo * mile)


// let num1 = +prompt('enter number 1' , '10')
// let num2 = +prompt('enter number 2' , '10')
// alert('плюс ' + (num1 + num2))
// alert("X "+ (num1 * num2))
// alert("devide " + (num1 / num2))
// alert("minus " + (num1 - num2))


// let a = +prompt('enter a', '5')
// let b = +prompt('enter b', '5')
// let x = 1;
// let result = a * x + b;
// alert(-b/a)


// let hours = +prompt('enter hours', '12');
// let minutes = +prompt('enter minutes', '30');
// let leftHours = 23 - hours;
// let leftMinutes = 60 - minutes;
// alert(leftHours + ' : ' + leftMinutes);


// let number = +prompt('enter number', '123');
// number = number % 100;
// let string = number + ' ';
// alert(string.charAt(0));

var result = document.querySelector('#result')
const input = document.querySelector('#input1')
let input2 = document.querySelector('#min')
let three = document.querySelector('#sec')
// function updateResult() {
//     const name = document.querySelector('#input1')
//     let result = document.querySelector('#result')
//     result.innerText = "Hello " + name.value
// }

// function updateResult () {
//     const year = 2020;
//     let dateBirth = +document.querySelector('#input1').value;
//     result.innerText = "you are " + (2020 - dateBirth)
// }

// function updateResult() {
//     let side = +input.value;
//     console.log(input)
//     result.innerText = side + side;
// }

// function updateResult() {
//     let radius = +input.value;
//     result.innerText = Math.PI * Math.pow(radius, 2);
// }

// function updateResult() {
//     let km = +input.value;
//     let time = +document.querySelector('#time').value;
//     result.innerText = "speed have to be " + km / time + "km/hour";
// }


// function updateResult() {
//     const currency = 1.5;
//     let dollar = input.value;
//     result.innerText = "in euro " + (dollar / currency).toFixed(2); 
// }

// function updateResult() {
//     const gb = +input.value;
//     const file = 820;
//     let mb = gb * 1024
//     let count = mb / file;
//     result.innerText = count.toFixed()
// }


// function updateResult() {
//     let sum = +input.value
//     let cost = +time.value
//     let left = document.querySelector('#left')
//     let amount = (sum / cost).toFixed()
//     result.innerHTML = (sum / cost).toFixed()
//     left.innerText = (amount * cost).toFixed() - sum;
// }


// function updateResult() {
//     let hour = +input.value;
//     let minutes = +document.querySelector('#min').value;
//     let sec = +document.querySelector('#sec').value;
    
//     if(hour > 24) {
//         result.innerHTML = 'wrong hours'
//     }
//     if(minutes > 60) {
//         result.innerHTML = 'wrong minutes'
//     }
//     if(sec > 60) {
//         result.innerHTML = 'wrong sec'
//     }
//     if(hour > 24 && minutes > 60) {
//         result.innerHTML = 'wrong hours'
//         left.innerHTML = 'wrong minutes'
//     }
//     if(hour > 24 && minutes > 60 && sec > 60) {
//         result.innerHTML = 'wrong hours'
//         left.innerHTML = 'wrong minutes'
//         document.querySelector('#second').innerText = 'wrong sec';
       
//     }
     
// }

// function updateResult() {
//     let month = +input.value;
//     let obj = {
//         1: 'jan',
//         2: 'fab',
//         3: 'mar',
//         4: 'apr',
//         5: 'may'
//     }
//     result.innerText = obj[month]
// }

// function updateResult() {
//     let val = +input.value;
//     let num = +time.value;

//     let more = (val > num) ? val:num;
//     result.innerHTML = more
// }

// function updateResult() {
//     let x = +input.value
//     let y = +time.value

//     if(x >= 0 && y >= 0) {
//         result.innerHTML = 2
//     }else if(x <= 0 || y >= 0) {
//         result.innerHTML = 1
//     }
// }

// function updateResult() {
//     let year = +input.value;
//     if(year % 4 == 0 || year % 400 == 0) {
//         if(year % 100 > 0) {
//             result.innerText = 'hight'
//         }else {
//             result.innerText = 'Low'
//         }
//     }else {
//         result.innerText = 'Low'
//     }
// }

// function updateResult() {
//     let sum = +input.value;
//     if(sum >= 200 && sum < 300) {
//         let sale = sum * 3 / 100
//         result.innerText =  (sum - sale) + ' Sale 3%'
//     }
//     if(sum >= 300 && sum <= 500) {
//         let sale = sum * 5 / 100
//         result.innerText =  (sum - sale) + ' Sale 5%'
//     }
//     if(sum >= 700) {
//         let sale = sum * 7 / 100
//         result.innerText =  (sum - sale) + ' Sale 7%'
//     }
// }

// let answers = document.querySelectorAll(".answer")
// for(let i of answers) {
//     i.addEventListener('click', addAnswers)
// }

// let count = 0;
// let one = true;
// let two = true;
// let thr = true;

// function addAnswers (event) { 
    
//     let order = event.target.className.split(' ')[1]
//     let val = event.target.value

//     if(order == 'first' ) {

//         if(val == input.dataset.answer && one) {
//             count +=2
//          result.innerText = count
//          one = false
//         }
//     }
//     if(order == 'second' && two) {
        
//         if(val == time.dataset.answer && two) {
//             count +=2
//          result.innerText = count
//          two = false
//         }
//     }
//     if(order == 'three') {
       
//         if(val == three.dataset.answer && thr) {
//             count +=2
//          result.innerText = count
//          thr = false
//         }
//     }
// }

// function updateResult() {
//     let num = +input.value;
//     let pow = +input2.value
//     result.innerHTML = Math.pow(num, pow)
// }

// function updateResult() {
//     let num1 = +input.value;
//     let num2 = +input2.value;
//     let min = (num1 > num2) ? num2 : num1;
//     for(let i = min; i > 0 ; i-- ) {
//         if(num1 % i == 0 && num2 % i == 0) {
//             let p = document.createElement('p')
//             p.innerText = i;
//             result.append(p)
//         }
//     }
// }

// function updateResult() {
//     let num = +input.value;
//     let fac = 1;
//     console.log(num)
//     for(let i = 1; i <= num; i++) {
//         fac *= i;
//         console.log(i)
//     }
//     result.innerText = fac;
// }


// function updateResult() {
//     let result = true;
//     do{
//         let answ = +prompt('2 + 2 * 2', '6')
//         if(answ == 6){
//             alert('good')
//             result = false
//         }
//     }while(result)
// }


// function updateResult() {
//     let num = 1000;
//     let count = 1;
//     for(let i = 2; num > 50;) {
//         num = num / i;
//         count++;
//         console.log(num)
//         let p = document.createElement('p')
//         p.innerText = num;
//         result.append(p);
//     }
//     let p = document.createElement('p')
//     p.innerText = count + " divided";
//     result.append(p);
// }

// function updateResult() {
//     let num = +input.value;

//     for(let i = 1; i <= 100; i++) {
//         if(i % num == 0) {
//             let p = document.createElement('p')
//             p.innerText = i;
//             result.append(p);
//         }
//     }
// }


// function updateResult() {
//     let min = +input.value;
//     let max = +input2.value;
//     let count = 0;
//     for(let i = min; i <= max; i++) {
//         count++
//         if(count == 4) {
//             let p = document.createElement('p');
//             p.innerText = i;
//             result.append(p);
//             count = 0;
//         }
//     }
// }



// prost ne prost



// function updateResult() {
//     let num = +input.value;
//     if(num == 1) {
//         result.innerText = 'ne prost'
//     }
//     for(let i = num - 1; i >= 0; i--) {
//         if(num % num == 0 && num % 1 == 0) {
//             if(num % i == 0) {
//                 if(i > 1) {
//                     i = 0
//                     result.innerText = 'ne prost'
//                 }if(i == 1) {
//                     result.innerText = 'prost'
//                 }
//             }
//         }
//     }
// }


// function updateResult() {
//     let str = ' '
//     for(let i = 1; i < 10; i++) {
//         str += i;
//     }
//     result.innerText = str
// }



// function updateResult() {
//     let str = ' '
//     for(let i = 9; i > 0; i--) {
//         str += i;
//     }
//     result.innerText = str
// }


// function updateResult() {
//     let str = ' '
//      for(let i = 1; i < 10; i++) {
//          if(i == 9) {
//             let dash = '-' + i + '-';
//             str += dash
//          }else {
//             let dash = '-' + i;
//             str += dash;  
//          }
//     }
//     result.innerText = str
// }



// function updateResult() {
// let list = document.createElement('ul');
//     for(let i = 0; i < 20; i++) {
//         let li = document.createElement('li');
//         for(let o = -1; o < i; o++) {
//             li.innerText += "x";
//         }
//         list.append(li)
//     }

//     result.append(list);
// }


// function updateResult() {
//     let list = document.createElement('ul');
//         for(let i = 1; i < 10; i++) {
//             let li = document.createElement('li');
//             for(let o = 0; o < i; o++) {
//                 let str = i + ' '
//                 li.innerText += str;
//             }
//             list.append(li)
//         }
//         result.append(list);
//     }


    
// function updateResult() {
//     let list = document.createElement('ul');
//     let string = '';
//     for(let i = 1; i < 10; i++) {
//         let li = document.createElement('li');
//         string += "xx";
//         li.innerText = string;
//         list.append(li)
//     }

//     result.append(list);
// }



// function updateResult() {
//     let columns = +input.value;
//     let row = +input2.value;
//     let table = document.createElement('table');
//     for(let i = 0; i < row; i++) {
//     let row = document.createElement('tr')
//         row.classList.add('row')
//         if(i % 2 == 0) {
//         for(let o = 0; o < columns; o++) {
//             let column  = document.createElement('td');
//             column.classList.toggle('black', o % 2 == 0);
//             row.append(column);
//         }
    
//     } else{
//         for(let o = 0; o < columns; o++) {
//             let column  = document.createElement('td');
//             column.classList.toggle('black', o % 2 > 0);
//             row.append(column);
//         }    
        
//     }
//       table.append(row)  
//     }
//     result.innerHTML = '';
//     result.append(table)
// }




// количевсво чисел в числе


// function updateResult() {
//     let num = input.value;
//     num += ' '
//     console.log(typeof num)
//     result.innerText = num.length - 1; 
// }



// function updateResult() {
//     result.innerText = ' '
//     let positive = document.createElement('p');
//     result.append(positive)
//     let negative = document.createElement('p');
//     result.append(negative);
//     let zero = document.createElement('p');
//     result.append(zero);
//     let chet = document.createElement('p');
//     result.append(chet);
//     let nechet = document.createElement('p');
//     result.append(nechet)
//     for(let i = 0; i < 10; i++) {
//         let num = +prompt('enter number', 5)
//         if(num > 0) {
//             num += ' ';
//             positive.innerText += num;
//         }
//         if(num < 0) {
//             num += ' ';
//             negative.innerText += num;
//         }
//         if(num === 0) {
//             num += ' ';
//             zero.innerText += num;
//         }
//         if(num % 2 == 0) {
//             num += ' ';
//             chet.innerText += num;
//         }
//         if(num % 2 > 0) {
//             num += ' ';
//             nechet.innerText += num;
//         }
//     }

//     positive.innerText = positive.innerText.length + " positive";
//     negative.innerText = negative.innerText.length + " negative";
//     zero.innerText = zero.innerText.length + " zero";
//     chet.innerText = chet.innerText.length + " chet";
//     nechet.innerText = nechet.innerText.length + " nechet";
  
// }


// function updateResult() {
//     let bool = true
//     do{
//         let num = +prompt('enter number', 5);
//         let action = prompt('enter action', '+')
//         let num1 = +prompt('enter number 2', 5);
//         alert(eval(num+action+num1))
//         bool = confirm('next')
//     }while(bool)
// }

// function updateResult() {
//     let num = +input.value;
//     let offset = +input2.value;
//     num = num + '';
//     for(let i = 0; i < offset; i++) {

//         let first = num.charAt(0);
//         num = num.slice(1, num.lenght)
//         num += first
//         console.log(num)
//     }
//     result.innerText = num;
// }



// function updateResult() {
//     let days = ['mon','thus', 'wed', 'thurs', 'fri','sat','sun'];
//     let bool = true;
//     for(let i = 0; bool; i++) {
//         if(i == 7) {
//             i = 0;
//         }
//         bool = confirm('today ' + days[i] + " next?")
//     }
// }

// function updateResult() {
//     result.innerHTML = ' ';
//     let table = document.createElement('table');
//     result.append(table);
//     let row = document.createElement('tr')
//     table.append(row)
//     for(let i = 0; i < 10; i++) {
//         let dot = document.createElement('td');
//         dot.innerText = i;
//         row.append(dot)
//     }
//     for(let i = 2; i <= 9; i++) {   
//         let row = document.createElement('tr')
//         table.append(row)
//         let start = document.createElement('td');
//         start.innerText = i;
//         row.append(start)
//         for(let o = 1; o < 10 ; o++) {
//             let column = document.createElement('td');
//             column.innerText = i * o;
//             row.append(column)
//         }
//     }
// }


function updateResult() {
    let num = +prompt('enter number', 25);
    let ges = 0;
    for(let i = 100; i < 101;) {
       
        console.log(ges)
        if(confirm(`more that ${i}`)) {
            i += ges; 
        }else {
            i = Math.floor(i + ges) / 2;
            ges = i / 2;
        }
        if(i == num) {
            if(confirm(`your number ${i}`)) {
                alert('got it')
                i = 101
            }
        }
    }
}



// function updateResult() {
//     alert('Загадай число от 0 до 100');

//   let first = 0;
//   let last = 100;
//   let n;
//   let a = '0';

//   while ( a !== '='){

//         n = Math.floor((first + last) / 2);
//         let b = prompt(`Ваше число > ${n}, < ${n} либо = ${n}? (вводите только > либо < либо =)`, ' ');

//         if (b == '='){
//             a = b;
//         } else if (b == '<'){
//             last = n;
//         } else if (b == '>') {
//             first = n;
//         }

//         a = b;
//   }

//   alert('Ура, я угадал');
// }