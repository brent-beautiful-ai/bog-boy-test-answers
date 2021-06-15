/*
Test 2:
  Change the text of the cells that say "Boy" to say "Fool" instead.
*/
{
  const els = document.querySelectorAll(".actor em strong");
  // const els = $(".actor em strong");
  els.forEach((el) => (el.innerHTML = "Fool"));
}
