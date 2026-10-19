function copyCaption(btn){
  var card = btn.closest('.card');
  var cap = card.querySelector('.caption');
  var done = card.querySelector('.copied');
  function ok(){ if(done){ done.textContent = 'Copied \u2713'; setTimeout(function(){done.textContent='';},2200);} }
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(cap.innerText).then(ok, function(){ fallback(); });
  } else { fallback(); }
  function fallback(){
    var r = document.createRange(); r.selectNodeContents(cap);
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    try{ document.execCommand('copy'); ok(); }catch(e){}
    s.removeAllRanges();
  }
}
