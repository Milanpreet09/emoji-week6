document.addEventListener('DOMContentLoaded', () => {
    const emojiGallery = document.getElementById('emoji-gallery');
    const emojis = ['😀', '😂', '😍', '😎', '😭', '😡', '👍', '🎉', '❤️', '🔥'];

    emojis.forEach(emoji => {
        const emojiDiv = document.createElement('div');
        emojiDiv.className = 'emoji';
        emojiDiv.textContent = emoji;
        emojiGallery.appendChild(emojiDiv);
    });
});
