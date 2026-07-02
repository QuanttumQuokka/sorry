import "./globals.css";

export const metadata = {
  title: "For Tanya ❤️",
  description: "Special Website",
};

export default function RootLayout({
  children,
}:{
  children:React.ReactNode;
}){

  return(

<html lang="en">

<body>

{children}

</body>

</html>

  );

}




// import "./globals.css";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "For Tanya ❤️",
//   description: "A Special Surprise",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }
