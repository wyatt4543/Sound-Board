const sounds = ['yellow', 'ben', 'yes', 'no', 'hohoho', 'bleh', 'bouncy ball boing', 'death:minecraft', 'oof:roblox', 'goose honk', 'rick roll', 'ay ay like a little butterfly', 'you violated the law', 'yahoo:mario', 'webee wah woop:crazy dave:pvz', 'a lot of damage', 'gullible on the ceiling', 'Clash of Clans startup', 'smack AH', 'vine boom', 'Baba Booey', 'Open Na Noor']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    
    btn.innerText = sound
    
    btn.addEventListener('click', () => {
        stopSongs()
        
        document.getElementById(sound).play()
    })
    
    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}