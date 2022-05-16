function myfunction() {
    const div1 = document.getElementById('box1');
    div1.id = "boxactive1";
    const div2 = document.getElementById('box2');
    div2.id = "boxactive2";
    const div3 = document.getElementById('box3');
    div3.id = "boxactive3";
    const div4 = document.getElementById('box4');
    div4.id = "boxactive4";
    const button = document.getElementById('button');
    button.remove();
    const blue = document.getElementsByClassName('blue');
    const green = document.getElementsByClassName('green');
    const red = document.getElementsByClassName('red');
    const yelow = document.getElementsByClassName('yelow');
    Array.from(blue).forEach(element => {
    element.className = "blueactive Windows";
    });
    Array.from(green).forEach(element => {
    element.className = "greenactive Windows";
    });
    Array.from(yelow).forEach(element => {
    element.className = "yelowactive Windows";
    });
    Array.from(red).forEach(element => {
    element.className = "redactive Windows";
    });
};