class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.historyList = document.getElementById('historyList');
        this.calculator = document.getElementById('calculator');
        this.themeToggle = document.getElementById('themeToggle');

        this.currentInput = '';
        this.previousInput = '';
        this.operation = null;
        this.history = [];
        this.isDarkMode = false;

        this.init();
    }

    init() {
        // Add event listeners to buttons
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleButtonClick(e.target.dataset.value);
                this.addButtonAnimation(e.target);
            });
        });

        // Keyboard support
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardInput(e);
        });

        // Theme toggle
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Load theme preference
        this.loadTheme();
    }

    handleButtonClick(value) {
        switch(value) {
            case 'C':
                this.clear();
                break;
            case '=':
                this.calculate();
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                this.setOperation(value);
                break;
            default:
                this.appendNumber(value);
                break;
        }
    }

    handleKeyboardInput(e) {
        const key = e.key;

        if (key >= '0' && key <= '9') {
            this.appendNumber(key);
        } else if (key === '.') {
            this.appendNumber(key);
        } else if (['+', '-', '*', '/'].includes(key)) {
            this.setOperation(key);
        } else if (key === 'Enter' || key === '=') {
            e.preventDefault();
            this.calculate();
        } else if (key === 'Escape' || key === 'c' || key === 'C') {
            this.clear();
        } else if (key === 'Backspace') {
            this.backspace();
        }
    }

    appendNumber(number) {
        if (this.currentInput.includes('.') && number === '.') return;

        if (this.currentInput === '0' && number !== '.') {
            this.currentInput = number;
        } else {
            this.currentInput += number;
        }
        this.updateDisplay();
    }

    setOperation(operation) {
        if (this.currentInput === '') return;

        if (this.previousInput !== '') {
            this.calculate();
        }

        this.operation = operation;
        this.previousInput = this.currentInput;
        this.currentInput = '';
    }

    calculate() {
        let result;
        const prev = parseFloat(this.previousInput);
        const current = parseFloat(this.currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        const expression = `${this.previousInput} ${this.operation} ${this.currentInput}`;

        switch (this.operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    this.showError('Cannot divide by zero');
                    return;
                }
                result = prev / current;
                break;
            default:
                return;
        }

        this.addToHistory(expression, result);
        this.currentInput = result.toString();
        this.operation = null;
        this.previousInput = '';
        this.updateDisplay();
        this.addGlowEffect();
    }

    clear() {
        this.currentInput = '';
        this.previousInput = '';
        this.operation = null;
        this.updateDisplay();
    }

    backspace() {
        this.currentInput = this.currentInput.slice(0, -1);
        this.updateDisplay();
    }

    updateDisplay() {
        this.display.value = this.currentInput || '0';
    }

    showError(message) {
        this.display.value = message;
        this.display.classList.add('loading');
        setTimeout(() => {
            this.display.classList.remove('loading');
            this.clear();
        }, 2000);
    }

    addToHistory(expression, result) {
        const historyItem = {
            expression: expression,
            result: result,
            timestamp: new Date().toLocaleTimeString()
        };

        this.history.unshift(historyItem);
        if (this.history.length > 10) {
            this.history.pop();
        }

        this.updateHistoryDisplay();
    }

    updateHistoryDisplay() {
        this.historyList.innerHTML = '';
        this.history.forEach(item => {
            const div = document.createElement('div');
            div.className = 'history-item';
            div.textContent = `${item.expression} = ${item.result}`;
            this.historyList.appendChild(div);
        });
    }

    addButtonAnimation(button) {
        button.classList.add('pressed');
        setTimeout(() => {
            button.classList.remove('pressed');
        }, 100);
    }

    addGlowEffect() {
        this.calculator.classList.add('glow');
        setTimeout(() => {
            this.calculator.classList.remove('glow');
        }, 500);
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        document.body.classList.toggle('dark', this.isDarkMode);
        this.themeToggle.textContent = this.isDarkMode ? '☀️' : '🌙';
        this.saveTheme();
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('calculator-theme');
        if (savedTheme === 'dark') {
            this.isDarkMode = true;
            document.body.classList.add('dark');
            this.themeToggle.textContent = '☀️';
        }
    }

    saveTheme() {
        localStorage.setItem('calculator-theme', this.isDarkMode ? 'dark' : 'light');
    }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});