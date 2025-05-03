"use client";

import dynamic from "next/dynamic";

const Loading = dynamic(() => import("@/component/loading/LoadingScreen"), {
  ssr: false,
});

const DynamicLoading = () => {
  return <Loading />;
};

export default DynamicLoading;
