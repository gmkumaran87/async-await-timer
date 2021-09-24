const counter = document.querySelector(".timer");
const greet = document.querySelector(".greeting");

const timeCount = (timer) => {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            if (timer === 0) {
                counter.innerHTML = "";
                greet.innerHTML = "Happy New Year...!";
                timer = timer - 1;
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
    let res = timer;
    try {
        while (res >= 0) {
            res = await timeCount(res);
        }
    } catch (error) {
        console.log(error);
    }
};

getTimer(10);