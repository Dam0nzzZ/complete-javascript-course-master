'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (account, sort = false) {
    const movements = account.movements;
    containerMovements.innerHTML = '';

    const moves = sort ? movements.slice().sort((a, b) => a - b) : movements;

    moves.forEach(function (value, index, array) {
        const state = value > 0 ? 'deposit' : 'withdrawal';
        const html = `<div class="movements__row">
          <div class="movements__type   movements__type--${state}">
            ${index + 1} ${state}
          </div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${value}€</div>
        </div>`;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

const calcDisplaySummary = function (account) {
    const movements = account.movements;
    labelSumIn.innerHTML = '';
    labelSumOut.innerHTML = '';
    labelSumInterest.innerHTML = '';
    const sumIn = movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    const sumOut = movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    const interest = movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * account.interestRate) / 100)
        .filter(int => int >= 1)
        .reduce((acc, value) => acc + value, 0);
    // console.log(sumIn,sumOut);
    labelSumIn.textContent = `${sumIn}€`;
    labelSumOut.innerHTML = `${Math.abs(sumOut)}€`;
    labelSumInterest.innerHTML = `${interest}€`;
};

const createUsername = function (accounts) {
    accounts.forEach(function (value) {
        value.username = value.owner
            .toLowerCase()
            .split(' ')
            .map(function (name) {
                return name[0];
            })
            .join('');
    });
};

/*create balance*/
const calcBalance = function (account) {
    const balance = account.movements.reduce(function (acc, value) {
        return acc + value;
    }, 0);
    labelBalance.textContent = `${balance}€`;
    account.balance = balance;
};

let currentAccount;
btnLogin.addEventListener('click', function (e) {
    e.preventDefault(); //防止表单提交后的默认刷新
    console.log('login');
    currentAccount = accounts.find(
        acc => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);
    if (!currentAccount) alert('User Not Existed');
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        console.log('login successful');
        containerApp.style.opacity = 100;
        inputLoginUsername.value = '';
        inputLoginPin.value = '';
        inputLoginPin.blur();
        displayMovements(currentAccount);
        calcDisplaySummary(currentAccount);
        calcBalance(currentAccount);
    } else {
        alert('Pin Wrong');
    }
});

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const accountReceive = accounts.find(
        account => account.username === inputTransferTo.value
    );
    const transferAmount = Number(inputTransferAmount.value);
    console.log(transferAmount, accountReceive);
    if (accountReceive == undefined) {
        alert('Cant find the user');
    } else if (transferAmount <= 0) {
        alert('Amount should be positive');
    } else if (transferAmount > currentAccount.balance) {
        alert('You dont have enough money');
    } else {
        currentAccount.movements.push(-1 * transferAmount);
        accountReceive.movements.push(transferAmount);
        calcDisplaySummary(currentAccount);
        calcBalance(currentAccount);
        displayMovements(currentAccount);
    }
    inputTransferAmount.value = '';
    inputTransferTo.value = '';
    inputTransferAmount.blur();
});

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();
    const loan = Number(inputLoanAmount.value);
    if (loan > 0 && currentAccount.movements.some(move => move > 0.1 * loan)) {
        currentAccount.movements.push(loan);
        calcDisplaySummary(currentAccount);
        calcBalance(currentAccount);
        displayMovements(currentAccount);
    } else {
        alert('Cant Loan');
    }
    inputLoanAmount.value = '';
    inputLoanAmount.blur();
});
let flag = true;
btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovements(currentAccount, flag);
    flag = !flag;
});

btnClose.addEventListener('click', function (e) {
    e.preventDefault();
    const deleteAcc = inputCloseUsername.value;
    const deletePin = Number(inputClosePin.value);
    // const acc=accounts.find(account=>account.username===deleteAcc&&account.pin===deletePin);
    console.log(deleteAcc, deletePin);
    if (
        deleteAcc === currentAccount.username &&
        deletePin === currentAccount.pin
    ) {
        const index = accounts.findIndex(
            acc => acc.username === deleteAcc && acc.pin === deletePin
        );
        accounts.splice(index, 1);
        console.log(accounts, index);
        containerApp.style.opacity = 0;
    } else {
        alert('Wrong');
    }
});

createUsername(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const withdraw = movements.filter(function (mov) {
    return mov < 0;
});
// console.log(withdraw);
const a11=Array.from({length:10},(value,key)=>2*key+1);
console.log(a11);
/////////////////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const dogsJulia=[3, 5, 2, 12, 7];
const dogsKate=[4,1,15,8,3];
const dogsJuliaCorrected=dogsJulia.slice(1,-2);
console.log(dogsJuliaCorrected);
const corrected=dogsJuliaCorrected.concat(dogsKate);
console.log(corrected);
corrected.forEach(function(value,index,array){
    const age=value>=3?`an adult, and is ${value} years old`:'still a puppy'
    console.log(`Dog number ${index+1} is ${age}`);
});
*/
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = function (ages) {
    const humanAge = ages.map(value =>
        value > 2 ? value * 4 + 16 : value * 2
    );
    // ages.forEach(function(value,index){
    //     if(value<=2){
    //         humanAge.push(2*value);
    //     }else{
    //         humanAge.push(16+value*4);
    //     }
    // });
    // ages.map(value=>{
    //     value<=2?humanAge.push(2*value):humanAge.push(16+value*4);
    // })
    const ans = humanAge.filter(value => value > 18);
    // console.log(ans);
    const temp = ans.reduce(
        (acc, value, i, array) => acc + value / array.length,
        0
    );
    return temp;
};
const humanAge = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(humanAge);
// humanAge.find();

const allMove = accounts.map(move => move.movements);
console.log(allMove);

const arr = [2, 41, 1, 76, 4, -123, -400];
console.log(
    arr.sort((a, b) => {
        if (a < b) return 1;
        if (b < a) return -1;
    })
);
console.log(arr.sort((a, b) => a - b));

const bankSum=Array
.from(accounts,move=>move.movements)
.flatMap(move=> move.filter(mov=>mov>0))
.reduce((acc,value)=>acc+value,0);
console.log(bankSum);

const bankDeposit1000=Array.from(accounts,move=>move.movements)
.flat()
.reduce((count,move)=>move>=1000? count+1:count,0);
console.log(Array
    .from(accounts,move=>move.movements)
    .flatMap(move=> move.filter(mov=>mov>=1000)));
console.log(bankDeposit1000);

const sumInObj=accounts
.flatMap(move=>move.movements)
.reduce((sum,move)=>{
    move>0?sum.deposit+=move:sum.withdraw+=move;
    return sum
},{deposit:0,withdraw:0});
console.log(sumInObj);

const convertTitle=function(title){
    const expection=['a','an','the','in','on','with'];
    const arr=title
    .toLowerCase()
    .split(' ')
    .map((value)=>{
        if(!expection.includes(value)){
            // console.log(value[0].toUpperCase()+value.slice(1));
            return value[0].toUpperCase()+value.slice(1);
        }
        return value;
    });
    
    // console.log(arr);
    return arr.join(' ');
}
console.log(convertTitle('this is A good title'));
console.log(convertTitle('What is THIS talk ABout'));
console.log(convertTitle('In the wordl asd a AAN AN talk ABout'));