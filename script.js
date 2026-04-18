const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('input', function() {
        const correctAnswer = this.dataset.answer.toLowerCase();
        const userAnswer = this.value.toLowerCase();

        if (userAnswer === correctAnswer) {
            const img = this.parentElement.querySelector('.sticker-img');
            img.style.visibility = 'visible';
            this.style.borderColor = 'green';
        }
    });
});