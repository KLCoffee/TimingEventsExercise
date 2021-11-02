// TIMING EVENTS EXERCISE

// 1.
setTimeout(() => {
   const div1 = document.querySelector(`#first`);
   const p1 = document.createElement(`p`);
   p1.innerText = `Hi`;
   div1.append(p1);
}, 1000);

// 2.
setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`);
    p2.innerText = `One`
    div2.prepend(p2);
    setTimeout(() => {
        const p3 = document.createElement(`p`);
        p3.innerText = "Two";
        div2.append(p3);
    }, 1000);
}, 2000);

// // 3a
// let time =1;
// const count = setInterval(() => {
//     console.log(time);
//     time++;
// }, 1000);


// 3b
const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
clearInterval(count)
});

// Bonus
// 4a
//  let num = 120000;
 
   
//    const clock = document.querySelector(`#countdown`);
//    const p3 = document.createElement(`p`);
//    p3.innerText = setInterval(() => {
//    if (num > 0){ append 
//        } else if {
//        clearInterval(clock);
//    }
//    num --;
//      }, 1);
   
     
