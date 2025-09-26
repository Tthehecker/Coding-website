document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('demo-btn');
    const text = document.getElementById('demo-text');
    
    let clickCount = 0;
    
    button.addEventListener('click', function() {
        clickCount++;
        
        const messages = [
            "Great! JavaScript is working perfectly! 🎉",
            `You've clicked the button ${clickCount} times!`,
            "This demonstrates DOM manipulation with JavaScript.",
            "Keep clicking to see different messages!",
            "JavaScript makes web pages interactive! ✨"
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        text.textContent = randomMessage;
        text.style.background = `hsl(${Math.random() * 360}, 70%, 95%)`;
        
        // Add a little animation
        text.style.transform = 'scale(1.05)';
        setTimeout(() => {
            text.style.transform = 'scale(1)';
        }, 200);
    });
    
    console.log('HTML Example project loaded successfully!');
});