import React from 'react'
import './Section.css';

export default function Section() {
var typed = new typed('.typed', {
  strings: ["designer.", "strategist.", "creative."],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true
});
  return (
    <>

<h1 style="font-weight: lighter;font-size: 40px; color:#AA9785; letter-spacing:2px; line-height:100px;">
  I'M CAMI AND I'M A <br />
 <span class={typed} style="font-family:wf_f6086231d01640cb8d1a53eea; color:#090f29; font-weight: bold; font-size: 150px; letter-spacing:1px;">들어갈문구</span>
 <span class="typed-cursor">|</span>
</h1>
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.9"></script>
<script>
</script>
    </>
  )
}
