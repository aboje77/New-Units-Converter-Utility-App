const fromValue = document.getElementById('fromValue');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const resultEl = document.getElementById('result');
const convertBtn = document.getElementById('convertBtn');
const swapBtn = document.getElementById('swapBtn');

const factors = {
  days: 1,
  weeks: 7,
  months: 30.4375,
  years: 365.25
};

function formatUnit(u, v){
  const s = Number(v) === 1 ? u.slice(0, -1) : u;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function convert(){
  const value = parseFloat(fromValue.value);
  const f = fromUnit.value;
  const t = toUnit.value;
  if (isNaN(value)) {
    resultEl.textContent = 'Enter a valid number';
    return;
  }
  const inDays = value * factors[f];
  const converted = inDays / factors[t];
  resultEl.textContent = `${value} ${formatUnit(f, value)} = ${converted.toFixed(4)} ${formatUnit(t, converted)}`;
}

convertBtn.addEventListener('click', convert);
swapBtn.addEventListener('click', () => {
  const f = fromUnit.value;
  fromUnit.value = toUnit.value;
  toUnit.value = f;
  convert();
});
