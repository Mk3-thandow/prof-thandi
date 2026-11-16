/* Prof Thandi Mgwebi | Professional website scripts */

// Draw the career line once, when it first comes into view
  (function(){
    var t=document.getElementById('track');
    if(!('IntersectionObserver' in window)){t.classList.add('go');return;}
    var io=new IntersectionObserver(function(e){
      if(e[0].isIntersecting){t.classList.add('go');io.disconnect();}
    },{threshold:.35});
    io.observe(t);
  })();

(function(){
  var stories=[
    {tone:"", title:"The scientist", teaser:"A biomedical scientist, trained in cell biology and virology.",
     kicker:"Her foundation",
     body:"<p>Prof Mgwebi trained as a biomedical scientist. She completed her BSc at the University of Transkei, now iYunivesithi Walter Sisulu, and went on to earn a PhD (Medicine) in Cell and Developmental Biology at the University of Cape Town.</p><p>She then did postdoctoral research in virology at UCT with the South African AIDS Vaccine Initiative, before moving into research and innovation management.</p>",
     facts:[["PhD (Medicine), Cell and Developmental Biology","University of Cape Town"],["Postdoctoral research, virology","South African AIDS Vaccine Initiative, UCT"],["BSc","University of Transkei, now iYunivesithi Walter Sisulu"]]},
    {tone:"dark", title:"Research leader", teaser:"More than 20 years in higher education and national research bodies.",
     kicker:"Building research systems",
     body:"<p>After her postdoctoral work she moved into research and innovation management, first at the CSIR and then at the South African Medical Research Council.</p><p>At the National Research Foundation she served as Director of Human Capital Development and as Executive Director of the DSI-NRF South African Research Chairs Initiative (SARChI) and Centres of Excellence, the country's flagship research programmes.</p><p>She then became Director of Research at the University of the Western Cape, and spent six years as a Deputy Vice-Chancellor for research and innovation, first at Tshwane University of Technology and then at Nelson Mandela University.</p>",
     facts:[["Executive Director, SARChI and Centres of Excellence","National Research Foundation"],["Deputy Vice-Chancellor: Research, Innovation and Engagement","Tshwane University of Technology"],["Deputy Vice-Chancellor: Research, Innovation and Internationalisation","Nelson Mandela University, from April 2020"]]},
    {tone:"gold", title:"Women in science", teaser:"Opened South Africa's top research chairs to 42 more women.",
     kicker:"Transformation",
     body:"<p>As founding Executive Director of the transformed SARChI and Centres of Excellence programme at the NRF, Prof Mgwebi championed changes that led to the ministerial appointment of 42 women researchers to research chairs, an initiative known as SARChI 42.</p><p>She is recognised for championing gender inclusion and capacity development in South African research, and for growing the next generation of researchers.</p>",
     facts:[["SARChI 42","42 research chairs awarded to women researchers"],["Director of Human Capital Development","National Research Foundation"]]},
    {tone:"", title:"Science diplomacy", teaser:"Partnerships that connect South African research to the world.",
     kicker:"Global partnerships",
     body:"<p>Prof Mgwebi is known for her work in science diplomacy. At the NRF she led partnerships with Fulbright, the British Council and the Newton Fund, and later returned as Group Executive for Business Advancement and Global Partnerships.</p><p>She was the founding Director of the Southern African Systems Analysis Centre (SASAC), a partnership with the International Institute for Applied Systems Analysis (IIASA). She has been active in networks such as RUFORUM and SASUF, and serves on the Leadership Council of the South African chapter of the UN Sustainable Development Solutions Network (SDSN).</p>",
     facts:[["Founding Director","Southern African Systems Analysis Centre, with IIASA"],["Leadership Council member","SDSN South Africa, UN Sustainable Development Solutions Network"],["Council member since 2017","African Institute for Mathematical Sciences"]]},
    {tone:"dark", title:"Coming home", teaser:"Eastern Cape born, and back where her studies began.",
     kicker:"Homecoming",
     body:"<p>Born in the Eastern Cape, Prof Mgwebi took her first degree at the University of Transkei. In 2005 it merged with Border Technikon and Eastern Cape Technikon to form iYunivesithi Walter Sisulu.</p><p>On 1 January 2026 she returned as the university's Vice-Chancellor and Principal, succeeding Professor Rushiella Songca. In April 2026 the community of Ntabankulu held a homecoming celebration to welcome her.</p>",
     facts:[["Took office","1 January 2026"],["Homecoming celebration","Ntabankulu, 25 April 2026"]]},
    {tone:"gold", title:"Leading Walter Sisulu", teaser:"Shaping a university of the future for the Eastern Cape.",
     kicker:"Vice-Chancellor and Principal",
     body:"<p>In her 2026 Academic Opening Address, Prof Mgwebi acknowledged students first and reaffirmed the university's core values: integrity, excellence, respect and Ubuntu.</p><p>Her priorities for the university include strengthening governance, advancing student success and graduate employability, expanding research and innovation, supporting digital transformation, and building strategic partnerships that contribute to social and economic development.</p><p>In 2026 the university unveiled a new identity tied to its Vision 2030 and its &ldquo;University of the Future&rdquo; model, alongside a new Artificial Intelligence Centre and the University Town model.</p><blockquote>&ldquo;A signature of a university that is transforming, modernising, and positioning itself for greater impact.&rdquo;</blockquote>",
     facts:[["Priorities","Governance, student success and employability, research and innovation, digital transformation, and partnerships"],["Core values","Integrity, excellence, respect and Ubuntu"],["Strategy","Vision 2030 and the University of the Future model"]]}
  ];
  var wrap=document.getElementById('cards'), dlg=document.getElementById('story'), cur=0;
  stories.forEach(function(s,i){
    var b=document.createElement('button');
    b.type='button'; b.className='card'+(s.tone?' '+s.tone:'');
    b.setAttribute('aria-haspopup','dialog');
    b.innerHTML='<div><h3>'+s.title+'</h3><p>'+s.teaser+'</p></div><span class="more">Read more</span>';
    b.addEventListener('click',function(){open(i,b)});
    wrap.appendChild(b);
  });
  var opener=null;
  function fill(i){
    var s=stories[i]; cur=i;
    document.getElementById('story-kicker').textContent=s.kicker;
    document.getElementById('story-title').textContent=s.title;
    document.getElementById('story-body').innerHTML=s.body;
    document.getElementById('story-facts').innerHTML=s.facts.map(function(f){return '<li><b>'+f[0]+'</b>'+f[1]+'</li>'}).join('');
    document.getElementById('story-prev').textContent='Previous: '+stories[(i+stories.length-1)%stories.length].title;
    document.getElementById('story-next').textContent='Next: '+stories[(i+1)%stories.length].title;
    dlg.scrollTop=0;
  }
  function open(i,btn){opener=btn;fill(i);if(dlg.showModal){dlg.showModal()}else{dlg.setAttribute('open','')}}
  function close(){dlg.close?dlg.close():dlg.removeAttribute('open');}
  dlg.addEventListener('close',function(){if(opener)opener.focus()});
  dlg.querySelector('.dlg-close').addEventListener('click',close);
  dlg.addEventListener('click',function(e){if(e.target===dlg)close()});
  document.getElementById('story-prev').addEventListener('click',function(){fill((cur+stories.length-1)%stories.length)});
  document.getElementById('story-next').addEventListener('click',function(){fill((cur+1)%stories.length)});
})();

(function(){var h=document.querySelector('header.site');function f(){h.classList.toggle('scrolled',window.scrollY>40)}window.addEventListener('scroll',f,{passive:true});f();
    var links=[].slice.call(document.querySelectorAll('nav a'));
    if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
    links.forEach(function(a){var t=document.querySelector(a.getAttribute('href'));if(t)io.observe(t)});}
  })();

(function(){
    var slides=[].slice.call(document.querySelectorAll('.q-slide')),dots=[].slice.call(document.querySelectorAll('.q-dot')),i=0,t=null;
    if(!slides.length)return;
    function show(n){i=(n+slides.length)%slides.length;slides.forEach(function(s,k){s.classList.toggle('is-on',k===i);s.setAttribute('aria-hidden',k===i?'false':'true')});dots.forEach(function(d,k){d.classList.toggle('is-on',k===i)})}
    function start(){if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;stop();t=setInterval(function(){show(i+1)},7000)}
    function stop(){if(t)clearInterval(t)}
    dots.forEach(function(d,k){d.addEventListener('click',function(){show(k);start()})});
    var q=document.querySelector('.quote');q.addEventListener('mouseenter',stop);q.addEventListener('mouseleave',start);q.addEventListener('focusin',stop);
    start();
  })();