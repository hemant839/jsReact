const buttons = document.querySelectorAll('.color-button');
// buttons.forEach(function (button) {
//     button.addEventListener('click', function (event) {
//         if (button.id === 'reset') {
//             document.body.style.backgroundColor = '';
//         } else {
//             document.body.style.backgroundColor = button.id;
//         }
//     });
// });

buttons.forEach( (button) => {
    button.addEventListener('click', () => {
            document.body.style.backgroundColor = button.id;
        });
});