document.addEventListener('DOMContentLoaded', function() {

    // Inisialisasi AOS (Animate On Scroll)
    AOS.init({
        duration: 1000, // Durasi animasi dalam milidetik
        once: true, // Animasi hanya berjalan sekali
    });

    // 1. LOGIKA LAYAR PEMBUKA & MUSIK
    const overlay = document.getElementById('opening-overlay');
    const openButton = document.getElementById('open-invitation');
    const music = document.getElementById('background-music');
    const musicControl = document.getElementById('music-control');
    const body = document.body;

    openButton.addEventListener('click', function() {
        // Sembunyikan overlay dengan efek fade-out
        overlay.classList.add('hidden');
        // Izinkan scrolling lagi
        body.style.overflow = 'auto';

        // Putar musik
        music.play();
        musicControl.classList.remove('paused');
    });

    // Kontrol untuk play/pause musik
    musicControl.addEventListener('click', function() {
        if (music.paused) {
            music.play();
            musicControl.classList.remove('paused');
        } else {
            music.pause();
            musicControl.classList.add('paused');
        }
    });

    // 2. LOGIKA COUNTDOWN TIMER
    // Atur tanggal pernikahan kamu di sini (Tahun, Bulan-1, Hari)
    const weddingDate = new Date('2025-09-19T14:00:00').getTime();

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        // Perhitungan waktu
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Tampilkan hasilnya di elemen yang sesuai
        document.getElementById('days').innerText = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;

        // Jika waktu sudah habis
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById('countdown-timer').innerHTML = "<h4>Acara Telah Berlangsung</h4>";
        }
    }, 1000);

    // 3. LOGIKA FORM RSVP (tetap sama)
    const rsvpForm = document.getElementById('rsvp-form');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const attendance = document.querySelector('input[name="attendance"]:checked').value;
            alert(`Terima kasih, ${name}! Konfirmasi kehadiran Anda (${attendance}) dan pesan Anda telah kami terima.`);
            rsvpForm.reset();
        });
    }

});
