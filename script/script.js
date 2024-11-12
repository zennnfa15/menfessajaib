document.getElementById('songForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const recipient = document.getElementById('recipient').value;
    const message = document.getElementById('message').value;
    const song = document.getElementById('song').value;

    document.getElementById('outputRecipient').textContent = recipient;
    document.getElementById('outputMessage').textContent = message;
    document.getElementById('outputSong').href = song;

    document.getElementById('output').classList.remove('hidden');
});
document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('backgroundMusic');
    audio.play().then(() => {
        console.log("Music started playing automatically.");
    }).catch(error => {
        console.warn("Autoplay was blocked. Playing after user interaction.");
    });
});
document.getElementById('playMusicButton').addEventListener('click', function () {
    const audio = document.getElementById('backgroundMusic');
    audio.play();
});
document.getElementById('inputForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Mencegah form untuk reload halaman

    var userInput = document.getElementById('userInput').value; // Ambil input dari textarea

    // Kirim data menggunakan fetch API
    fetch('server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'message=' + encodeURIComponent(userInput)
    })
    .then(response => response.json())  // Ambil respon dalam format JSON
    .then(data => {
        // Tampilkan pesan yang dikirim ke halaman
        var displayDiv = document.getElementById('displayMessages');
        displayDiv.innerHTML = '<p>' + data.message + '</p>';
    })
    .catch(error => console.error('Error:', error)); // Tangani error
});
