export async function loadHtml(htmlText) {
  const tempDiv = document.createElement('div');
        
  tempDiv.innerHTML = htmlText;

  return tempDiv.firstChild;
}

export async function loadJson(path) {
  return await (await fetch(path)).json();
}