// import { useState } from 'react';
// import { auth } from './firebase';
// const AuthenticationComponent = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = async () => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       console.log("User registered:", userCredential.user);
//     } catch (error) {
//       console.error("Registration error:", error.message);
//     }
//   };

//   const handleLogin = async () => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       console.log("User logged in:", userCredential.user);
//     } catch (error) {
//       console.error("Login error:", error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Authentication</h2>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <div>
//         <button onClick={handleRegister}>Register</button>
//         <button onClick={handleLogin}>Login</button>
//       </div>
//     </div>
//   );
// };

// export default AuthenticationComponent;
