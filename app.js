const main = document.getElementById('root');

const externalHTML = `<article class="markdown-body">
  <h1>Fancy Text Generator</h1>
<p>1. Ketikkan kata atau frasa Anda di kotak di bawah ini.</p>
<p>2. Gulir ke bawah untuk menemukan yang Anda suka. </p> 
<p>3. Klik salah satu yang ingin Anda gunakan untuk menyalinnya ke clipboard.</p>
  <div class="textfields">
    <div class="sticky-fontgene">

      <div class="lefthand">
        <div class="contain">
          <div class="my-text">
            <input id="my-text" placeholder="ketik teks Anda di sini...">
          </div>
        </div>
        <div class="fonts-cool" id="font-generator">
          <div class="font-generator-kaomoji-kuma"><span class="name">Squares Font</span>
            <p class="result" onclick="copy_all(this)">🄷🄴🄻🄻🄾 </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Old English Font</span>
            <p class="result" onclick="copy_all(this)">𝔥𝔢𝔩𝔩𝔬 </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Flip Font</span>
            <p class="result" onclick="copy_all(this)">ollǝɥ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Medieval Font</span>
            <p class="result" onclick="copy_all(this)">𝖍𝖊𝖑𝖑𝖔 </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Inverted Squares Font</span>
            <p class="result" onclick="copy_all(this)"> 🅷🅴🅻🅻🅾</p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Wide Font</span>
            <p class="result" onclick="copy_all(this)">ｈｅｌｌｏ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Tiny Font</span>
            <p class="result" onclick="copy_all(this)">ʜᴇʟʟᴏ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Cursive Font</span>
            <p class="result" onclick="copy_all(this)">𝓱𝓮𝓵𝓵𝓸 </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Round Squares Font</span>
            <p class="result" onclick="copy_all(this)">h⃣   e⃣   l⃣   l⃣   o⃣ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Scriptify Font</span>
            <p class="result" onclick="copy_all(this)">𝒽𝑒𝓁𝓁𝑜 </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Double Struck Font</span>
            <p class="result" onclick="copy_all(this)">𝕙𝕖𝕝𝕝𝕠 </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Mirror Font</span>
            <p class="result" onclick="copy_all(this)">o||ɘʜ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Creepify Font</span>
            <p class="result" onclick="copy_all(this)" style="padding:50px 0">h̶͕͖͍̬̩͛͐̉͂͗̋̊̒̚e̸͔͇̠͉̳̖̐̓̆͊̈́̒͑̂ļ̵̛̻̼̝̯̹̖̯̦͙̈́̍̅̕l̷̘̹̘͒́̽̏͛̓͌͊͆̃ō̵̤̑́̿ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Subscript Font</span>
            <p class="result" onclick="copy_all(this)">ₕₑₗₗₒ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Superscript Font</span>
            <p class="result" onclick="copy_all(this)">ʰᵉˡˡᵒ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Bent Font</span>
            <p class="result" onclick="copy_all(this)">հҽӀӀօ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Neon Font</span>
            <p class="result" onclick="copy_all(this)">ᕼEᒪᒪO </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Future Alien Font</span>
            <p class="result" onclick="copy_all(this)">ᕼᘿᒪᒪᓍ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Strike Through Font</span>
            <p class="result" onclick="copy_all(this)">h̶e̶l̶l̶o̶ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Tilde Strike Through Font</span>
            <p class="result" onclick="copy_all(this)">h̴e̴l̴l̴o̴ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Splash Through Font</span>
            <p class="result" onclick="copy_all(this)">h̷e̷l̷l̷o̷ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Underline Font</span>
            <p class="result" onclick="copy_all(this)">h̲e̲l̲l̲o̲ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Double Underline Font</span>
            <p class="result" onclick="copy_all(this)">h̳e̳l̳l̳o̳ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Bubble Font</span>
            <p class="result" onclick="copy_all(this)">ⓗⓔⓛⓛⓞ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Squiggle Font</span>
            <p class="result" onclick="copy_all(this)">ђєɭɭ๏ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Squiggle Font</span>
            <p class="result" onclick="copy_all(this)">ԋҽʅʅσ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Squiggle Font</span>
            <p class="result" onclick="copy_all(this)">ɦɛʟʟօ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Squiggle Font</span>
            <p class="result" onclick="copy_all(this)">ᏂᏋᏝᏝᎧ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Squiggle Font</span>
            <p class="result" onclick="copy_all(this)">ɧɛƖƖơ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Squiggle Font</span>
            <p class="result" onclick="copy_all(this)">hēll໐ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Bold Font</span>
            <p class="result" onclick="copy_all(this)">𝐡𝐞𝐥𝐥𝐨 </p>
          </div>
        </div>
        
        <div class="fonts-cool" id="font-generator-two">
          <div class="font-generator-kaomoji-kuma"><span class="name">Squares Font</span>
            <p class="result" onclick="copy_all(this)">h⃞ &nbsp;&nbsp; e⃞ &nbsp;&nbsp; l⃞ &nbsp;&nbsp; l⃞ &nbsp;&nbsp; o⃞ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Italic Font</span>
            <p class="result" onclick="copy_all(this)">𝘩𝘦𝘭𝘭𝘰 </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Bold Italic Font</span>
            <p class="result" onclick="copy_all(this)">𝙝𝙚𝙡𝙡𝙤 </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Monospace Font</span>
            <p class="result" onclick="copy_all(this)">𝚑𝚎𝚕𝚕𝚘 </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Upper Angles Font</span>
            <p class="result" onclick="copy_all(this)">ΉΣᄂᄂӨ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Greek Font</span>
            <p class="result" onclick="copy_all(this)">нєℓℓσ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Symbols Font</span>
            <p class="result" onclick="copy_all(this)">hêllð </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Currency Font</span>
            <p class="result" onclick="copy_all(this)">ⱧɆⱠⱠØ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Asian Style Font</span>
            <p class="result" onclick="copy_all(this)">卄乇ㄥㄥㄖ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Asian Style Font</span>
            <p class="result" onclick="copy_all(this)">ん乇ﾚﾚの </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Thick Block Font</span>
            <p class="result" onclick="copy_all(this)">【h】【e】【l】【l】【o】 </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Diametric Angle Font</span>
            <p class="result" onclick="copy_all(this)">『h』『e』『l』『l』『o』 </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Wavy Joiner Font</span>
            <p class="result" onclick="copy_all(this)">≋h≋e≋l≋l≋o≋ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Dotty Joiner Font</span>
            <p class="result" onclick="copy_all(this)">░h░e░l░l░o░ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Kirby Hug Font</span>
            <p class="result" onclick="copy_all(this)">(っ◔◡◔)っ ♥ hello ♥ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Little Sparkles Font</span>
            <p class="result" onclick="copy_all(this)">˜”*°•.˜”*°• hello •°*”˜.•°*”˜ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Wierd Box Font</span>
            <p class="result" onclick="copy_all(this)">[̲̅h][̲̅e][̲̅l][̲̅l][̲̅o] </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Firework Font</span>
            <p class="result" onclick="copy_all(this)">h҉e҉l҉l҉o҉ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Stinky Font</span>
            <p class="result" onclick="copy_all(this)">h̾e̾l̾l̾o̾ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Hearts Font</span>
            <p class="result" onclick="copy_all(this)">h♥e♥l♥l♥o </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Arrows Font</span>
            <p class="result" onclick="copy_all(this)">h͎e͎l͎l͎o͎ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Crosses Font</span>
            <p class="result" onclick="copy_all(this)">h͓̽e͓̽l͓̽l͓̽o͓̽ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Vaporwave Font</span>
            <p class="result" onclick="copy_all(this)">ｈｅｌｌｏ　-コ応</p>
          </div>,<div class="font-generator-kaomoji-kuma"><span class="name">Vaporwave Font</span>
            <p class="result" onclick="copy_all(this)">ｈｅｌｌｏ</p>
          </div>,<div class="font-generator-kaomoji-kuma"><span class="name">Vaporwave Font</span>
            <p class="result" onclick="copy_all(this)">【﻿ｈｅｌｌｏ】</p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Windings Font</span>
            <p class="result" onclick="copy_all(this)">Wingdings: ♒︎♏︎●︎●︎□︎ </p>
          </div>
        </div>

        <div class="fonts-cool" id="font-generator-three">
          <div class="font-generator-kaomoji-kuma"><span class="name">Cool Font</span>
            <p class="result" onclick="copy_all(this)">🐧♝ ℍ𝓔ℓ𝐋ｏ ♜♟ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Cool Font</span>
            <p class="result" onclick="copy_all(this)">👻👺 ʰ𝓔ⓛl𝕆 🐠😾 </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Cool Font</span>
            <p class="result" onclick="copy_all(this)">🐠🎉 нєĻᒪỖ ♠✋ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Cool Font</span>
            <p class="result" onclick="copy_all(this)">🍩♧ ħⒺ𝔩ｌ𝕆 😡☢ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Cool Font</span>
            <p class="result" onclick="copy_all(this)">¤¸¸.•´¯`•¸¸.•..&gt;&gt; 𝐇Ⓔˡ𝕃𝐨 &lt;&lt;..•.¸¸•´¯`•.¸¸¤ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Cool Font</span>
            <p class="result" onclick="copy_all(this)">💥👍 ⓗẸｌ𝓁𝓞 ♣😝 </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Cool Font</span>
            <p class="result" onclick="copy_all(this)">🐝😳 卄乇𝔩𝕃ㄖ 🐨👤 </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Cool Font</span>
            <p class="result" onclick="copy_all(this)">🐯🐯 Ħ乇lˡ𝑜 💔♗ </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Cool Font</span>
            <p class="result" onclick="copy_all(this)">🍭🐉 ĦᵉＬℓ𝓞 ♦🐙 </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Cool Font</span>
            <p class="result" onclick="copy_all(this)">.•♫•♬• ᕼєℓⓛᗝ •♬•♫•. </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Cool Font</span>
            <p class="result" onclick="copy_all(this)">🐜☠ 𝓗𝕖𝐋ⓛσ 🎅🐲 </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Cute Font</span>
            <p class="result" onclick="copy_all(this)">🕊 ⋆ 🐿 🎀 𝒽𝑒𝓁𝓁♡ 🎀 🐿 ⋆ 🕊 </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Cute Font</span>
            <p class="result" onclick="copy_all(this)">🐓 🎀 𝒽𝑒𝓁𝓁💙 🎀 🐓 </p>
          </div>
          <div class="font-generator-kaomoji-kuma"><span class="name">Cute Font</span>
            <p class="result" onclick="copy_all(this)">🐀 ⋆ 🐫 🎀 𝒽𝑒𝓁𝓁❀ 🎀 🐫 ⋆ 🐀 </p>
          </div>
        </div>
        <button class="button big" id="loading" style="margin-bottom: 20px;">Muat Lebih Banyak Font</button>
        <br/><br/>
        <hr />
        <div class="footer">&copy; 2004 <a href="https://www.facebook.com/bungferry.wa">Ferry Ayunda</a></div>
        <a href="#" id="move" style="display: none;"><span></span></a>
        <div class="loadcircle" style="display: none;">
          <div>
          </div>
        </div>
        </article>`;
// shows the alert
main.innerHTML = externalHTML;
