import React from "react";
import { useRouter } from "next/router";

function UserID() {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <div>UserID</div>
    </>
  );
}

export default UserID;
