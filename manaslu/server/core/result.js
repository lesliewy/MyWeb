function seterror(s, m) {
  return JSON.stringify({ success: s, message: m })
}

function setsuccess() {
  return JSON.stringify({ success: true });
}
