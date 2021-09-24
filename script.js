const counter = document.querySelector(".timer");
const greet = document.querySelector(".greeting");

const timeCount = (timer) => {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            if (timer === 0) {
                counter.innerHTML = "";
                greet.innerHTML = "Happy New Year...!";
            } else if (timer > 0) {
                counter.innerHTML = timer;
                timer = timer - 1;
            }
            if (timer >= 0) {
                res(timer);
            } else {
                rej(new Error("Time over"));
            }
        }, 1000);
    });
    return promise;
};

const getTimer = async(timer) => {
    let i = timer;
    for (i; i >= 0; i--) {
        const timer = await timeCount(i);
    }
};

getTimer(10);