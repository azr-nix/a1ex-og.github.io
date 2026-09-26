(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))u(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function u(n){if(n.ep)return;n.ep=!0;const e=s(n);fetch(n.href,e)}})();const g={name:"NEHNA",date:"28 September 2026",accessKeyHash:"efb1eec2c57d1cbebbd270cd1452d8ff285977c8e3871684718a4c93446b04c8",lockSubtitles:{teaser:"A little surprise is waiting for you.",instruction:"Enter the key to continue.",error:"That doesn't seem to be the right key.",welcome:"Welcome, NEHNA."},hero:{heading:"Happy Birthday, NEHNA.",subtitle:"28 September 2026",tagline:"Today is all about you."},intro:{heading:"A day worth celebrating.",text:"Another year, another collection of moments, experiences, little victories, unexpected laughs, and new things waiting ahead."},birthdayMessage:{heading:"A little birthday note.",paragraphs:["Wishing you the happiest of birthdays today, NEHNA! May this day bring a smile to your face and mark the beginning of a truly remarkable year ahead.","As you step into another chapter, I hope you take a moment to celebrate everything you've achieved, the growth you've embraced, and all the light you bring to the people around you.","Here's to new discoveries, quiet strength, great health, endless inspiration, and moments of joy in every season of the coming year."]},photos:[{id:"photo-2",image:"/images/hanami.png",title:"Hanami Haven",date:"2026",description:"The community we build together."}],wishes:[{icon:"✦",title:"More adventures",description:"New places to explore, fresh paths to walk, and inspiring horizons ahead."},{icon:"☀",title:"More reasons to smile",description:"Everyday moments filled with warmth, spontaneous laughter, and ease."},{icon:"✦",title:"More unforgettable moments",description:"Snapshots of joy that stay with you long after the day is done."},{icon:"★",title:"More things to be proud of",description:"Recognizing your worth, celebrating your progress, and honoring your journey."},{icon:"🌱",title:"More opportunities to grow",description:"Confidence to embrace new challenges and thrive in all you pursue."},{icon:"✧",title:"More happiness in the little things",description:"Finding quiet peace in simple rituals, good conversations, and serene days."}],finalMessage:{heading:"Once again...",mainTitle:"Happy Birthday, NEHNA.",subText:"Wishing you a beautiful year ahead.",signatureDate:"28.09.2026"},musicTrack:{title:"Atmospheric Reflections",src:""}},Q="birthday_unlocked_session_2026";async function ie(i){const o=i.trim(),u=new TextEncoder().encode(o),n=await window.crypto.subtle.digest("SHA-256",u);return Array.from(new Uint8Array(n)).map(r=>r.toString(16).padStart(2,"0")).join("")}async function oe(i){if(!i)return!1;try{return(await ie(i)).toLowerCase()===g.accessKeyHash.toLowerCase()}catch(o){return console.error("Security hash verification error:",o),!1}}function se(){try{return sessionStorage.getItem(Q)==="true"}catch{return!1}}function j(i=!0){try{i?sessionStorage.setItem(Q,"true"):sessionStorage.removeItem(Q)}catch(o){console.warn("Session storage write error:",o)}}function ae(i="particle-canvas"){const o=document.getElementById(i);if(!o)return;const s=o.getContext("2d");let u,n=[],e=0,r=0,d={x:null,y:null,targetX:0,targetY:0};const w=window.matchMedia("(prefers-reduced-motion: reduce)");let b=w.matches;w.addEventListener("change",m=>{b=m.matches,b?(cancelAnimationFrame(u),s.clearRect(0,0,e,r)):I()});function p(){e=o.width=window.innerWidth,r=o.height=window.innerHeight,x()}function x(){n=[];const m=e<768?25:55,t=["rgba(245, 242, 235, ","rgba(223, 184, 115, ","rgba(220, 168, 180, ","rgba(180, 80, 100, "];for(let a=0;a<m;a++)n.push({x:Math.random()*e,y:Math.random()*r,radius:Math.random()*1.8+.6,baseColor:t[Math.floor(Math.random()*t.length)],alpha:Math.random()*.4+.1,speedY:-(Math.random()*.35+.1),speedX:(Math.random()-.5)*.2,pulseSpeed:Math.random()*.02+.005,pulseAngle:Math.random()*Math.PI*2})}function E(m){b||(d.targetX=(m.clientX-e/2)*.03,d.targetY=(m.clientY-r/2)*.03)}function v(){s.clearRect(0,0,e,r),d.x+=(d.targetX-(d.x||0))*.05,d.y+=(d.targetY-(d.y||0))*.05;for(let m=0;m<n.length;m++){const t=n[m];t.pulseAngle+=t.pulseSpeed;const a=Math.max(.05,t.alpha+Math.sin(t.pulseAngle)*.15);t.y+=t.speedY,t.x+=t.speedX,t.y<-10&&(t.y=r+10,t.x=Math.random()*e),t.x<-10&&(t.x=e+10),t.x>e+10&&(t.x=-10);const l=t.x+(d.x||0),y=t.y+(d.y||0);s.beginPath();const h=s.createRadialGradient(l,y,0,l,y,t.radius*3);h.addColorStop(0,`${t.baseColor}${a})`),h.addColorStop(1,`${t.baseColor}0)`),s.fillStyle=h,s.arc(l,y,t.radius*3,0,Math.PI*2),s.fill(),s.beginPath(),s.fillStyle=`${t.baseColor}${a*1.5})`,s.arc(l,y,t.radius,0,Math.PI*2),s.fill()}b||(u=requestAnimationFrame(v))}function I(){b||(cancelAnimationFrame(u),v())}return window.addEventListener("resize",p),window.addEventListener("mousemove",E),p(),I(),{destroy(){window.removeEventListener("resize",p),window.removeEventListener("mousemove",E),cancelAnimationFrame(u)}}}function K(i){if(!i)return"";if(i.startsWith("http://")||i.startsWith("https://")||i.startsWith("data:"))return i;const o="/a1ex-og.github.io/",s=i.startsWith("/")?i.slice(1):i;return`${o.endsWith("/")?o:`${o}/`}${s}`}function re(i){const o=document.getElementById("lightbox-modal"),s=document.getElementById("lightbox-img"),u=document.getElementById("lightbox-title"),n=document.getElementById("lightbox-date"),e=document.getElementById("lightbox-desc"),r=document.getElementById("lightbox-counter"),d=document.getElementById("lightbox-close"),w=document.getElementById("lightbox-prev"),b=document.getElementById("lightbox-next");if(!o||!s||!i||i.length===0)return{open:()=>{},close:()=>{}};let p=0,x=0,E=0;function v(){const c=i[p];c&&(s.style.opacity="0",s.style.transform="scale(0.96)",setTimeout(()=>{s.src=K(c.image),s.alt=c.title||"Photo",u.textContent=c.title||"",n.textContent=c.date||"",e.textContent=c.description||"",r&&(r.textContent=`${p+1} / ${i.length}`),s.style.opacity="1",s.style.transform="scale(1)"},150))}function I(c=0){p=(c+i.length)%i.length,o.classList.add("active"),o.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden",v()}function m(){o.classList.remove("active"),o.setAttribute("aria-hidden","true"),document.body.style.overflow=""}function t(){p=(p-1+i.length)%i.length,v()}function a(){p=(p+1)%i.length,v()}function l(c){o.classList.contains("active")&&(c.key==="Escape"&&m(),c.key==="ArrowLeft"&&t(),c.key==="ArrowRight"&&a())}function y(c){o.classList.contains("active")&&(x=c.changedTouches[0].screenX)}function h(c){o.classList.contains("active")&&(E=c.changedTouches[0].screenX,f())}function f(){const L=E-x;Math.abs(L)>40&&(L<0?a():t())}return d&&d.addEventListener("click",m),w&&w.addEventListener("click",t),b&&b.addEventListener("click",a),o.addEventListener("click",c=>{(c.target===o||c.target.classList.contains("lightbox-backdrop"))&&m()}),window.addEventListener("keydown",l),o.addEventListener("touchstart",y,{passive:!0}),o.addEventListener("touchend",h,{passive:!0}),{open:I,close:m,next:a,prev:t}}function le(){const i=document.getElementById("music-control-btn"),o=document.getElementById("music-control-label"),s=document.getElementById("music-control-icon");if(!i)return;const u="birthday_audio_playing_state";let n=!1,e=null,r=null,d=[],w=!1,b=null;function p(){if(!w)try{let f=function(c){d.forEach(L=>{try{L.stop(e.currentTime+2)}catch{}}),d=[],c.forEach(L=>{const k=e.createOscillator(),B=e.createGain();k.type="sine",k.frequency.setValueAtTime(L,e.currentTime),k.detune.setValueAtTime((Math.random()-.5)*8,e.currentTime),B.gain.setValueAtTime(.001,e.currentTime),B.gain.exponentialRampToValueAtTime(.08,e.currentTime+1.5),B.gain.exponentialRampToValueAtTime(.001,e.currentTime+5.5),k.connect(B),B.connect(r),k.start(e.currentTime),d.push(k)})};var a=f;const l=window.AudioContext||window.webkitAudioContext;e||(e=new l),e.state==="suspended"&&e.resume(),r=e.createGain(),r.gain.setValueAtTime(.001,e.currentTime),r.gain.exponentialRampToValueAtTime(.18,e.currentTime+3),r.connect(e.destination);const y=[[220,261.63,329.63,392,493.88],[174.61,220,261.63,329.63,392],[261.63,329.63,392,493.88,587.33],[196,246.94,293.66,392,440]];let h=0;f(y[h]),b=setInterval(()=>{h=(h+1)%y.length,f(y[h])},6e3),w=!0}catch(l){console.warn("Web Audio synth error:",l)}}function x(){w&&(b&&clearInterval(b),r&&e&&(r.gain.exponentialRampToValueAtTime(1e-4,e.currentTime+1.5),setTimeout(()=>{d.forEach(a=>{try{a.stop()}catch{}}),d=[],w=!1},1600)))}function E(){n?(i.classList.add("playing"),i.setAttribute("aria-pressed","true"),o&&(o.textContent="Pause Music"),s&&(s.innerHTML='<span class="equalizer-bar"></span><span class="equalizer-bar"></span><span class="equalizer-bar"></span>')):(i.classList.remove("playing"),i.setAttribute("aria-pressed","false"),o&&(o.textContent="♪ Music"),s&&(s.textContent="♪"))}function v(){n=!0;try{sessionStorage.setItem(u,"true")}catch{}p(),E()}function I(){n=!1;try{sessionStorage.setItem(u,"false")}catch{}x(),E()}function m(){n?I():v()}if(i.addEventListener("click",m),sessionStorage.getItem(u)==="true"){const a=()=>{sessionStorage.getItem(u)==="true"&&!n&&v(),window.removeEventListener("click",a),window.removeEventListener("keydown",a)};window.addEventListener("click",a,{once:!0}),window.addEventListener("keydown",a,{once:!0})}return E(),{play:v,pause:I,toggle:m}}function ce(i={}){const{onExtinguished:o}=i,s=document.getElementById("cake-screen"),u=document.getElementById("cake-svg-wrapper"),n=document.getElementById("blow-candles-btn");if(document.getElementById("cake-subtitle"),!s||!u)return{show:()=>{},hide:()=>{}};let e=!1,r=null,d=null;function w(){u.innerHTML=`
      <svg viewBox="0 0 320 320" width="100%" height="100%" class="cake-svg" aria-label="Birthday Cake with 3 Candles">
        <defs>
          <!-- Candle Flame Glow Filter -->
          <radialGradient id="flameGlowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ffea9f" stop-opacity="0.9"/>
            <stop offset="40%" stop-color="#ff9e00" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="#e63946" stop-opacity="0"/>
          </radialGradient>

          <!-- Cake Plate Shadow -->
          <filter id="shadowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="15" flood-color="#000000" flood-opacity="0.75"/>
          </filter>

          <!-- Gold Pearl Gradient -->
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f3d89d"/>
            <stop offset="50%" stop-color="#dfb873"/>
            <stop offset="100%" stop-color="#9e7c3b"/>
          </linearGradient>

          <!-- Cream Frosting Gradient -->
          <linearGradient id="creamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="100%" stop-color="#ede6d8"/>
          </linearGradient>

          <!-- Dark Chocolate Gradient -->
          <linearGradient id="chocGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#2a171d"/>
            <stop offset="100%" stop-color="#140a0e"/>
          </linearGradient>
        </defs>

        <!-- Ambient Candlelight Base Glow -->
        <circle id="ambient-glow" cx="160" cy="85" r="90" fill="url(#flameGlowGrad)" class="ambient-candle-glow" />

        <g filter="url(#shadowFilter)">
          <!-- Plate Base -->
          <ellipse cx="160" cy="275" rx="135" ry="18" fill="url(#goldGrad)" opacity="0.9" />
          <ellipse cx="160" cy="272" rx="125" ry="14" fill="#181822" />

          <!-- Bottom Tier (Dark Chocolate with Gold Pearls) -->
          <rect x="55" y="195" width="210" height="70" rx="12" fill="url(#chocGrad)" />
          <!-- Cream Drips on Bottom Tier -->
          <path d="M55,195 Q70,215 85,195 T115,195 T145,218 T175,195 T205,212 T235,195 T265,195 L265,195 L55,195 Z" fill="url(#creamGrad)" />

          <!-- Gold Accent Pearls -->
          <circle cx="75" cy="245" r="3.5" fill="url(#goldGrad)" />
          <circle cx="115" cy="248" r="3.5" fill="url(#goldGrad)" />
          <circle cx="160" cy="250" r="4" fill="url(#goldGrad)" />
          <circle cx="205" cy="248" r="3.5" fill="url(#goldGrad)" />
          <circle cx="245" cy="245" r="3.5" fill="url(#goldGrad)" />

          <!-- Top Tier (Cream Frosting with Burgundy Ribbon) -->
          <rect x="85" y="135" width="150" height="62" rx="10" fill="url(#creamGrad)" />
          <!-- Burgundy Ribbon Band -->
          <rect x="85" y="180" width="150" height="12" fill="#6e1a28" />

          <!-- Frosting Swirl Top Border -->
          <path d="M85,135 Q100,143 115,135 T145,143 T175,135 T205,143 T235,135" fill="none" stroke="#dfb873" stroke-width="3" />
        </g>

        <!-- CANDLE 1 (Left) -->
        <g class="candle-group" data-candle="1">
          <rect x="110" y="95" width="8" height="42" rx="3" fill="url(#goldGrad)" />
          <line x1="114" y1="95" x2="114" y2="88" stroke="#333" stroke-width="1.5" />
          <g class="flame-container" id="flame-1">
            <ellipse cx="114" cy="80" rx="14" ry="20" fill="url(#flameGlowGrad)" class="flame-glow" />
            <path d="M114,66 Q122,80 114,86 Q106,80 114,66 Z" fill="#ffb703" class="flame-body" />
            <path d="M114,72 Q118,80 114,84 Q110,80 114,72 Z" fill="#ffffff" class="flame-core" />
          </g>
        </g>

        <!-- CANDLE 2 (Center) -->
        <g class="candle-group" data-candle="2">
          <rect x="156" y="85" width="8" height="52" rx="3" fill="url(#goldGrad)" />
          <line x1="160" y1="85" x2="160" y2="77" stroke="#333" stroke-width="1.5" />
          <g class="flame-container" id="flame-2">
            <ellipse cx="160" cy="68" rx="16" ry="22" fill="url(#flameGlowGrad)" class="flame-glow" />
            <path d="M160,53 Q169,68 160,75 Q151,68 160,53 Z" fill="#ffb703" class="flame-body" />
            <path d="M160,60 Q164,68 160,73 Q156,68 160,60 Z" fill="#ffffff" class="flame-core" />
          </g>
        </g>

        <!-- CANDLE 3 (Right) -->
        <g class="candle-group" data-candle="3">
          <rect x="202" y="95" width="8" height="42" rx="3" fill="url(#goldGrad)" />
          <line x1="206" y1="95" x2="206" y2="88" stroke="#333" stroke-width="1.5" />
          <g class="flame-container" id="flame-3">
            <ellipse cx="206" cy="80" rx="14" ry="20" fill="url(#flameGlowGrad)" class="flame-glow" />
            <path d="M206,66 Q214,80 206,86 Q198,80 206,66 Z" fill="#ffb703" class="flame-body" />
            <path d="M206,72 Q210,80 206,84 Q202,80 206,72 Z" fill="#ffffff" class="flame-core" />
          </g>
        </g>

        <!-- Dynamic Smoke Particle Group -->
        <g id="smoke-particles-group"></g>
        <!-- Dynamic Golden Sparks Group -->
        <g id="gold-sparks-group"></g>
      </svg>
    `}function b(){const t=document.getElementById("smoke-particles-group");if(!t)return;[{x:114,y:88},{x:160,y:77},{x:206,y:88}].forEach((l,y)=>{for(let h=0;h<4;h++){const f=document.createElementNS("http://www.w3.org/2000/svg","circle");f.setAttribute("cx",l.x+(Math.random()-.5)*4),f.setAttribute("cy",l.y),f.setAttribute("r",Math.random()*2+2),f.setAttribute("fill","rgba(215, 210, 200, 0.6)"),f.classList.add("smoke-particle"),f.style.animationDelay=`${y*.1+h*.15}s`,t.appendChild(f)}})}function p(){const t=document.getElementById("gold-sparks-group");if(t)for(let a=0;a<16;a++){const l=document.createElementNS("http://www.w3.org/2000/svg","circle"),y=a/16*Math.PI*2,h=Math.random()*40+20,f=160+Math.cos(y)*h,c=120+Math.sin(y)*h;l.setAttribute("cx","160"),l.setAttribute("cy","120"),l.setAttribute("r",Math.random()*2+1),l.setAttribute("fill","#dfb873"),l.classList.add("gold-spark-particle"),l.style.setProperty("--target-x",`${f}px`),l.style.setProperty("--target-y",`${c}px`),t.appendChild(l)}}function x(){if(e)return;e=!0,v();const t=u.querySelectorAll(".flame-container"),a=document.getElementById("ambient-glow");t.forEach(l=>l.classList.add("extinguishing")),n&&(n.disabled=!0),setTimeout(()=>{t.forEach(l=>l.classList.add("extinguished")),a&&(a.style.opacity="0"),b(),p(),setTimeout(()=>{s.classList.add("fade-out"),setTimeout(()=>{s.classList.remove("active","fade-out"),typeof o=="function"&&o()},500)},1400)},500)}async function E(){var a,l;if((l=(a=window.navigator)==null?void 0:a.mediaDevices)!=null&&l.getUserMedia)try{let k=function(){if(e)return;f.getByteFrequencyData(L);let B=0;for(let P=0;P<c;P++)B+=L[P];B/c>65?x():requestAnimationFrame(k)};var t=k;d=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1});const y=window.AudioContext||window.webkitAudioContext;r=new y;const h=r.createMediaStreamSource(d),f=r.createAnalyser();f.fftSize=256,h.connect(f);const c=f.frequencyBinCount,L=new Uint8Array(c);k()}catch{}}function v(){if(d&&(d.getTracks().forEach(t=>t.stop()),d=null),r&&r.state!=="closed")try{r.close()}catch{}}function I(){e=!1,w(),s.classList.add("active"),u.addEventListener("click",x),n&&(n.disabled=!1,n.addEventListener("click",x)),E()}function m(){s.classList.remove("active"),v()}return{show:I,hide:m,extinguishCandles:x}}document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("access-lock-screen"),o=document.getElementById("lock-form"),s=document.getElementById("lock-key-input"),u=document.getElementById("lock-submit-btn"),n=document.getElementById("lock-error-msg"),e=document.getElementById("welcome-toast"),r=document.getElementById("welcome-msg"),d=document.getElementById("scroll-progress-bar"),w=document.getElementById("back-to-top-btn"),b=document.getElementById("main-header"),p=document.getElementById("main-content"),x=document.getElementById("relock-btn"),E=document.getElementById("hero-heading"),v=document.getElementById("hero-subtitle"),I=document.getElementById("hero-tagline"),m=document.getElementById("intro-heading"),t=document.getElementById("intro-text"),a=document.getElementById("note-heading"),l=document.getElementById("note-body"),y=document.getElementById("photos-heading");document.getElementById("photos-subtitle");const h=document.getElementById("photos-grid"),f=document.getElementById("timeline"),c=document.getElementById("timeline-container"),L=document.getElementById("nav-timeline-item"),k=document.getElementById("wishes-grid"),B=document.getElementById("final-heading"),R=document.getElementById("final-main-title"),P=document.getElementById("final-subtext"),V=document.getElementById("final-sign-date");ae("particle-canvas");const X=re(g.photos||[]);le();const U=ce({onExtinguished:()=>{Y(!0)}});function Z(){var T,M,$,O,F,q,S,H,G,N,_;E&&(E.textContent=(T=g.hero)==null?void 0:T.heading),v&&(v.textContent="28 · 09 · 2026"),I&&(I.textContent=(M=g.hero)==null?void 0:M.tagline),m&&(m.textContent=($=g.intro)==null?void 0:$.heading),t&&(t.textContent=(O=g.intro)==null?void 0:O.text),a&&(a.textContent=(F=g.birthdayMessage)==null?void 0:F.heading),l&&((q=g.birthdayMessage)!=null&&q.paragraphs)&&(l.innerHTML=g.birthdayMessage.paragraphs.map(C=>`<p class="message-paragraph">${C}</p>`).join("")),y&&g.photos&&(h.innerHTML=g.photos.map((A,D)=>`
        <article class="memory-card reveal" data-index="${D}" role="button" tabindex="0" aria-label="View photo: ${A.title}">
          <div class="memory-img-wrapper">
            <img src="${K(A.image)}" alt="${A.title}" class="memory-img" loading="lazy" />
          </div>
          <div class="memory-body">
            <div class="memory-header">
              <h3 class="memory-title">${A.title}</h3>
              ${A.date?`<span class="memory-date">${A.date}</span>`:""}
            </div>
            ${A.description?`<p class="memory-desc">${A.description}</p>`:""}
          </div>
        </article>
      `).join(""),h.querySelectorAll(".memory-card").forEach(A=>{const D=parseInt(A.getAttribute("data-index"),10);A.addEventListener("click",()=>X.open(D)),A.addEventListener("keydown",W=>{(W.key==="Enter"||W.key===" ")&&(W.preventDefault(),X.open(D))})})),g.timeline&&g.timeline.length>0?(f&&(f.style.display=""),L&&(L.style.display=""),c&&(c.innerHTML=g.timeline.map(C=>`
          <div class="timeline-item reveal">
            <div class="timeline-node" aria-hidden="true"></div>
            <div class="timeline-content">
              <span class="timeline-date">${C.date}</span>
              <h3 class="timeline-title">${C.title}</h3>
              <p class="timeline-desc">${C.description}</p>
            </div>
          </div>
        `).join(""))):(f&&(f.style.display="none"),L&&(L.style.display="none")),k&&g.wishes&&(k.innerHTML=g.wishes.map(C=>`
        <div class="wish-card reveal">
          <span class="wish-icon">${C.icon||"✦"}</span>
          <h3 class="wish-title">${C.title}</h3>
          <p class="wish-desc">${C.description}</p>
        </div>
      `).join("")),B&&(B.textContent=(S=g.finalMessage)==null?void 0:S.heading),R&&(R.textContent=(H=g.finalMessage)==null?void 0:H.mainTitle),P&&(P.textContent=(G=g.finalMessage)==null?void 0:G.subText),V&&(V.textContent=(N=g.finalMessage)==null?void 0:N.signatureDate),r&&(r.textContent=(_=g.lockSubtitles)==null?void 0:_.welcome)}function J(){e&&(e.classList.remove("hidden"),setTimeout(()=>{e.classList.add("hidden")},3500))}function Y(T=!0){j(!0),T?(i.classList.add("unlocked"),setTimeout(()=>{b.classList.remove("hidden"),p.classList.remove("hidden"),z(),J()},300)):(i.classList.add("unlocked"),b.classList.remove("hidden"),p.classList.remove("hidden"),z())}function ee(){j(!1),b.classList.add("hidden"),p.classList.add("hidden"),i.classList.remove("unlocked"),U.hide(),e&&e.classList.add("hidden"),s&&(s.value=""),n&&(n.textContent="",n.classList.remove("visible"))}async function te(T){T&&T.preventDefault();const M=s.value.trim();if(!M)return;await oe(M)?(n&&(n.textContent="",n.classList.remove("visible")),u&&u.classList.add("success-active"),setTimeout(()=>{u&&u.classList.remove("success-active"),i.classList.add("unlocked"),U.show()},250)):(s.classList.add("shake"),n&&(n.textContent="Try again.",n.classList.add("visible")),setTimeout(()=>{s.classList.remove("shake"),s.value="",s.focus()},450))}o&&o.addEventListener("submit",te),x&&x.addEventListener("click",ee);function ne(){const T=window.scrollY||document.documentElement.scrollTop,M=document.documentElement.scrollHeight-document.documentElement.clientHeight;if(d&&M>0){const $=T/M*100;d.style.width=`${Math.min(100,Math.max(0,$))}%`}w&&(T>300?w.classList.remove("hidden"):w.classList.add("hidden"))}w&&w.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",ne,{passive:!0});function z(){const T=document.querySelectorAll(".reveal"),M={root:null,threshold:.12,rootMargin:"0px 0px -40px 0px"},$=new IntersectionObserver((S,H)=>{S.forEach(G=>{G.isIntersecting&&(G.target.classList.add("active"),H.unobserve(G.target))})},M);T.forEach(S=>$.observe(S));const O=document.querySelectorAll("section[id]"),F=document.querySelectorAll(".nav-link"),q=new IntersectionObserver(S=>{S.forEach(H=>{if(H.isIntersecting){const G=H.target.getAttribute("id");F.forEach(N=>{N.getAttribute("href")===`#${G}`?N.classList.add("active"):N.classList.remove("active")})}})},{threshold:.35});O.forEach(S=>q.observe(S))}Z(),se()&&Y(!1)});
