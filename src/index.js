class SmartCalculator {
    constructor(initialValue) {
        this.value = '';
        this.lastValue = initialValue + '';

        SmartCalculator.prototype.toString = () => eval(this.value + this.lastValue);
    }

    add(number) {
        this.value += this.lastValue + "+";
        this.lastValue = number + '';
        return this
    }

    subtract(number) {
        this.value += this.lastValue + "-";
        this.lastValue = number + '';
        return this
    }

    multiply(number) {
        this.value += this.lastValue + "*";
        this.lastValue = number + '';
        return this
    }

    devide(number) {
        this.value += this.lastValue + "/";
        this.lastValue = number + '';
        return this
    }

    pow(number) {
        if (this.lastValue.includes('Math.pow(')) {
            let end = this.lastValue.split(',').pop();
            let start = this.lastValue.replace(end, '');
            let power = end.split(')')[0];
            this.lastValue = start + "Math.pow(" +  power + "," + number + ")" + end.replace(power, '');
        } else {
            this.lastValue = "Math.pow(" + this.lastValue + "," + number + ")";
        }
        return this
    }
}

module.exports = SmartCalculator;
