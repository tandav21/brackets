module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    let current = bracketsConfig[i];
    if (current === '(' || current === '[' || current === "{") {
      stack.push(current);
  }
  else if (current === ')' || current === ']' || current === "}") {
    let lastBracket =  stack.pop();
    
    if (str[lastBracket] !== current) { 
    
      return false; 
    }
  }
}
return stack.length === 0;
}
