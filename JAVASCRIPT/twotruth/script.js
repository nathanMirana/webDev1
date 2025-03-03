        const statements = [
            { element: document.getElementById('statement1'), isLie: false },
            { element: document.getElementById('statement2'), isLie: true },
            { element: document.getElementById('statement3'), isLie: false }
        ];
        
        let selectedStatement = null;
        let hasCheckedAnswer = false;

        const feedbackElement = document.getElementById('feedback');
        const checkAnswerButton = document.getElementById('check-answer');
        const resetGameButton = document.getElementById('reset-game');

        function initGame() {

            statements.forEach(statement => {
                statement.element.addEventListener('click', () => selectStatement(statement));
            });
            
            checkAnswerButton.addEventListener('click', checkAnswer);
            resetGameButton.addEventListener('click', resetGame);
        }

        
        function selectStatement(statement) {
            if (hasCheckedAnswer) return;
            
        
            statements.forEach(s => {
                s.element.classList.remove('selected');
            });
            
            statement.element.classList.add('selected');
            checkAnswerButton.disabled = false;
            selectedStatement = statement;
        }

        function checkAnswer() {
            if (!selectedStatement || hasCheckedAnswer) return;
            
            hasCheckedAnswer = true;
            
            const lieStatement = statements.find(s => s.isLie);
            
            if (selectedStatement.isLie) {
        
                selectedStatement.element.classList.add('correct');
                feedbackElement.textContent = "Correct! The Great Wall of China is NOT visible from space with the naked eye. It's too narrow to be seen without aid despite its length.";
            } else {
        
                selectedStatement.element.classList.add('incorrect');
                lieStatement.element.classList.add('correct');
                feedbackElement.textContent = "Incorrect. The Great Wall of China is NOT visible from space with the naked eye. It's too narrow to be seen without aid despite its length.";
            }
            
            checkAnswerButton.disabled = true;
            resetGameButton.style.display = 'block';
        }

        function resetGame() {

            statements.forEach(statement => {
                statement.element.classList.remove('selected', 'correct', 'incorrect');
            });
            
            selectedStatement = null;
            hasCheckedAnswer = false;
            feedbackElement.textContent = '';
            
            checkAnswerButton.disabled = true;
            resetGameButton.style.display = 'none';
        }

        window.addEventListener('DOMContentLoaded', initGame);