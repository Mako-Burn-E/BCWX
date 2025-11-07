// Minimal hookup for buy links
const RAYDIUM = "https://raydium.io/swap/?outputCurrency=BCWX_ADDRESS"; // <-- replace token address
["buyTop","buyHero","buy1"].forEach(id=>{
  const el = document.getElementById(id);
  if (el) el.href = RAYDIUM;
});
document.getElementById("dexLink")?.setAttribute("href", RAYDIUM);
