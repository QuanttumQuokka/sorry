"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  // CHANGE THIS TO HER DOB
  const secretCode = "20032004";

  const checkCode = () => {
    if (code === secretCode) {
      setSuccess(true);
      setMessage("Correct ❤️");

      setTimeout(() => {
        router.push("/page1");
      }, 2500);
    } else {
      setMessage("Wrong Code ❤️");
      setCode("");
    }
  };

  return (
    <main className={styles.container}>

      {success && (
        <>
          <div className={styles.heart}>❤️</div>
          <div className={styles.heart2}>💖</div>
          <div className={styles.heart3}>💕</div>
          <div className={styles.heart4}>🌸</div>
        </>
      )}

      <div className={styles.paper}>

        <h1>❤️ Welcome ❤️</h1>

        <h2>Enter the Secret Code</h2>

        <p>
          Only one special person knows it...
        </p>

        <input
          type="password"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="********"
        />

        <button onClick={checkCode}>
          Unlock ❤️
        </button>

        <h3>{message}</h3>

      </div>

    </main>
  );
}



// "use client";

// import styles from "./page.module.css";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Home() {

//   const router = useRouter();

//   const [code,setCode]=useState("");

//   const [message,setMessage]=useState("");

//   const [loading,setLoading]=useState(false);

//   // CHANGE THIS TO HER DOB

//   const secretCode="20032004";

//   function unlock(){

//       if(code===secretCode){

//           setLoading(true);

//           setMessage("Unlocked ❤️");

//           setTimeout(()=>{

//               router.push("/page1");

//           },1800);

//       }

//       else{

//           setMessage("Wrong Secret Code ❤️");

//           setCode("");

//       }

//   }

//   return(

//       <main className={styles.container}>

//       <div className={styles.card}>

//       <h1>❤️ Welcome ❤️</h1>

//       <h2>Enter the Secret Code</h2>

//       <p>
//       Only one special person knows it...
//       </p>

//       <input

//       type="password"

//       placeholder="********"

//       value={code}

//       onChange={(e)=>setCode(e.target.value)}

//       />

//       <button

//       onClick={unlock}

//       disabled={loading}

//       >

//       {loading?"Opening...":"Unlock ❤️"}

//       </button>

//       <h3>{message}</h3>

//       </div>

//       </main>

//   );

// }
