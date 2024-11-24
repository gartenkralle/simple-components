export async function loadHtml(path) {
  const htmlText = await (await fetch(path)).text();
  const tempDiv = document.createElement('div');
        
  tempDiv.innerHTML = htmlText;

  return tempDiv.firstChild;
}

export async function loadJson(path) {
  return await (await fetch(path)).json();
}