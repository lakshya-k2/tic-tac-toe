let btn = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".resetBtn");
let result = document.querySelector("#result");
let sc = document.querySelectorAll(".score");
let chance = document.querySelector(".chance");

let turnX = true;
let start = "X";
let ch = 1;

let winpatt = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const check = (btn) => {
    ch = 1;
    if (btn.innerText == "") {
        if (turnX) {
            btn.innerText = "X";
            turnX = false;
            btn.disabled = true;
        }
        else {
            btn.innerText = "O";
            turnX = true;
            btn.disabled = true;
        }
    }
    checkwin();

}

const checkwin = () => {
    for (let pattern of winpatt) {
        let pos1 = btn[pattern[0]].innerText;
        let pos2 = btn[pattern[1]].innerText;
        let pos3 = btn[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                ch = 2;
                result.innerText = `The Winner is ${pos1}`;

                if (pos1 == start) {
                    sc[0].innerText = Number(sc[0].innerText) + 1;
                }
                else {
                    sc[1].innerText = Number(sc[1].innerText) + 1;
                }

                btn.forEach((btn) => {
                    btn.disabled = true;
                })
                btn[pattern[0]].style.color = "blue";
                btn[pattern[1]].style.color = "blue";
                btn[pattern[2]].style.color = "blue";
            }
        }
    }
    btn.forEach((btn) => {
        if (btn.innerText == "") {
            ch = 0;
        }
    });
    if (ch == 1) {
        result.innerText = "It's a Draw";
    }
}


btn.forEach((btn) => {
    btn.addEventListener("click", () => check(btn));
})

resetBtn.addEventListener("click", () => {
    btn.forEach((btn) => {
        btn.style.color = "black";
        btn.innerText = "";

        btn.disabled = false;
    })
    result.innerText = "";
})



