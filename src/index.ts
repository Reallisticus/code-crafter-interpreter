import * as dotenv from 'dotenv';
dotenv.config();

function main(): void {
	const test = process.env.TEST;
	console.log('	Hello World!', test);
}

main();
