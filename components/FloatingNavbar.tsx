// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { cn } from "@/lib/utils"; // Assuming you have a utility for conditional classes

// const FloatingNavbar = ({
//   navItems,
//   className,
// }: {
//   navItems: {
//     name: string;
//     link: string;
//   }[];
//   className?: string;
// }) => {
//   const [isSticky, setIsSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         // Adjust the value as needed
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={cn(
//         "fixed top-0 inset-x-0 z-50 transition-all duration-300",
//         isSticky ? "bg-opacity-90 bg-gray-800 shadow-lg" : "bg-transparent",
//         className
//       )}
//       style={{
//         backdropFilter: isSticky ? "blur(10px)" : "none",
//         padding: isSticky ? "10px 20px" : "20px 40px",
//       }}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <div className="flex space-x-4">
//           {navItems.map((item, idx) => (
//             <Link
//               key={idx}
//               href={item.link}
//               className="text-white hover:text-gray-300 transition-colors"
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default FloatingNavbar;
import React, { useEffect, useState } from "react";

interface NavItem {
  name: string;
  link: string;
}

interface FloatingNavProps {
  navItems: NavItem[];
}

const FloatingNavbar: React.FC<FloatingNavProps> = ({ navItems }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(link);
    if (target) {
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - 60; // Adjust this value based on your navbar height
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        scrolled ? "bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <div className="text-white text-xl font-bold">My Portfolio</div>
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="text-white hover:text-blue-500 transition-colors"
                onClick={(e) => handleNavClick(e, item.link)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default FloatingNavbar;
