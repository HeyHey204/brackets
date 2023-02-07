module.exports = function check(str, bracketsConfig) {
	let stack = [];
	let pairs = {};
	bracketsConfig.forEach(bracket => {
		pairs[bracket[0]] = bracket[1];
	});

	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (pairs[char]) {
			stack.push(char);
		} else {
			for (let key in pairs) {
				if (char === pairs[key]) {
					let last = stack.pop();
					if (last === undefined || last !== key) {
						return false;
					}
				}
			}
		}
	}
	return stack.length === 0;
}