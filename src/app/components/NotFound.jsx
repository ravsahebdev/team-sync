// import { useNavigate } from "react-router";

// const NotFound = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
//       <h1 className="text-7xl font-bold text-(--text-primary)">404</h1>

//       <h2 className="text-xl font-semibold text-(--text-primary)">
//         Page Not Found
//       </h2>

//       <p className="text-(--text-secondary)">
//         The page you're looking for doesn't exist.
//       </p>

//       <button
//         onClick={() => navigate("/home")}
//         className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
//       >
//         Back to Dashboard
//       </button>
//     </div>
//   );
// };

// export default NotFound;
const NotFound = () => {
  console.log("NOT FOUND RENDERED");

  return <h1>404 - Page Not Found</h1>;
};

export default NotFound;
