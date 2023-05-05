'use client';

import { LoginModal, RegisterModal } from "../components";

const ModalsProvider = () => {
  return ( 
    <>
      <LoginModal />
      <RegisterModal />
      {/* <SearchModal /> */}
      {/* <RentModal /> */}
    </>
   );
}
 
export default ModalsProvider;