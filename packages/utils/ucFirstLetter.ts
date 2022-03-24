const ucFirst = (txt = "") => {
  if (!txt) return "";
  const lowered = txt.toLowerCase();
  const ucWord = `${lowered.charAt(0).toUpperCase()}${lowered.slice(1)}`;
  return ucWord;
}

export default ucFirst;
