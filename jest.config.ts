module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-js-dom',
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
	}
}

import type { Config } from 'jest'

const config: Config = {
	verbose: true
}

export default config
