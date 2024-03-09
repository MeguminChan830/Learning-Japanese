<script>
    import {dataPass} from '$lib/data' 
    import '@fortawesome/fontawesome-free/css/all.min.css'
    import './index.css'
    let show=-1
    let showKanji=false
    let is_correct=false
    let toggle= 0
    let from=null
    let to=null
    let data=[]
    let forget = []
    let passed=true
    let changllenge =false
    const onClick=(check)=>{
        if (!check){
            passed= false
            if (changllenge){
                forget.push(data[show])
            }
        }
        
        is_correct=check
        showKanji=!showKanji
        toggle=check?3:4
        setTimeout(()=>{
            toggle=0
            
        }, 200)
    }
    const onPassed=(check)=>{
        if (check){
            show++
        }else{
            show--
        }
        toggle=check?1:2
        
        setTimeout(()=>{
            toggle=0
            
        }, 200)
        showKanji=!showKanji
        is_correct=false
    }
    function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}
const onStart=()=>{
    if (!from || !to){
        from=0
        to=100
        changllenge=true
    }
    data=shuffleArray(dataPass.slice(from, to))
    show=0
    passed=true
    forget=[]
}
</script>

{#if show>=0}
{#each data as {kanji, romanji, meaning}, i}
<div class="prac" style="display:{show==i?"block":'none'}">
    <div class="index">
        <button style="font-size: 1.2em; padding-left: 5px; padding-right: 13px; margin-top: 3px; background: green; border-style: none;border-radius: 10px;margin-left: 10px"
        on:click={()=>show--}
        
        >
            <i class="fa-solid fa-backward"></i>
        </button>
        <h1>
            {i+1}
        </h1>
    </div>
    <div class="word">
        <div class="romanji"><span>{romanji}</span></div>
        <div class="meaning"><span>{meaning}</span></div>
    </div>
    <div class="check">
        <button on:click={()=>onClick(false)} class:active={toggle==4}>
            <i class="fa-solid fa-x"></i>
        </button>
        <button on:click={()=>onClick(true)} class:active={toggle==3}>
            <i class="fa-solid fa-check"></i>
        </button>
    </div>
    <div style="display:{showKanji?'block':'none'}">
        <h1 class='kanji {is_correct?"correct": "wrong"}'>{kanji}</h1>
        <div class="choose">
        <button  on:click={()=>onPassed(false)} class:active={toggle==1}>
            <i class="fa-solid fa-hand-point-left"></i>
        </button>
        <button  on:click={()=>onPassed(true)} class:active={toggle==2}>
            <i class="fa-solid fa-right-long"></i>
        </button>
    </div>
    </div>
</div>
{/each}
{/if}
{#if show<0}
<div>
<h1 style="letter-spacing: 1px; text-align: center; color: #00ff20;margin-top:100px; text-shadow: #ffaa99 3px 3px 10px">You Are prepared for Learning Japanese?</h1>
<div style="display: flex;justify-content:center; color: #00ccc0">
    <div>
        From: <input type="text" bind:value={from}>To: <input type="text" bind:value={to}>
    </div>
</div>
<button style="color:#555;" on:click={()=>onStart()} id='start'><i class="fa-regular fa-hand-point-right" ></i> Click here to start!<i></i><i></i></button>
</div>
{/if}
{#if show== to-from}

<div style="color: greenyellow; font-size:3em; text-align: center;margin-top: 250px">
    <div style="font-size: 0.3em;">
        {#if passed}
        <h1 style="color: green; ">Successful!</h1>
        {:else}
        <h1 style="color: #ff3000;letter-spacing:3px">Fail~~</h1>
        {/if}
        </div>
    Congratulation!

<br>
<p style="color: black; font-size:0.4em;">Are you want to play <button class='again' on:click={()=>onStart()} style="border-style:none; color: blueviolet; background: orange;padding:5px; border-radius: 10px">Again?</button></p>
<ul>
    {#each forget as  {kanji}}
    <li>{kanji}</li>
    {/each}
</ul>
</div>
{/if}