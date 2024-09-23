// import React from 'react';
// import './FranchiseCard.css'; // Import CSS for styling

// const FranchiseCard = ({ team }) => {
//     return (
//         <div className="card">
//           <div className="card-inner">
//             {/* Before Hover */}
//             <img src={team.imageBeforeHover} alt={team.name} className="team-logo" />
//             <h2 className="team-name">{team.name}</h2>
            
//             {/* Overlay content (shows on hover) */}
//             <div className="card-overlay">
//               <img src={team.imageAfterHover} alt="Trophy" className="overlay-trophy" />
//               <div className="overlay-info">
//                 <p className="titles">Titles Won: {team.titles.length}</p>
//                 <p className="years">Years: {team.titles.join(' | ')}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//     );
// };

// export default FranchiseCard;


// /* Card container */
// .card {
//     width: 250px;
//     margin: 20px auto;
//     border-radius: 15px;
//     overflow: hidden;
//     position: relative; /* Enable positioning for overlay */
//     box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
//     transition: transform 0.3s ease, box-shadow 0.3s ease;
//     cursor: pointer;
//     background-color: #ffe600; /* CSK Yellow */
//   }
  
//   /* Card hover effect */
//   .card:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
//   }
  
//   /* Inner content */
//   .card-inner {
//     position: relative;
//     text-align: center;
//     padding: 20px;
//   }
  
//   .team-logo {
//     width: 100px;
//     height: 100px;
//     transition: opacity 0.3s ease, transform 0.3s ease;
//   }
  
//   .team-name {
//     font-size: 18px;
//     margin-top: 15px;
//     color: #000;
//   }
  
//   /* Card overlay - Make sure it's positioned absolutely inside the card */
//   .card-overlay {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(255, 255, 255, 0.95); /* Slightly more opaque for visibility */
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     opacity: 0; /* Start hidden */
//     visibility: hidden; /* Hidden initially */
//     z-index: 10; /* Ensure it appears above the card content */
//     transition: opacity 0.3s ease, visibility 0.3s ease;
//   }
  
//   /* Show overlay on hover */
//   .card:hover .card-overlay {
//     opacity: 1;
//     visibility: visible;
//   }
  
//   /* Trophy image inside overlay */
//   .overlay-trophy {
//     width: 100px; /* Same size as the team logo */
//     height: 100px;
//   }
  
//   /* Overlay information (titles and years) */
//   .overlay-info {
//     text-align: center;
//     margin-top: 10px;
//   }
  
//   .titles, .years {
//     margin: 5px 0;
//     font-size: 14px;
//     color: #000;
//   }
  
//   /* Hide original content (logo and team name) on hover */
//   .card:hover .team-logo {
//     opacity: 0;
//     transform: scale(0.95);
//   }
  
//   .card:hover .team-name {
//     opacity: 0;
//   }
  