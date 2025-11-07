(function(){
  // Tabs
  const tabs = Array.from(document.querySelectorAll('.tablist [role="tab"]'));
  const panels = Array.from(document.querySelectorAll('.tabpanel'));
  function activate(id){
    tabs.forEach(b=>b.setAttribute('aria-selected', String(b.id===id)));
    panels.forEach(p=>p.classList.toggle('active', p.getAttribute('aria-labelledby')===id));
    history.replaceState(null,null,'#'+id.replace('tab-',''));
  }
  tabs.forEach(b=>b.addEventListener('click',()=>activate(b.id)));
  const initial = location.hash.replace('#','');
  const target = initial && document.getElementById('tab-'+initial) ? 'tab-'+initial : 'tab-about';
  activate(target);

  // DEX links placeholder
  const DEX = "https://raydium.io/swap/?outputCurrency=BCWX_ADDRESS";
  ["buyTop","buyHero","buy1","dexLink"].forEach(id=>{const el=document.getElementById(id); if(el) el.href = DEX;});
})();