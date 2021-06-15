/*
Test 4.a:
  Write a custom function that accepts a selector string and returns an array of DOM elements 
    just like existing query selector functions without using any existing selector functions.
  For selector parsing, only worry about tag names, class names, IDs, 
    and space separators for tokenization.
*/
const selectAll = (selector, node = null) => {
  if (!node) {
    node = document.body;
  }

  let tokens = selector.trim().split(" ");
  let token = tokens[0].toLowerCase();
  let action = "tag";
  if (token.startsWith(".")) {
    action = "class";
    token = token.slice(1);
  } else if (token.startsWith("#")) {
    action = "id";
    token = token.slice(1);
  }

  let results = [];
  switch (action) {
    case "id":
      if (node.id.toLowerCase() === token) {
        results.push(node);
      }
      break;
    case "class":
      if (node.className.toLowerCase() === token) {
        results.push(node);
      }
      break;
    case "tag":
    default:
      if (node.tagName.toLowerCase() === token) {
        results.push(node);
      }
      break;
  }

  for (const child of node.children) {
    results.splice(results.length, 0, ...selectAll(tokens[0], child));
  }

  // Reduce the selector and continue if we still have more selector
  selector = tokens.slice(1).join(" ").trim();
  if (selector.length) {
    for (let index = results.length - 1; index > -1; --index) {
      const parent = results[index];
      const subResults = [];
      for (const child of parent.children) {
        subResults.splice(subResults.length, 0, ...selectAll(selector, child));
      }
      results.splice(index, 1, ...subResults);
    }
  }

  return results;
};

/*
Test 4.b:
  Use the custom query selector function to duplicate the solution for Test 1.
    Commment out your code for Test 1 if necessary to prevent conflicts.
*/
{
  const els = selectAll("#croc");
  els[0].style.background = "red";
}

/*
Test 4.c:
  Use the custom query selector function to duplicate the solution for Test 2.
    Commment out your code for Test 2 if necessary to prevent conflicts.
*/
{
  const els = selectAll(".actor em strong");
  els.forEach((el) => (el.innerHTML = "Fool"));
}
