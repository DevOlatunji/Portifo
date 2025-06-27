  // WhatsApp button configuration
    const phoneNumber = '2349077134683';
    const message = 'Hello Deilux Academy Ltd. I am _____ and I want _______ . ';
    const whatsappStyle = document.createElement("style");
    
    let styleProperties = `
                        .whatsapp-button {
                            position: relative;
                            /* bottom: 20px;
                            right: 20px; */
                            z-index: 1000;
                            cursor: pointer;
                            animation: bounce 2s infinite;
                        }
                        .whatsapp-overlay {
                            position: fixed;
                            bottom: 20px;
                            right: 20px;
                            z-index: 999;
                            background-color: rgba(0, 0, 0, 0.3);
                            border-radius: 50%;
                            width: 60px;
                            height: 60px;
                        }
                        @keyframes bounce {
                            0%, 20%, 50%, 80%, 100% {
                                transform: translateY(0);
                            }
                            40% {
                                transform: translateY(-10px);
                            }
                            60% {
                                transform: translateY(-5px);
                            }
                        }
                    `;
                    
    whatsappStyle.textContent = styleProperties;
    
    console.log(whatsappStyle);
    
    document.head.appendChild(whatsappStyle);

    // WhatsApp overlay
    const overlay = document.createElement('div');
    overlay.classList.add('whatsapp-overlay');
    document.body.appendChild(overlay);
    

    // WhatsApp button
    const whatsappButton = document.createElement('img');
    whatsappButton.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg';
    whatsappButton.alt = 'WhatsApp Chat';
    whatsappButton.classList.add('whatsapp-button');
    // document.body.appendChild(whatsappButton);
    
    // 
    
    overlay.appendChild(whatsappButton);

    // open WhatsApp chat
    whatsappButton.addEventListener('click', () => {
        window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
    });