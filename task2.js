// take a number using promopt and add 200 and show out put

const add = () => {
    const userInput = document.getElementById('user-input');
    const userValue = userInput.value;
    const value = parseInt(userValue);
    const result = value + 200;
    alert(result)
    userInput.value = '';
}
// task 3 alert the result
