const inputRangeRef = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

inputRangeRef.addEventListener('input', () => {
  const fontSize = inputRangeRef.value + 'px';

  textSpan.style.fontSize = fontSize;
});

