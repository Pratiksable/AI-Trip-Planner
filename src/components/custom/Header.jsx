import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FaUser, FaCog, FaSignOutAlt, FaInfoCircle } from 'react-icons/fa';
import { googleLogout } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  // DialogTitle,
  // DialogTrigger,
} from "@/components/ui/dialog";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";



function Header() {
  const [openDialog, setOpenDialog] = useState(false);
  const users = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    console.log("====================================");
    console.log(users);
    console.log("====================================");
  }, []);

  const login = useGoogleLogin({
    scope: "https://www.googleapis.com/auth/userinfo.profile",
    onSuccess: (codeRep) => GetUserProfile(codeRep),
    onError: (error) => console.log(error),
  });
  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error fetching profile", error);
      });
  };

  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5">
      <img src="/logo.svg" />
      <div>{users ? <div className="flex items-center gap-3">
        <a href="/" className="text-sm  hover:scale-90 transition-all font-semibold">Home</a>
        <a href="/create-trip">
        <Button variant="outline" className = 'rounded-full '>+ Add Trip</Button>
        </a>
        <a href="/my-trips">
        <Button variant="outline" className = 'rounded-full '>My Trips</Button>
        </a>
        <Popover>
          <PopoverTrigger><img src={users?.picture} className="h-[35px] w-[35px] rounded-full"/></PopoverTrigger>
          <PopoverContent>
            <ul>
              <li className="mt-3">
                <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300 flex items-center gap-5">
                <FaUser className="mr-2" /> Account
                </a>
              </li>
              <li className="mt-3">
                <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300 flex items-center gap-5">
                <FaCog className="mr-2" /> Settings
                </a>
              </li>
              <li className="mt-3">
                <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300 flex items-center gap-5">
                <FaInfoCircle className="mr-2" /> Help
                </a>
              </li>
              <li className="mt-3">
                <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300 flex items-center gap-5">
                <Button
                onClick = {()=>{
                  googleLogout();
                  localStorage.clear()
                  window.location.reload();
                }}
                className="flex items-center hover:bg-gray-400 w-full p-2 rounded-md cursor-pointer"  >
                    <FaSignOutAlt className="mr-2" /> Log Out
                  </Button>
                </a>
              </li>
            </ul>
          </PopoverContent>
        </Popover>

      </div> : <Button onClick = {()=>{
        setOpenDialog(true);
      }}>Sign In</Button>}</div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" />
              <h2 className="font-bold text-lg mt-7">Sign In with Google</h2>
              <p>Sign in to the app with Google authentication securely</p>
              <Button
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center"
              >
                <FcGoogle className="h-7 w-7" />
                Sign In with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
