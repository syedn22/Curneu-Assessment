export default class Calculator {
  static Prec(ch) {
    switch (ch) {
      case "+":
      case "-":
        return 1;

      case "*":
      case "/":
        return 2;

      case "^":
        return 3;
      default:
        return -1;
    }
  }

  static infixToPostfix(exp) {
    let result = "";

    let stack = [];

    for (let i = 0; i < exp.length; ++i) {
      let c = exp.charAt(i);

      if (c === " ") continue;
      else if (c >= "0" && c <= "9") {
        let n = 0;

        while (c >= "0" && c <= "9") {
          n = n * 10 + parseInt(c - "0");
          i++;
          c = exp.charAt(i);
        }
        i--;

        result += " ";
        result += n;
      } else if (c === "(") stack.push(c);
      else if (c === ")") {
        while (!(stack.length === 0) && stack[stack.length - 1] !== "(") {
          result += " ";
          result += stack.pop();
        }

        stack.pop();
      } else {
        while (
          !(stack.length === 0) &&
          Calculator.Prec(c) <= Calculator.Prec(stack[stack.length - 1])
        ) {
          result += " ";
          result += stack.pop();
        }
        stack.push(c);
      }
    }

    while (!(stack.length === 0)) {
      if (stack[stack.length - 1] === "(") return "Invalid Expression";
      result += " ";
      result += stack.pop();
    }
    return result;
  }

  static evaluatePostfix(exp) {
    let stack = [];
    for (let i = 0; i < exp.length; i++) {
      let c = exp.charAt(i);

      if (c === " ") continue;
      else if (c >= "0" && c <= "9") {
        let n = 0;

        while (c >= "0" && c <= "9") {
          n = n * 10 + parseInt(c - "0");
          i++;
          c = exp.charAt(i);
        }
        i--;

        stack.push(n);
      } else {
        let firstOperand = stack.pop();
        let secondOperand = stack.pop();

        switch (c) {
          case "+":
            stack.push(secondOperand + firstOperand);
            break;

          case "-":
            stack.push(secondOperand - firstOperand);
            break;

          case "/":
            stack.push(secondOperand / firstOperand);
            break;

          case "*":
            stack.push(secondOperand * firstOperand);
            break;
        }
      }
    }
    return stack.pop();
  }
}

