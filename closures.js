function mf() {
  var name = "zilla"
  function dn() {
    console.log(name)
  }
  return dn
}

var f = mf()
f()
