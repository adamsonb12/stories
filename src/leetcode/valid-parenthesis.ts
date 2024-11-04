export function isValid(s: string): boolean {
    const stack: string[] = [];
    const brackets: {[key: string]: string} = {
    ']': '[',
    '}': '{',
    ')': '(' 
    }
    const openers = ["[", "{", "("];

    for (const char of s.split("")) {
        if (openers.includes(char)) {
            stack.push(char);
        } else {
            const opener = stack.pop();

            if (brackets[char] !== opener) {
                return false;
            }
        }
    }

    return stack.length === 0;
};