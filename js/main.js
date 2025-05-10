/********************************************************
 * Switch 2 Countdown — starter file (solution removed)
 * -----------------------------------------------------
 * Fill in the blanks to build a live countdown that
 * flips to a hype message once the clock hits zero.
 *
 * ✨  What’s here:
 *   • Constants for time math (ms/second, ms/minute…)
 *   • Step-by-step “TODO” comments as your guide
 *   • Handy hints at the bottom (padding, sound, etc.)
 *
 * 🛠  Your job:
 *   1. Calculate the remaining time each second.
 *   2. Update the DOM with days / hrs / mins / secs.
 *   3. Handle launch-day state (text swap, style swap,
 *      coin-sound, confetti… go wild!).
 ********************************************************/

/* ------------------------------------------------------
   Kick off the countdown (edit date while testing).
   The second argument is the id of the element that
   will display the timer.
------------------------------------------------------ */
CountDownToMario('06/05/2025 12:01 AM', 'countdown');

/**
 *  Builds a self-updating countdown.
 *  @param {string|Date} endTime – Launch deadline.
 *  @param {string}       divId  – id of the DOM node for text.
 */
function CountDownToMario(endTime, divId) {
  /* STEP 1: Convert deadline into a Date object. */
  const end = new Date(endTime);

  /* 👉 Time constants (leave these as-is): */
  const _second = 1000;
  const _minute = _second * 60;
  const _hour   = _minute * 60;
  const _day    = _hour * 24;

  /* STEP 2: Declare any variables you’ll need here
            (e.g. interval id). */
  const now = new Date();  
// this gets current date
  const diff = end - now; 
// this gets the difference
console.log(diff); // this logs the difference in milliseconds
console.log(end); // this logs the end date in milliseconds
console.log(now); // this logs the current date in milliseconds 

let msec = diff;

function showRemaining() {
    if (diff < 0) {
        clearInterval(timer); // this clears the interval
        //console.log("Countdown is over!");
        document.getElementById(divId).textContent = "Switch 2 is out!";
    
    }  else {
    //console.log("Countdown is still running!");
        const now = new Date();  
    // this gets current date
        const diff = end - now;
        const diffDay = Math.floor(diff / _day);
        const diffHour = Math.floor((diff % _day) / _hour); // Use % for remainders
        const diffMinute = Math.floor((diff % _hour) / _minute);
        const diffSeconds = Math.floor((diff % _minute) / _second);

     document.getElementById(divId).textContent =
            diffDay + " Days: " +
            diffHour.toString().padStart(2, '0') + " Hours : " +  // Added padding
            diffMinute.toString().padStart(2, '0') + " Minutes: " +
            diffSeconds.toString().padStart(2, '0') + " Seconds";
    }
    
}

showRemaining();
const timer = setInterval(showRemaining, 1000);


  /* STEP 3: Write an inner `showRemaining()` function:
       • get current time (`new Date()`)
       • figure out the distance to launch
       • if distance <= 0 ⇒ clear interval & show hype msg
       • else break distance into days / hrs / mins / secs
       • pad units to two digits (see hints below)
       • update `document.getElementById(divId).textContent`
  */
  
      

  /* STEP 4: Call `showRemaining()` once so the timer
            appears immediately. */

  /* STEP 5: Repeat `showRemaining()` every second
            with `setInterval`. */
}

/* ======================================================
   📌  HINTS  — uncomment / tweak as you implement
   ------------------------------------------------------
   • Two-digit padding helper
       // const pad = n => String(n).padStart(2, '0');

   • Read release date from HTML
       // const div    = document.getElementById(divId);
       // const target = new Date(div.dataset.release);

   • Celebration styles
       // document.body.classList.add('launched');

   • Play sound once
       // document.getElementById('coinSound').play();
====================================================== */
/* ======================================================
   🎉  BONUS  — optional extras
   ------------------------------------------------------
   • Add a confetti explosion (see confetti.js) - Check js in */