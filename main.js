let name = prompt("Как вас зовут?")
let money = 10000

if (name == "Alex") {
    let account = +prompt("Номер счета?")
    if (account == 7777) {
        let buy = +prompt("Сколько обналичить?")
        if (buy <= 10000) {
            alert("Все отлично")
            alert(buy)
            alert(10000 - buy)
        } else {
            alert("Недостаточно средств")
        }
    } else {
        alert("Пользователь не найден, досвидули")
    }
} else {
    alert("Пользователь не найден, досвидули")
}


// 


let ism = prompt('What is your name?').toLowerCase()

if (ism.charAt(0) == "a") {
    let age = +prompt('How old are you?')
    if (age > 20 && age <= 40) {
        let cash = +prompt('How much money?')
        if (cash > 100 || cash > "$100") {
            let numbers = +prompt('How many are you?')
            if (numbers == 1) {
                alert('Good day to you')
            } else {
                alert('Have a good day')
            }
        } else {
            alert("Good Bye")
        }
    } else {
        alert("Good Bye")
    }
} else {
    alert('Good Bye')
}