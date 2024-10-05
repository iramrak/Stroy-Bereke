// import React from 'react';
// import { useEffect } from 'react';

// const WhatsAppPage = () => {
//   useEffect(() => {
//     const phoneNumber = '+77772786098';
//     const message = 'Здравствуйте! Я хотел бы получить консультацию.';
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//     // Задержка перед переходом на WhatsApp
//     const timer = setTimeout(() => {
//       window.location.href = whatsappUrl; // Переход на WhatsApp
//     }, 1000); // 2 секунды задержки (можете изменить время)

//     return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
//   }, []);

//   return (
//     <div>
      
//     </div>
//   );
// };

// export default WhatsAppPage;
