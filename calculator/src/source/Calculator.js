import exactMath from "exact-math";

const customError = new Error("Invalid");
const config = { invalidError: customError };

export default class Calculator {
  static calculate(exp) {
    let result = "";
    try {
      result = exactMath.formula(exp, config);
    } catch (e) {
      result = e.message;
    }

    return result;
  }

  static mathFunction(e, value) {
    switch (e) {
      case "sin":
        return Math.sin(Number(value));
      case "cos":
        return Math.cos(Number(value));

      case "tan":
        return Math.tan(Number(value));

      case "1/tan":
        return 1 / Math.tan(Number(value));

      case "1/sin":
        return 1 / Math.sin(Number(value));

      case "1/cos":
        return 1 / Math.cos(Number(value));

      case "log":
        return Math.log10(Number(value));

      case "ln":
        return Math.log(Number(value));

      case "x^2":
        return Math.pow(Number(value), 2);

      case "x^3":
        return Math.pow(Number(value), 3);

      case "10^x":
        return Math.pow(10, Number(value));

      case "e^x":
        return Math.pow(Math.E, Number(value));

      case "1/x":
        return 1 / Number(value);

      case "√x":
        return Math.sqrt(Number(value));

      case "3√x":
        return Math.cbrt(Number(value));

      case "n!":
        return Calculator.factorial(Number(value));
    }

    return NaN;
  }

  static factorial(num) {
    let fac = 1;
    for (let i = 1; i <= num; i++) {
      fac *= i;
    }

    return fac;
  }
}
