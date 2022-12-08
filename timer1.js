const args = process.argv.slice(2);

for (const num of args) {
  if (num > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num * 1000);
  }
}