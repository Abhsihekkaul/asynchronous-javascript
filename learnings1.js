function task1(callback) {
    setTimeout(() => {
        console.log("1. Hello People");
        callback();
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("2. Hello People");
        callback();
    }, 5000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("3. Hello People");
        callback();
    }, 400);
}

function task4(callback) {
    setTimeout(() => {
        console.log("4. Hello People");
        callback();
    }, 10000);
}

function task5(callback) {
    setTimeout(() => {
        console.log("5. Hello People");
        callback();
    }, 100);
}

function task6(callback) {
    setTimeout(() => {
        console.log("6. Hello People");
        callback();
    }, 2000);
}

function task7(callback) {
    setTimeout(() => {
        console.log("7. Hello People");
        callback();
    }, 3000);
}

function task8(callback) {
    setTimeout(() => {
        console.log("8. Hello People");
        callback();
    }, 600);
}


// so  in order to make the our program run in sequence we have created a " callback hell "
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {
                    task6(() => {
                        task7(() => {
                            task8(() => {
                                // All tasks completed
                            });
                        });
                    });
                });
            });
        });
    });
});
