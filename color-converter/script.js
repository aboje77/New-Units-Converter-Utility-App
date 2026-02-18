function convertColor() {
  const hex = document
    .getElementById("hexInput")
    .value.trim();
  const alpha =
    document.getElementById("alphaInput").value ||
    1;
  const result =
    document.getElementById("result");
  const card = document.getElementById(
    "converterCard"
  );

  if (!/^#([A-Fa-f0-9]{6})$/.test(hex)) {
    result.textContent =
      "Enter a valid 6-digit HEX (e.g. #3498DB)";
    return;
  }

  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  const rgba = `rgba(${r}, ${g}, ${b}, ${alpha})`;

  result.textContent = rgba;
  result.style.backgroundColor = rgba;

  /* Restart animation */
  card.classList.remove("animate-card");
  void card.offsetWidth;
  card.classList.add("animate-card");
}
