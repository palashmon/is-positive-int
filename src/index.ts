export default function isPositiveInt(n: number): boolean {
	const MAX_SAFE_INTEGER: number = Number.MAX_SAFE_INTEGER || 9007199254740991;
	return Number.isInteger(n) && n >= 0 && n <= MAX_SAFE_INTEGER;
}
