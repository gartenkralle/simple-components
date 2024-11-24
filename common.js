async function loadHtml(htmlText) {
  const tempDiv = document.createElement('div');
        
  tempDiv.innerHTML = htmlText;

  return tempDiv.firstChild;
}
