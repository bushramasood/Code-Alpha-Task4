document.getElementById('calculateAge').addEventListener('click', function() {
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    // Check if the birthday has occurred this year or not
    if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        years--;
        months = (12 - dob.getMonth()) + today.getMonth();
        if (today.getDate() < dob.getDate()) {
            months--;
            days = (30 - dob.getDate()) + today.getDate();
        }
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = ` ${years} years, ${months} months, and ${days} days`;
});
