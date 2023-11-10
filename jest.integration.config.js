module.exports = {
	// Indicates whether each individual test should be reported during the run
	verbose: true,

	// The root directory that Jest should scan for tests and modules within
	rootDir: '../',

	// A list of paths to directories that Jest should use to search for files in
	roots: ['<rootDir>/tests/integration'],

	// The test environment that will be used for testing
	testEnvironment: 'node',

	// The glob patterns Jest uses to detect test files
	testMatch: [
		'**/tests/integration/**/*.test.ts',
		'**/tests/integration/**/*.spec.ts',
	],

	// Module file extensions for importing
	moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],

	// Transform settings for TypeScript files
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
};
