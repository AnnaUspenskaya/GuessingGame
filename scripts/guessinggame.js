

let select = Math.floor(Math.random() * 20);
let buttons = document.getElementsByClassName("num");

let nums = [];
let count = 0;
let going;
let ran;
let check;
let deposit;
let win;

document.getElementById("numbers").disabled = true;

function game() {
    for (let i = 0; i <= 20; i++) {
        buttons[i].disabled = false;

    }
    buttons[0].disabled = false;
    deposit = prompt("How much are you depositing?");
    do {

        if (isNaN(deposit)) {
            deposit = prompt("How much are you depositing? \n Only numbers");
        }
        if (deposit == "") {
            deposit = prompt("Make a deposit to begin the game \n How much are you depositing?  ");
        }
        if(deposit<=0){
            deposit = prompt("insufficient fund.\n How much are you depositing?  ");
        }
    } while (isNaN(deposit) || deposit == "" || deposit <=0 );

    document.getElementById('deposit').innerHTML = "Your deposit is: $" + deposit;
    document.getElementById("start").style.display = "none";
    document.getElementById("money").style.visibility = "visible";


    for (let i = 0; i <= 20; i++) {

        do {
            ran = Math.floor(Math.random() * 100);
            check = nums.includes(ran);
            if (!check) {
                nums.push(ran);
            }
        }
        while (check);

        let ids = nums[i];
        document.getElementsByClassName("num")[i].setAttribute("id", ids);
        buttons[i].innerHTML = nums[i];
    }


    console.log("nums: " + nums);
    console.log("select: " + select);
}
function guess(id) {
    if (id != nums[select]) {
        document.getElementById(id).style.background = "red";
        count++;
        document.getElementById(id).disabled = true;
        console.log("no");
        console.log("count: " + count);
    } else {
        document.getElementById(id).style.background = "green";
        count++;
        for (let i = 0; i < 20; i++) {
            buttons[i].disabled = true;

        } winning();

        console.log("yes");
        console.log("count: " + count);

    }
}
//your winnings
function winning() {

    switch (count) {
        case 1:
            win = deposit * 4;
            break;
        case 2:
            win = deposit * 3.5;
            break;
        case 3:
            win = deposit * 3;
            break;
        case 4:
            win = deposit * 2.5;;
        case 5:
            win = deposit * 2;
        case 6:
            win = deposit * 1.5;;
        case 7:
            win = deposit;
        default:
            win = deposit - (deposit / 20 * (count - 1));
    }
    win=Math.round((win  * 100) / 100);
    document.getElementById("win").style.visibility = "visible";

    document.getElementById("winnings").innerHTML = "Congratulation! You've guessed the number! <h3> Your Winnings $" + win + '</h3>';
    console.log("win: " + win);
}
