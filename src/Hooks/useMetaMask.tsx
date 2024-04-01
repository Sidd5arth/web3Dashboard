import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Web3 from "web3";

interface UseMetamaskLoginResult {
  account: string | null;
  connectMetamask: () => Promise<void>;
}

const useMetamask = (): UseMetamaskLoginResult => {
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    const checkMetamask = async () => {
      if (window.ethereum) {
        try {
          const web3 = new Web3(window.ethereum);
          const accounts = await web3.eth.getAccounts();
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        } catch (error) {
          toast.error("User denied account access");
        }
      } else {
        toast.error("Metamask not detected");
      }
    };

    checkMetamask();
  }, []);

  const connectMetamask = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        toast.success("Connected succsefully");
      } catch (error) {
        toast.error("User denied account access");
      }
    } else {
      toast.error("Metamask not detected");
    }
  };

  return { account, connectMetamask };
};

export default useMetamask;
