function amountNormalize(str) {
  if (!str.match('руб.')) {
    const arr = str.split('.');
    arr.splice(arr.length - 1, 1);
    return `${arr.join(' ')} руб.`;
  }
  return str;
}

function main() {
  const amounts = document.querySelectorAll('.amount');
  Object.keys(amounts).forEach((i) => {
    amounts[i].textContent = amountNormalize(amounts[i].textContent);
  });
}

main();
