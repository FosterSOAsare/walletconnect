// import Payment from "./components/Payment.tsx";
import Header from "./components/Header";
import ConnectPage from "./pages/ConnectPage.tsx";
import React from "react";
// import { useGlobalContext } from "./context";
function App() {
	// let { setSession, setSessionExpiry, session, sessionExpiry } = useGlobalContext();
	return (
		<main className="w-full h-[100vh]  lg:mt-[90px] lg:max-w-[1050px] mx-auto ">
			<Header />
			<ConnectPage />
			{/* {(session === "" || sessionExpiry) && (
				<Connect
					session={session}
					setSession={setSession}
					setSessionExpiry={setSessionExpiry}
				/>
			)}
			{session !== "" && !sessionExpiry && (
				<Payment
					session={session}
					setSessionExpiry={setSessionExpiry}
					setSession={setSession}
				/>
			)} */}
		</main>
	);
}

export default App;
