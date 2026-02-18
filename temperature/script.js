const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');
const resetBtn = document.getElementById('resetBtn');
const resultEl = document.getElementById('result');
const errorEl = document.getElementById('error');

function setError(msg, input){
  errorEl.textContent = msg || '';
  const invalid = Boolean(msg);
  if (input) input.setAttribute('aria-invalid', invalid ? 'true' : 'false');
}

function clearOthers(except){
  if (except !== celsius) celsius.value = '';
  if (except !== fahrenheit) fahrenheit.value = '';
  if (except !== kelvin) kelvin.value = '';
  resultEl.textContent = '';
}

function format(v){return Number.isFinite(v) ? v.toFixed(4) : ''}

function updateFromC(){
  const v = celsius.value;
  if (v === '') { setError('', celsius); clearOthers(celsius); return; }
  const n = parseFloat(v);
  if (Number.isNaN(n)) { setError('Enter a valid number', celsius); clearOthers(celsius); return; }
  const k = n + 273.15;
  if (k < 0) { setError('Kelvin cannot be negative', celsius); clearOthers(celsius); return; }
  const f = n * 9/5 + 32;
  fahrenheit.value = format(f);
  kelvin.value = format(k);
  setError('', celsius);
  resultEl.textContent = `${format(n)} °C = ${format(f)} °F, ${format(k)} K`;
}

function updateFromF(){
  const v = fahrenheit.value;
  if (v === '') { setError('', fahrenheit); clearOthers(fahrenheit); return; }
  const n = parseFloat(v);
  if (Number.isNaN(n)) { setError('Enter a valid number', fahrenheit); clearOthers(fahrenheit); return; }
  const c = (n - 32) * 5/9;
  const k = c + 273.15;
  if (k < 0) { setError('Kelvin cannot be negative', fahrenheit); clearOthers(fahrenheit); return; }
  celsius.value = format(c);
  kelvin.value = format(k);
  setError('', fahrenheit);
  resultEl.textContent = `${format(n)} °F = ${format(c)} °C, ${format(k)} K`;
}

function updateFromK(){
  const v = kelvin.value;
  if (v === '') { setError('', kelvin); clearOthers(kelvin); return; }
  const n = parseFloat(v);
  if (Number.isNaN(n)) { setError('Enter a valid number', kelvin); clearOthers(kelvin); return; }
  if (n < 0) { setError('Kelvin cannot be negative', kelvin); clearOthers(kelvin); return; }
  const c = n - 273.15;
  const f = c * 9/5 + 32;
  celsius.value = format(c);
  fahrenheit.value = format(f);
  setError('', kelvin);
  resultEl.textContent = `${format(n)} K = ${format(c)} °C, ${format(f)} °F`;
}

celsius.addEventListener('input', updateFromC);
fahrenheit.addEventListener('input', updateFromF);
kelvin.addEventListener('input', updateFromK);

resetBtn.addEventListener('click', () => {
  celsius.value = '';
  fahrenheit.value = '';
  kelvin.value = '';
  setError('', null);
  resultEl.textContent = '';
  celsius.focus();
});
