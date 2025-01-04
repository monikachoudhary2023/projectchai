
// const regulators = document.querySelectorAll('.regulator');

//         regulators.forEach((regulator) => {
//             regulator.addEventListener('click', () => {
//                 const burnerIndex = regulator.dataset.burner - 1;
//                 const flame = document.querySelectorAll('.flame')[burnerIndex];

                
//                 let currentRotation = regulator.style.transform || 'rotate(0deg)';

              
//                 if (currentRotation === 'rotate(0deg)') {
//                     currentRotation = 'rotate(45deg)'; 
//                     flame.style.display = 'block';
//                     flame.style.height = '40px'; 
//                     flame.style.width = '40px'; 
//                 } else if (currentRotation === 'rotate(45deg)') {
//                     currentRotation = 'rotate(90deg)'; 
//                     flame.style.display = 'block';
//                     flame.style.height = '55px'; 
//                     flame.style.width = '55px'; 
//                 } 
//                 else if (currentRotation === 'rotate(90deg)') {
//                     currentRotation = 'rotate(135deg)'; 
//                     flame.style.display = 'block';
//                     flame.style.height = '70px';
//                     flame.style.width = '70px';  }
//                     else {
//                     currentRotation = 'rotate(0deg)'; 
//                     flame.style.display = 'none'; 
//                 }

//                 regulator.style.transform = currentRotation;
//             });
//         });


const regulators = document.querySelectorAll('.regulator');

        regulators.forEach((regulator) => {
            regulator.addEventListener('click', () => {
                const burnerIndex = regulator.dataset.burner - 1;
                const flame = document.querySelectorAll('.flame')[burnerIndex];
                const tea = document.querySelector('.tea');
                
                let currentRotation = regulator.style.transform || 'rotate(0deg)';

                if (currentRotation === 'rotate(0deg)') {
                    currentRotation = 'rotate(45deg)'; 
                    flame.style.display = 'block';
                    flame.style.height = '65px'; 
                    flame.style.width = '48px';
                    tea.style.animationPlayState = 'paused'; 
                    // tea.style.opacity = 1; 
                    startBoiling();
                } else if (currentRotation === 'rotate(45deg)') {
                    currentRotation = 'rotate(90deg)'; 
                    flame.style.display = 'block';
                    flame.style.height = '70px'; 
                    flame.style.width = '60px'; 
                    tea.style.animationPlayState = 'paused'; 
                    // tea.style.opacity = 1; 
                } 
                else if (currentRotation === 'rotate(90deg)') {
                    currentRotation = 'rotate(135deg)'; 
                    flame.style.display = 'block';
                    flame.style.height = '77px'; 
                    flame.style.width = '77px'; 
                    tea.style.animationPlayState = 'running'; 
                    tea.style.opacity = 1; 
                    
                } 
                else {
                    currentRotation = 'rotate(0deg)'; 
                    flame.style.display = 'none';
                    tea.style.animationPlayState = 'paused'; 
                    tea.style.opacity = 0; 
                    stopBoiling(); 
                }

                regulator.style.transform = currentRotation;
                

function startBoiling() {
    addBubbles();
    addVapor();
}

function stopBoiling() {
    document.querySelectorAll('.bubbles').forEach(bubble => bubble.remove());
    document.querySelectorAll('.vapor').forEach(vapor => vapor.remove());
}

function addBubbles() {
    for (let i = 0; i < 10; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubbles');
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.bottom = `${Math.random() * 10}px`;
        tea.appendChild(bubble);
    }
}

function addVapor() {
    for (let i = 0; i < 15; i++) {
        const vapor = document.createElement('div');
        vapor.classList.add('vapor');
        vapor.style.left = `${Math.random() * 100}%`;
        document.querySelector('.circle').appendChild(vapor);
    }
}
            });
        });