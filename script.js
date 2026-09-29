let opened = false;

let audioContext;


/* OPEN GIFT */
function openGift() {

    if (opened) {
        return;
    }

    opened = true;

    const lid =
        document.getElementById("lid");

    const gift =
        document.querySelector(".gift");

    const surprise =
        document.getElementById("surprise");


    /* OPEN GIFT LID */

    lid.style.transform =
        "translateY(-70px) rotate(-10deg)";


    /* SHOW TULIP BOUQUET */

    gift.classList.add("open");


    /* SHOW SURPRISE MESSAGE */

    setTimeout(() => {

        surprise.style.display =
            "block";

    }, 800);


    /* CONFETTI */

    createConfetti(80);

}/* CONFETTI */

function createConfetti(amount) {

    const colors = [
        "#ff8fc7",
        "#ffb6d9",
        "#d94f91",
        "#f7a1c8",
        "#ffffff"
    ];


    for (let i = 0; i < amount; i++) {

        const confetti =
            document.createElement("div");


        confetti.className =
            "confetti";


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        confetti.style.animationDuration =
            (2 + Math.random() * 3) + "s";


        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";


        document.body.appendChild(
            confetti
        );


        setTimeout(() => {

            confetti.remove();

        }, 6000);
    }
}


/* BIRTHDAY SONG */

function playBirthdaySong() {

    if (audioContext) {
        return;
    }


    audioContext =
        new (
            window.AudioContext ||
            window.webkitAudioContext
        )();


    const notes = [

        264, 264, 297,
        264, 352, 330,

        264, 264, 297,
        264, 396, 352,

        264, 264, 528,
        440, 352, 330,
        297,

        466, 466, 440,
        352, 396, 352

    ];


    let time =
        audioContext.currentTime;


    notes.forEach(
        (frequency) => {

            const oscillator =
                audioContext
                .createOscillator();


            const gain =
                audioContext
                .createGain();


            oscillator.frequency.value =
                frequency;


            oscillator.type =
                "sine";


            gain.gain.setValueAtTime(
                0.12,
                time
            );


            gain.gain.exponentialRampToValueAtTime(
                0.001,
                time + 0.35
            );


            oscillator.connect(gain);

            gain.connect(
                audioContext.destination
            );


            oscillator.start(time);

            oscillator.stop(
                time + 0.35
            );


            time += 0.4;

        }
    );
}
/* ========================================
   OPEN LOVE LETTER
======================================== */

let letterOpened = false;

function openLetter() {

    const envelope =
        document.getElementById("envelope");

    if (letterOpened) {
        return;
    }

    letterOpened = true;

    envelope.classList.add("open");

    // Small celebration
    createConfetti(35);
}
</script>