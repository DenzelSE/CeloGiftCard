
import HomeBody from "@/components/HomeBody";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { useAccount, useReadContract } from "wagmi";
import OnBoarding from "./onboarding";
import MetaMaskConnect from "@/components/MetaMaskConnect";
import contractABI from '../../hardhat/artifacts/contracts/GiftCard.sol/GiftCard.json';
import UserHome from "./user";
import MerchantHome from "./merchant";
import Loading from "@/components/Loading";




const Landing = () => {
    const bgImageURL = 'https://drive.google.com/file/d/1qcEM0gGeyJUhf23KSiK0nvgXt-eXDBxU/view?usp=sharing';
    return (
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bgImageURL})` }}>
            <section className="flex flex-col h-full justify-between items-center pt-2">
                <div className="flex-grow">
                    <img src="gift_card_landing.png" alt="Gift Card Landing" className="max-w-full h-auto" />
                </div>
                <footer className="mt-6 mb-6">
                    <MetaMaskConnect />
                </footer>
            </section>
        </div>
    );
}


export default function Home() {
    const account = useAccount();
    const [userAddress, setUserAddress] = useState("");
    const [isMounted, setIsMounted] = useState(false);
    const { address, isConnected } = useAccount();
    const { data, isError, error, isSuccess, isLoading } = useReadContract({
        abi: contractABI.abi,
        address: "0x3c248D09928a608b002b3822F751156849ef7680",
        account: account.address,
        functionName: "getUser",
    })

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isConnected && address) {
            setUserAddress(address);
        }
    }, [address, isConnected]);

    if (!isMounted) {
        return null;
    }


    if (isSuccess) {
        const userData: Array<any> = data as Array<any>;
        console.log(userData);

        return (
            <div className="w-screen h-screen">

                {isConnected ?
                    Boolean(userData[0]).valueOf() ? <UserHome /> : <OnBoarding />
                    : (
                        <Landing />
                    )}
            </div>
        );
    } else if (isLoading) {
        return (<Loading />);
    } else if (isError) {
        console.log(error)
        return <Landing />
    } else {
        return (<span className="loading loading-dots loading-md"></span>);
    }

}


