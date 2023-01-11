// useEffect(() => {
//   let observer;
//   if (
//     planRef.current &&
//     modelsRef.current &&
//     textRef.current &&
//     voiceRef.current &&
//     backgroundRef.current
//   ) {
//     const options = {
//       rootMargin: "-20px",
//       threshold: 0,
//     };
//     observer = new IntersectionObserver((entries, observer) => {
//       entries.forEach((entry) => {
//         const navElement = document.querySelector(
//           `.sticky a[href="#${entry.target.id}"]`
//         );
//         if (
//           entry.isIntersecting &&
//           !navElement.classList.contains("active")
//         ) {
//           // navElement.classList.add("active");
//           setActive(`${entry.target.id}Item`);
//         } else if (
//           !entry.isIntersecting &&
//           navElement.classList.contains("active")
//         ) {
//           // navElement.classList.remove("active");
//           setActive(" ");
//         }
//       });
//     }, options);
//     observer.observe(planRef.current);
//     observer.observe(modelsRef.current);
//     observer.observe(textRef.current);
//     observer.observe(voiceRef.current);
//     observer.observe(backgroundRef.current);
//     observer.observe(paymentRef.current);
//   }
//   return () => observer.disconnect();
// }, [planRef, modelsRef, textRef, voiceRef, backgroundRef, paymentRef]);
