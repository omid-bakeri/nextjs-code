import React from "react";
import { useRouter } from "next/router";

function UsersID() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return <div>UsersID</div>;
}

export default UsersID;
