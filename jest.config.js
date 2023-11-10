/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	collectCoverage: true, // Enable coverage collection
	coverageDirectory: 'coverage', // Specify the output directory for coverage reports
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}', // Specify the files for which coverage information should be collected
		'!src/**/*.d.ts', // Exclude TypeScript declaration files
	],
	coverageThreshold: {
		global: {
			// Set global thresholds
			branches: 50, // Percentage of branch coverage
			functions: 50, // Percentage of function coverage
			lines: 50, // Percentage of line coverage
			statements: 50, // Percentage of statement coverage
		},
	},
};
