/*
Test 3:
  Alternate the text color of every other cell.
*/
{
  const els = document.querySelectorAll("cell:nth-child(even)");
  els.forEach((el) => (el.style.color = "#ccf"));
}
{
  const els = document.querySelectorAll("cell:nth-child(odd)");
  els.forEach((el) => (el.style.color = "#cfc"));
}
