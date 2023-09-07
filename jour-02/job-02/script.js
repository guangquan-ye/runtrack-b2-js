function myAddCount() {
    let addCount = document.querySelector('#add-count-btn');
    let countDisplayer = document.querySelector('#count-displayer');
    let count = 0;

    addCount.addEventListener('click', function() {
        count++;
        countDisplayer.innerHTML = count;
    });
}
myAddCount();