document.addEventListener('DOMContentLoaded', function () {

    const ecran = document.querySelector('.ecran');
    const buttons = document.querySelectorAll('.bouton');
    let expression = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const keyValue = button.dataset.key;

            if (keyValue === '8') {
                expression = '';
            } else if (keyValue === '13') {
                try {
                    const result = evaluateExpression(expression);
                    expression = result.toString();
                } catch (error) {
                    expression = 'Erreur';
                }
            } else {
                expression += button.innerText;
            }

            ecran.innerText = expression;
        });
    });

    document.addEventListener('keydown', function (event) {
        const keyValue = event.keyCode.toString();

        const validKeys = ['8', '53', '219', '111', '103', '104', '105', '106', '100', '101', '102', '109', '97', '98', '99', '107', '96', '110', '13'];

        if (validKeys.includes(keyValue)) {
            event.preventDefault(); 

            if (keyValue === '8') {
                expression = '';
            } else if (keyValue === '13') {
                try {
                    const result = evaluateExpression(expression);
                    expression = result.toString();
                } catch (error) {
                    expression = 'Erreur';
                }
            } else {
                const button = Array.from(buttons).find(btn => btn.dataset.key === keyValue);
                if (button) {
                    expression += button.innerText;
                }
            }

            ecran.innerText = expression;
        }
    });

    function evaluateExpression(expression) {
        try {
            new Function(`return ${expression}`);
            return eval(expression);
        } catch (error) {
            throw new Error('Erreur lors de l\'évaluation de l\'expression');
        }
    }

});
