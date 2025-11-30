/**
 * MAIN CUSTOM SCRIPT
 * Berisi logika untuk Contact Form dan UI Interaction lainnya
 */

document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. LOGIKA CONTACT FORM (MAILTO)
    // ==========================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah reload halaman

            // --- KONFIGURASI EMAIL ---
            // Ganti email di bawah ini dengan email tujuan Anda
            const emailTujuan = "mdaxgilh@gmail.com"; 
            // -------------------------

            // Ambil data dari input
            const name = document.getElementById('name').value;
            const emailVisitor = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Validasi sederhana (opsional, karena 'required' di HTML sudah menangani ini)
            if (!name || !emailVisitor || !message) {
                alert("Please fill in all fields.");
                return;
            }

            // Format Subjek Email
            const subject = "Transmission from Neural ID: " + name;

            // Format Isi Pesan (Body)
            const body = "Neural ID (Name): " + name + "\n" +
                         "Quantum Address (Email): " + emailVisitor + "\n\n" +
                         "--- TRANSMISSION CONTENT ---\n" +
                         message + "\n" +
                         "----------------------------";

            // Membuat Link Mailto
            // encodeURIComponent penting agar spasi dan enter terbaca sistem
            const mailtoLink = "mailto:" + emailTujuan + 
                               "?subject=" + encodeURIComponent(subject) + 
                               "&body=" + encodeURIComponent(body);

            // Eksekusi membuka aplikasi email
            window.location.href = mailtoLink;
        });
    }

    // ==========================================
    // 2. LOGIKA BACK TO TOP / HOME BUTTON
    // ==========================================
    const backToButton = document.querySelector('.back-to-home'); // Menggunakan class selector

    if (backToButton) {
        // Opsi A: Jika ingin tombol selalu muncul, biarkan kode di bawah ini dikomentari.
        // Opsi B: Jika ingin tombol hanya muncul saat scroll ke bawah, hapus tanda komentar (//) di bawah ini:
        
        /*
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToButton.style.opacity = '1';
                backToButton.style.visibility = 'visible';
            } else {
                backToButton.style.opacity = '0';
                backToButton.style.visibility = 'hidden';
            }
        });
        */

        // Event listener untuk smooth scroll (jika href="#" atau href="#top")
        // Karena di HTML Anda href="index.html", ini akan reload ke home.
        // Jika ingin scroll ke atas saja tanpa reload, ubah HTML jadi href="#top" dan aktifkan ini:
        
        /*
        backToButton.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#top') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
        */
    }
});