// Menunggu sampai seluruh halaman HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // Cari form RSVP berdasarkan ID-nya
    const rsvpForm = document.getElementById('rsvp-form');

    // Tambahkan 'event listener' untuk event 'submit' pada form
    rsvpForm.addEventListener('submit', function(event) {
        
        // Mencegah form mengirim data ke server (perilaku default)
        event.preventDefault();

        // Ambil nilai dari input nama dan pesan
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        // Ambil nilai dari radio button yang dipilih
        const attendance = document.querySelector('input[name="attendance"]:checked').value;

        // Tampilkan pesan konfirmasi menggunakan alert
        alert(`Terima kasih, ${name}! Konfirmasi kehadiran Anda (${attendance}) dan pesan Anda telah kami terima.`);

        // Mengosongkan form setelah berhasil dikirim
        rsvpForm.reset();
    });
});
