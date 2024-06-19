import Calculator from "../src/calculator";

async function main() {
    console.log(
        "The sum of 1 and 2 is 3",
        Calculator.Sum(1, 2) === 3 ? "✅" : "❌"
    );
}

main()
    .catch(console.error)
    .finally(() => process.exit());
